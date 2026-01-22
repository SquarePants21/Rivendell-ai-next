import * as Icons from 'lucide-react';

interface IconProps {
  name: keyof typeof Icons;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export const Icon = ({
  name,
  size = 24,
  className = '',
  strokeWidth = 2
}: IconProps) => {
  const LucideIcon = Icons[name] as React.ComponentType<any>;

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
};

export default Icon;
