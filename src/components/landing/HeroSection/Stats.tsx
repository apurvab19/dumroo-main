import React from 'react';

const stats = [
  { value: '98%', label: 'Teacher Satisfaction' },
  { value: '2.5x', label: 'Productivity Increase' },
  { value: '50k+', label: 'Active Users' },
  { value: '150+', label: 'Countries' },
];

const Stats: React.FC = () => {
  return (
    <div className="mt-16 border-t border-gray-100 pt-8">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="text-4xl font-bold text-brand-600">{stat.value}</dt>
            <dd className="text-sm text-gray-600 mt-1">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stats;