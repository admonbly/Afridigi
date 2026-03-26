import clsx from 'clsx';

export default function Card({
  icon,
  title,
  description,
  variant = 'default',
  className,
  children,
  ...props
}) {
  const variants = {
    default: 'bg-white border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-ocre-terre)]',
    accent: 'bg-[var(--color-ocre-terre)]/10 border border-[var(--color-ocre-terre)]/20 hover:border-[var(--color-ocre-terre)]',
    secondary: 'bg-[var(--color-emerald-green)]/10 border border-[var(--color-emerald-green)]/20 hover:border-[var(--color-emerald-green)]',
  };

  return (
    <div
      className={clsx(
        'p-6 rounded-lg transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-heading font-bold mb-2 text-primary">{title}</h3>}
      {description && <p className="text-neutral-600 leading-relaxed">{description}</p>}
      {children}
    </div>
  );
}
