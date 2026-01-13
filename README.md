# Quiz Application (JavaScript)

Une application de quiz interactive développée en **JavaScript vanilla**, permettant à l’utilisateur de sélectionner une catégorie, un nombre de questions et de répondre à des questions chronométrées avec un affichage des résultats en fin de partie.


---


## Fonctionnalités

Le projet implémente une fonction principale :

- Sélection d’une **catégorie de questions**
- Choix du **nombre de questions**
- Questions affichées **aléatoirement sans répétition**
- **Timer par question**
- Indication visuelle des **bonnes et mauvaises réponses**
- Bouton **Next** activé uniquement après une réponse
- Possibilité de **recommencer le quiz**


---


## Technologies utilisées

| Technologie | Description |
|--------------|-------------|
| **JavaScript (ES6+)** | Langage principal utilisé pour la logique du quiz et la manipulation du DOM |
| **Modules JavaScript** | Utilisation de `import / export` pour structurer le code |
| **HTML5** | Structure de l’application |
| **CSS3** | Mise en forme et styles de l’interface |
| **Node.js** | Utilisé pour l’environnement de développement (modules ES, outils locaux si nécessaire) |
| **Visual Studio Code** | Éditeur de code |


---


## Structure du projet

```bash
.
├── index.html
├── css/
│   └── style.css             # Styles de l'application
├── js/
│   ├── script.js             # Logique principale du quiz
│   └── questions.js          # Données des questions
├── images/
│   ├── config-quiz.png       # Écran de configuration
│   ├── quiz.png              # Quiz en cours
│   ├── quiz-over.png         # Fin du quiz
│   └── result-quiz.png       # Résultats du quiz
└── README.md

```


---

## Fonctionnement général

1. L’utilisateur choisit :
  - une catégorie
  - un nombre de questions
2. Le quiz démarre avec une question aléatoire
3. Un timer est lancé pour chaque question
4. À la sélection d’une réponse :
  - le timer s’arrête
  - le timer s’arrête
5. Le quiz se termine lorsque le nombre de questions est atteint
6. Un écran de résultats affiche le score final


---


## Aperçu de l’application


- Écran de configuration

![Configuration du quiz](images/config-quiz.png)

- Écran du quiz

![Quiz en cours](images/quiz.png)

- Écran des résultats

![Résultats du quiz](images/result-quiz.png)


- Voir la démo en ligne :

[https://idriss-enone.github.io/quiz-app/](https://idriss-enone.github.io/quiz-app/)


---

## Gestion de l’état (State Management)

L’application utilise un objet `state` centralisé pour gérer :

```js

state = {
  timer,
  currentTime,
  selectedCategory,
  currentQuestion,
  questionHistory,
  numberOfQuestions,
  correctAnswersCount
}


```

Cela permet :

- un flux clair
- un flux clair
- moins de bugs


---



## Gestion du timer

- Un timer est relancé à chaque question
- Si le temps est écoulé :
  - la question est automatiquement corrigée
- Le timer est stoppé dès qu’une réponse est sélectionnée


---


## Gestion des cas limites

- Catégorie sans questions
- Plus de questions disponibles
- Protection contre les questions dupliquées
- Empêche le rendu de questions invalides (`undefined`)


---


##  Installation & Lancement

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/idriss-enone/quiz-app.git 

2. Ouvrir le projet dans Visual Studio Code

3. Lancer l’application avec un serveur local :
    - Installer l’extension **Live Server**
    - Faire un clic droit sur `index.html`
    - Sélectionner **"Open with Live Server"**


---


## Améliorations possibles

- Ajout d’un score par catégorie
- Animation du timer (alerte visuelle)
- Sauvegarde des scores (localStorage)
- Mode mobile / responsive amélioré
- Ajout de sons ou d’effets visuels


### Note importante

```md
Ce projet utilise les **modules JavaScript (`import / export`)**.
Il est donc nécessaire d’utiliser un **serveur local** (comme Live Server).
L’ouverture directe du fichier `index.html` ne fonctionnera pas.

```

---

## Auteur

Projet réalisé par **Idriss Enone** dans le cadre d’un apprentissage en JavaScript.

---