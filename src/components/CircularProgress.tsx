interface CircularProgressProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
  muted?: boolean;
  className?: string;
}

export default function CircularProgress({
  percent,
  size = 18,
  strokeWidth = 1.5,
  muted = false,
  className = '',
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, percent));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`shrink-0 -translate-y-[1.5px] -rotate-90 ${className}`}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        className="stroke-gray-200 dark:stroke-neutral-700"
      />
      {!muted && (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          className="text-gray-900 dark:text-gray-100"
        />
      )}
    </svg>
  );
}
