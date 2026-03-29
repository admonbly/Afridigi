'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function PartnershipsPage() {
  const partners = [
    {
      name: 'Organisation Partenaire 1',
      description: 'Leader dans la formation numérique en Afrique de l\'Ouest',
      logo: '🏢',
      since: 'Depuis 2023',
    },
    {
      name: 'Organisation Partenaire 2',
      description: 'Spécialiste de l\'inclusion numérique et accessibilité',
      logo: '🌍',
      since: 'Depuis 2024',
    },
    {
      name: 'Organisation Partenaire 3',
      description: 'Fournisseur de contenu pédagogique pour la technologie',
      logo: '📚',
      since: 'Depuis 2024',
    },
  ];

  const benefits = [
    {
      icon: '🎯',
      title: 'Certification Reconnue',
      description: 'Certificats acceptés par les partenaires pour l\'emploi et la formation',
    },
    {
      icon: '💼',
      title: 'Opportunités Professionnelles',
      description: 'Accès à un réseau d\'employeurs et d\'opportunités',
    },
    {
      icon: '📊',
      title: 'Données & Insights',
      description: 'Rapports détaillés sur les compétences de vos employés ou apprenants',
    },
    {
      icon: '🌱',
      title: 'Formation Continue',
      description: 'Ressources et supports pour la formation professionnelle continue',
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Nos Partenaires</h1>
        <p className="section-subtitle">
          Travaillez avec nous pour développer les compétences numériques en Afrique
        </p>

        {/* Current Partners */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">
            Partenaires Actuels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} variant="accent" className="p-8 text-center">
                <div className="text-5xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {partner.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">{partner.description}</p>
                <p className="text-xs text-neutral-500 font-semibold">{partner.since}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">
            Avantages du Partenariat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">
            Types de Partenariats
          </h2>

          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Partenariat Institutionnel
              </h3>
              <p className="text-neutral-600 mb-4">
                Intégrez Syllabix dans votre programme de formation. Offrez à vos étudiants une
                certification reconnue.
              </p>
              <CTAButton href="#contact" variant="primary" size="md">
                En savoir plus
              </CTAButton>
            </Card>

            <Card className="p-8 border-l-4 border-secondary">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Partenariat Professionnel
              </h3>
              <p className="text-neutral-600 mb-4">
                Évaluez et certifiez les compétences de vos employés. Accédez à des rapports
                détaillés sur les compétences de votre équipe.
              </p>
              <CTAButton href="#contact" variant="primary" size="md">
                En savoir plus
              </CTAButton>
            </Card>

            <Card className="p-8 border-l-4 border-primary">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Partenariat de Distribution
              </h3>
              <p className="text-neutral-600 mb-4">
                Devenez partenaire de distribution et générez des revenus. Offrez Syllabix à
                vos clients et partenaires.
              </p>
              <CTAButton href="#contact" variant="primary" size="md">
                En savoir plus
              </CTAButton>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-12 bg-gradient-to-r from-primary to-primary/90 text-white text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Devenir Partenaire
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Rejoignez notre réseau de partenaires et contribuez à la transformation numérique de l'Afrique.
          </p>
          <CTAButton
            href="/contact"
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-primary"
          >
            💬 Nous contacter
          </CTAButton>
        </Card>
      </div>
    </section>
  );
}
