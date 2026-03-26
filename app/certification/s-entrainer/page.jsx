'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import QuizComponent from '@/components/QuizComponent';

function TrainingContent() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get('module');

  return (
    <QuizComponent
      mode="training"
      moduleId={moduleId}
    />
  );
}

export default function TrainingPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <TrainingContent />
    </Suspense>
  );
}
