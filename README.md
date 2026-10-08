# Saveurs d’Ivoire

Site web multipage pour la tâche 7 du programme de stage de Synent Technologies. Le projet présente un restaurant ivoirien fictif. L’auteur du projet est **Jean-Eudes Aka**.

## Technologies

- HTML
- CSS
- JavaScript

Le site utilise les technologies natives du navigateur, sans framework ni dépendance à installer.

## Pages

- `index.html` — accueil, présentation du restaurant et plats populaires : attiéké-poisson, alloco-poulet et sauce graine avec foutou.
- `about.html` — histoire fictive, mission, valeurs et équipe fictive.
- `services.html` — repas sur place, plats à emporter et service traiteur.
- `contact.html` — coordonnées et horaires d’exemple, ainsi qu’un formulaire de démonstration.

## Lancement avec Live Server

1. Ouvrez le dossier du projet dans Visual Studio Code.
2. Si nécessaire, installez l’extension **Live Server** dans VS Code.
3. Ouvrez `index.html`, puis cliquez sur **Go Live** dans la barre d’état, ou faites un clic droit sur le fichier et choisissez **Open with Live Server**.
4. Le site s’ouvre dans le navigateur. Utilisez la navigation pour passer d’une page à l’autre.

Live Server est un outil de développement facultatif ; le projet lui-même ne demande aucune installation de dépendances.

## Fonctionnalités présentes

- Navigation commune avec un repère visuel pour la page active.
- Lien d’accès direct au contenu principal et navigation au clavier.
- Mise en page responsive avec menu hamburger sur petit écran.
- Images locales pour le restaurant, les plats et l’illustration de l’équipe.
- Validation dans le navigateur des champs obligatoires du formulaire, du format de l’e-mail et des longueurs minimales du nom et du message.

## Structure des fichiers

```text
synent-task7-restaurant-jeaneudes/
├── index.html
├── about.html
├── services.html
├── contact.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── restaurant.jpg
    ├── attieke-poisson.jpg
    ├── alloco-poulet.jpg
    ├── sauce-graine.jpg
    └── equipe.jpg
```

## Tests manuels à effectuer

1. Ouvrir chaque page et utiliser la navigation ; vérifier que la page active est identifiable.
2. Sur l’accueil, contrôler les trois plats et le chargement des images.
3. Sur À propos et Services, vérifier les sections présentées et les liens vers les autres pages.
4. Réduire la largeur du navigateur, ouvrir et fermer le menu hamburger avec la souris et le clavier, puis vérifier qu’Échap le ferme et rend le focus au bouton.
5. Sur Contact, essayer de valider le formulaire vide, avec un e-mail invalide, puis avec des champs valides.

## Limites

- Le restaurant, son histoire, les membres de l’équipe, les coordonnées, les horaires et l’adresse sont fictifs. Les coordonnées servent d’exemples.
- Le formulaire contrôle les champs dans le navigateur, mais **aucun message n’est envoyé ni enregistré**. Il n’est connecté à aucun service d’envoi ; après validation, la page l’indique explicitement.
- Aucun système de réservation ou de commande en ligne n’est connecté.

## Crédits des images

Les fichiers d’image étaient présents dans le dossier du projet. Leur source, leur auteur et leur licence restent à renseigner après vérification de leur origine ; aucune source n’est attribuée ici sans confirmation.

| Fichier | Crédit |
| --- | --- |
| `images/restaurant.jpg` | Source, auteur et licence à renseigner |
| `images/attieke-poisson.jpg` | Source, auteur et licence à renseigner |
| `images/alloco-poulet.jpg` | Source, auteur et licence à renseigner |
| `images/sauce-graine.jpg` | Source, auteur et licence à renseigner |
| `images/equipe.jpg` | Source, auteur et licence à renseigner ; filigrane visible « AfroVerse » à vérifier |
