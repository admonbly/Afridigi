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
    primary: 'bg-gradient-to-r from-[var(--color-blue-savant)] to-[var(--color-ocre-terre)] text-white hover:shadow-lg hover:shadow-[0_5px_20px_rgba(230,126,34,0.35)]',
    secondary: 'bg-[var(--color-emerald-green)] text-white hover:bg-[var(--color-warning)] hover:shadow-lg',
    outline: 'border-2 border-[var(--color-ocre-terre)] text-[var(--color-ocre-terre)] hover:bg-[var(--color-ocre-terre)] hover:text-white',
    ghost: 'text-[var(--color-ocre-terre)] hover:bg-[var(--color-ocre-terre)]/10',
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
