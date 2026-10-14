# Rapport de projet — Tâche 7
## Site web multipage de restaurant

**Auteur :** Jean-Eudes Aka  
**Programme :** Stage de développement web — Synent Technologies  
**Date :** 14 octobre 2026  
**Projet :** Saveurs d’Ivoire  
**Dépôt :** https://github.com/Jean-EudesO1/synent-task7-restaurant-jeaneudes

## 1. Présentation

La tâche 7 consiste à réaliser un site web multipage comprenant les pages Accueil, À propos, Services et Contact. Le site doit proposer une navigation entre les pages, une interface cohérente et un affichage adapté aux ordinateurs et aux appareils mobiles.

Le thème retenu est un restaurant, nommé Saveurs d’Ivoire. Le site présente son identité, ses services et un moyen de contact. Le développement a été réalisé progressivement dans VS Code, avec une assistance de Copilot et un historique Git organisé par étapes.

## 2. Objectifs

- Construire quatre pages reliées entre elles.
- Présenter le restaurant dans une interface lisible et professionnelle.
- Conserver les mêmes couleurs, styles et éléments de navigation sur toutes les pages.
- Adapter la mise en page aux différentes largeurs d’écran.
- Prévoir une navigation mobile et une utilisation au clavier.
- Valider les champs du formulaire de contact côté navigateur.

## 3. Technologies et outils

| Technologie ou outil | Utilisation |
|---|---|
| HTML | Structure et contenu des quatre pages |
| CSS | Mise en forme commune et adaptation responsive |
| JavaScript | Interactions de navigation et validation du formulaire |
| VS Code | Écriture et modification du code |
| Copilot | Assistance à l’implémentation progressive |
| Git | Enregistrement des étapes de développement |
| GitHub | Dépôt du code et des documents de soumission |

Le site utilise les technologies natives du navigateur. Aucun backend ou service d’envoi de messages n’a été confirmé dans les éléments disponibles pour ce rapport.

## 4. Structure du projet

```text
synent-task7-restaurant-jeaneudes/
  index.html
  about.html
  services.html
  contact.html
  style.css
  script.js
  images/
  README.md
  docs/
    rapport-task7.md
    screenshots/
```

Les fichiers HTML définissent les pages. La feuille de style commune assure la cohérence visuelle et le fichier JavaScript rassemble les interactions. Le dossier images contient les ressources visuelles du restaurant. Le README décrit le projet et ses instructions d’utilisation.

## 5. Présentation des pages

### 5.1 Accueil

La page d’accueil constitue le point d’entrée du site. Elle présente le restaurant et permet au visiteur de rejoindre les autres rubriques grâce à la navigation commune. Son rôle est de donner une première impression claire de l’établissement et d’encourager la découverte de ses services ou de ses coordonnées.

### 5.2 À propos

La page À propos présente l’identité du restaurant. Elle permet de développer sa présentation et de donner du contexte au visiteur. Elle reprend la structure visuelle et les éléments communs de l’accueil.

### 5.3 Services

La page Services décrit les prestations du restaurant. Son contenu est organisé afin de faciliter la lecture et de permettre au visiteur de comprendre l’offre proposée. La mise en forme reste cohérente avec les autres pages.

### 5.4 Contact

La page Contact présente les informations de contact et un formulaire. JavaScript vérifie les champs avant la poursuite de l’action prévue dans l’interface.

**Limite :** une validation côté navigateur ne garantit pas l’envoi réel d’un message. En l’absence d’un backend ou d’un service d’envoi confirmé, le formulaire doit être présenté comme une interface avec validation, et non comme une messagerie opérationnelle.

## 6. Navigation, responsive et accessibilité

La navigation relie les quatre pages par des liens HTML. Les styles partagés permettent de conserver une expérience cohérente d’une page à l’autre.

Une étape spécifique de développement a concerné l’amélioration de la navigation responsive et de l’accessibilité. La navigation mobile et l’usage au clavier doivent être vérifiés sur le site final : ouverture et fermeture du menu, accès aux liens, visibilité du focus et absence de débordement horizontal.

Les images participent à la présentation du restaurant. Avant publication, leurs textes alternatifs, leur poids et leurs conditions d’utilisation doivent être vérifiés. Pinterest peut servir à rechercher des références, mais la présence d’une image sur ce service ne constitue pas une autorisation de réutilisation.

