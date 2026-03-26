#!/bin/bash

# AFRIDIGI - Script de Démarrage Rapide (macOS/Linux)
# Exécutez: bash start.sh

echo "🚀 AFRIDIGI - Démarrage du projet"
echo "================================="
echo ""

# Vérifier Node.js
echo "✓ Vérification de Node.js..."
if ! command -v node &> /dev/null; then
  echo "  ❌ Node.js non trouvé. Installez-le depuis nodejs.org"
  exit 1
fi
NODE_VERSION=$(node --version)
echo "  Node.js $NODE_VERSION détecté"

# Vérifier package.json
echo "✓ Vérification du projet..."
if [ ! -f "package.json" ]; then
  echo "  ❌ Erreur: package.json non trouvé!"
  exit 1
fi
echo "  ✓ package.json trouvé"

# Installer les dépendances
if [ ! -d "node_modules" ]; then
  echo "✓ Installation des dépendances..."
  npm install
  if [ $? -eq 0 ]; then
    echo "  ✓ Dépendances installées"
  else
    echo "  ❌ Erreur lors de l'installation"
    exit 1
  fi
else
  echo "✓ Dépendances déjà installées"
fi

# Vérifier .env.local
if [ ! -f ".env.local" ]; then
  echo "⚠️  IMPORTANT: .env.local non trouvé"
  echo "  1. Copiez .env.example → .env.local"
  echo "  2. Remplissez les variables Supabase"
  echo ""
  read -p "Créer .env.local maintenant? (y/n) " response
  if [ "$response" = "y" ]; then
    cp .env.example .env.local
    echo "✓ .env.local créé (veuillez le remplir)"
  fi
fi

echo ""
echo "✓ Tout est prêt!"
echo ""
echo "Démarrage du serveur de développement..."
echo "La page s'ouvrira sur http://localhost:3000"
echo ""

# Démarrer le serveur
npm run dev
