# 🔧 TROUBLESHOOTING - AFRIDIGI Firebase

## ❌ FIREBASE ERRORS

### "Firebase is not defined"

**Symptôme:** `ReferenceError: Firebase is not defined`

**Causes possibles:**
1. Firebase not installed
2. Wrong import path

**Solutions:**

```bash
# 1. Vérifier l'installation
npm list firebase

# 2. Si absent, installer
npm install firebase

# 3. Vérifier l'import
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
```

---

### "Initialize Firebase with firebaseConfig"

**Symptôme:** `Please call firebase.initializeApp(firebaseConfig) before using firebase.analytics()`

**Causes possibles:**
1. `.env.local` manquant ou vide
2. Variables environ mal nommées
3. Firebase.js not imported

**Solutions:**

```bash
# 1. Vérifier .env.local existe
ls -la .env.local

# 2. Vérifier les variables
cat .env.local

# 3. Doivent ressembler à cela:
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=myapp.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myapp-12345
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=myapp.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123:web:abc123

# 4. Redémarrer le serveur
npm run dev
```

---

## ❌ AUTHENTICATION ERRORS

### "Auth not initialized"

**Symptôme:** Cannot read property 'currentUser' of undefined

**Cause:** Firebase not properly initialized

**Solution:**

```javascript
// ✅ CORRECT
import { auth, authFunctions } from '@/lib/firebase';

// ❌ INCORRECT
import { getAuth } from 'firebase/auth';
const auth = getAuth(); // Missing config
```

---

### "Error: too many requests"

**Symptôme:** 429 Too Many Requests / Account login is disabled

**Causes possibles:**
1. Trop d'essais échoués (brute force protection)
2. Email/Password auth pas activée dans Firebase Console

**Solutions:**

```
Firebase Console:
1. Allez à Authentication > Sign-in method
2. Assurez-vous Email/Password est ACTIVÉ (Enable)
3. Attendez 15 minutes avant de réessayer
```

---

### "User record not found"

**Symptôme:** Pas d'utilisateur trouvé au login

**Cause:** Email inexistant ou mauvais mot de passe

**Solutions:**

```
1. Vérifier Firebase Console > Users > Voir si email existe
2. Réessayer signup d'abord
3. Vérifier pas d'espace en début/fin du email
```

---

### Email "already in use"

**Symptôme:** `Error: The email address is already in use by another account.`

**Cause:** Email déjà enregistré

**Solutions:**

```
1. Se connecter avec cet email
2. Ou réinitialiser le mot de passe
3. Ou utiliser un email différent
```

---

## ❌ FIRESTORE ERRORS

### "Collection not found"

**Symptôme:** `[firestore/not-found] No collection named 'users' found.`

**Cause:** Collection n'existe pas dans Firestore

**Solutions:**

```
Firebase Console:
1. Cloud Firestore > Start a collection
2. Créer collection "users"
3. Créer un document vide (clique "Auto ID")
4. Vous pouvez delete après, "users" collection existe now

OU dans le code (une seule fois):
db.collection('users').doc('test').set({created: true})
  .then(() => db.collection('users').doc('test').delete())
```

---

### "Permission denied"

**Symptôme:** `FirebaseError: Missing or insufficient permissions.`

**Cause:** Firestore security rules pas configurées

**Solutions:**

```
Firebase Console > Firestore > Rules > Remplacer par:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Utilisateurs peuvent lire/écrire leurs propres données
    match /users/{uid} {
      allow read, write: if request.auth.uid == uid;
    }
    
    // Articles publics - lire seulement
    match /articles/{document=**} {
      allow read: if true;
    }
  }
}

Puis Publish
```

---

### "Documents not saving"

**Symptôme:** saveUserProgress n'a pas d'erreur mais data pas en Firestore

**Cause:** Généralement les rules

**Solutions:**

```javascript
// 1. Vérifier l'authentification
const user = getCurrentUser();
console.log('User:', user); // Should not be null

// 2. Vérifier la structure
await userDB.saveUserProgress(user.uid, '1', 85, [0, 1, 1]);

// 3. Chercher dans Firebase Console:
// Cloud Firestore > users > {uid} > Should see the data
```

---

## ❌ DEPLOYMENT ERRORS

