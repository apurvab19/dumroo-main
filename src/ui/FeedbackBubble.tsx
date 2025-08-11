import React, { useState } from 'react';
import { MessageSquare, X, Send, Loader2, AlertCircle, Sparkles, Bug, Wrench, MessageSquarePlus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import useAuthStore from '../stores/auth';
import useToastStore from '../stores/toast';
import { cn } from '../lib/utils';

const FeedbackBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<'bug' | 'feature' | 'improvement' | 'other'>('improvement');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuthStore();
  const showToast = useToastStore(state => state.showToast);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.id || !title.trim() || !description.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);

      // Insert into feedback table with status 'open'
      const { error: insertError } = await supabase
        .from('feedback')
        .insert({
          user_id: user.id,
          type,
          title: title.trim(),
          description: description.trim(),
          status: 'open', // Explicitly set status to 'open'
          priority: 'medium',
          submitted_by: user.email
        });

      if (insertError) throw insertError;

      showToast('Thank you for your feedback!', 'success');
      setIsOpen(false);
      setTitle('');
      setDescription('');
      setType('improvement');
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      showToast('Failed to submit feedback. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'bug':
        return <Bug className="h-4 w-4" />;
      case 'feature':
        return <Sparkles className="h-4 w-4" />;
      case 'improvement':
        return <Wrench className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Fixed container for proper positioning */}
      <div className="fixed bottom-4 right-[96px] z-[9999]">
        {/* Enhanced Feedback Button */}
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "relative",
            "group",
            "transition-all duration-500"
          )}
        >
          {/* Outer glow and pulse effect */}
          <div className={cn(
            "absolute inset-0 rounded-xl",
            "bg-gradient-to-r from-[#ffbd4a]/30 to-[#ffa726]/30",
            "blur-xl group-hover:blur-2xl",
            "transition-all duration-500",
            "animate-pulse"
          )} />

          {/* Main button with gradient background */}
          <div className={cn(
            "relative",
            "p-4 rounded-xl",
            "bg-gradient-to-r from-[#ffbd4a] to-[#ffa726]",
            "shadow-lg shadow-[#ffbd4a]/20",
            "hover:shadow-xl hover:shadow-[#ffbd4a]/30",
            "transform transition-all duration-500",
            "hover:scale-110 hover:-rotate-12",
            "active:scale-95 active:rotate-0"
          )}>
            {/* Icon container with animations */}
            <div className="relative">
              {/* Background pulse effect */}
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
              
              {/* Main icon with hover animation */}
              <MessageSquare className={cn(
                "h-6 w-6 text-white relative z-10",
                "transform transition-all duration-500",
                "group-hover:rotate-12"
              )} />

              {/* Sparkle effects */}
              <div className={cn(
                "absolute -top-1 -right-1",
                "transform transition-all duration-500",
                "opacity-0 group-hover:opacity-100",
                "translate-x-2 group-hover:translate-x-0",
                "-translate-y-2 group-hover:translate-y-0"
              )}>
                <Sparkles className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
        </button>

        {/* Feedback Form */}
        {isOpen && (
          <div 
            className={cn(
              "absolute bottom-20 right-0",
              "w-96 bg-white rounded-xl shadow-xl border border-gray-200",
              "transform transition-all duration-300",
              "animate-in fade-in slide-in-from-bottom-5"
            )}
          >
            <div className="p-4 bg-gradient-to-r from-[#fff8e1] to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#fff3c4] rounded-lg">
                    <MessageSquarePlus className="h-5 w-5 text-[#ffbd4a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Send Feedback</h3>
                    <p className="text-xs text-gray-500">Help us improve Dumroo AI</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['improvement', 'bug', 'feature', 'other'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",
                        "transition-all duration-200",
                        type === t
                          ? "bg-[#ffbd4a] text-white shadow-lg shadow-[#ffbd4a]/20"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      )}
                    >
                      {t === 'bug' && <Bug className="h-4 w-4" />}
                      {t === 'feature' && <Sparkles className="h-4 w-4" />}
                      {t === 'improvement' && <Wrench className="h-4 w-4" />}
                      {t === 'other' && <AlertCircle className="h-4 w-4" />}
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    {getTypeIcon()}
                  </div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Brief summary"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ffbd4a]/20 focus:border-[#ffbd4a] transition-all duration-200"
                    maxLength={100}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    {title.length}/100
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <div className="relative">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please provide details..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ffbd4a]/20 focus:border-[#ffbd4a] resize-none transition-all duration-200"
                    maxLength={1000}
                  />
                  <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                    {description.length}/1000
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !title.trim() || !description.trim()}
                className={cn(
                  "w-full px-6 py-3 rounded-lg font-medium",
                  "bg-gradient-to-r from-[#ffbd4a] to-[#ffa726]",
                  "text-white shadow-lg shadow-[#ffbd4a]/20",
                  "hover:shadow-xl hover:shadow-[#ffbd4a]/30",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "transform transition-all duration-200",
                  "hover:-translate-y-0.5 active:translate-y-0",
                  "flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Feedback
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default FeedbackBubble;