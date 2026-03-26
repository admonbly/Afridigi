# 📸 STEP-BY-STEP VISUAL GUIDE

## Phase 1: npm install

### Step 1.1: Ouvrir terminal

```
Appuyer: Ctrl + ` (backtick)

Ou: View > Terminal

Doit afficher: Terminal window en bas de VS Code
```

### Step 1.2: Naviguer vers le projet

```bash
cd C:\Users\Avisia\Desktop\afridigi-web
```

🎯 Vérifier: `afridigi-web` doit être dans le chemin

### Step 1.3: Lancer npm install

```bash
npm install
```

🎯 Affichage:
```
up to date, audited 47 packages in 2.3s
```

🎯 Chercher: `firebase@10.7.0` dans la liste

---

## Phase 2: Configuration .env.local

### Step 2.1: Copier le template

```bash
cp .env.example .env.local
```

🎯 Vérifier: Pas d'erreur

### Step 2.2: Ouvrir le fichier

```bash
code .env.local
```

🎯 Voir: VS Code ouvre `.env.local` avec 6 lignes

### Step 2.3: Aller à Firebase Console

Ouvrir: https://console.firebase.google.com

🎯 Voir: Dashboard Firebase

### Step 2.4: Sélectionner votre projet

Chercher votre projet dans la liste

🎯 Voir: Projet selected (bleu)

### Step 2.5: Aller à Settings

Chercher: ⚙️ (gear icon) en haut à gauche

Cliquer: "Project Settings"

🎯 Voir: Page de configuration

### Step 2.6: Voir les credentials

Onglet: "General"

Section: "Your apps"

Chercher: "Web" app

Cliquer: 🔖 Code icon pour voir le code

🎯 Voir:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "myapp.firebaseapp.com",
  projectId: "myapp-12345",
  storageBucket: "myapp.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

### Step 2.7: Remplir .env.local

Copier chaque valeur dans .env.local

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=myapp.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myapp-12345
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=myapp.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

🎯 Vérifier: Toutes les 6 lignes remplies (pas d'espaces autour du =)

### Step 2.8: Sauvegarder

```
Ctrl+S
```

🎯 Voir: Pas de point blanc sur le nom du fichier (sauvegardé)

---

## Phase 3: Activer Email/Password Auth

### Step 3.1: Dans Firebase Console, aller à Authentication

Chercher: "Authentication" dans left menu

🎯 Voir: Page d'authentification

### Step 3.2: Onglet "Sign-in method"

Cliquer: "Sign-in method"

🎯 Voir: Liste des méthodes d'auth

### Step 3.3: Chercher "Email/Password"

Scroller si nécessaire

🎯 Voir: "Email/Password" provider

### Step 3.4: Cliquer pour activer

Cliquer: "Email/Password"

🎯 Voir: Dialog s'ouvre

### Step 3.5: Activer

Toggle: "Email/Password" doit être BLEU (enabled)

Cliquer: "Save"

🎯 Voir: Message "Email/Password auth enabled"

---

## Phase 4: npm run dev

### Step 4.1: Terminal

Revenir au terminal (Ctrl+`)

### Step 4.2: Arrêter si en cours

```
Appuyer: Ctrl+C
```

### Step 4.3: Lancer le serveur

```bash
npm run dev
```

🎯 Voir:
```
▲ Next.js 14.0.0
- Local: http://localhost:3000
```

### Step 4.4: Ouvrir le navigateur

Clique: http://localhost:3000

OU manuellement: http://localhost:3000

🎯 Voir: Page d'accueil affichée

---

## Phase 5: Tester Signup

### Step 5.1: Aller à signup

URL: http://localhost:3000/auth/signup

🎯 Voir: Formulaire avec:
- Email input
- Password input
- Confirm password input
- "Sign Up" button

### Step 5.2: Remplir le formulaire

**Email:** test@example.com
**Password:** TestPass123
**Confirm:** TestPass123

🎯 Voir: Les champs remplis

### Step 5.3: Cliquer "Sign Up"

Cliquer: "Sign Up" button

🎯 Voir: Loading state (button grisé pendant 2-3 sec)

### Step 5.4: Vérifier redirection

Attendre 2-3 secondes

🎯 Voir: Page change OU pas d'erreur affichée

### Step 5.5: Si erreur

Lire le message d'erreur

🎯 Exemples:
- "Password must be 6+ characters" → Mot de passe trop court
- "Email already in use" → Email existe déjà
- "Firebase is not defined" → .env.local problème