## 7. Méthodologie de réalisation

Le développement a suivi une démarche progressive : création d’une structure commune, ajout des pages, amélioration des interactions et de l’affichage, puis documentation. L’assistance de Copilot a été utilisée pour produire et modifier le code ; les commits ont été enregistrés au fil des étapes.

| Étape | Contenu | Commit confirmé |
|---|---|---|
| 1 | Structure commune et page d’accueil | `face003` |
| 2 | Page À propos et ses styles | `a4aa0ad` |
| 3 | Page Services et ses styles | `fa8e050` |
| 4 | Page Contact et validation du formulaire | `442315d` |
| 5 | Navigation responsive et accessibilité | `fe5a7a8` |
| 6 | Documentation du projet dans le README | `dda69e3` |

Les cinq premiers commits ont été affichés dans le terminal. Le sixième a été annoncé dans le compte rendu de Copilot. L’historique comprend ainsi six étapes documentées avant l’ajout du présent rapport et des captures. La synchronisation finale sur GitHub doit être vérifiée après le push des documents de soumission.

## 8. Vérifications et critères de validation

Les échanges disponibles confirment l’existence des quatre pages, des fichiers communs, du README et des commits de développement. Ils ne fournissent pas de résultats détaillés de tests automatisés ou de mesure de performance. Aucun résultat supplémentaire n’est donc revendiqué ici.

Avant la soumission, le parcours manuel suivant permet de vérifier le site :

| Vérification | Résultat attendu |
|---|---|
| Ouverture d’index.html | Accueil affiché avec styles et images |
| Navigation entre les quatre pages | Liens corrects et aucun fichier introuvable |
| Cohérence visuelle | Navigation et styles communs sur toutes les pages |
| Fenêtre étroite | Contenus lisibles et menu mobile utilisable |
| Navigation au clavier | Liens accessibles et focus visible |
| Formulaire vide ou incorrect | Validation et message compréhensible |
| Formulaire correctement rempli | Comportement conforme à la fonction réellement implémentée |
| Chargement des images | Aucun chemin cassé et textes alternatifs adaptés |

Ces vérifications doivent être effectuées et leurs résultats consignés avant d’affirmer une validation complète. Le rapport ne présente pas cette liste comme un ensemble de tests déjà réussis.

## 9. Exécution locale

1. Ouvrir le dossier du projet dans VS Code.
2. Ouvrir index.html dans un navigateur, ou utiliser un serveur local tel que Live Server s’il est installé.
3. Parcourir les pages avec la navigation du site.
4. Vérifier les interactions et l’affichage sur différentes largeurs.

Les ressources doivent conserver leur organisation relative pour que les liens, les styles, les scripts et les images fonctionnent.

## 10. Captures à joindre

Les captures du site effectivement exécuté doivent être ajoutées dans docs/screenshots/ :

- accueil.png : page d’accueil.
- a-propos.png : présentation du restaurant.
- services.png : prestations proposées.
- contact.png : coordonnées et formulaire.
- mobile.png : mise en page et navigation sur petit écran.

Ce document ne contient pas de captures intégrées. Les fichiers peuvent être ajoutés au dépôt puis référencés depuis le README. Ils doivent montrer l’état final de l’application sans données personnelles inutiles.

## 11. Limites et améliorations possibles

Le site répond à un périmètre de présentation multipage. Un système de réservation, un paiement en ligne ou un envoi réel du formulaire ne sont pas confirmés et ne sont pas inclus dans les résultats annoncés.

Les évolutions possibles sont :

- Connecter le formulaire à un service d’envoi avec validation côté serveur.
- Ajouter un parcours de réservation si le restaurant en exprime le besoin.
- Optimiser les images et vérifier leur licence.
- Compléter les métadonnées et la structure sémantique pour le référencement.
- Réaliser des contrôles d’accessibilité et de performance, puis documenter leurs résultats.

## 12. Conclusion

Le projet propose un site restaurant composé de quatre pages, avec une structure partagée en HTML, CSS et JavaScript. Le travail par étapes a permis d’organiser le développement et de conserver un historique de commits pertinent.

La soumission comprend le code, le README, ce rapport et les captures à ajouter. Les derniers contrôles manuels doivent confirmer la navigation, l’adaptation responsive et la validation du formulaire. Le rapport distingue ces vérifications attendues des fonctionnalités dont l’implémentation est documentée.
