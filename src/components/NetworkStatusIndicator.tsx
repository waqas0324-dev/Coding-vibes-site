import React, { useState, useRef, useEffect } from 'react';
import {
  Wifi,
  WifiOff,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Server,
  Globe,
  HardDrive,
  X,
  ChevronDown,
  Info
} from 'lucide-react';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

interface NetworkStatusIndicatorProps {
  variant?: 'navbar' | 'banner' | 'both';
  className?: string;
}

export const NetworkStatusIndicator: React.FC<NetworkStatusIndicatorProps> = ({
  className = ''
}) => {
  const {
    isOnline,
    isServerConnected,
    isDisconnected,
    status,
    isChecking,
    lastChecked,
    latencyMs,
    reconnect,
    simulateOffline,
    isSimulated,
    justReconnected
  } = useNetworkStatus();

  const [isOpen, setIsOpen] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // If connection is restored or state changes, reset banner dismissal so subsequent disconnects alert the user
  useEffect(() => {
    if (!isDisconnected) {
      setIsBannerDismissed(false);
    }
  }, [isDisconnected]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleManualRetry = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await reconnect();
  };

  return (
    <div className={`relative inline-flex items-center ${className}`} ref={popoverRef}>
      {/* 1. MAIN NAVBAR INDICATOR BUTTON / PILL */}
      {isDisconnected ? (
        /* DISCONNECTED / OFFLINE STATE: Prominent Warning Pill */
        <button
          id="navbar-offline-indicator"
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-300 dark:border-rose-700/60 font-bold text-xs shadow-xs transition-all duration-200 active:scale-95 cursor-pointer animate-pulse"
          title="Connection lost - Click to view status and retry"
          aria-label="Offline indicator - Connection lost"
          aria-expanded={isOpen}
        >
          {/* Animated red ping dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
          </span>

          <WifiOff className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400 shrink-0" />
          
          <span className="hidden xs:inline sm:inline">
            {!isOnline ? 'Offline' : 'Server Lost'}
          </span>
          <span className="xs:hidden sm:hidden">Offline</span>

          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : justReconnected ? (
        /* RECONNECTED STATE: Welcoming Green Confirmation Pill */
        <div
          id="navbar-reconnected-indicator"
          className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 font-bold text-xs shadow-xs transition-all duration-300 animate-in fade-in"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span className="hidden sm:inline">Back Online</span>
        </div>
      ) : (
        /* CONNECTED STATE: Subtle, Clean Connection Status Indicator */
        <button
          id="navbar-online-indicator"
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center space-x-1 px-2 py-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#141d2e] border border-transparent hover:border-gray-200 dark:hover:border-[#1e293b] text-xs transition cursor-pointer"
          title={`Connected to server${latencyMs ? ` (${latencyMs}ms)` : ''}`}
          aria-label="Server connection status: Online"
          aria-expanded={isOpen}
        >
          <span className="w-2 h-2 rounded-full bg-[#04AA6D] inline-block shadow-xs" />
          <Wifi className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 hidden sm:inline" />
        </button>
      )}

      {/* 2. DETAILED CONNECTION STATUS POPOVER CARD */}
      {isOpen && (
        <div
          id="connection-status-dropdown"
          className="absolute right-0 top-full mt-2 w-80 sm:w-88 rounded-2xl bg-white dark:bg-[#0c121e] border border-gray-200 dark:border-[#1e293b] shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150 text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-[#1e293b]">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                isDisconnected
                  ? 'bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400'
                  : 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
              }`}>
                {isDisconnected ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900 dark:text-white">
                  {isDisconnected
                    ? !isOnline
                      ? 'No Internet Connection'
                      : 'Server Connection Lost'
                    : 'All Systems Operational'}
                </h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  {isDisconnected
                    ? 'Working in offline mode'
                    : `Active connection • ${latencyMs ? `${latencyMs}ms response` : 'Healthy'}`}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Diagnostic Breakdown */}
          <div className="py-3 space-y-2 text-xs">
            {/* 1. Browser Internet */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/70 dark:border-[#1e293b]">
              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-gray-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Internet Connection</span>
              </div>
              <span className={`inline-flex items-center gap-1 font-bold text-[11px] ${
                isOnline ? 'text-[#04AA6D]' : 'text-rose-600 dark:text-rose-400'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-[#04AA6D]' : 'bg-rose-500'}`} />
                {isOnline ? 'Connected' : 'Offline'}
              </span>
            </div>

            {/* 2. Backend Server */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/70 dark:border-[#1e293b]">
              <div className="flex items-center space-x-2">
                <Server className="w-3.5 h-3.5 text-gray-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Coding Vibes Server</span>
              </div>
              <span className={`inline-flex items-center gap-1 font-bold text-[11px] ${
                isServerConnected ? 'text-[#04AA6D]' : 'text-rose-600 dark:text-rose-400'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isServerConnected ? 'bg-[#04AA6D]' : 'bg-rose-500'}`} />
                {isServerConnected ? 'Reachable' : 'Unreachable'}
              </span>
            </div>

            {/* 3. Local Storage Persistence */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-[#141d2e] border border-gray-200/70 dark:border-[#1e293b]">
              <div className="flex items-center space-x-2">
                <HardDrive className="w-3.5 h-3.5 text-gray-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">Offline Local Storage</span>
              </div>
              <span className="inline-flex items-center gap-1 font-bold text-[11px] text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Active &amp; Saving
              </span>
            </div>
          </div>

          {/* Offline Information Note */}
          <div className="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-[11px] text-amber-800 dark:text-amber-300 flex items-start space-x-2 mb-3">
            <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
            <span>
              {isDisconnected
                ? 'Your code, quizzes, and learning progress are continuously saved to your browser and will automatically sync when reconnected.'
                : 'All features including AI Mentor, real-time code executions, and course syncing are running smoothly.'}
            </span>
          </div>

          {/* Action Buttons: Retry and Simulation */}
          <div className="space-y-2 pt-1 border-t border-gray-100 dark:border-[#1e293b]">
            <button
              onClick={handleManualRetry}
              disabled={isChecking}
              className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] active:scale-98 text-white font-bold text-xs transition shadow-xs disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
              <span>{isChecking ? 'Testing Connection...' : 'Check Connection / Retry'}</span>
            </button>

            {/* Offline Simulation Toggle (For testing & verifying the indicator) */}
            <button
              onClick={() => simulateOffline(!isSimulated)}
              className="w-full text-center py-1.5 text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition cursor-pointer"
            >
              {isSimulated ? 'Exit Simulated Offline Mode' : 'Test Offline Indicator (Simulation)'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * An optional slim, sticky notification banner displayed directly beneath the
 * Navbar when the user is disconnected, ensuring zero ambiguity.
 */
export const NetworkStatusBanner: React.FC = () => {
  const { isOnline, isDisconnected, reconnect, isChecking } = useNetworkStatus();
  const [isDismissed, setIsDismissed] = useState(false);

  // Reset dismissal when reconnection occurs
  useEffect(() => {
    if (!isDisconnected) {
      setIsDismissed(false);
    }
  }, [isDisconnected]);

  if (!isDisconnected || isDismissed) {
    return null;
  }

  return (
    <div
      id="network-offline-banner"
      className="w-full bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 text-white px-3 sm:px-6 py-2 text-xs font-semibold shadow-md flex items-center justify-between gap-3 animate-in slide-in-from-top duration-200 z-30"
    >
      <div className="flex items-center space-x-2 min-w-0">
        <span className="p-1 rounded-md bg-white/20 shrink-0">
          <WifiOff className="w-3.5 h-3.5" />
        </span>
        <p className="truncate">
          <span className="font-black">
            {!isOnline ? 'You are currently offline.' : 'Lost connection to server.'}
          </span>{' '}
          <span className="hidden sm:inline opacity-95">
            Your lesson progress and code are safely saved locally.
          </span>
        </p>
      </div>

      <div className="flex items-center space-x-2 shrink-0">
        <button
          onClick={() => reconnect()}
          disabled={isChecking}
          className="px-2.5 py-1 rounded-md bg-white text-rose-700 hover:bg-rose-50 active:scale-95 font-bold text-[11px] transition shadow-xs flex items-center space-x-1 cursor-pointer"
        >
          <RefreshCw className={`w-3 h-3 ${isChecking ? 'animate-spin' : ''}`} />
          <span>{isChecking ? 'Checking...' : 'Retry'}</span>
        </button>

        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition"
          title="Dismiss notification"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
