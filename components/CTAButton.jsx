import Link from 'next/link';
import clsx from 'clsx';

export default function CTAButton({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 font-heading';

  const variants = {
    primary: 'bg-gradient-to-r from-accent to-orange-500 text-white hover:shadow-lg hover:shadow-orange-500/50',
    secondary: 'bg-secondary text-white hover:bg-cyan-600 hover:shadow-lg',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-accent hover:bg-accent/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