### Vercel: "Secrets not defined"

**Symptôme:** Environment variables not working on Vercel

**Causes possibles:**
1. Variables pas ajoutées à Vercel
2. Mauvais nom de variable
3. Valeurs mal copiées

**Solutions:**

```
Vercel Dashboard:
1. Projet > Settings > Environment Variables
2. Ajouter chaque variable:
   - NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyD...
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = ...
   - etc.

3. Redéployer:
   - Allez à Deployments
   - Redeploy latest
```

---

### Vercel: "Firebase not available in production"

**Symptôme:** Works locally but not on Vercel

**Cause:** Import path incorrect or Firebase not installed

**Solutions:**

```bash
# 1. Vérifier package.json a firebase
"firebase": "^10.7.0"

# 2. Redeploy après changement:
git add package.json
git commit -m "Fix firebase"
git push
```

---

## ❌ NEXT.JS SPECIFIC

### "Cannot read property 'uid' of null"

**Symptôme:** User not found, but code expects user

**Cause:** User not authenticated

**Solutions:**

```javascript
// ✅ CORRECT - Check before using
const user = getCurrentUser();
if (!user) {
  return <p>Not logged in</p>;
}

const uid = user.uid;

// ❌ INCORRECT
const uid = getCurrentUser().uid; // Can be null
```

---

### "'use client' directive missing"

**Symptôme:** 404 on auth pages or auth functions not working

**Cause:** Component uses client-side Firebase but no 'use client'

**Solutions:**

```javascript
// MUST add at top of auth pages
'use client';

import { useState, useEffect } from 'react';
import { authFunctions } from '@/lib/firebase';
```

---

### Build error: "module not found"

**Symptôme:** `Module not found: '@/lib/firebase'`

**Cause:** File doesn't exist or wrong path

**Solutions:**

```bash
# 1. Vérifier le fichier existe
ls -la lib/firebase.js

# 2. Vérifier le chemin est correct
# @ alias = root/src/
# Donc @/lib = root/lib

# 3. Vérifier ne pas dans src/
# ✅ lib/firebase.js
# ❌ src/lib/firebase.js
```

---

## ✅ COMMON FIXES CHECKLIST

- [ ] `npm install firebase` exécuté
- [ ] `.env.local` créé avec 6 variables
- [ ] Variables Firebase Console correctes
- [ ] `npm run dev` redémarré après `.env.local`
- [ ] 'use client' au début des composants auth
- [ ] Firestore collections créées (users, articles)
- [ ] Security rules déployées
- [ ] Email/Password auth activé dans Firebase > Auth > Sign-in method
- [ ] Pas d'espace/accents dans `.env.local`

---

## 🆘 DEBUGGING TIPS

### 1. Ajouter des logs

```javascript
import { authFunctions, utils } from '@/lib/firebase';

console.log('Firebase config loaded');

const result = await authFunctions.signIn(email, password);
console.log('Sign in result:', result);

const user = utils.getCurrentUser();
console.log('Current user:', user);
```

### 2. Vérifier Firebase Console

```
1. Cloud Firestore > Browse > Voir les collections et docs
2. Authentication > Voir les utilisateurs enregistrés
3. Logs > Voir les erreurs
```

### 3. Vérifier réseau (DevTools)

```
1. F12 > Network tab
2. Chercher requêtes à firebaseapp.com
3. Vérifier status 200 (pas 403 permission denied)
```

### 4. Sauvegarder localement d'abord

```javascript
// Tester localStorage avant Firebase
const data = { score: 85 };
localStorage.setItem('test', JSON.stringify(data));
console.log(JSON.parse(localStorage.getItem('test')));

// Si localStorage marche, Firebase devrait aussi marcher
// (avec auth active)
```

---

## 📞 NEED MORE HELP?

1. **Erreur exacte?** Google: `firebase js "error message"`
2. **Firebase Console?** Vérifier [console.firebase.google.com](https://console.firebase.google.com)
3. **Docs?** [firebase.google.com/docs](https://firebase.google.com/docs)
4. **Voir l'exemple?** `app/auth/login/page.jsx` et `app/auth/signup/page.jsx`

---

**Problème non listé?** Consultez FIREBASE_CONFIG.md et FIREBASE_MIGRATION.md 📖
