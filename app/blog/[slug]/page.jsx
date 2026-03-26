'use client';

import { notFound } from 'next/navigation';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';

const articles = {
  'ia-chat-gpt-2024': {
    title: 'ChatGPT et l\'IA en 2024: Guide complet',
    category: 'IA',
    date: '15 mars 2024',
    image: '🤖',
    content: `
    <h2>Introduction à ChatGPT</h2>
    <p>ChatGPT est un modèle d'intelligence artificielle créé par OpenAI. Il s'agit d'un assistant IA capable de comprendre et de répondre à des questions en langage naturel.</p>

    <h2>Comment ça marche?</h2>
    <p>ChatGPT utilise une technologie appelée <strong>transformers</strong> pour comprendre le contexte et générer des réponses pertinentes. Le modèle a été entraîné sur des milliards de mots provenant d'internet.</p>

    <h2>Use cases pratiques</h2>
    <ul>
      <li><strong>Rédaction:</strong> Écrire des emails, articles, ou contenu créatif</li>
      <li><strong>Code:</strong> Générer ou déboguer du code</li>
      <li><strong>Apprentissage:</strong> Expliquer des concepts complexes</li>
      <li><strong>Brainstorming:</strong> Générer des idées et des solutions</li>
    </ul>

    <h2>Limitations à connaître</h2>
    <p>ChatGPT n'est pas parfait. Il peut:</p>
    <ul>
      <li>Générer des informations incorrectes ("hallucinations")</li>
      <li>Avoir du mal avec les tâches de mathématiques complexes</li>
      <li>Ne pas connaître les événements de très récent (après son entraînement)</li>
    </ul>

    <h2>Conseils pratiques</h2>
    <p>Pour obtenir les meilleures réponses de ChatGPT:</p>
    <ul>
      <li>Soyez spécifique dans vos questions</li>
      <li>Fournissez du contexte</li>
      <li>Demandez des clarifications si nécessaire</li>
      <li>Vérifiez toujours les informations critiques</li>
    </ul>

    <h2>Conclusion</h2>
    <p>ChatGPT et les assistants IA sont des outils puissants qui changeront la manière dont nous travaillons. L'important est de les utiliser de manière responsable et éthique.</p>
    `,
  },
  'securite-mots-passe': {
    title: 'Comment créer des mots de passe sécurisés',
    category: 'Cybersécurité',
    date: '10 mars 2024',
    image: '🔒',
    content: `
    <h2>Pourquoi les mots de passe forts sont importants</h2>
    <p>Un mot de passe faible peut être cracké en secondes. Les hackers utilisent des techniques automatisées pour deviner les mots de passe.</p>

    <h2>Caractéristiques d'un mot de passe fort</h2>
    <ul>
      <li><strong>Longueur:</strong> Minimum 12 caractères (plus c'est long, mieux c'est)</li>
      <li><strong>Complexité:</strong> Mélange de majuscules, minuscules, chiffres et symboles</li>
      <li><strong>Unique:</strong> Un mot de passe différent pour chaque compte important</li>
      <li><strong>Imprévisible:</strong> Pas de noms, dates d'anniversaire ou motifs obvoles</li>
    </ul>

    <h2>Exemples de mots de passe FAIBLES</h2>
    <p>❌ 123456<br>❌ password<br>❌ admin<br>❌ qwerty<br>❌ Votre prénom</p>

    <h2>Exemples de mots de passe FORTS</h2>
    <p>✅ Tr0picJumper#Sunset92!<br>✅ BlueMoon$Dance27@Night<br>✅ @Phoenix88&Whisper*Flame</p>

    <h2>Gestionnaires de mots de passe</h2>
    <p>Utiliser un gestionnaire de mots de passe est la meilleure pratique:</p>
    <ul>
      <li>Bitwarden (gratuit et open-source)</li>
      <li>1Password</li>
      <li>LastPass</li>
      <li>Dashlane</li>
    </ul>

    <h2>Authentification à deux facteurs (2FA)</h2>
    <p>La 2FA ajoute une couche supplémentaire de sécurité. Même si quelqu'un a votre mot de passe, il ne peut pas accéder à votre compte sans le deuxième facteur (code SMS, app d'authentification).</p>

    <h2>À ne jamais faire</h2>
    <ul>
      <li>Ne partage jamais votre mot de passe</li>
      <li>N'utilisez pas le même mot de passe partout</li>
      <li>Ne l'écrivez pas sur papier (sauf dans un endroit sécurisé)</li>
      <li>Ne le rentrez jamais sur un ordinateur public</li>
    </ul>
    `,
  },
  'excel-pour-debutants': {
    title: 'Excel pour débutants: Les bases',
    category: 'Bureautique',
    date: '5 mars 2024',
    image: '📊',
    content: `
    <h2>Qu'est-ce qu'Excel?</h2>
    <p>Excel est un logiciel de feuille de calcul créé par Microsoft. Il permet de stocker, organiser et analyser des données.</p>

    <h2>L'interface d'Excel</h2>
    <ul>
      <li><strong>Cellule:</strong> Intersection d'une colonne et d'une ligne</li>
      <li><strong>Colonne:</strong> Lignes verticales (A, B, C...)</li>
      <li><strong>Ligne:</strong> Lignes horizontales (1, 2, 3...)</li>
      <li><strong>Feuille:</strong> Collection de cellules</li>
      <li><strong>Classeur:</strong> Fichier Excel contenant des feuilles</li>
    </ul>

    <h2>Opérations de base</h2>
    <ul>
      <li><strong>Saisie de données:</strong> Cliquez sur une cellule et tapez</li>
      <li><strong>Formules:</strong> Commencez par = (ex: =A1+B1)</li>
      <li><strong>Formatage:</strong> Gras, italique, couleurs</li>
      <li><strong>Tri:</strong> Organisez les données</li>
    </ul>

    <h2>Fonctions essentielles</h2>
    <ul>
      <li><strong>=SOMME():</strong> Addition de cellules</li>
      <li><strong>=MOYENNE():</strong> Calcul de la moyenne</li>
      <li><strong>=COMPTE():</strong> Compter les cellules</li>
      <li><strong>=MAX():</strong> Valeur maximale</li>
      <li><strong>=MIN():</strong> Valeur minimale</li>
    </ul>

    <h2>Créer un graphique</h2>
    <p>Sélectionnez vos données → Insérer → Graphique. Excel créera automatiquement un graphique!</p>

    <h2>Conseils pratiques</h2>
    <ul>
      <li>Utilisez les en-têtes pour identifier vos colonnes</li>
      <li>Gardez vos données organisées</li>
      <li>Utilisez le formatage conditionalnel pour mettre en évidence les données importantes</li>
      <li>Explorez les tutoriels YouTube pour aller plus loin</li>
    </ul>
    `,
  },
};

export default function ArticlePage({ params }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex gap-3 items-center mb-4">
            <span className="text-5xl">{article.image}</span>
            <div>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                {article.category}
              </span>
              <p className="text-sm text-neutral-500 mt-2">{article.date}</p>
            </div>
          </div>
          <h1 className="section-title">{article.title}</h1>
        </div>

        {/* Content */}
        <Card className="mb-12 prose prose-lg max-w-none">
          <div
            className="text-neutral-700 space-y-4"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/<h2>/g, '<h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">')
                .replace(/<ul>/g, '<ul className="space-y-2 ml-4">')
                .replace(/<li>/g, '<li className="text-neutral-700">')
                .replace(/<p>/g, '<p className="text-neutral-600 leading-relaxed">'),
            }}
          />
        </Card>

        {/* CTA */}
        <Card className="mb-12 bg-gradient-to-r from-accent/10 to-secondary/10 text-center">
          <p className="text-lg text-neutral-700 mb-4">
            Prêt à tester vos compétences?
          </p>
          <CTAButton href="/certification/s-entrainer" size="lg">
            🏋️ Commencer à s'entraîner
          </CTAButton>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            ← Tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
}
