# 🔥 MIGRATION FIREBASE - GUIDE COMPLET

Vous avez adapté le code pour Firebase! Voici comment finir la configuration.

## ✅ Étape 1: Récupérer vos credentials Firebase

### Dans la Firebase Console:
1. Allez à https://console.firebase.google.com
2. Sélectionnez votre projet
3. Allez à **Settings ⚙️** (bas à gauche)
4. Onglet **General**
5. Descendez jusqu'à **Your apps**
6. Cliquez sur **Web app** (icône `</>`)
7. Copiez la configuration

La config ressemble à:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDx...",
  authDomain: "myproject.firebaseapp.com",
  projectId: "myproject-abc123",
  storageBucket: "myproject.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

## 🔧 Étape 2: Configurer `.env.local`

Remplacez dans `C:\Users\Avisia\Desktop\afridigi-web\.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDx...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=myproject.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myproject-abc123
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=myproject.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

## 🔥 Étape 3: Configurer Firebase Console

### Activer l'authentification par email:
1. Firebase Console → **Authentication** → Onglet **Sign-in method**
2. Activez **Email/Password**
3. Sauvegardez

### Créer les collections Firestore:
1. Firebase Console → **Firestore Database**
2. Cliquez **Create Database**
3. Choisir **Start in test mode** (pour dev)
4. Région: Europe de l'Ouest (proche de l'Afrique)

Les collections nécessaires:
- `users` - Document utilisateur
- `articles` - Articles du blog

*Note: Les sous-collections comme `users/{userId}/progress` se créent automatiquement*

## 📦 Étape 4: Installer les dépendances

```bash
cd C:\Users\Avisia\Desktop\afridigi-web

# Supprimer Supabase si installé
npm uninstall @supabase/supabase-js @supabase/auth-helpers-nextjs

# Installer Firebase (déjà dans package.json)
npm install
```

## 🧹 Étape 5: Nettoyer les fichiers anciens

**Vous pouvez supprimer:**
- `lib/supabase.js` - Remplacé par `lib/firebase.js`

**Ne supprimez PAS:**
- `lib/stores.js` - Zustand (local, pas Supabase/Firebase)

## ✅ Étape 6: Tester l'intégration

### Tester la Connexion:
```bash
npm run dev
```

1. Allez sur http://localhost:3000/auth/signup
2. Créez un compte test (email: test@example.com)
3. Vous devriez être redirigé au dashboard

### Vérifier dans Firebase Console:
- **Authentication** → Tab "Users" → Vous devriez voir votre utilisateur
- **Firestore** → Collection "users" → Document créé automatiquement

## 🎯 Fonctionnalités Disponibles

### ✅ Déjà Intégrées:
- ✅ Signup (créer compte + document Firestore)
- ✅ Login (connexion avec email/password)
- ✅ Signout (visible plus tard au dashboard)
- ✅ Session tracking (onAuthChange)

### 🔄 À Implémenter (Optionnel):
- Quiz → Sauvegarder scores dans Firestore
- Blog → Récupérer articles depuis Firestore (actuellement mock)
- Dashboard → Récupérer données utilisateur depuis Firestore

## 📋 Ajouter les Articles au Blog

### 1️⃣ Créer les articles dans Firestore:

Via Firebase Console:
1. **Firestore Database** → **+ Create** collection → `articles`
2. Ajouter documents:

```
Document ID: "ia-chat-gpt-2024"
Champs:
- slug: "ia-chat-gpt-2024"
- title: "ChatGPT et l'IA en 2024"
- excerpt: "Découvrez comment..."
- category: "IA"
- date: "15 mars 2024"
- image: "🤖"
- content: "<h2>..." (HTML)
- publishedAt: (timestamp)
```

### 2️⃣ Ou via code (dans une page admin):

```javascript
import { blogDB } from '@/lib/firebase';

const article = {
  slug: 'ia-chat-gpt-2024',
  title: 'ChatGPT et l\'IA en 2024',
  excerpt: 'Découvrez...',
  category: 'IA',
  content: '<h2>...</h2>',
  publishedAt: new Date(),
};

// Ajouter à Firestore (après implémentation da la fonction)
```

## 🛡️ Règles de Sécurité Firestore

**Pour développement (à changer après):**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Essentiellement, permettre tout en développement
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
    // Articles en lecture publique
    match /articles/{document=**} {
      allow read: if true;
    }
  }
}
```

Allez à **Firestore Database** → Onglet **Rules** → Copiez le code ci-dessus.

## 🐛 Troubleshooting

### Error: "Firebase is not defined"
```bash
# Solution:
npm install firebase
npm run dev
```

### Error: "docs.map is not a function"
→ Vérifiez que la collection existe dans Firestore

### Auth ne fonctionne pas
1. Vérifiez `.env.local`
2. Vérifiez que Authentication est activée dans Firebase
3. Check console (F12) pour les erreurs

## ✨ Prochaines Étapes Avancées

### Sauvegarder les scores du Quiz:
```javascript
import { userDB } from '@/lib/firebase';

const user = auth.currentUser;
await userDB.saveUserProgress(user.uid, 1, 85, answers);
```

### Récupérer la progression:
```javascript
const progress = await userDB.getUserProgress(user.uid);
```

### Sauvegarder un certificat:
```javascript
await userDB.saveCertificate(user.uid, {
  module: 'IT (Ordinateur)',
  level: 'AVANCÉ',
  score: 92,
});
```

## 🚀 Déployer

### Sur Vercel:
1. Connectez votre repo GitHub
2. Ajoutez les variables dans **Settings** → **Environment Variables**
3. Vercel construit et déploie automatiquement

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

## 📞 Ressources Utiles

- [Firebase Documentation](https://firebase.google.com/docs)
- [Authentication Guide](https://firebase.google.com/docs/auth)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Next.js + Firebase Setup](https://github.com/vercel/next.js/tree/canary/examples/with-firebase)

---

**Vous êtes prêt! 🎉**

Sauvegardez `.env.local` et démarrez avec `npm run dev`!
