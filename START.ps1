#!/usr/bin/env node

# AFRIDIGI - Script de Démarrage Rapide
# Exécutez: .\START.ps1

Write-Host "🚀 AFRIDIGI - Démarrage du projet" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""

# Vérifier Node.js
Write-Host "✓ Vérification de Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version
if ($?) {
  Write-Host "  Node.js $nodeVersion détecté" -ForegroundColor Green
} else {
  Write-Host "  ❌ Node.js non trouvé. Installez-le depuis nodejs.org" -ForegroundColor Red
  exit 1
}

# Vérifier package.json
Write-Host "✓ Vérification du projet..." -ForegroundColor Yellow
if (!(Test-Path "package.json")) {
  Write-Host "  ❌ Erreur: package.json non trouvé!" -ForegroundColor Red
  exit 1
}
Write-Host "  ✓ package.json trouvé" -ForegroundColor Green

# Installer les dépendances
if (!(Test-Path "node_modules")) {
  Write-Host "✓ Installation des dépendances..." -ForegroundColor Yellow
  npm install
  if ($?) {
    Write-Host "  ✓ Dépendances installées" -ForegroundColor Green
  } else {
    Write-Host "  ❌ Erreur lors de l'installation" -ForegroundColor Red
    exit 1
  }
} else {
  Write-Host "✓ Dépendances déjà installées" -ForegroundColor Green
}

# Vérifier .env.local
if (!(Test-Path ".env.local")) {
  Write-Host "⚠️  IMPORTANT: .env.local non trouvé" -ForegroundColor Yellow
  Write-Host "  1. Copiez .env.example → .env.local"
  Write-Host "  2. Remplissez les variables Supabase" -ForegroundColor Yellow
  Write-Host ""
  Write-Host "Créer .env.local maintenant? (y/n)" -ForegroundColor Cyan
  $response = Read-Host
  if ($response -eq "y") {
    Copy-Item ".env.example" ".env.local"
    Write-Host "✓ .env.local créé (veuillez le remplir)" -ForegroundColor Green
  }
}

Write-Host ""
Write-Host "✓ Tout est prêt!" -ForegroundColor Green
Write-Host ""
Write-Host "Démarrage du serveur de développement..." -ForegroundColor Cyan
Write-Host "La page s'ouvrira sur http://localhost:3000" -ForegroundColor Cyan
Write-Host ""

# Démarrer le serveur
npm run dev
