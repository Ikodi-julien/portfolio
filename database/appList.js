export const appList = [
  {
    id: "appId-1",
    name: "Auth.Ikodi",
    title: "Ikodi - Authentification",
    imgUrl: ["/assets/auth-hero.png"],
    desc: "Un application d'authentification en standalone, elle permet de créer un compte et de se connecter à certaines applications du domain ikodi.eu",
    features: [
      "Création de compte et login pour certaines applications du domaine ikodi.eu",
      "Standalone, gère les données d'authentification en autonomie",
      "Confirmation d'email utilisateur et reset de mot de passe par email et jsonwebtoken",
      "Authentification par email + mot de passe ou api tiers (google, github)",
    ],
    techno: {
      frontend: {
        lang: ["Vue.js", "sass"],
        package: ["axios"],
        tests: "mocha + chaï",
      },
      backend: {
        lang: ["Node.js", "Express"],
        db: ["PostgreSQL", "Redis"],
        package: [
          "axios",
          "base-64",
          "bcrypt",
          "cookie-parser",
          "cors",
          "dotenv",
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
    desc: "Une application de tchat autour des séries d'animations les plus populaires",
    features: [
      "Autorisation par jsonwebtoken fournis par l'app d'authentification (auth.ikodi.eu)",
      "Modification des infos utilisateurs + choix de catégories préférées + avatar",
      "Salons de tchat (websockets)",
      "Liste de salons triable et favoris",
    ],
    techno: {
      frontend: {
        lang: ["React", "Redux", "sass"],
        package: [
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
        lang: ["Node.js", "Express"],
        db: ["PostgreSQL", "Redis"],
        package: [
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
      },
    },
    links: {
      github: [
        "https://github.com/Ikodi-julien/concord-API",
        "https://github.com/Ikodi-julien/concord-react",
      ],
      app: "https://concord.ikodi.eu",
    },
  },
  {
    id: "appId-3",
    name: "Chronofit",
    title: "Chronofit V2.0 - Application de Sport",
    imgUrl: ["/assets/chronofit-v2.png"],
    desc: "Une application d'enchainement d'intervals pour le sportif pratiquant le cross-training, les HEAT... on peut s'en servir pour faire la cuisine aussi !",
    features: [
      "Création d'entrainements enregistrés en local",
      "Entraînements de crossfit 'benchmark' disponibles",
    ],
    techno: {
      frontend: {
        lang: ["React", "Redux", "sass"],
        package: ["axios", "sortablejs"],
      },
      backend: {
        lang: [],
        db: ["LocalStorage"],
        package: [],
        tests: "",
      },
      deployment: {
        host: "AWS EC2",
        proxy: "nginx",
        transfer_protocol: "ssh",
      },
    },
    links: {
      github: ["https://github.com/Ikodi-julien/chronofit-react"],
      app: "https://chronofit.ikodi.eu",
    },
  },
  // {
  //   name: "Topics",
  //   title: "à définir",
  //   img: ["à définir"],
  //   desc: "à définir",
  //   features: ["à définir"],
  //   techno: {
  //     frontend: {
  //       lang: ["html", "scss"],
  //       package: ["ejs"],
  //     },
  //     backend: {
  //       lang: "PHP",
  //       db: "MySQL",
  //       package: "à définir"
  //     },
  //     deployment: {
  //       host: "AWS EC2",
  //       proxy: "nginx",
  //       transfer_protocol: "ssh"
  //     }
  //   },
  //   links: {
  //     github: ["à définir"],
  //     app: "https://topics.ikodi.eu"
  //   }
  // },
  {
    id: "appId-4",
    name: "Multiplicorne",
    title: "Les multiplications ça fait avancer les licornes",
    imgUrl: ["/assets/multiplicorne_portfolio.png"],
    desc: "Multiplicorne est une application de révision des opérations mathématiques de base (addition, soustraction et multiplication) destinée aux enfants de 6 à 12 ans. Le but étant que la licorne (ou un des personnage choisi) atteigne la ligne d'arrivée.",
    features: ["à définir"],
    techno: {
      frontend: {
        lang: ["html", "sass"],
        package: ["à définir"],
      },
      backend: {
        lang: ["PHP"],
        db: ["MySQL"],
        package: "à définir",
      },
      deployment: {
        host: "Gandi",
        proxy: "",
        transfer_protocol: "sftp",
      },
    },
    links: {
      github: ["https://github.com/Ikodi-julien/multiplicorne"],
      app: "https://multiplicorne.ikodi.eu",
    },
  },
];
