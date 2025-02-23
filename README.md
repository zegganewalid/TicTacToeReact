# Tic Tac Toe avec Animations en React

Bienvenue dans le projet **Tic Tac Toe avec Animation en React** ! Ce projet vous permet de jouer au célèbre jeu Tic Tac Toe avec des animations élégantes et des effets interactifs. Il utilise React pour gérer l'état et les interactions, et des animations CSS pour rendre le jeu plus dynamique et amusant.

![tictactoee](https://github.com/user-attachments/assets/4f0f8717-2a84-49c0-afd6-e148ddd1b419)

## Fonctionnalités

- **Gameplay classique de Tic Tac Toe** avec des cases interactives.
- **Animations** pour chaque mouvement, ainsi qu'une animation de victoire pour les joueurs.
- **Confettis** pour célébrer la victoire d'un joueur.
- **Gestion du score** pour suivre les victoires de chaque joueur.
- **Musique de fond** pour une ambiance immersive, avec la possibilité de l'activer/désactiver.
- **Responsive** : l'interface s'adapte à différentes tailles d'écran.

## Prérequis

Avant de commencer, vous devez avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gestionnaire de paquets)

## Installation

1. Clonez ce repository sur votre machine locale :

   ```bash
   git clone https://github.com/votre-utilisateur/tic-tac-toe-react.git
   ```

2. Allez dans le répertoire du projet :

   ```bash
   cd tic-tac-toe-react
   ```

3. Installez les dépendances nécessaires :

   Avec **npm** :

   ```bash
   npm install
   ```

   Ou avec **yarn** :

   ```bash
   yarn install
   ```

## Lancer l'application

Une fois les dépendances installées, lancez le serveur de développement avec la commande suivante :

```bash
npm start
```

Ou avec **yarn** :

```bash
yarn start
```

Cela ouvrira l'application dans votre navigateur à l'adresse suivante : `http://localhost:3000`.

## Fonctionnement du Jeu

- Le jeu commence avec une grille vide de 3x3.
- Le joueur 1 utilise le symbole **"X"** et le joueur 2 utilise le symbole **"O"**.
- Chaque joueur clique sur une case vide pour faire son mouvement.
- Une animation se déclenche à chaque tour.
- Lorsqu'un joueur gagne, une animation de victoire apparaît, ainsi qu'un effet de confettis.
- En cas de match nul, un message l'indique.

## Composants et Logique du Jeu

Le jeu est géré via un seul composant principal `TicTacToe`. Il gère :

- L'état des cases du jeu (`data`).
- Le nombre de tours joués (`count`).
- Les scores des joueurs (`scoreX` et `scoreO`).
- Les animations CSS pour les mouvements et la victoire.
- La musique de fond et son activation via un bouton.

## Style et Animations

Les animations sont réalisées avec des animations CSS, comme :

- **Pop-in** : lorsque le symbole est placé dans une case.
- **Winner-dance** : animation pour le symbole gagnant.
- **Confettis** : un effet de confettis pour célébrer la victoire.
- **Gagnant** : une ligne d'animation qui se forme pour signaler la victoire (horizontal, vertical, ou diagonale).

## Capture d'écran

Voici une capture d'écran du jeu en action :

![Capture d'écran du jeu Tic Tac Toe](./screenshot.png)

## Contribution

Si vous souhaitez contribuer au projet :

1. Forkez ce repository.
2. Créez une branche pour votre fonctionnalité (`git checkout -b ma-nouvelle-fonctionnalité`).
3. Faites vos modifications et ajoutez vos changements (`git commit -am 'Ajout d\'une nouvelle fonctionnalité'`).
4. Poussez sur votre branche (`git push origin ma-nouvelle-fonctionnalité`).
5. Ouvrez une pull request sur ce repository.

## Technologies utilisées

- **React** : pour gérer l'interface et les composants.
- **CSS** : pour les styles et les animations.
- **React Hooks** : pour la gestion de l'état (notamment `useState` et `useEffect`).
- **Audio** : pour la gestion de la musique de fond.

---
