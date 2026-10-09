import { useState, useEffect, useCallback, useRef } from 'react';

export type NetworkConnectionStatus = 'online' | 'offline' | 'server_down' | 'checking';

export interface NetworkStatusState {
  isOnline: boolean;
  isServerConnected: boolean;
  isDisconnected: boolean;
  status: NetworkConnectionStatus;
  isChecking: boolean;
  lastChecked: Date | null;
  latencyMs: number | null;
  reconnect: () => Promise<boolean>;
  simulateOffline: (enabled: boolean) => void;
  isSimulated: boolean;
  justReconnected: boolean;
}

export function useNetworkStatus(): NetworkStatusState {
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      return navigator.onLine;
    }
    return true;
  });

  const [isServerConnected, setIsServerConnected] = useState<boolean>(true);
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [isSimulated, setIsSimulated] = useState<boolean>(false);
  const [justReconnected, setJustReconnected] = useState<boolean>(false);

  // Track previous disconnected status to trigger "justReconnected" notification
  const prevDisconnectedRef = useRef<boolean>(false);
  const reconnectedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Health check function to verify real server connectivity
  const checkServerHealth = useCallback(async (isManual = false): Promise<boolean> => {
    if (isSimulated) {
      setIsServerConnected(false);
      return false;
    }

    if (typeof window === 'undefined') return true;

    if (!navigator.onLine) {
      setIsServerConnected(false);
      return false;
    }

    setIsChecking(true);
    const startTime = performance.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    try {
      // Add timestamp to prevent browser HTTP caching
      const response = await fetch(`/api/health?t=${Date.now()}`, {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });

      clearTimeout(timeoutId);
      const endTime = performance.now();

      if (response.ok) {
        setIsServerConnected(true);
        setLatencyMs(Math.round(endTime - startTime));
        setLastChecked(new Date());
        return true;
      } else {
        setIsServerConnected(false);
        setLastChecked(new Date());
        return false;
      }
    } catch (err) {
      clearTimeout(timeoutId);
      setIsServerConnected(false);
      setLastChecked(new Date());
      return false;
    } finally {
      setIsChecking(false);
    }
  }, [isSimulated]);

  // Initial check on mount
  useEffect(() => {
    checkServerHealth();
  }, [checkServerHealth]);

  // Listen to browser network online/offline events
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Immediately test server when network comes back
      checkServerHealth(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setIsServerConnected(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [checkServerHealth]);

  // Periodic heartbeat poll (every 25s when connected, every 8s when disconnected)
  useEffect(() => {
    const intervalMs = (!isOnline || !isServerConnected || isSimulated) ? 8000 : 25000;
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        checkServerHealth();
      }
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isOnline, isServerConnected, isSimulated, checkServerHealth]);

  // Watch for transition from disconnected -> connected
  const effectiveOnline = isSimulated ? false : isOnline;
  const effectiveServer = isSimulated ? false : isServerConnected;
  const isDisconnected = !effectiveOnline || !effectiveServer;

  useEffect(() => {
    if (prevDisconnectedRef.current && !isDisconnected) {
      // Just reconnected!
      setJustReconnected(true);
      if (reconnectedTimerRef.current) {
        clearTimeout(reconnectedTimerRef.current);
      }
      reconnectedTimerRef.current = setTimeout(() => {
        setJustReconnected(false);
      }, 4000);
    }
    prevDisconnectedRef.current = isDisconnected;
  }, [isDisconnected]);

  // Reconnect manual trigger
  const reconnect = useCallback(async (): Promise<boolean> => {
    if (isSimulated) {
      setIsSimulated(false);
    }
    setIsOnline(navigator.onLine);
    return await checkServerHealth(true);
  }, [isSimulated, checkServerHealth]);

  // Simulated toggle
  const simulateOffline = useCallback((enabled: boolean) => {
    setIsSimulated(enabled);
    if (enabled) {
      setIsServerConnected(false);
    } else {
      setIsOnline(navigator.onLine);
      checkServerHealth(true);
    }
  }, [checkServerHealth]);

  // Compute aggregate status string
  let status: NetworkConnectionStatus = 'online';
  if (!effectiveOnline) {
    status = 'offline';
  } else if (!effectiveServer) {
    status = 'server_down';
  } else if (isChecking) {
    status = 'checking';
  }

  return {
    isOnline: effectiveOnline,
    isServerConnected: effectiveServer,
    isDisconnected,
    status,
    isChecking,
    lastChecked,
    latencyMs,
    reconnect,
    simulateOffline,
    isSimulated,
    justReconnected
  };
}
