import Link from 'next/link';

export default function CertificationLayout({ children }) {
  const certificationNav = [
    { href: '/certification/presentation', label: '📚 Présentation' },
    { href: '/certification/s-entrainer', label: '🏋️ S\'entraîner' },
    { href: '/certification/demo', label: '🎯 Mode démo' },
    { href: '/certification/examen', label: '🎓 Passer certification' },
    { href: '/certification/referentiel', label: '📖 Référentiel' },
  ];

  return (
    <>
      {/* Navigation Interne */}
      <nav className="bg-primary border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {certificationNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap px-4 py-2 rounded-lg text-white hover:bg-primary/80 transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenu */}
      {children}
    </>
  );
}
