# ⚡ QUICK ACTION - Ce qu'il faut faire maintenant

## 🎯 VOUS ÊTES ICI

Vous avez lu START_HERE.md ✅

Maintenant: **Exécutez ces commandes**

---

## 🔴 ACTION 1: npm install (2 min)

```powershell
# Dans PowerShell ou Terminal
npm install
```

**Attendre:** Jusqu'à complétion
**Chercher:** `firebase@10.7.0` dans la sortie

✅ **Done?** → Continuez à ACTION 2

---

## 🟠 ACTION 2: Copier .env.local (1 min)

```powershell
cp .env.example .env.local
```

**Attendre:** Command complète

✅ **Done?** → Continuez à ACTION 3

---

## 🟡 ACTION 3: Ajouter credentials Firebase (5 min)

### Où trouver?

1. Aller: https://console.firebase.google.com
2. Sélectionner: Votre projet
3. Cliquer: ⚙️ (Settings) > Project Settings
4. Onglet: General
5. Section: Your apps > Web
6. Copier: `firebaseConfig` object

### Qu'ajouter?

```powershell
code .env.local
```

**Remplacer par vos valeurs:**
```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_VALUE
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_VALUE
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_VALUE
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_VALUE
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_VALUE
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_VALUE
```

**Sauvegarder:** Ctrl+S

✅ **Done?** → Continuez à ACTION 4

---

## 🟢 ACTION 4: Activer Email/Password Auth (3 min)

Dans Firebase Console:

1. Menu: Authentication
2. Tab: Sign-in method
3. Chercher: Email/Password
4. Cliquer: Email/Password provider
5. Toggle: ENABLE (must be BLUE)
6. Save

✅ **Done?** → Continuez à ACTION 5

---

## 🔵 ACTION 5: Redémarrer serveur (2 min)

```powershell
npm run dev
```

**Voir:** 
```
▲ Next.js 14.0.0
- Local: http://localhost:3000
```

**Ouvrir:** http://localhost:3000

✅ **Done?** → Continuez à ACTION 6

---

## 🟣 ACTION 6: Tester Signup (2 min)

```
URL: http://localhost:3000/auth/signup

Email: test@example.com
Password: TestPass123
Confirm: TestPass123

Click: Sign Up
```

**Attendre:** 3 secondes

**Voir:** ✅ Pas d'erreur OU redirection

✅ **Done?** → Continuez à ACTION 7

---

## ⚫ ACTION 7: Vérifier Firebase (1 min)

Firebase Console:
1. Authentication > Users
2. Chercher: test@example.com
3. ✅ Doit être visible

✅ **Done?** → Continuez à ACTION 8

---

## ⚪ ACTION 8: Tester Login (1 min)

```
URL: http://localhost:3000/auth/login

Email: test@example.com
Password: TestPass123

Click: Sign In
```

**Voir:** ✅ Login réussi sans erreur

✅ **Done?** → Continuez à ACTION 9

---

## 🎯 ACTION 9: Vérifier DevTools (1 min)

```
Appuyer: F12 > Console

Taper:
import { utils } from '/lib/firebase.js'
const user = utils.getCurrentUser();
console.log(user);

Voir: {uid: "...", email: "test@example.com"}
```

✅ **Done?** → 🎉 ALL SYSTEMS GO!

---

## ⏱️ TOTAL TIME

```
Action 1: 2 min
Action 2: 1 min
Action 3: 5 min
Action 4: 3 min
Action 5: 2 min
Action 6: 2 min
Action 7: 1 min
Action 8: 1 min
Action 9: 1 min
─────────────
TOTAL: 18 min ✅
```

---

## ✅ IF ALL 9 ACTIONS ARE DONE

**Félicitations! 🎉**

You're successfully:
- ✅ Running npm locally
- ✅ Firebase connected
- ✅ Auth working
- ✅ Ready for production

---

## ❌ IF SOMETHING FAILED

**Which action failed?**

### Action 1-2: npm/env
→ Consulter: [TROUBLESHOOTING.md](TROUBLESHOOTING.md) section "npm errors"

### Action 3: Credentials
→ Consulter: [STEP_BY_STEP_GUIDE.md](STEP_BY_STEP_GUIDE.md) Phase 2
→ Ou: [FIREBASE_CONFIG.md](FIREBASE_CONFIG.md)

### Action 4: Auth enable
→ Consulter: [STEP_BY_STEP_GUIDE.md](STEP_BY_STEP_GUIDE.md) Phase 3
→ Ou: [TODO_IMMEDIATE.md](TODO_IMMEDIATE.md) Task 4

### Action 5: npm run dev
→ Consulter: [TROUBLESHOOTING.md](TROUBLESHOOTING.md) section "Server errors"

### Action 6: Signup error
→ Consulter: [TROUBLESHOOTING.md](TROUBLESHOOTING.md) section "Auth errors"
→ Lire le message d'erreur affiché

### Action 7: User not visible
→ Consulter: [TROUBLESHOOTING.md](TROUBLESHOOTING.md) "User record not found"

### Action 8: Login fails
→ Consulter: [TROUBLESHOOTING.md](TROUBLESHOOTING.md) section "Auth errors"

### Action 9: DevTools error
→ Consulter: [TROUBLESHOOTING.md](TROUBLESHOOTING.md) "Firebase is not defined"

---

## 🚀 AFTER ALL 9 ACTIONS

Go to: **[NEXT_STEPS.md](NEXT_STEPS.md)**

This will take you to production in 60 minutes!

---

## 💡 TIPS

- 🔒 Keep `.env.local` secret (don't share, don't commit)
- ⏩ Don't skip any action - they're sequential
- 🔍 If error, read it carefully (it usually tells you the fix)
- 📞 All errors have solutions in [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 📋 ACTION CHECKLIST

Copy-paste this and check as you go:

```
☐ Action 1: npm install
☐ Action 2: cp .env.local
☐ Action 3: Add Firebase credentials
☐ Action 4: Enable Email/Password auth
☐ Action 5: npm run dev
☐ Action 6: Test signup
☐ Action 7: Check Firebase console
☐ Action 8: Test login
☐ Action 9: Test DevTools

🎉 ALL DONE! Next: NEXT_STEPS.md
```

---

**Start with Action 1 NOW! ⏱️ You're 18 minutes from success!**

---

*Besoin d'aide? Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) ou [START_HERE.md](START_HERE.md)*
