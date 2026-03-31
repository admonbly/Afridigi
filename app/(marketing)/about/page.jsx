'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';

export default function AboutPage() {
  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">À Propos de Syllabix</h1>

        <div className="prose prose-lg max-w-none">
          <Card className="mb-8 p-8 bg-gradient-to-r from-accent/10 to-secondary/10">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Syllabix est une plateforme innovante dédiée à l'évaluation et la certification des
              compétences numériques en Afrique. Notre mission est de rendre accessible l'évaluation
              des compétences essentielles pour réussir dans le monde numérique.
            </p>
          </Card>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Notre Mission
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Accélérer la transformation numérique en Afrique en fournissant des outils d'évaluation
            fiables, accessibles et reconnus. Nous croyons que chacun mérite l'opportunité de
            certifier ses compétences et d'avancer dans sa carrière.
          </p>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
            <Card icon="🌍" title="Accessibilité">
              Accessible à tous, indépendamment de la connexion internet ou du revenu.
            </Card>
            <Card icon="⚡" title="Efficacité">
              Évaluations rapides et résultats instantanés pour vous faire gagner du temps.
            </Card>
            <Card icon="✨" title="Qualité">
              Certificats reconnus et processus d'évaluation rigoureux et transparent.
            </Card>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Quelques Chiffres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 text-center">
            <Card>
              <p className="text-4xl font-bold text-accent mb-2">50K+</p>
              <p className="text-neutral-700 font-semibold">Utilisateurs</p>
            </Card>
            <Card>
              <p className="text-4xl font-bold text-secondary mb-2">12</p>
              <p className="text-neutral-700 font-semibold">Pays</p>
            </Card>
            <Card>
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-neutral-700 font-semibold">Satisfaction</p>
            </Card>
          </div>

          <h2 className="text-3xl font-heading font-bold text-primary mt-12 mb-6">
            Notre Équipe
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            Syllabix a été créée par une équipe d'experts en technologie, pédagogie et
            développement en Afrique. Nous travaillons avec les meilleures organisations pour
            assurer que notre plateforme répond aux besoins réels du marché africain.
          </p>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary to-primary/90 rounded-lg">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Prêt à commencer?
            </h3>
            <p className="text-white/90 mb-6">
              Rejoignez des milliers d'africains qui certifient leurs compétences numériques.
            </p>
            <CTAButton href="/training/mixed" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              Commencer l'évaluation gratuite
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