Si erreur: Allez à [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## Phase 6: Vérifier dans Firebase Console

### Step 6.1: Revenir à Firebase Console

Autre onglet: https://console.firebase.google.com

### Step 6.2: Aller à Authentication > Users

Menu: "Authentication" > "Users"

🎯 Voir: Liste des utilisateurs

### Step 6.3: Chercher test@example.com

Scroller ou chercher: "test@example.com"

🎯 Voir: L'utilisateur dans la liste avec:
- Email: test@example.com
- Created: Timestamp récent (maintenant)

✅ SUCCESS! Firebase auth fonctionne!

---

## Phase 7: Tester Login

### Step 7.1: Aller à login

URL: http://localhost:3000/auth/login

🎯 Voir: Formulaire de login

### Step 7.2: Remplir

**Email:** test@example.com
**Password:** TestPass123

### Step 7.3: Cliquer "Sign In"

Cliquer: "Sign In"

🎯 Voir: Loading state

### Step 7.4: Vérifier succès

Attendre 2-3 secondes

🎯 Voir: Redirection ou pas d'erreur

✅ SUCCESS! Login fonctionne!

---

## Phase 8: DevTools Console Test

### Step 8.1: Ouvrir DevTools

Appuyer: F12

🎯 Voir: DevTools panel en bas

### Step 8.2: Aller à Console

Tab: "Console"

🎯 Voir: Console tab avec prompt >

### Step 8.3: Taper le code

```javascript
import { utils } from '/lib/firebase.js'
```

Appuyer: Enter

🎯 Voir: Import chargé (pas d'erreur)

### Step 8.4: Tester getCurrentUser

```javascript
const user = utils.getCurrentUser();
console.log(user);
```

Appuyer: Enter

🎯 Voir:
```
{uid: "abc123...", email: "test@example.com"}
```

✅ SUCCESS! Firebase SDK fonctionne!

---

## 📋 EXPECTED OUTPUTS

### Terminal après npm install
```
up to date, audited 47 packages
firebase@10.7.0 ← THIS LINE IMPORTANT
```

### Page d'accueil (http://localhost:3000)
```
[Logo/Header]
[Hero section avec texte]
[Features]
[CTA buttons]
```

### Firebase Console - Users
```
Email: test@example.com
Created: 2024-03-26 14:30:45 (timestamp récent)
Status: Verified
```

### DevTools Console
```
{uid: "abc123def456...", email: "test@example.com"}
```

---

## ⚠️ COMMON MISTAKES TO AVOID

### ❌ Mistake: Oublier npm install
```
Error: firebase is not defined
Solution: npm install firebase
```

### ❌ Mistake: Mauvais credentials dans .env.local
```
Error: firebaseConfig is not initialized
Solution: Vérifier les 6 valeurs dans .env.local
```

### ❌ Mistake: Oublier d'activer Email/Password auth
```
Error: Email/Password sign-in is disabled
Solution: Firebase Console > Auth > Enable Email/Password
```

### ❌ Mistake: Oublier de restart le serveur
```
Error: env variables not found
Solution: npm run dev (arrêter et relancer)
```

### ❌ Mistake: Email/Password trop court
```
Error: Password must be at least 6 characters
Solution: Utiliser mot de passe 6+ caractères
```

---

## ✅ CHECKLIST PAR PHASE

### Phase 1: npm install
- [ ] Terminal ouvert
- [ ] npm install lancé sans erreur
- [ ] firebase@10.7.0 visible

### Phase 2: .env.local
- [ ] Fichier .env.local créé
- [ ] 6 credentials ajoutées
- [ ] Aucun espaces autour du =
- [ ] Fichier sauvegardé

### Phase 3: Email/Password
- [ ] Firebase Console ouvert
- [ ] Authentication > Sign-in method
- [ ] Email/Password ENABLED (bleu)
- [ ] Changements saved

### Phase 4: npm run dev
- [ ] Serveur lancé sur port 3000
- [ ] Pas d'erreurs dans terminal
- [ ] Page d'accueil chargée

### Phase 5: Signup
- [ ] Page /auth/signup affichée
- [ ] Formulaire rempli
- [ ] "Sign Up" cliqué
- [ ] Aucune erreur OU page changée

### Phase 6: Firebase Console
- [ ] test@example.com visible dans Users
- [ ] Timestamp récent
- [ ] Status OK

### Phase 7: Login
- [ ] Page /auth/login affichée
- [ ] Login réussi sans erreur

### Phase 8: DevTools
- [ ] Firebase SDK accessible
- [ ] getCurrentUser() retourne user object

---

## 🎉 SUCCESS SCREEN

Si vous voyez tout ça, vous êtes prêt!

✅ Terminal: npm run dev avec no errors
✅ Browser: http://localhost:3000 fonctionne
✅ Firebase Console: test@example.com visible
✅ DevTools: Firebase SDK working

---

## 🚀 NEXT

Allez à: [NEXT_STEPS.md](NEXT_STEPS.md)

Pour la production setup (60 minutes → online!)

---

## 💡 IF STUCK

1. Lire l'erreur affichée (souvent c'est la solution!)
2. Consulter [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
3. Vérifier cette liste step-by-step
4. Redémarrer: npm run dev

---

*Cette guide est step-by-step. Suivez chaque étape dans l'ordre!*
