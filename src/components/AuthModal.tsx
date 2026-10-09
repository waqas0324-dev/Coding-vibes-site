import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '../context/NavigationContext';
import { X, Lock, Mail, User, ShieldCheck, ArrowLeft } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    authModalMode,
    openAuthModal,
    closeAuthModal,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail
  } = useAuth();

  const { goBack } = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAuthModalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAuthModalOpen, closeAuthModal]);

  if (!isAuthModalOpen) return null;

  const handleBackAndClose = () => {
    closeAuthModal();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (authModalMode === 'signin') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(name, email, password);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleClick = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      onClick={e => {
        if (e.target === e.currentTarget) closeAuthModal();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-white dark:bg-[#0d131f] border border-gray-200 dark:border-[#1e293b] rounded-2xl p-6 sm:p-8 shadow-2xl text-left text-gray-900 dark:text-gray-100">
        {/* Top Header Controls: Back Button on Left, Close Button on Right */}
        <div className="flex items-center justify-between mb-4 border-b border-gray-100 dark:border-[#1e293b] pb-3">
          <button
            onClick={handleBackAndClose}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-[#141d2e] hover:bg-gray-200 dark:hover:bg-[#1c283f] text-gray-700 dark:text-gray-300 font-bold text-xs transition"
            title="Go back / dismiss"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Back</span>
          </button>

          <button
            onClick={closeAuthModal}
            className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e293b] transition"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#04AA6D]/15 border border-[#04AA6D]/30 text-[#04AA6D] mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
            {authModalMode === 'signin' ? 'Welcome Back to Coding Vibes' : 'Join Coding Vibes'}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {authModalMode === 'signin'
              ? 'Sign in to sync your course progress, certificates, and code playground.'
              : 'Create an account to start your interactive learning journey.'}
          </p>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleClick}
          disabled={isLoading}
          className="w-full flex items-center justify-center space-x-3 py-2.5 px-4 rounded-xl bg-gray-50 dark:bg-[#141d2e] border border-gray-300 dark:border-[#1e293b] text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-[#1e293b] font-bold text-xs sm:text-sm transition duration-200 mb-5 shadow-xs"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
            />
            <path
              fill="#4285F4"
              d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
            />
            <path
              fill="#FBBC05"
              d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.1s.7 5.4 1.9 7.8l3.7-2.9c-.2-.7-.4-1.5-.4-2.3z"
            />
            <path
              fill="#34A853"
              d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative flex py-1 items-center mb-5">
          <div className="flex-grow border-t border-gray-200 dark:border-[#1e293b]"></div>
          <span className="flex-shrink mx-3 text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
            or with email
          </span>
          <div className="flex-grow border-t border-gray-200 dark:border-[#1e293b]"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {authModalMode === 'signup' && (
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="w-full bg-gray-50 dark:bg-[#080d14] border border-gray-300 dark:border-[#1e293b] rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-[#04AA6D] focus:outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="learner@example.com"
                className="w-full bg-gray-50 dark:bg-[#080d14] border border-gray-300 dark:border-[#1e293b] rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-[#04AA6D] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 dark:bg-[#080d14] border border-gray-300 dark:border-[#1e293b] rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 dark:text-white focus:border-[#04AA6D] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#04AA6D] hover:bg-[#03945f] text-white font-extrabold text-sm transition duration-200 mt-2 shadow-sm"
          >
            {isLoading ? 'Processing...' : authModalMode === 'signin' ? 'Sign In' : 'Create Free Account'}
          </button>

          {/* Explicit Cancel / Back action */}
          <button
            type="button"
            onClick={handleBackAndClose}
            className="w-full py-2 text-center text-xs font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition"
          >
            Cancel and Return to Page
          </button>
        </form>

        {/* Modal Footer Switch */}
        <div className="text-center mt-3 pt-3 border-t border-gray-100 dark:border-[#1e293b] text-xs text-gray-500 dark:text-gray-400">
          {authModalMode === 'signin' ? (
            <p>
              Don&apos;t have an account?{' '}
              <button
                onClick={() => openAuthModal('signup')}
                className="text-[#04AA6D] font-bold hover:underline"
              >
                Sign Up Free
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => openAuthModal('signin')}
                className="text-[#04AA6D] font-bold hover:underline"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
