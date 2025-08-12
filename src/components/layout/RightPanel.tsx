import React from 'react';
import Library from '../../dashboard/Library';
import NotificationDropdown from './NotificationDropdown';
import TasksDropdown from './TasksDropdown';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { X } from 'lucide-react';

interface RightPanelProps {
  onClose?: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({ onClose }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="h-full bg-white border-l border-gray-200 shadow-lg overflow-y-auto">
      {/* Mobile Close Button */}
      {isMobile && onClose && (
        <div className="sticky top-0 z-10 p-4 bg-white border-b border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Library */}
      <div className="p-4">
        <Library />
      </div>

      {/* Show notifications and tasks on mobile */}
      {isMobile && (
        <div className="p-4 space-y-4 border-t border-gray-100">
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            </div>
            <div className="p-4">
              <NotificationDropdown onClose={() => {}} />
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h3>
            </div>
            <div className="p-4">
              <TasksDropdown onClose={() => {}} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightPanel;