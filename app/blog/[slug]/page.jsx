'use client';

import { notFound } from 'next/navigation';
import Card from '@/components/Card';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';

const articles = {
  'ia-chat-gpt-2026': {
    title: 'IA générative et agents IA en 2026: L\'avenir du travail',
    category: 'IA',
    date: '22 mars 2026',
    image: '🤖',
    content: `
    <h2>Les agents IA autonomes en 2026</h2>
    <p>En 2026, les agents IA autonomes révolutionnent les espaces de travail. Ces systèmes peuvent non seulement répondre aux questions, mais aussi exécuter des tâches complexes de manière indépendante.</p>

    <h2>Comment fonctionnent les systèmes IA modernes?</h2>
    <p>Les nouveaux systèmes utilisent des modèles de langage multimodaux qui comprennent le texte, les images et même les vidéos. Ils sont capables d'apprendre des préférences utilisateur et d'adapter leurs réponses en temps réel.</p>

    <h2>Applications professionnelles 2026</h2>
    <ul>
      <li><strong>Automatisation:</strong> Gérer les tâches répétitives et les processus métier</li>
      <li><strong>Analyse de données:</strong> Interpréter des volumes massifs de données</li>
      <li><strong>Service client:</strong> Support 24/7 multilingue et contextuel</li>
      <li><strong>Collaboration:</strong> Assistants intelligents pour les équipes</li>
    </ul>

    <h2>Enjeux éthiques et de conformité</h2>
    <p>En 2026, les organisations doivent naviguer des questions importantes:</p>
    <ul>
      <li>Transparence et explainabilité des décisions IA</li>
      <li>Protection des données et privacy</li>
      <li>Biais algorithmiques et équité</li>
      <li>Impact sur l'emploi et les compétences requises</li>
    </ul>

    <h2>Compétences IA requises en 2026</h2>
    <p>Les professionnels doivent acquérir:</p>
    <ul>
      <li>Littératie IA basique pour tous les rôles</li>
      <li>Capacité à collaborer efficacement avec les systèmes IA</li>
      <li>Compréhension des implications éthiques</li>
      <li>Adaptabilité face aux changements technologiques rapides</li>
    </ul>

    <h2>L'avenir du travail hybride</h2>
    <p>Le modèle 2026 combine l'intelligence humaine et artificielle pour créer une productivité optimale. Les professionnels qui maîtrisent ces outils sont en haute demande.</p>
    `,
  },
  'securite-biometrique-2026': {
    title: 'Sécurité biométrique et authentification multi-niveaux',
    category: 'Cybersécurité',
    date: '18 mars 2026',
    image: '🔒',
    content: `
    <h2>La fin des mots de passe traditionnels?</h2>
    <p>En 2026, l'authentification biométrique est devenue la norme pour les organisations modernes. La combinaison reconnaissance faciale, empreinte digitale et reconnaissance vocale offre une sécurité inégalée.</p>

    <h2>Niveaux d'authentification en 2026</h2>
    <ul>
      <li><strong>Niveau 1:</strong> Biométrie unique (empreinte ou visage)</li>
      <li><strong>Niveau 2:</strong> Biométrie + device ID</li>
      <li><strong>Niveau 3:</strong> Multi-biométrie + contexte géographique</li>
      <li><strong>Niveau 4:</strong> Authentification comportementale IA</li>
    </ul>

    <h2>Avantages de la sécurité biométrique</h2>
    <p>✅ Impossible à oublier<br>✅ Impossible à partager<br>✅ Détection de fraude en temps réel<br>✅ Expérience utilisateur fluide</p>

    <h2>Conformité et réglementation</h2>
    <p>Les organisations doivent respecter:</p>
    <ul>
      <li>RGPD renforcé pour les données biométriques</li>
      <li>Standards ISO 27001 et standards de sécurité biométrique</li>
      <li>Consentement explicite des utilisateurs</li>
      <li>Droit à l'oubli pour les données biométriques</li>
    </ul>

    <h2>Mise en œuvre pratique</h2>
    <p>Pour adopter la sécurité biométrique:</p>
    <ul>
      <li>Évaluer les besoins de conformité</li>
      <li>Choisir des solutions certifiées et vérifiées</li>
      <li>Former les utilisateurs aux nouvelles méthodes</li>
      <li>Maintenir des protocoles de recovery en cas d'urgence</li>
    </ul>
    `,
  },
  'power-bi-avance-2026': {
    title: 'Power BI et analytics: Visualiser vos données en 2026',
    category: 'Données',
    date: '15 mars 2026',
    image: '📊',
    content: `
    <h2>Power BI en 2026: Plus qu'un outil de reporting</h2>
    <p>Power BI est devenu l'outil incontournable pour la business intelligence. Les organisations utilisent ses capacités avancées pour prendre des décisions data-driven en temps réel.</p>

    <h2>Fonctionnalités clés 2026</h2>
    <ul>
      <li><strong>AI Insights:</strong> Découverte automatique de patterns</li>
      <li><strong>Real-time Dashboards:</strong> Mise à jour instantanée des données</li>
      <li><strong>Natural Language Query:</strong> Poser des questions en langage naturel</li>
      <li><strong>Mobile Analytics:</strong> Accès complet en mobilité</li>
      <li><strong>Collaboration Avancée:</strong> Partage sécurisé et commentaires intégrés</li>
    </ul>

    <h2>Cas d'usage professionels</h2>
    <ul>
      <li>Tableaux de bord KPI pour la direction</li>
      <li>Analyse prédictive des tendances du marché</li>
      <li>Optimisation de la supply chain</li>
      <li>Segmentation client avancée</li>
    </ul>

    <h2>Connexions de données 2026</h2>
    <p>Power BI se connecte maintenant à:</p>
    <ul>
      <li>Azure Data Lake et Data Warehouse</li>
      <li>APIs d'applications modernes</li>
      <li>Systèmes IoT temps réel</li>
      <li>Data streams et pipelines cloud</li>
    </ul>

    <h2>Compétences requises</h2>
    <p>Les analystes doivent maîtriser: DAX (langage de formule), modélisation de données, visualisation effective, et les meilleures pratiques analytics.</p>
    `,
  },
  'brand-digital-2026': {
    title: 'Marque digitale et présence LinkedIn en 2026',
    category: 'Employabilité',
    date: '10 mars 2026',
    image: '💼',
    content: `
    <h2>La marque personnelle en 2026</h2>
    <p>En 2026, votre présence digitale est votre première impression professionnelle. Construire une marque personnelle cohérente et authentique ouvre des portes qui ne s'ouvriraient jamais autrement.</p>

    <h2>Éléments essentiels d'une marque digitale forte</h2>
    <ul>
      <li><strong>LinkedIn complet:</strong> Photo professionnelle, headline optimisée, résumé impactant</li>
      <li><strong>Portfolio en ligne:</strong> Projets et accomplissements documentés</li>
      <li><strong>Contenu régulier:</strong> Articles, insights et partages pertinents</li>
      <li><strong>Réseau engagé:</strong> Connexions qualité plutôt que quantité</li>
    </ul>

    <h2>Stratégie de contenu 2026</h2>
    <ul>
      <li>Partager vos apprentissages et expériences</li>
      <li>Commenter et engager sur le contenu pertinent</li>
      <li>Créer du contenu original sur vos domaines d'expertise</li>
      <li>Utiliser les vidéos et formats visuels</li>
    </ul>

    <h2>Impact sur vos opportunités</h2>
    <p>Les recruteurs en 2026:</p>
    <ul>
      <li>Recherchent les candidats high-potential sur LinkedIn</li>
      <li>Évaluent votre position d'expert dans votre domaine</li>
      <li>Considèrent votre engagement communautaire</li>
      <li>Vérifient l'authenticité de votre profil</li>
    </ul>

    <h2>Pièges à éviter</h2>
    <p>❌ Profil incomplet<br>❌ Inactivité prolongée<br>❌ Contenu non professionnel ou incohérent<br>❌ Ignorance des tendances de votre industrie</p>
    `,
  },
  'ia-recherche-2026': {
    title: 'Recherche intelligente avec les assistants IA',
    category: 'Internet',
    date: '5 mars 2026',
    image: '🔍',
    content: `
    <h2>Au-delà de Google en 2026</h2>
    <p>La recherche d'informations a radicalement changé. Les assistants IA synthétisent maintenant l'information plutôt que de simplement vous donner une liste de résultats.</p>

    <h2>Nouveaux outils de recherche 2026</h2>
    <ul>
      <li><strong>Recherche conversationnelle:</strong> Dialogue continu avec l'IA</li>
      <li><strong>Recherche contextuelle:</strong> Comprendre votre intention réelle</li>
      <li><strong>Recherche multimodale:</strong> Images, texte, vidéo ensemble</li>
      <li><strong>Recherche prédictive:</strong> Anticiper vos besoins</li>
    </ul>

    <h2>Intelligence de recherche</h2>
    <p>L'IA peut maintenant:</p>
    <ul>
      <li>Synthétiser des informations de milliers de sources</li>
      <li>Identifier les contradictions et les consensus</li>
      <li>Évaluer la crédibilité des sources</li>
      <li>Vous alerter sur les mises à jour importantes</li>
    </ul>

    <h2>Productivité améliorée</h2>
    <p>Avec la recherche IA, vous pouvez:</p>
    <ul>
      <li>Réduire le temps de recherche de 70%</li>
      <li>Obtenir des réponses plus précises et contextuelées</li>
      <li>Découvrir des connexions que vous auriez manquées</li>
      <li>Rester à jour sans surcharge informationnelle</li>
    </ul>

    <h2>Compétences en recherche 2026</h2>
    <p>Les professionnels doivent apprendre à: formuler des questions précises, évaluer les résultats critiquement, et utiliser les outils avancés pour des recherches complexes.</p>
    `,
  },
  'travail-hybrid-2026': {
    title: 'Travail hybride: Outils et compétences indispensables',
    category: 'Employabilité',
    date: '28 février 2026',
    image: '💻',
    content: `
    <h2>Le travail hybride: nouveau standard en 2026</h2>
    <p>Le modèle hybride est maintenant dominant. Réussir en 2026 nécessite de maîtriser à la fois la technologie et les soft-skills pour travailler efficacement à distance et au bureau.</p>

    <h2>Infrastructure technologique essentiellement</h2>
    <ul>
      <li><strong>Hardware:</strong> Ordinateur performant, écrans multiples, connexion fiable</li>
      <li><strong>Logiciels collaboration:</strong> Teams, Slack, Zoom pour la communication</li>
      <li><strong>Sécurité:</strong> VPN, authentification biométrique, gestion des secrets</li>
      <li><strong>Productivité:</strong> Project Management, documentation partagée</li>
    </ul>

    <h2>Soft-skills critiales</h2>
    <ul>
      <li>Communication asynchrone claire et concise</li>
      <li>Automanagement et discipline</li>
      <li>Collaboration virtuelle efficace</li>
      <li>Empathie et intelligence émotionnelle</li>
    </ul>

    <h2>Meilleur pratiques du télétravail</h2>
    <ul>
      <li>Établir une routine et des limites claires</li>
      <li>Créer un espace de travail dédié</li>
      <li>Maintenir la documentation à jour</li>
      <li>Participer aux réunions avec caméra activée</li>
      <li>Construire des relations authentiques avec les collègues</li>
    </ul>

    <h2>Impact sur la carrière</h2>
    <p>Les équipes hybrides performantes offrent: flexibilité, accès à des talents mondiaux, meilleur équilibre travail-vie, et productivité accrue.</p>
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
          <CTAButton href="/training/mixed" size="lg">
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
