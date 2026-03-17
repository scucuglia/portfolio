interface StarIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function StarIcon({
  size = 16,
  color = "#7B6EE8",
  className,
}: StarIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      style={{ display: "block", overflow: "visible" }}
    >
      <path
        d="M50 0C50 0 50.6025 27.268 61.6673 38.3327C72.732 49.3975 100 50 100 50C100 50 72.732 50.6025 61.6673 61.6673C50.6025 72.732 50 100 50 100C50 100 49.3975 72.732 38.3327 61.6673C27.268 50.6025 0 50 0 50C0 50 27.268 49.3975 38.3327 38.3327C49.3975 27.268 50 0 50 0Z"
        fill={color}
      />
    </svg>
  );
}
