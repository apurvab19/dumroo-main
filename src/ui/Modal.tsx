import React, { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string | React.ReactNode;
  type?: 'success' | 'error' | 'info';
  autoClose?: boolean;
  autoCloseDelay?: number;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'info',
  autoClose = false,
  autoCloseDelay = 3000,
  onConfirm
}) => {
  useEffect(() => {
    if (autoClose && isOpen) {
      const timer = setTimeout(onClose, autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDelay, isOpen, onClose]);

  if (!isOpen) return null;

  const Icon = type === 'success' ? CheckCircle : 
               type === 'error' ? XCircle : 
               AlertCircle;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 overflow-y-auto",
        "animate-in fade-in duration-300"
      )}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm",
          "animate-in fade-in duration-300"
        )}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className={cn(
            "relative transform overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 text-left shadow-xl",
            "sm:my-8 sm:w-full sm:max-w-lg sm:p-6",
            "animate-in fade-in zoom-in-95 duration-300"
          )}
        >
          {/* Close button */}
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            {/* Icon */}
            <div className={cn(
              "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10",
              type === 'success' && "bg-green-100",
              type === 'error' && "bg-red-100",
              type === 'info' && "bg-blue-100"
            )}>
              <Icon className={cn(
                "h-6 w-6",
                type === 'success' && "text-green-600",
                type === 'error' && "text-red-600",
                type === 'info' && "text-blue-600"
              )} />
            </div>

            {/* Content */}
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 
                className="text-lg font-semibold leading-6 text-gray-900" 
                id="modal-title"
              >
                {title}
              </h3>
              <div className="mt-2">
                {typeof message === 'string' ? (
                  <div className="text-sm text-gray-500">
                    {message}
                  </div>
                ) : (
                  message
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {onConfirm && (
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
              <button
                type="button"
                className={cn(
                  "inline-flex w-full justify-center rounded-lg px-3 py-2 text-sm font-semibold sm:w-auto",
                  type === 'error' 
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-brand-600 text-white hover:bg-brand-700",
                  "shadow-sm"
                )}
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
              >
                Confirm
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;