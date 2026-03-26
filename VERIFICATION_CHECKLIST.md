# ✅ CHECKLIST DE VÉRIFICATION FINALE

## Phase 1️⃣: Installation & Configuration (5 min)

### Step 1: Vérifier Node.js
```bash
node --version
# ✅ Doit afficher v14+ (exemple: v18.12.0)

npm --version
# ✅ Doit afficher v6+ (exemple: v9.2.0)
```

### Step 2: Installer dépendances
```bash
cd C:\Users\Avisia\Desktop\afridigi-web
npm install

# ✅ Doit terminer sans erreur
# ✅ firebase@10.7.0 doit être installé
```

**Vérifier:**
```bash
npm list firebase
# ✅ Doit montrer firebase@10.7.0
```

### Step 3: Créer .env.local
```bash
# Depuis root du projet
copy .env.example .env.local

# ✅ .env.local doit exister maintenant
dir .env.local
```

### Step 4: Ajouter credentials Firebase

```bash
# Ouvrir .env.local dans VS Code
code .env.local

# Ou avec Notepad
notepad .env.local
```

**Remplacer ceci:**
```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY_HERE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN_HERE
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID_HERE
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET_HERE
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID_HERE
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID_HERE
```

**Par vos vraies valeurs de [Firebase Console](https://console.firebase.google.com):**

```
Aller à Firebase Console:
1. Sélectionner votre projet
2. Settings (⚙️) > Project Settings
3. Onglet "General"
4. Section "Your apps"
5. Voir "Web" - Copier les valeurs
```

✅ `.env.local` complétée avec 6 vraies valeurs

---

## Phase 2️⃣: Vérifier Firebase Console (3 min)

### Authentication
```
Firebase Console:
1. Left menu > Authentication
2. Onglet "Sign-in method"
3. Email/Password doit être ENABLED (vert)
```

✅ Email/Password auth: **ENABLED**

### Firestore (Optional)
```
Firebase Console:
1. Left menu > Cloud Firestore
2. Click "Create database"
3. Mode: Start in test mode
4. Location: Choisir région proche
5. Créer
```

✅ Firestore database: **Créé** (ou skip si pas prêt)

---

## Phase 3️⃣: Démarrer le serveur (2 min)

### Terminal 1: Lancer le dev server
```bash
npm run dev

# ✅ Doit afficher:
# ▲ Next.js 14.0.0
# - Local: http://localhost:3000
# - Environments: .env.local
```

**Si erreur "Port 3000 en usage":**
```bash
npm run dev -- -p 3001
# Utilisera port 3001 à la place
```

✅ Serveur lancé sur http://localhost:3000

---

## Phase 4️⃣: Tester Signup (3 min)

### Step 1: Accéder signup
```
1. Ouvrir http://localhost:3000/auth/signup
2. Voir le formulaire avec:
   - Email input
   - Password input
   - Confirm password input
   - Sign up button
```

✅ Page signup affichée correctement

### Step 2: Créer un compte
```
1. Email: testuser@example.com
2. Password: TestPassword123
3. Confirm: TestPassword123
4. Click "Sign Up"
```

**Attendre 2-3 secondes...**

### Step 3: Vérifier succès
```
✅ Redirection vers /dashboard OU page d'accueil
✅ AUCUN message d'erreur
```

**Si erreur:**
- Lire le message d'erreur (affiché en rouge)
- Consulter TROUBLESHOOTING.md
- Vérifier Firebase Console > Users

✅ Compte créé avec succès

### Step 4: Vérifier Firebase Console
```
Firebase Console:
1. Authentication > Users
2. Chercher testuser@example.com
3. Doit être listé avec création récente
```

✅ Utilisateur visible dans Firebase Console

---

## Phase 5️⃣: Tester Login (2 min)

### Step 1: Logout d'abord
```
1. Aller à http://localhost:3000/auth/login
2. Ou F12 > Console > 
   await authFunctions.signOut()
```

### Step 2: Se reconnecter
```
1. Email: testuser@example.com
2. Password: TestPassword123
3. Click "Sign In"
```

**Attendre 2-3 secondes...**

### Step 3: Vérifier succès
```
✅ Redirection vers /dashboard
✅ Aucune erreur
```

✅ Login fonctionne

---

## Phase 6️⃣: Tester Code Firebase (2 min)

### Ouvrir DevTools Console
```
F12 > Console
```

### Test 1: Récupérer utilisateur
```javascript
import { utils } from '/lib/firebase.js'
const user = utils.getCurrentUser();
console.log(user);

// ✅ Doit afficher:
// {uid: "abc123...", email: "testuser@example.com"}
```

### Test 2: Écouter changements
```javascript
import { utils } from '/lib/firebase.js'
const unsubscribe = utils.onAuthChange((user) => {
  console.log('Auth state changed:', user);
});
```

### Test 3: Se déconnecter
```javascript
import { authFunctions } from '/lib/firebase.js'
await authFunctions.signOut();

// ✅ Doit logger null dans console
```

✅ Firebase SDK fonctionne

---

## Phase 7️⃣: Quiz et Blog (Optional - 2 min)

### Test Quiz Page
```
1. http://localhost:3000/modules
2. Cliquer sur un module (ex: "IT")
3. Quiz doit s'afficher avec questions
4. Répondre quelques questions
5. Valider
```

✅ Quiz fonctionne

### Test Blog
```
1. http://localhost:3000/blog
2. Articles doivent s'afficher
3. Cliquer sur un article
4. Contenu complet doit apparaître
```

✅ Blog fonctionne

---

## Phase 8️⃣: Performance Check (1 min)

### Vérifier temps de chargement
```
F12 > Network
1. Recharger page (Ctrl+R)
2. Voir le temps de chargement total
3. Doit être < 3 secondes
```

✅ Performance acceptable

### Vérifier Console errors
```
F12 > Console
1. Chercher messages rouges
2. Aucun "Uncaught" errors
3. Les warnings Firebase sont OK
```

✅ Pas d'erreurs critiques

---

## Phase 9️⃣: Prêt pour Production (1 min)

### Si tout ✅ au-dessus:

```bash
# Build pour production
npm run build

# ✅ Doit terminer sans erreur
# ✅ Dossier .next/ créé

# Tester la build locally (optional)
npm run preview

# Visitez http://localhost:3000
# Vérifier que tout fonctionne
```

---

## 🚀 Phase X: Déployer sur Vercel (5 min)

### Prérequis
- ✅ GitHub repo créé
- ✅ Code pusé à GitHub

### Déployer
```
1. Allez à vercel.com
2. Connectez votre GitHub
3. Import le projet
4. Settings > Environment Variables
5. Ajouter 6 Firebase variables
6. Deploy
```

✅ Application en production!

---

## 📋 RÉSUMÉ CHECKLIST

### Installation
- [ ] Node.js v14+ installé
- [ ] npm install réussi
- [ ] firebase@10.7.0 installé
- [ ] .env.local créé

### Configuration Firebase
- [ ] 6 variables Firebase dans .env.local
- [ ] Email/Password auth ENABLED
- [ ] Firestore créé (optional)

### Serveur Dev
- [ ] npm run dev lancé
- [ ] Server sur http://localhost:3000
- [ ] Pas d'errours dans console

### Signup
- [ ] Page signup affichée
- [ ] Compte créé sans erreur
- [ ] Redirection vers dashboard
- [ ] Utilisateur dans Firebase Console

### Login
- [ ] Page login affichée
- [ ] Connexion fonctionne
- [ ] Redirection correcte

### Firebase SDK
- [ ] getCurrentUser() retourne user
- [ ] onAuthChange() fonctionne
- [ ] signOut() fonctionne

### Application
- [ ] Quiz pages chargent
- [ ] Blog pages chargent
- [ ] Performance < 3 secondes
- [ ] Pas d'erreurs dans console

### Production
- [ ] Build sans erreur: npm run build
- [ ] Preview fonctionne: npm run preview
- [ ] Variables Vercel configurées
- [ ] Déploiement Vercel réussi

---

## 🆘 SOS - Rien ne marche?

1. **Relire TROUBLESHOOTING.md** ← START HERE
2. **Vérifier .env.local** - Erreur #1
3. **Redémarrer npm run dev** - Erreur #2
4. **Vérifier Firebase Console** - Erreur #3
5. **npm install à nouveau** - Erreur #4

---

**Félicitations! Vous êtes prêt(e) pour la production! 🎉**

Besoin d'aide: FIREBASE_QUICK_REF.md ou TROUBLESHOOTING.md
