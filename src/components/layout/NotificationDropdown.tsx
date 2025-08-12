import React from 'react';
import { MessageSquare, BookOpen, Bell } from 'lucide-react';
import { cn } from '../../lib/utils';

interface NotificationDropdownProps {
  onClose: () => void;
}

const activities = [
  {
    id: 1,
    title: "Math Quiz Submitted",
    description: "John Smith submitted Algebra Quiz #3",
    time: "10 minutes ago",
    icon: BookOpen
  },
  {
    id: 2,
    title: "New Comment",
    description: "Emma Davis commented on Physics Assignment",
    time: "1 hour ago",
    icon: MessageSquare
  },
  {
    id: 3,
    title: "Assignment Created",
    description: "You created 'Literature Essay Guidelines'",
    time: "2 hours ago",
    icon: Bell
  }
];

const NotificationDropdown: React.FC<NotificationDropdownProps> = () => {
  return (
    <div className="space-y-2">
      {activities.map((activity) => (
        <div 
          key={activity.id} 
          className={cn(
            "flex items-start gap-3 p-3 rounded-lg",
            "hover:bg-gray-50 transition-colors cursor-pointer"
          )}
        >
          <div className="mt-1 p-2 bg-brand-50 rounded-lg">
            <activity.icon className="h-4 w-4 text-brand-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{activity.title}</h3>
            <p className="text-sm text-gray-600">{activity.description}</p>
            <span className="text-xs text-gray-500">{activity.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationDropdown;