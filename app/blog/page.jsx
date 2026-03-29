'use client';

import Card from '@/components/Card';
import Link from 'next/link';

function BlogListPage() {
  const articles = [
    {
      id: 1,
      slug: 'ia-chat-gpt-2026',
      title: 'IA générative et agents IA en 2026: L\'avenir du travail',
      excerpt: 'Explorez comment les assistants IA redéfinissent la productivité et l\'employabilité en 2026.',
      category: 'IA',
      date: '22 mars 2026',
      image: '🤖',
    },
    {
      id: 2,
      slug: 'securite-biometrique-2026',
      title: 'Sécurité biométrique et authentification multi-niveaux',
      excerpt: 'Les nouvelles normes de protection des données en 2026.',
      category: 'Cybersécurité',
      date: '18 mars 2026',
      image: '🔒',
    },
    {
      id: 3,
      slug: 'power-bi-avance-2026',
      title: 'Power BI et analytics: Visualiser vos données en 2026',
      excerpt: 'Maîtrisez les outils modernes d\'analyse de données et de visualisation.',
      category: 'Données',
      date: '15 mars 2026',
      image: '📊',
    },
    {
      id: 4,
      slug: 'brand-digital-2026',
      title: 'Marque digitale et présence LinkedIn en 2026',
      excerpt: 'Construire votre image professionnelle à l\'ère du digital.',
      category: 'Employabilité',
      date: '10 mars 2026',
      image: '💼',
    },
    {
      id: 5,
      slug: 'ia-recherche-2026',
      title: 'Recherche intelligente avec les assistants IA',
      excerpt: 'Au-delà de Google: les nouveaux outils de recherche assistée par IA.',
      category: 'Internet',
      date: '5 mars 2026',
      image: '🔍',
    },
    {
      id: 6,
      slug: 'travail-hybrid-2026',
      title: 'Travail hybride: Outils et compétences indispensables',
      excerpt: 'Les technologies et soft-skills pour l\'environnement de travail 2026.',
      category: 'Employabilité',
      date: '28 février 2026',
      image: '💻',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Blog & Actualités</h1>
        <p className="section-subtitle">
          Les dernières nouvelles et tutoriels sur les compétences numériques
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{article.image}</div>
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-xs text-neutral-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {article.excerpt}
                </p>
                <p className="text-accent font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Lire la suite →
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogListPage;
