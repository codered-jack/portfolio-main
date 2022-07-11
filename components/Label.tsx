import Link from 'next/link';

const bgColors = {
  gray: 'bg-gray-200',
  rose: 'bg-rose-200',
  emerald: 'bg-emerald-200',
  amber: 'bg-amber-200',
  yellow: 'bg-yellow-200',
  lime: 'bg-lime-200',
  green: 'bg-green-200',
  teal: 'bg-teal-200',
  cyan: 'bg-cyan-200',
  blue: 'bg-blue-200',
  indigo: 'bg-indigo-200',
  purple: 'bg-purple-200',
  pink: 'bg-pink-200',
  red: 'bg-red-200',
};

const textColors = {
  gray: 'text-gray-700',
  rose: 'text-rose-700',
  emerald: 'text-emerald-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  green: 'text-green-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  red: 'text-red-700',
};

const colors = [
  'gray',
  'rose',
  'emerald',
  'amber',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'yellow',
  'lime',
  'green',
  'teal',
];

export default function Label({ children, className, labelColor = '' }) {
  let color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <Link href={`tags/${children?.toLowerCase().split(' ').join('-')}`}>
      <div
        className={`max-w-max flex items-center justify-between py-1 px-3 rounded-full ${
          bgColors[labelColor || color]
        } last:mr-0 mr-1 transition-all duration-300 ${className}`}
      >
        <span
          className={`text-xs font-semibold uppercase ${
            textColors[labelColor || color]
          } whitespace-nowrap`}
        >
          {children}
        </span>
      </div>
    </Link>
  );
}
