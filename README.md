Micro Frontend avec Module Federation et Rsbuild

📌 Objectif

Ce projet met en place une architecture Micro Frontend (MFE) en utilisant Module Federation avec Rsbuild et React. Il est composé de deux applications indépendantes :

` : Fournit un composant Button.

` : Consomme le composant Button via Module Federation.

📂 Structure du projet

/mfe-atelier-valentin-royer
│── /shell  (Application hôte - Producteur)
│── /header-mfe  (Micro frontend - Consommateur)

🚀 Installation et exécution

1️⃣ Cloner le projet

git clone https://github.com/valentin-royer/mfe-atelier-valentin-royer.git
cd mfe-atelier-valentin-royer

2️⃣ Installer les dépendances

📦 Producteur

cd shell
npm install

📦 Consommateur

cd ../header-mfe
npm install

3️⃣ Lancer les applications

▶️ Démarrer le Producteur

cd shell
npm run dev

Vérifier que le manifeste est disponible à : http://localhost:3000/mf-manifest.json

▶️ Démarrer le Consommateur

cd ../header-mfe
npm run dev

Accéder à l'application consommateur sur : http://localhost:2000/

🛠️ Technologies utilisées

React

Module Federation (via @module-federation/enhanced et @module-federation/rsbuild-plugin)

Rsbuild

📝 Fonctionnalités implémentées

Configuration de Module Federation pour exposer et consommer un composant distant.

Hébergement du Producteur (`) sur http://localhost:3000.

Intégration du Consommateur (`) sur http://localhost:2000.