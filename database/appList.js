export const appList = [
  // {
  // id: "appId-0",
  // name: "Portfolio",
  // title: "Projet Portfolio",
  // imgUrl: ["/assets/portfolio_portfolio.png"],
  // desc: {
  //   short:
  //     "C’est ce même portfolio que vous visitez, développé avec Next.js. Voir les détails pour les fonctionnalités.",
  //   long: [
  //     `Après avoir développé plusieurs applications et utilisé diverses technologies, il était devenu nécessaire de mettre à jour mon portfolio.`,
  //     `Développé en 3 semaines avec Next.js, en passant par les étapes de définition des besoins, conception, codage des interfaces utilisateurs, implémentation des fonctionnalités et gestion de bugs.`,
  //     `J’ai voulu que ce portfolio, non seulement présente mon parcours et mes réalisations mais aussi, se comporte lui-même comme une application.`,
  //     `Ainsi en plus de la présentation, il est possible de s’y connecter, de répondre à un questionnaire de feedback, de jouer, de passer d’un thème sombre à un thème clair, d’être reconnu sur les apps auth.ikodi.eu, concord.ikodi.eu et feedback.ikodi.eu sans s’identifier à nouveau.`,
  //   ],
  // },
  // features: [
  //   "Pré-rendering des pages côté serveur",
  //   "Choix de thème clair ou sombre",
  //   "La connexion permet la consultation des données stockées en base de donnée, la pré-saisie dans le formulaire de feedback et la connexion à l'app concord.ikodi.eu",
  // ],
  // techno: {
  //   frontend: {
  //     lang: ["Next.js", "React", "Javascript"],
  //     packages: [
  //       "@mui/lab",
  //       "axios",
  //       "next",
  //       "react",
  //       "react-dom",
  //       "react-icons",
  //       "styled-components",
  //       "styled-normalize",
  //     ],
  //   },
  //   backend: {
  //     lang: ["Node.JS"],
  //     db: ["Sans"],
  //     packages: ["Next.js"],
  //   },
  //   deployment: {
  //     host: "AWS",
  //     proxy: "Nginx",
  //     transfer_protocol: "ssh",
  //     process_manager: "pm2",
  //   },
  // },
  //   links: {
  //     github: ["https://github.com/Ikodi-julien/portfolio"],
  //     app: "https://portfolio.ikodi.eu",
  //   },
  // },
  {
    id: "appId-1",
    name: "Auth",
    title: "Ikodi - Authentification",
    imgUrl: ["/assets/auth-hero.png"],
    desc: {
      short:
        "Application d'authentification autonome, elle permet de créer un compte et de s'identifier sur certaines applications du domaine ikodi.eu.",
      long: [
        `Il y a plusieurs applications nécessitant une authentification sur le domaine ikodi.eu (et ça continue d’augmenter). Aussi il est devenu plus pratique d’avoir une seule API permettant de s’identifier sur toutes les applications.`,
        `C’est ce que permet auth.ikodi.eu, une fois que l’utilisateur a fourni les identifiants demandés (formulaire ou API tiers) il reçoit des tokens uniques lui permettant de s’authentifier et donc d’être reconnu sur les différentes applications du domaine ikodi.eu.`,
        `Par ailleurs, conditionner le comportement d'une application à l'identification de l'utilisateur est devenu très rapide puisque c'est l'API à auth.ikodi.eu qui le gère.`,
      ],
    },
    features: [
      "Création de compte",
      "Signup et Login",
      "Gère les données d'authentification en autonomie",
      "Confirmation d'email utilisateur et reset de mot de passe par email et Token",
      "Authentification par email + mot de passe ou API tiers (google, github)",
    ],
    techno: {
      frontend: {
        lang: ["Vue.js"],
        packages: ["sass", "axios"],
        tests: "mocha + chaï",
      },
      backend: {
        lang: ["Node.js"],
        db: ["PostgreSQL", "Redis"],
        packages: [
          "axios",
          "base-64",
          "bcrypt",
          "cookie-parser",
          "cors",
          "dotenv",
          "express",
          "ejs",
          "email-validator",
          "googleapis",
          "jsonwebtoken",
          "node-mailer",
          "sanitize-html",
          "simple-oauth2",
        ],
      },
      deployment: {
        host: "AWS EC2",
        proxy: "nginx",
        transfer_protocol: "ssh",
        process_manager: "pm2",
      },
    },
    links: {
      github: "https://github.com/Ikodi-julien/auth-ikodi",
      app: "https://auth.ikodi.eu",
    },
  },
  {
    id: "appId-2",
    name: "Concord",
    title: "Concord - Application de tchat",
    imgUrl: ["/assets/concord-portefolio.png"],
    desc: {
      short:
        "Une application de tchat autour des séries d'animations les plus populaires",
      long: [
        `La base de cette application a été réalisée en équipe pour la présentation au Titre pro développeur web.`,
        `Après authentification, l’utilisateur a accès à des salons de chat en live, un espace personnel ou il peut gérer ses préférences et données personnelles, une page de propositions personnalisées et de recherche multi-critère.`,
      ],
    },
    features: [
      "Authentification et autorisation par Tokens",
      "Modification des infos utilisateurs, choix de catégories préférées et avatar",
      "Salons de chat gérés par websockets",
      "Favoris",
      "Recherche et tri multi-critère",
      "Responsive",
    ],
    techno: {
      frontend: {
        lang: ["React", "Redux", "sass"],
        packages: [
          "axios",
          "chai",
          "dotenv",
          "emoji",
          "fs",
          "prop-types",
          "quill",
          "react-avatar-edit",
          "react-router-dom",
          "semantic-ui-react",
        ],
        tests: "mocha + chaï",
      },
      backend: {
        lang: ["Node.js", "Express", "WebSocket"],
        db: ["PostgreSQL", "Redis"],
        packages: [
          "base-64",
          "bcrypt",
          "cors",
          "dotenv",
          "googleapis",
          "jsonwebtoken",
          "sanitize-html",
          "sequelize",
          "socket.io",
        ],
        tests: "mocha + chaï",
      },
      deployment: {
        host: "AWS EC2",
        proxy: "nginx",
        transfer_protocol: "ssh",
        process_manager: "pm2",
      },
    },
    links: {
      github: "https://github.com/Ikodi-julien/concord-API",
      app: "https://concord.ikodi.eu",
    },
  },
  {
    id: "appId-3",
    name: "Chronofit",
    title: "Chronofit V2.0 - Application de Sport",
    imgUrl: ["/assets/chronofit-v2.png"],
    desc: {
      short:
        "Une application destinée au sportif pratiquant le cross-training, les HEAT, création, enregistrement et lecture d'entrainement.",
      long: [
        `Développée à l'origine en PHP pour répondre à mon besoin, Chronofit permet de créer, enregistrer et lire des entraînements de type cross-training.`,
        `Par exemple, admettons que vous vous donniez comme objectif de faire 45 mn de sport intensif et prévoyez d’enchaîner plusieurs exercices (1.5km de course à pied, autant de fois que possible un enchaînement de pompes, tractions, air-squat, abdos, corde à sauter…).`,
        `Au bout d’un certain temps, l’effort aidant, il devient pénible de tenir le compte ou de garder la trace de l’état d’avancement, savoir combien de temps est passé sur un exercice, que reste-t-il à faire pour atteindre l’objectif, etc.`,
        `C’est pour répondre à ces besoins que j’ai créé Chronofit, aujourd'hui dans la version React-Redux.`,
      ],
    },
    features: [
      "Création, lecture et enregistrement d'entrainements.",
      "Enregistrement en local (également en base de donnée pour l'utilisateur authentifié dans la prochaine version)",
      "Entraînements de crossfit dit 'benchmark' inclus",
      "Interface de création d'entrainement en Drag&Drop",
      "Interface de lecture d'entrainement avec contrôles divers, indication du temps passé, du temps restant (si limite indiquée), de l'exercice en cours, de l'exercice suivant...",
      "Synthèse vocale lors de la lecture d'un entrainement",
    ],
    techno: {
      frontend: {
        lang: ["React", "Redux", "sass"],
        packages: ["axios", "sortablejs"],
      },
      backend: {
        lang: [],
        db: ["LocalStorage"],
        packages: [],
      },
      deployment: {
        host: "AWS EC2",
        proxy: "nginx",
        transfer_protocol: "ssh",
        process_manager: "pm2",
      },
    },
    links: {
      github: ["https://github.com/Ikodi-julien/chronofit-react"],
      app: "https://chronofit.ikodi.eu",
    },
  },
];
