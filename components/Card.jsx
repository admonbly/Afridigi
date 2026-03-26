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
    default: 'bg-white border border-neutral-200 hover:shadow-lg hover:border-accent',
    accent: 'bg-accent/10 border border-accent/20 hover:border-accent',
    secondary: 'bg-secondary/10 border border-secondary/20 hover:border-secondary',
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
