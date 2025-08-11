import React from 'react';
import { Menu } from '@headlessui/react';
import { cn } from '../lib/utils';

interface DropdownProps {
  trigger: React.ReactNode;
  items: {
    label: string;
    onClick: () => void;
    className?: string;
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, items }) => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button as={React.Fragment}>{trigger}</Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <div
                onClick={item.onClick}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm cursor-pointer',
                  active ? 'bg-gray-100' : '',
                  item.className
                )}
              >
                {item.label}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;