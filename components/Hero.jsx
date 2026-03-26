import clsx from 'clsx';

export default function Hero({
  title,
  subtitle,
  cta,
  image = null,
  variant = 'default',
}) {
  const backgrounds = {
    default: 'bg-gradient-to-br from-primary via-primary to-blue-900',
    accent: 'bg-gradient-to-br from-accent via-orange-500 to-red-500',
    secondary: 'bg-gradient-to-br from-secondary via-cyan-500 to-blue-400',
  };

  return (
    <section
      className={clsx(
        'relative py-20 sm:py-28 overflow-hidden',
        backgrounds[variant]
      )}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fadeIn">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
            {cta && (
              <div className="flex flex-col sm:flex-row gap-4">
                {cta}
              </div>
            )}
          </div>

          {/* Image/Illustration */}
          {image && (
            <div className="hidden md:block animate-slideIn">
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
