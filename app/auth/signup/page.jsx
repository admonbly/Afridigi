'use client';

import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authFunctions } from '@/lib/firebase';

export default function SignupPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('student');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!firstName.trim()) {
      setError('Le prénom est requis');
      return;
    }

    if (!lastName.trim()) {
      setError('Le nom est requis');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setIsLoading(true);

    try {
      await authFunctions.signUp(email, password);
      // Redirection au dashboard en cas de succès
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Erreur lors de l\'inscription');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-neutral-50 min-h-screen flex items-center">
      <div className="w-full max-w-md mx-auto px-4">
        <Card className="p-8">
          <h1 className="text-3xl font-heading font-bold text-primary text-center mb-8">
            S'inscrire
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-900 text-sm">
                ❌ {error}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent outline-none transition-colors"
                  placeholder="Jean"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent outline-none transition-colors"
                  placeholder="Dupont"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Statut
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent outline-none transition-colors"
                disabled={isLoading}
              >
                <option value="student">👨‍🎓 Étudiant</option>
                <option value="teacher">👨‍🏫 Enseignant</option>
                <option value="professional">💼 Professionnel</option>
                <option value="other">🤷 Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent outline-none transition-colors"
                placeholder="vous@exemple.com"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent outline-none transition-colors"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
              <p className="text-xs text-neutral-500 mt-2">
                Minimum 6 caractères
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-accent outline-none transition-colors"
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>

            <CTAButton
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? '⏳ Inscription...' : '✓ S\'inscrire'}
            </CTAButton>
          </form>

          <p className="text-sm text-neutral-600 text-center mt-6">
            Vous avez déjà un compte?{' '}
            <Link href="/auth/login" className="text-accent font-semibold hover:underline">
              Se connecter
            </Link>
          </p>

          <p className="text-xs text-neutral-500 text-center mt-6">
            En vous inscrivant, vous acceptez nos{' '}
            <a href="#" className="text-accent hover:underline">
              Conditions d'utilisation
            </a>{' '}
            et notre{' '}
            <a href="#" className="text-accent hover:underline">
              Politique de confidentialité
            </a>
            .
          </p>
        </Card>
      </div>
    </section>
  );
}
