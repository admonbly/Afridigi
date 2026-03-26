# 🎯 IMMEDIATE ACTION REQUIRED - À faire MAINTENANT

## ⚡ TÂCHES ESSENTIELLES (15 min)

Voici exactement ce qu'il faut faire dans l'ordre:

---

## ✅ TÂCHE 1: npm install (2 min)

```bash
# Terminal dans C:\Users\Avisia\Desktop\afridigi-web
npm install
```

**Attendre que ce finisse sans erreur.**

**Vérifier:**
```bash
npm list firebase
# Doit afficher: firebase@10.7.0
```

Status: ⏳ À faire


---

## ✅ TÂCHE 2: Copier .env.template (1 min)

```bash
cp .env.example .env.local
```

**Vérifier le fichier existe:**
```bash
ls -la .env.local
```

Status: ⏳ À faire

---

## ✅ TÂCHE 3: Récupérer credentials Firebase (5 min)

Vous avez besoin de 6 valeurs de votre Firebase Console:

```
1. NEXT_PUBLIC_FIREBASE_API_KEY
2. NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
3. NEXT_PUBLIC_FIREBASE_PROJECT_ID
4. NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
5. NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
6. NEXT_PUBLIC_FIREBASE_APP_ID
```

### Comment les trouver?

**Step 1: Aller à Firebase Console**
```
https://console.firebase.google.com
```

**Step 2: Sélectionner votre Projet**

**Step 3: Cliquer 🔧 (Settings) en haut à gauche**

**Step 4: Onglet "Project Settings"**

**Step 5: Section "Your apps"**

**Step 6: Voir "Web" - Copier le code**

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",           ← COPY THIS
  authDomain: "myapp.firebaseapp.com",
  projectId: "myapp-234567",
  storageBucket: "myapp.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

### Step 4: Ajouter dans .env.local

Ouvrir `.env.local`:
```bash
code .env.local
```

Remplacer les valeurs:
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=myapp.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myapp-234567
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=myapp.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123def456
```

**IMPORTANT: PAS d'espaces autour du =**

**IMPORTANT: NE PAS committer ce fichier à git (.gitignore le protège)**

Status: ⏳ À faire

---

## ✅ TÂCHE 4: Activer Email/Password Auth dans Firebase (3 min)

Retour dans Firebase Console:

**Step 1**: Left menu > Authentication
**Step 2**: Onglet "Sign-in method"
**Step 3**: Chercher "Email/Password"
**Step 4**: Cliquer sur "Email/Password"
**Step 5**: Vérifier que c'est ENABLED (Bascule bleu)
**Step 6**: Save

✅ Email/Password auth est maintenant activé pour votre projet

Status: ⏳ À faire

---

## ✅ TÂCHE 5: Redémarrer le serveur dev (1 min)

```bash
# Si déjà lancé, fermer avec Ctrl+C
# Puis relancer:
npm run dev
```

**Visiter:**
```
http://localhost:3000
```

**Doit afficher:** Page d'accueil sans erreur

Status: ⏳ À faire

---

## ✅ TÂCHE 6: Tester Signup (2 min)

**Aller à:** http://localhost:3000/auth/signup

**Créer un compte de test:**
- Email: `test@example.com`
- Password: `TestPass123`
- Confirm: `TestPass123`
- Cliquer: "Sign Up"

**Attendre 2-3 secondes...**

**Doit voir:**
- ✅ Redirection vers `/dashboard` OU
- ✅ Page d'accueil sans erreur visible

**ERREUR?**
- Lire le message d'erreur affichée
- Consulter [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

Status: ⏳ À faire

---

## ✅ TÂCHE 7: Vérifier dans Firebase Console (1 min)

**Aller à:** Firebase Console > Authentication > Users

**Chercher:** `test@example.com`

**Doit être listé avec:**
- Email: test@example.com
- Création récente (maintenant)
- Status: Verified

✅ Félicitations! Firebase auth fonctionne!

Status: ⏳ À faire

---

## ✅ TÂCHE 8: Tester Login (1 min)

**Aller à:** http://localhost:3000/auth/login

**Se connecter avec:**
- Email: `test@example.com`
- Password: `TestPass123`
- Cliquer: "Sign In"

**Doit voir:**
- ✅ Redirection réussie
- ✅ Pas d'erreur

Status: ⏳ À faire

---

## ✅ TÂCHE 9: Vérifier DevTools Console (1 min)

**Appuyer:** F12

**Chercher:** console tab

**Taper:**

```javascript
import { utils } from '/lib/firebase.js'
const user = utils.getCurrentUser();
console.log(user);
```

**Doit afficher:**
```
{uid: "abc123...", email: "test@example.com"}
```

✅ Firebase SDK fonctionne!

Status: ⏳ À faire

---

## 📋 CHECKLIST SUMMARY

- [ ] Task 1: npm install (Firebase package)
- [ ] Task 2: cp .env.example .env.local
- [ ] Task 3: Ajouter 6 credentials Firebase
- [ ] Task 4: Activer Email/Password auth
- [ ] Task 5: npm run dev (redémarrer)
- [ ] Task 6: Tester signup (créer compte)
- [ ] Task 7: Vérifier Firebase Console Users
- [ ] Task 8: Tester login
- [ ] Task 9: Vérifier DevTools console

---

## 🎉 SI TOUS ✅

**Bravo! Vous êtes prêt pour:**

1. 📖 Lire [NEXT_STEPS.md](NEXT_STEPS.md) pour production
2. 🎨 Ajouter votre contenu (articles, questions)
3. 🚀 Déployer sur Vercel
4. 🌍 Partager avec des utilisateurs réels!

---

## ❌ SI ERREUR QUELQUE PART

**Consultez:**

1. [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Solutions aux erreurs
2. [FIREBASE_CONFIG.md](FIREBASE_CONFIG.md) - Configuration détaillée
3. [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) - Vérification système

---

## ⏱️ TIMELINE

```
Task 1 (npm install):           2 min  → Total: 2 min
Task 2 (cp .env):               1 min  → Total: 3 min
Task 3 (Add credentials):       5 min  → Total: 8 min
Task 4 (Enable auth):           3 min  → Total: 11 min
Task 5 (Restart server):        1 min  → Total: 12 min
Task 6 (Test signup):           2 min  → Total: 14 min
Task 7 (Firebase console):      1 min  → Total: 15 min
Task 8 (Test login):            1 min  → Total: 16 min
Task 9 (DevTools test):         1 min  → Total: 17 min

TOTAL: 17 minutes ✅
```

---

## 🎯 NEXT

**Après ces 9 tâches**, allez à:

**[NEXT_STEPS.md](NEXT_STEPS.md)** pour la production setup (60 min total → En ligne!)

---

## 💡 TIPS

- ✅ Gardez `.env.local` secret (ne pas share, ne pas commit)
- ✅ Les credentials Firebase sont PUBLIQUES (c'est normal!)
- ✅ N'ayez pas peur des "test@example.com" - c'est just pour tester
- ✅ Si ça marche pas, **relire l'erreur** (souvent c'est clair!)

---

**Commencez par Task 1 maintenant! ⏱️**

Vous êtes en ligne en 17 minutes! 🚀

---

*Si vous êtes perdu: START_HERE.md*
*Si vous avez une erreur: TROUBLESHOOTING.md*
*Si vous avez fait todos: NEXT_STEPS.md*
