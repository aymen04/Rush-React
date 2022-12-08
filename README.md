<p align="center">
  <br />
     <img width="600" src="https://user-images.githubusercontent.com/60877626/206020600-e45389cb-691f-4f12-83dd-48f0b1d91ec5.png" alt="Template logo" />
</p>
<br/>
<p align="center">
  <h1 align="center" style="font-weight:bold">🚀 Template Rush Stack JS 🚀</h1>
  <p align="center">This project was bootstrapped with <a href="https://github.com/vitejs/vite/tree/main/packages/create-app">@vite/create-app</a> </p>
</p>
<br/>
<p align="center">
  <h2 align="center" style="font-weight:bold">📰 Gestionnaire de veille 📰</h2>
</p>
<br/>

En partant du template fourni on souhaite développer une application de gestion d'articles (tech, produit design, autre...) qui vous permettra de gérer vos collections d'articles et de rester informés des dernières nouveautés dans le domaine. L'application devra vous permettre, de rechercher vos articles tech préférés, et d'en sauvegarder des nouveaux. On souhaite que l'application soit aussi facile à utiliser qu'attrayante ! ✨

<br/>

## 🏆 Features

On souhaite utiliser l'API [Dev to](https://dev.to/api/) pour récupérer les articles.
On utilisera pour cela l'endpoint `https://dev.to/api/articles?tag={xxx}` qui nous permettra de récupérer les 30 derniers articles liés au tag `{xxx}`.

**👀 Exemple :** https://dev.to/api/articles?tag=react 🔗

<br/>

### 🗞 Home page - Liste des articles dev.to

- [ ] Fetching des données d'articles en fonction de la recherche de l'utilisateur avec une valeur par default (`React`).
- [ ] Affichage des articles dans une grille sous forme de card.
  - [ ] Affichage des informations de l'article (titre, auteur, date de publication, description, tags et image).
  - [ ] Redirection vers l'article au clic.
  - [ ] Affichage d'un loader pendant le chargement des données.
- [ ] Système de filtre des articles.
- [ ] Système de tri en fonction de la date de publication des articles.
- [ ] Accès rapide à la page Ma Liste.

<br/>

### 🔖 Ma Liste - Page perso d'articles

- [ ] Affichage de vos articles ajoutés dans une grille sous forme de card.
- [ ] Système de suppression des articles.
  - [ ] Affichage d'un message de succès lors de la suppression.
- [ ] Système de recherche des articles.
- [ ] Système de filtre des articles.
- [ ] Système de tri en fonction de la date de publication des articles.

<br/>

### 📝 Formulaire d'ajout d'articles

- [ ] Système d'ajout d'un article en local.
  - [ ] Affichage d'un formulaire d'ajout d'un article ( avec possiblement titre, auteur, date de publication, description, tags, image et lien vers l'article).
  - [ ] Système de validation du formulaire.
  - [ ] Affichage d'un message de succès lors de l'ajout.

<br/>

### 🤷🏼‍ Autres

- [ ] Mise en place d'un thème sombre et d'un thème clair sur l'application
- [ ] Ajout de style et/ou animations sur les composants.
- [ ] Déploiement de l'application sur vercel. [🛟 AIDE](https://vercel.com/docs/concepts/git/vercel-for-github)
- [ ] Mise à disposition du code sur github.
- [ ] On souhaite voir un code fonctionnel, propre, et organisé 😉

<br/>

## 🎁 Bonus ( Les points suivants vous permettrons d'avoir plus que la note de base attribuée avec les features ci-dessus )

- [ ] Intégrer un nouveau hook react (`useCallback`, `useMemo` ...)
- [ ] Utiliser un pattern children react
- [ ] Créer votre propre hook pour gérer le fetching des données à partir d'un tag
- [ ] Système de pagination.
- [ ] Système de modification des articles.
- [ ] Mise en place et écriture de tests d'intégration sur un des composants.
- [ ] Application responsive.

<br/>

## 📜 Available Scripts
<br/>
In the project directory, you can run : <br /><br />

### ⚡ `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.<br /><br />

### 🧳 `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.<br /><br />
🚀 **Your app is ready to be deployed !**<br /><br />

### 🌐 `npm run serve`

Runs the app in the server mode. Open [http://localhost:5000](http://localhost:5000) to view it in the browser. The page will reload if you make edits.<br /><br />

### 🧹 `npm run lint:fix`

This command allows to automatically correct some eslint errors present in the code. Some errors may not be able to be corrected and will have to be fixed manually.<br /><br />

### 📏 `npm run lint:format`

This command will automatically format your code. Some format errors generated by prettier may not be correctable and will have to be fixed manually.<br /><br />

### 🔍 `npm run lint`

Starts the code verification by running eslint (`npm run lint:fix`) and prettier (`npm run lint:format`).<br /><br />

🚨 **Warning :** This command must be executed before each commit !
