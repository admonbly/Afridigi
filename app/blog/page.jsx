'use client';

import Card from '@/components/Card';
import Link from 'next/link';

function BlogListPage() {
  const articles = [
    {
      id: 1,
      slug: 'ia-chat-gpt-2024',
      title: 'ChatGPT et l\'IA en 2024: Guide complet',
      excerpt: 'Découvrez comment utiliser ChatGPT et les assistants IA dans votre quotidien.',
      category: 'IA',
      date: '15 mars 2024',
      image: '🤖',
    },
    {
      id: 2,
      slug: 'securite-mots-passe',
      title: 'Comment créer des mots de passe sécurisés',
      excerpt: 'Les meilleures pratiques pour protéger vos comptes en ligne.',
      category: 'Cybersécurité',
      date: '10 mars 2024',
      image: '🔒',
    },
    {
      id: 3,
      slug: 'excel-pour-debutants',
      title: 'Excel pour débutants: Les bases',
      excerpt: 'Apprenez les fonctionnalités essentielles d\'Excel en 5 leçons.',
      category: 'Bureautique',
      date: '5 mars 2024',
      image: '📊',
    },
    {
      id: 4,
      slug: 'linkedin-professionnel',
      title: 'Créer un profil LinkedIn impactant',
      excerpt: 'Conseils pratiques pour se démarquer sur LinkedIn.',
      category: 'Employabilité',
      date: '28 février 2024',
      image: '💼',
    },
    {
      id: 5,
      slug: 'google-avancee',
      title: 'Recherche Google avancée: Astuces importantes',
      excerpt: 'Les opérateurs de recherche qui vous sauveront du temps.',
      category: 'Internet',
      date: '20 février 2024',
      image: '🔍',
    },
    {
      id: 6,
      slug: 'home-office-tech',
      title: 'Télétravail: Configuration technique optimale',
      excerpt: 'Les outils et configurations nécessaires pour travailler efficacement à distance.',
      category: 'Employabilité',
      date: '15 février 2024',
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
