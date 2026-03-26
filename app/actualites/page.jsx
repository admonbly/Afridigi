'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ActualitesPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/blog');
  }, [router]);

  return (
    <section className="py-20 bg-neutral-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-heading font-bold text-primary mb-4">Redirection...</h1>
        <p className="text-neutral-600">Vous êtes redirigé vers la page Actualités (Blog).</p>
      </div>
    </section>
  );
}
