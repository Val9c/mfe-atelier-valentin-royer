# Micro Frontend avec Module Federation et Rsbuild

## 📌 Objectif

Ce projet met en place une architecture Micro Frontend (MFE) en utilisant Module Federation avec Rsbuild et React. Il est composé de deux applications indépendantes :

- `shell` : Application hôte (Consommateur) qui intègre un micro frontend distant.
- `header-mfe` : Micro frontend (Producteur) qui expose un composant Header.

## 📂 Structure du projet

```
/mfe-atelier-valentin-royer
│── /shell  (Application hôte - Consommateur)
│── /header-mfe  (Micro frontend - Producteur)
```

## 🚀 Installation et exécution

### 1️⃣ Cloner le projet

```sh
git clone https://github.com/Val9c/mfe-atelier-valentin-royer.git
cd mfe-atelier-valentin-royer
```

### 2️⃣ Installer les dépendances

📦 **Producteur**

```sh
cd header-mfe
npm install
```

📦 **Consommateur**

```sh
cd ../shell
npm install
```

### 3️⃣ Lancer les applications

▶️ **Démarrer le Producteur (header-mfe)**

```sh
cd header-mfe
npm run dev
```

Vérifier que le manifeste est disponible à : [http://localhost:3000/mf-manifest.json](http://localhost:3000/mf-manifest.json)

▶️ **Démarrer le Consommateur (shell)**

```sh
cd ../shell
npm run dev
```

Accéder à l'application consommateur sur : [http://localhost:2000/](http://localhost:2000/)

## 🛠️ Technologies utilisées

- **React**
- **Module Federation** (via `@module-federation/enhanced` et `@module-federation/rsbuild-plugin`)
- **Rsbuild**

## 📝 Fonctionnalités implémentées

- Configuration de Module Federation pour exposer et consommer un composant distant.
- Hébergement du Producteur (`header-mfe`) sur [http://localhost:3000](http://localhost:3000).
- Intégration du Consommateur (`shell`) sur [http://localhost:2000](http://localhost:2000).