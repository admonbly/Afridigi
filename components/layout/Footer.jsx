'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/syllabix-logo-with-name.png" alt="Syllabix logo" className="h-12 w-auto" />
            </div>
            <p className="text-neutral-300 text-sm">
              Évaluer et certifier les compétences numériques en Afrique.
            </p>
          </div>

          {/* Produits */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Produits</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/training/mixed" className="hover:text-accent transition-colors">
                  S'entraîner
                </Link>
              </li>
              <li>
                <Link href="/exam/global" className="hover:text-accent transition-colors">
                  Passer la certification
                </Link>
              </li>
              <li>
                <Link href="/certification/presentation" className="hover:text-accent transition-colors">
                  Référentiel
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-accent transition-colors">
                  Mon tableau de bord
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-accent transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partenariats" className="hover:text-accent transition-colors">
                  Partenariats
                </Link>
              </li>
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <p>&copy; {currentYear} Syllabix. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
