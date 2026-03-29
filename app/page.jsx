'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function HomePage() {
  const modules = [
    {
      id: 1,
      icon: '💻',
      title: 'IT (Ordinateur)',
      description: 'Maîtrisez les bases de l\'informatique et l\'utilisation efficace des ordinateurs.',
    },
    {
      id: 2,
      icon: '🌐',
      title: 'Internet & Google',
      description: 'Naviguer sur le web, rechercher des informations et utiliser les outils Google.',
    },
    {
      id: 3,
      icon: '📧',
      title: 'Email',
      description: 'Créer, gérer et organiser vos communications par courrier électronique.',
    },
    {
      id: 4,
      icon: '📄',
      title: 'Bureautique',
      description: 'Utiliser les outils de traitement de texte, feuilles de calcul et présentations.',
    },
    {
      id: 5,
      icon: '🔒',
      title: 'Cybersécurité',
      description: 'Protéger vos données et comprendre les risques numériques.',
    },
    {
      id: 6,
      icon: '🤖',
      title: 'Intelligence Artificielle',
      description: 'Découvrir l\'IA et ses applications pratiques au quotidien.',
    },
    {
      id: 7,
      icon: '💼',
      title: 'Employabilité',
      description: 'Développer les compétences numériques demandées par les employeurs.',
    },
  ];

  const testimonials = [
    {
      text: 'Syllabix m\'a permis de certifier mes compétences numériques. Très utile pour ma recherche d\'emploi!',
      author: 'Amara Traoré',
      location: 'Dakar, Sénégal',
    },
    {
      text: 'La plateforme est simple à utiliser et les modules sont très bien structurés. Recommandé!',
      author: 'Zainab Mohamed',
      location: 'Kigali, Rwanda',
    },
    {
      text: 'Excellent outil pour évaluer rapidement les compétences IT. J\'utilise cela pour former mon équipe.',
      author: 'Samuel Adeyemi',
      location: 'Lagos, Nigeria',
    },
  ];

  return (
    <>
      {/* Section 1: Hero */}
      <Hero
        title="Évaluez vos compétences numériques"
        subtitle="Syllabix est la plateforme de certification des compétences numériques en Afrique. Passez l'évaluation et obtenez un certificat reconnu."
        variant="default"
        cta={
          <>
            <CTAButton
              href="/certification/demo"
              size="lg"
            >
              🎯 Commencer l'évaluation
            </CTAButton>
            <CTAButton
              href="/certification/referentiel"
              variant="outline"
              size="lg"
            >
              📖 Voir le référentiel
            </CTAButton>
          </>
        }
      />

      {/* Section 2: À Propos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Pourquoi Syllabix?</h2>
          <p className="section-subtitle">
            La plateforme leader pour évaluer et certifier les compétences numériques en Afrique
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon="✨"
              title="Simple & Accessible"
              description="Interface intuitive optimisée pour les connexions lentes. Fonctionne sur tous les appareils."
            />
            <Card
              icon="🎯"
              title="Évaluation Fiable"
              description="7 modules couvrant les compétences essentielles. Scoring transparent et certificats reconnus."
            />
            <Card
              icon="⚡"
              title="Résultats Rapides"
              description="Obtenez votre évaluation en moins de 30 minutes. Certificat immédiat en PDF."
            />
          </div>
        </div>
      </section>

      {/* Section 3: Les 7 Modules */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">7 Modules d'Évaluation</h2>
          <p className="section-subtitle">
            Couvrez tous les domaines des compétences numériques essentielles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={`/certification/demo?module=${module.id}`}
                className="group"
              >
                <Card
                  icon={module.icon}
                  title={module.title}
                  description=""
                  className="h-full cursor-pointer group-hover:shadow-xl group-hover:border-accent"
                  variant="default"
                >
                  <p className="text-sm text-neutral-600 group-hover:text-accent transition-colors">
                    {module.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton href="/certification/s-entrainer" size="lg">
              🏋️ S'entraîner maintenant
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 4: Témoignages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Ce que disent nos utilisateurs</h2>
          <p className="section-subtitle">
            Des milliers de professionnels font confiance à Syllabix
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                variant="accent"
                className="flex flex-col justify-between"
              >
                <p className="text-neutral-700 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-neutral-600">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Actualités */}
      <section id="actualites" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Actualités & Blog</h2>
          <p className="section-subtitle">
            Restez informé avec nos derniers articles et actualités numériques
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/ia-chat-gpt-2024" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-5xl mb-4">🤖</div>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                  IA
                </span>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 mt-3 group-hover:text-accent transition-colors">
                  ChatGPT et l'IA en 2024
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Découvrez comment utiliser ChatGPT et les assistants IA dans votre quotidien.
                </p>
                <p className="text-accent font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Lire la suite →
                </p>
              </Card>
            </Link>

            <Link href="/blog/securite-mots-passe" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-5xl mb-4">🔒</div>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                  Cybersécurité
                </span>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 mt-3 group-hover:text-accent transition-colors">
                  Mots de passe sécurisés
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Les meilleures pratiques pour protéger vos comptes en ligne.
                </p>
                <p className="text-accent font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Lire la suite →
                </p>
              </Card>
            </Link>

            <Link href="/blog/google-avancee" className="group">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-5xl mb-4">🔍</div>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                  Internet
                </span>
                <h3 className="text-xl font-heading font-bold text-primary mb-3 mt-3 group-hover:text-accent transition-colors">
                  Recherche Google avancée
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Les opérateurs de recherche qui vous sauveront du temps.
                </p>
                <p className="text-accent font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  Lire la suite →
                </p>
              </Card>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <CTAButton href="/blog" variant="outline" size="lg">
              📰 Voir tous les articles
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 6: Appel à l'Action */}
      <section className="py-20 bg-gradient-to-r from-accent to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Prêt à certifier vos compétences?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            L'évaluation prend moins de 30 minutes. Aucune inscription préalable requise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="/certification/examen"
              variant="secondary"
              size="lg"
            >
              🎓 Passer l'examen
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="ghost"
              size="lg"
              className="text-white border-white hover:bg-white/20"
            >
              ❓ Des questions?
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 7: Partenaires/Infolettre */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Rejoignez la communauté Syllabix
              </h2>
              <p className="text-lg text-white/80 mb-4">
                Restez informé des nouvelles évaluations, ressources et actualités du monde numérique.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg text-primary font-semibold"
                />
                <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                  S'abonner
                </button>
              </div>
            </div>

            <div>
              {/* Les liens principaux sont maintenant dans le footer */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
