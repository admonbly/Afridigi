'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import QuizComponent from '@/components/QuizComponent';

function DemoContent() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get('module');

  return (
    <QuizComponent
      mode="demo"
      moduleId={moduleId}
    />
  );
}

export default function DemoPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <DemoContent />
    </Suspense>
  );
}
