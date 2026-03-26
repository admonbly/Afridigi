# 🧪 GUIDE DE TEST - AFRIDIGI WEB

Une fois que vous avez exécuté `npm run dev`, testez chaque page:

## 🏠 Page d'Accueil
**URL:** http://localhost:3000

✅ Vérifications:
- [ ] Logo AFRIDIGI visible
- [ ] Navigation fonctionnelle
- [ ] Bouton "Commencer l'évaluation" cliquable
- [ ] 6 sections visibles (Hero, À Propos, Modules, Témoignages, CTA, Footer)
- [ ] Menu mobile fonctionne sur petit écran

## 📚 Section Certification

### 1. Présentation
**URL:** http://localhost:3000/certification/presentation

✅ Vérifications:
- [ ] 7 modules listés
- [ ] Système de scoring expliqué
- [ ] Boutons CTA fonctionnels

### 2. S'entraîner
**URL:** http://localhost:3000/certification/s-entrainer

✅ Vérifications:
- [ ] Sélection de module affichée
- [ ] 5 questions du module IT visibles
- [ ] Boutons réponses cliquables
- [ ] Feedback immédiat (✅ ou ❌)
- [ ] Progression en haut
- [ ] Score actualisé à chaque réponse
- [ ] Résumé final avec pourcentage

### 3. Mode Démo
**URL:** http://localhost:3000/certification/demo

✅ Vérifications:
- [ ] Même comportement que S'entraîner
- [ ] Questions randomisées?

### 4. Examen
**URL:** http://localhost:3000/certification/examen

✅ Vérifications:
- [ ] Quiz entier (7 modules × 5 questions)
- [ ] Scoring officiel
- [ ] Certificat offert si score ≥ 60%

### 5. Référentiel
**URL:** http://localhost:3000/certification/referentiel

✅ Vérifications:
- [ ] Les 7 modules listés
- [ ] Compétences sous chaque module
- [ ] Infos sur le scoring

## 📰 Blog

### Liste articles
**URL:** http://localhost:3000/blog

✅ Vérifications:
- [ ] 6 articles affichés en grille
- [ ] Catégorie visible
- [ ] Enveloppes d'articles cliquables

### Article détaillé
**URL:** http://localhost:3000/blog/ia-chat-gpt-2024

✅ Vérifications:
- [ ] Titre + date affichés
- [ ] Contenu HTML formaté
- [ ] Boutons CTA présents
- [ ] Lien "tous les articles" fonctionnel

**Testez d'autres articles:**
- `/blog/securite-mots-passe`
- `/blog/excel-pour-debutants`
- `/blog/linkedin-professionnel`

## 👤 Utilisateur

### Connexion
**URL:** http://localhost:3000/auth/login

✅ Vérifications:
- [ ] Formulaire email/password
- [ ] Boutons OAuth (non fonctionnels maintenant)
- [ ] Lien vers signup

### Inscription
**URL:** http://localhost:3000/auth/signup

✅ Vérifications:
- [ ] Formulaire email/password/confirm
- [ ] Validation password (au moins 8 caractères)
- [ ] Messages d'erreur si ne correspond pas
- [ ] Lien vers login

### Tableau de Bord
**URL:** http://localhost:3000/dashboard

✅ Vérifications:
- [ ] Profil utilisateur (mock data)
- [ ] Statistiques (4 cartes)
- [ ] Progression générale (bar)
- [ ] Tableau modules + scores
- [ ] Certificats (mock data)
- [ ] Bouton réessayer module

## 🌐 Pages Marketing

### À Propos
**URL:** http://localhost:3000/about

✅ Vérifications:
- [ ] Mission visible
- [ ] Valeurs (3 cards)
- [ ] Chiffres clés
- [ ] Bouton CTA

### Contact
**URL:** http://localhost:3000/contact

✅ Vérifications:
- [ ] Formulaire contact
- [ ] FAQ section
- [ ] Infos contact (emails, hours)
- [ ] Formulaire soumettable

### Partenariats
**URL:** http://localhost:3000/partenariats

✅ Vérifications:
- [ ] Partenaires actuels (3)
- [ ] Avantages (4 types)
- [ ] Types de partenariat (3)
- [ ] Bouton contact

## 🎯 Tests de Responsivité

### Desktop (1920x1080)
```
✅ Layouts 2-3 colonnes
✅ Navigation complète
✅ Images visibles
```

### Tablet (768x1024)
```
✅ Layouts 2 colonnes
✅ Navigation adaptée
✅ Touch-friendly
```

### Mobile (375x667)
```
✅ Layout 1 colonne
✅ Menu hamburger
✅ Boutons grandes
✅ Texte lisible
```

**Test: Ouvrez DevTools (F12) et redimensionnez**

## ⚡ Tests de Performance

### Temps de chargement
- [ ] Homepage: < 2 secondes
- [ ] Quiz page: < 1 seconde
- [ ] Article: < 1.5 seconde

### Images/Assets
- [ ] Pas d'images manquantes (emojis OK)
- [ ] Pas d'erreurs 404
- [ ] CSS chargé complètement

**Ouvrez Network tab (DevTools) pour vérifier les temps**

## 🎨 Tests Visuels

### Couleurs
- [ ] Primary (#0D1B47) - Boutons principaux
- [ ] Accent (#FF6B35) - CTA, hover
- [ ] Secondary (#06B6D4) - Accents
- [ ] Neutrale (gris) - Texto

### Typographie
- [ ] Headings (Poppins) - Gras
- [ ] Body (Inter) - Normal

### Animations
- [ ] Hover sur cards
- [ ] Transitions boutons
- [ ] Fade-in au chargement

## 🔗 Navigation

### Menu Header
- [ ] Logo cliquable → Accueil
- [ ] Certification → Présentation
- [ ] Actualités → Blog
- [ ] Partenariats → Partenariats
- [ ] Contact → Contact
- [ ] Connexion → Login

### Menu Mobile (< 768px)
- [ ] Hamburger visible
- [ ] Menu déroulant au clic
- [ ] Same liens que desktop

## ✅ Checklist Finale

```
Avant de déployer, vérifiez:

Frontend:
- [ ] Pas de console errors (F12 > Console)
- [ ] Pas de console warnings critiques
- [ ] Pas de images rouges (404)
- [ ] Responsive sur tous écrans

Fonctionnalités:
- [ ] Quiz fonctionne (10 questions testées)
- [ ] Blog affiche articles
- [ ] Formulaires acceptent entrée
- [ ] Navigation logique
- [ ] Tous liens internes OK

Performance:
- [ ] Temps chargement < 3s
- [ ] Network tab - pas d'erreurs
- [ ] Lighthouse score > 80

Prêt pour Production! 🎉
```

---

**Besoin d'aide?**
1. Consultez DEMARRAGE.md
2. Vérifiez la console (F12)
3. Vérifiez les fichiers source (.jsx)

**Bon testing!** 🧪
