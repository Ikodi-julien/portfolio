# PORTFOLIO IKODI

## le 28/12/2021 - Phase de consolidation

- Finaliser les textes -> ok
- Ajouter le Portfolio dans les projets -> ok
- Améliorer la présentation des textes dans AppDetails -> ok
- Ajouter le CV en pdf dans About -> ok
- Tests de scenari et création d'issues -> en cours, du côté du portfolio semble au point.

## le 27/12/2021 - Phase de consolidation

- Mettre une bordure aux liens vers app dans projects -> ok,
- Mettre un background degradé aux titres -> ok
- Finaliser l'animation des logos + mettre un divider entre les rings -> ok
- Fix :
  - En vue smartphone :
    - Voir techs par deux -> ok
    - Inverser l'order ring / timeline -> finalement pas pour l'instant,
    - Attention lien multiplicorne dépasse -> ok

## le 26/12/2021 - Phase de consolidation

- Styles Timeline -> ok,
- Dans section About ajouter un autre "ring" pour les xp d'avant -> ok
- Issue: affichage du UserWelcoming à chaque refresh, comportement attendu : affichage au premier seulement -> ok
- Faire une Modale pour UserWelcoming -> finalement non, bien comme ça.
- Ajout scrollTo top dans Layout -> ok
- Brancher delete/me sur le bouton -> ok
- Pourquoi l'id n'évolue pas après une suppression de compte -> 30 mn sur une erreur d'import :-/
- Ajouter une confirmation de la suppression du compte et du logout -> ok

## le 24/12/2021 - Phase de consolidation

- Info login success et redirect auto sur portfolio après login success :
  - Info en query depuis le portfolio -> ok
- Améliorer l'info visuelle quand on est loggué -> quasiment...
- Animation liens et boutons -> ok
- Factorisation des fetchs et post -> ok

## le 23/12/2021 - Phase implémentation des features

- connexion auth.ikodi.eu -> ok
- logout avec auth.ikodi.eu -> ok
- css de "Projects" -> ok

## le 22/12/2021 - Phase implémentation des features

- connexion avec auth.ikodi.eu -> en cours

## le 21/12/2021 - Phase implémentation des features

- Finalisation des styles sur page détails d'une app -> ok (ajout de liens),
- Animation du Hero pour theme light (choix des couleurs et réglages) -> ok;

## le 20/12/2021 - Phase implémentation des features

- Finaliser le changement de thème -> ok (plus compliqué que prévu)
- Animation Hero pour smartphone -> ok (nice !)

## le 19/12/2021 - Phase implémentation des features

- Fin mise en place des thèmes :
  - Refaire les routes propres -> ok
  - Mettre le bouton -> en cours

## le 18/12/2021 - Phase implémentation des features

- Changement thème dark / light -> ok sur le principe, il a fallut faire passer la logique sur le pre-rendering de pages ayant le theme choisi.

## le 17/12/2021 - Phase implémentation des features

- Intégration du feedback -> ok
- Fin mis en forme About -> ok
- Changement thème dark / light -> en cours

## le 16/12/2021 - Phase implémentation des features

- Vérifier les liens internes et externes -> ok
- Intégration du feedback -> en cours

## le 15/12/2021 - Phase de développement des composants

- Création dynamique de la page détails d'une app, lien avec les props -> ok
- Créer les composants et sous-composant pour la page de description d'une app :
  - AppDetails -> ok (reste le css),
  - réutiliser TechCard -> non, composant AppTech -> ok
- Voir le comportement des liens dans la nav depuis AppPage -> ok (si tout pouvais être aussi simple...),
- Créer les composants communs :
  - AsideMenu ->non, devient un menu contenant des liens vers blog, jeux, app de news et formulaire de feedback -> ok (nice !)

## le 14/12/2021 - Phase de développement des composants

- TechCard, et object techList.js,
- Position fixed pour le Header,
- Du css sur les cartes,
- Galérer sur comment transmettre des composants via les props... (indice : Importe les dans le composant ou ils sont utilisés...baka...)
- Créer les composants et sous-composants pour la Homepage :
  - Main :
    - About :
      - Timeline (voir celle de MUI) -> ok
      - Animation (à finaliser)

## le 13/12/2021 - Phase de développement des composants

- Mise en place de l'animation à l'accueil,
- Le Héro,
- La section Projets bien avancée,

- Créer les composants communs :
  - Button -> ok
  - Footer -> ok
  - Divider -> ok
  - AsideMenu -> ?
- Créer les composants et sous-composants pour la Homepage :
  - Hero -> ok
  - Title -> ok (dans Hero)
  - Main :
    - Projects :
      - ProjectCard -> ok (styles à finaliser)

## Le 12/12/2021 - Phase de développement des composants

- Créer les composants communs (version brut) :
  - Header :
    - Navbar -> ok (les finitions de style seront fait globalement à la fin),
    - NavMenu mobile (hamburger) -> ok
  - Button -> ok

## Le 11/12/2021 - Phase de préparation / CDC + Phase de développement des composants

- Se renseigner sur:

  - react-styled-component -> ok (et c'est pas un petit morceau, mais 👍)
  - react-icons -> ok, c'est parfait.
  - \_document de Next -> ok https://nextjs.org/docs/advanced-features/custom-document

- Créer les composants communs :
  - Header :
    - Navbar -> En cours,

## Le 10/12/2021 - Phase de préparation / CDC

- MVP en terme de pages :
  - HomePage, AppDesc (description d'une application), Satisfaction (intégrer le wizard form).
- wireframes :
  - HomePage :
    - Mobile -> ok
    - Desktop -> ok

!["wireframe HomePage"](./wf_homepage.png)

- AppDesc :
  - Mobile -> ok
  - Desktop -> ok

!["wireframe page AppDesc"](./wf_appdesc.png)

- Fin des wireframes pour l'instant.
- Setup repo github + app next avec un composant Hello world -> ok
- setup GANDI DNS -> ok
- Deploy premier build sur AWS EC2 -> ok (master)
- setup AWS Nginx -> ok (ne pas oublier que j'ai un fichier 'upstream' incompatible avec la config auto de certbot !!)

### Le 08/12/2021 - Phase de préparation / CDC

Fin apprentissage de Next.js le 07/12
Recherche d'idée design pour portfolio, vu un sur yt je vais prendre les "styled components" et les "react-icons".
Modifications dans le CDC.
Début des wireframes -> vue mobile section accueil + menu hamburger + section projets

## Le 01/12/2022 - Phase de préparation / CDC

Démarrage du projet de rénovation du mon portfolio.
Objectif (cf CDC) + apprendre à utiliser Next.js

Fait:

- Début d'apprentissage de Next.js
- Début écriture du CDC,
- Début d'écriture de la base de donnée sous forme objet javascript.
