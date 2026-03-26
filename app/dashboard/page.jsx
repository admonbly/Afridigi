'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';

export default function DashboardPage() {
  // Mock user data
  const user = {
    name: 'Amara Traoré',
    email: 'amara@exemple.com',
    joinDate: 'Janvier 2024',
  };

  const progress = [
    { module: 'IT (Ordinateur)', attempts: 3, bestScore: 85, status: '✅ Certifié' },
    { module: 'Internet & Google', attempts: 2, bestScore: 78, status: '✅ Certifié' },
    { module: 'Email', attempts: 1, bestScore: 92, status: '✅ Certifié' },
    { module: 'Bureautique', attempts: 0, bestScore: 0, status: '🔒 Non tenté' },
    { module: 'Cybersécurité', attempts: 2, bestScore: 71, status: '✅ Certifié' },
    { module: 'Intelligence Artificielle', attempts: 1, bestScore: 65, status: '✅ Certifié' },
    { module: 'Employabilité', attempts: 0, bestScore: 0, status: '🔒 Non tenté' },
  ];

  const certificates = [
    { module: 'IT (Ordinateur)', level: 'AVANCÉ', date: '15 mars 2024', id: 'CERT-001' },
    { module: 'Email', level: 'AVANCÉ', date: '12 mars 2024', id: 'CERT-002' },
    { module: 'Internet & Google', level: 'INTERMÉDIAIRE', date: '10 mars 2024', id: 'CERT-003' },
  ];

  const completionPercentage = Math.round((3 / 7) * 100);

  return (
    <section className="py-20 bg-neutral-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Mon Tableau de Bord</h1>

        {/* User Info */}
        <Card className="mb-8 flex justify-between items-center">
          <div>
            <p className="text-neutral-600">Bienvenue</p>
            <p className="text-2xl font-heading font-bold text-primary">{user.name}</p>
            <p className="text-sm text-neutral-500">Membre depuis {user.joinDate}</p>
          </div>
          <Link
            href="/auth/logout"
            className="px-6 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Déconnexion
          </Link>
        </Card>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card variant="accent">
            <div className="text-4xl mb-2">🏆</div>
            <p className="text-neutral-600 text-sm">Modules complétés</p>
            <p className="text-3xl font-bold text-accent">3/7</p>
          </Card>
          <Card variant="secondary">
            <div className="text-4xl mb-2">📜</div>
            <p className="text-neutral-600 text-sm">Certificats obtenus</p>
            <p className="text-3xl font-bold text-secondary">{certificates.length}</p>
          </Card>
          <Card>
            <div className="text-4xl mb-2">📊</div>
            <p className="text-neutral-600 text-sm">Taux de réussite</p>
            <p className="text-3xl font-bold text-primary">80%</p>
          </Card>
          <Card>
            <div className="text-4xl mb-2">⏱️</div>
            <p className="text-neutral-600 text-sm">Temps total</p>
            <p className="text-3xl font-bold">2h 45m</p>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <h3 className="text-xl font-heading font-bold text-primary mb-4">
            Progression générale
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full bg-neutral-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-accent to-orange-500 h-full transition-all"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>
            <p className="font-bold text-accent text-lg">{completionPercentage}%</p>
          </div>
        </Card>

        {/* Progress by Module */}
        <Card className="mb-8">
          <h3 className="text-xl font-heading font-bold text-primary mb-6">
            Progression par module
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="text-left py-3 font-heading font-bold text-primary">Module</th>
                  <th className="text-center py-3 font-heading font-bold text-primary">Tentatives</th>
                  <th className="text-center py-3 font-heading font-bold text-primary">Meilleur score</th>
                  <th className="text-right py-3 font-heading font-bold text-primary">Statut</th>
                </tr>
              </thead>
              <tbody>
                {progress.map((item, index) => (
                  <tr key={index} className="border-b border-neutral-200 hover:bg-neutral-50">
                    <td className="py-4 font-medium text-neutral-700">{item.module}</td>
                    <td className="text-center py-4 text-neutral-600">{item.attempts}</td>
                    <td className="text-center py-4 font-bold text-primary">
                      {item.bestScore > 0 ? `${item.bestScore}%` : '-'}
                    </td>
                    <td className="text-right py-4 font-semibold text-accent">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Certificates */}
        <Card className="mb-8">
          <h3 className="text-xl font-heading font-bold text-primary mb-6">
            📜 Mes certificats
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} variant="accent" className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-heading font-bold text-primary">{cert.module}</p>
                    <p className="text-sm text-neutral-600">{cert.date}</p>
                  </div>
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-bold">
                    {cert.level}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-4">ID: {cert.id}</p>
                <button className="w-full px-4 py-2 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors text-sm">
                  📥 Télécharger
                </button>
              </Card>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <CTAButton href="/certification/s-entrainer" size="lg">
            🏋️ Continuer l'entraînement
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
