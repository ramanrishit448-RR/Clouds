import React, { useState } from 'react';
import { X, Play, CheckCircle2, Sparkles, Lock, ArrowRight, Layers, DollarSign, Users, Mail } from 'lucide-react';
import { HavenLogo } from './Navbar';

interface ModalsProps {
  activeModal: 'login' | 'get-started' | 'demo' | 'funding' | 'nav-info' | null;
  onClose: () => void;
  selectedNavInfo?: string;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose, selectedNavInfo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSubmitted, setLoginSubmitted] = useState(false);
  const [getStartedSubmitted, setGetStartedSubmitted] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative bg-zinc-950 border border-zinc-800 text-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. Login Modal */}
        {activeModal === 'login' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <HavenLogo className="w-7 h-7" />
              <h3 className="text-xl font-bold text-white">Log in to Haven</h3>
            </div>

            {loginSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white">Welcome back!</h4>
                <p className="text-sm text-zinc-400 mt-1">Successfully authenticated into Haven AI Studio.</p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-white text-black font-medium text-sm px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  Continue to Workspace
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoginSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Email address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-white text-black font-semibold text-sm py-3 rounded-full hover:bg-zinc-200 transition-all cursor-pointer shadow-lg active:scale-98"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        )}

        {/* 2. Get Started Modal */}
        {activeModal === 'get-started' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Start Designing with Haven</h3>
                <p className="text-xs text-zinc-400">Join thousands of creators taking a breath.</p>
              </div>
            </div>

            {getStartedSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white">Your workspace is ready!</h4>
                <p className="text-sm text-zinc-400 mt-1">We've provisioned your Haven AI environment.</p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-white text-black font-medium text-sm px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  Enter Workspace
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setGetStartedSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@design.co"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="bg-zinc-900/60 rounded-2xl p-4 border border-zinc-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>AI Canvas & Understanding Engine</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Instant UI/UX Prototyping</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>Unlimited free tier during launch</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold text-sm py-3 rounded-full hover:bg-zinc-200 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        )}

        {/* 3. Watch Demo Modal */}
        {activeModal === 'demo' && (
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Haven Product Demo</h3>
            <p className="text-xs text-zinc-400 mb-6">See how AI that understands you transforms product design.</p>

            <div className="relative aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center group">
              {isPlayingDemo ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-black p-6 text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin mb-4" />
                  <p className="text-sm font-medium text-white">Loading Haven Interactive Sandbox...</p>
                  <p className="text-xs text-zinc-500 mt-2">Design smarter with AI that understands you.</p>
                </div>
              ) : (
                <button
                  onClick={() => setIsPlayingDemo(true)}
                  className="flex flex-col items-center gap-3 group-hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                    <Play className="w-7 h-7 fill-black ml-1" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide uppercase">Click to Watch Interactive Demo</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* 4. Funding Announcement Modal */}
        {activeModal === 'funding' && (
          <div>
            <div className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Press Release
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Haven Raises $20M Series A 🚀</h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              We're thrilled to announce our $20M Series A funding led by premier design and AI visionaries to build the next generation of creative AI software.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-zinc-900 p-3.5 rounded-2xl border border-zinc-800">
                <DollarSign className="w-5 h-5 text-white mb-1" />
                <div className="text-lg font-bold text-white">$20,000,000</div>
                <div className="text-xs text-zinc-400">Total Series A</div>
              </div>
              <div className="bg-zinc-900 p-3.5 rounded-2xl border border-zinc-800">
                <Users className="w-5 h-5 text-white mb-1" />
                <div className="text-lg font-bold text-white">500k+</div>
                <div className="text-xs text-zinc-400">Active Designers</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-white text-black font-semibold text-sm py-2.5 rounded-full hover:bg-zinc-200 transition-all cursor-pointer"
            >
              Close Announcement
            </button>
          </div>
        )}

        {/* 5. Nav Info Modal */}
        {activeModal === 'nav-info' && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">{selectedNavInfo || 'Haven Navigation'}</h3>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              You clicked on <span className="font-semibold text-white">{selectedNavInfo}</span>. Haven gives creators intuitive tools to design smarter with AI.
            </p>
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 mb-6">
              <div className="text-xs text-zinc-400 uppercase tracking-wider mb-2 font-mono">Module Status</div>
              <div className="text-sm font-medium text-white flex items-center justify-between">
                <span>{selectedNavInfo} Engine</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">Active</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-white text-black font-semibold text-sm py-2.5 rounded-full hover:bg-zinc-200 transition-all cursor-pointer"
            >
              Back to Banner
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
