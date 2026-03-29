'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import QuizComponent from '@/components/QuizComponent';

function ModuleCertContent() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get('module');

  if (!moduleId) {
    return (
      <section className="py-20 bg-neutral-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold text-primary mb-8 text-center">
            🎓 Certificat par Module
          </h1>
          <p className="text-xl text-neutral-600 text-center mb-12">
            Choisissez le module pour lequel vous souhaitez obtenir un certificat officiel.
          </p>
          <QuizComponent mode="module-cert-select" />
        </div>
      </section>
    );
  }

  return (
    <QuizComponent
      mode="module-cert"
      moduleId={moduleId}
    />
  );
}

export default function ModuleCertPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ModuleCertContent />
    </Suspense>
  );
}