import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '../context/NavigationContext';
import { Settings, User, Bell, Palette, Shield, Save, Check } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const { navigateTo } = useNavigation();

  const [name, setName] = useState(user?.name || 'Vibes Learner');
  const [email, setEmail] = useState(user?.email || 'learner@example.com');
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8 py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-2 pb-6 border-b border-[#1e293b]">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono font-bold text-[#22c55e] uppercase tracking-wider">
            PREFERENCES
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-xs text-gray-400">Account Configuration</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Platform Settings</h1>
        <p className="text-sm text-gray-400">
          Manage your account profile, editor preferences, and learning notification settings.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Details */}
        <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <User className="w-4 h-4 text-[#22c55e]" />
            <span>Profile Details</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-[#080d14] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:border-[#22c55e] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-[#080d14] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:border-[#22c55e] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Editor Preferences */}
        <div className="rounded-2xl bg-[#0d131f] border border-[#1e293b] p-6 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <Palette className="w-4 h-4 text-[#22c55e]" />
            <span>Code Sandbox Preferences</span>
          </h3>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-xl bg-[#080d14] border border-[#1e293b] cursor-pointer">
              <span className="text-xs text-gray-300">Auto-render live code previews</span>
              <input
                type="checkbox"
                checked={soundEffects}
                onChange={e => setSoundEffects(e.target.checked)}
                className="accent-[#22c55e] w-4 h-4 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-[#080d14] border border-[#1e293b] cursor-pointer">
              <span className="text-xs text-gray-300">Daily study streak reminders</span>
              <input
                type="checkbox"
                checked={notifications}
                onChange={e => setNotifications(e.target.checked)}
                className="accent-[#22c55e] w-4 h-4 rounded"
              />
            </label>
          </div>
        </div>

        {/* Save CTA */}
        <div className="flex items-center justify-end space-x-3 pt-4">
          {saved && (
            <span className="text-xs text-[#22c55e] font-semibold flex items-center space-x-1">
              <Check className="w-4 h-4" />
              <span>Settings saved!</span>
            </span>
          )}
          <button
            type="submit"
            className="flex items-center space-x-2 px-6 py-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold text-xs sm:text-sm rounded-xl transition shadow-md shadow-[#22c55e]/20"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
