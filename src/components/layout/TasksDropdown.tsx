import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TasksDropdownProps {
  onClose: () => void;
}

const tasks = [
  {
    id: 1,
    title: "Grade Math Quizzes",
    dueDate: "Today",
    priority: "high"
  },
  {
    id: 2,
    title: "Prepare Science Lab Materials",
    dueDate: "Tomorrow",
    priority: "medium"
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    dueDate: "Next Week",
    priority: "low"
  }
];

const TasksDropdown: React.FC<TasksDropdownProps> = () => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <button className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-brand-600 transition-colors">
            <CheckCircle className="h-4 w-4 text-transparent hover:text-brand-600/20" />
          </button>
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{task.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">{task.dueDate}</span>
            </div>
          </div>
          <span className={cn(
            'px-2.5 py-1 rounded-full text-xs font-medium',
            {
              'bg-red-100 text-red-700': task.priority === 'high',
              'bg-yellow-100 text-yellow-700': task.priority === 'medium',
              'bg-green-100 text-green-700': task.priority === 'low',
            }
          )}>
            {task.priority}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TasksDropdown;