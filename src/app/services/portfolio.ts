import { Injectable } from '@angular/core';
import { PortfolioData } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class Portfolio {
  private portfolioData: PortfolioData = {
    hero: {
      tagline: 'Je transforme des idées en expériences digitales complètes',
      description: `Je suis développeur full-stack passionné, spécialisé dans la création d'applications web et mobiles performantes. Du backend robuste avec Laravel aux interfaces élégantes en Angular et React, en passant par des apps mobiles natives avec React Native et Flutter — je maîtrise tout le cycle de développement.

Mon approche ? Allier excellence technique et expérience utilisateur pour livrer des produits qui font la différence.`,
      primaryCta: 'Découvrir mes projets',
      secondaryCta: 'En savoir plus sur moi'
    },

    about: {
      title: 'Du code à l\'impact : mon parcours',
      story: `Tout a commencé par une curiosité dévorante. Adolescent, je démontais des sites web pour comprendre leur fonctionnement. Cette fascination m'a naturellement conduit vers le développement, où j'ai découvert bien plus qu'un métier : une véritable passion.

Mes débuts en PHP m'ont appris la rigueur. Laravel m'a ouvert les portes de l'architecture élégante. Puis est venu le besoin de créer des interfaces qui donnent vie au backend : Angular et React sont devenus mes terrains de jeu. Enfin, le mobile s'est imposé comme l'évidence logique — React Native et Flutter me permettent aujourd'hui de porter mes créations dans la poche de millions d'utilisateurs.`,
      philosophy: {
        curiosity: 'Curiosité constante. Les technologies évoluent vite, et je m\'adapte plus vite encore. Chaque projet est une opportunité d\'apprendre, d\'innover, de repousser mes limites.',
        rigor: 'Rigueur technique. Un code propre, maintenable et testé n\'est pas un luxe, c\'est une nécessité. J\'applique les meilleures pratiques et les design patterns pour garantir la pérennité de mes applications.',
        collaboration: 'Collaboration authentique. Le développement est un sport d\'équipe. J\'aime échanger avec les designers, les product owners et mes pairs développeurs pour co-créer des solutions qui dépassent les attentes.',
        innovation: 'Innovation pragmatique. J\'adore les nouvelles technologies, mais je les adopte uniquement quand elles apportent une vraie valeur. Mon objectif n\'est pas d\'utiliser le dernier framework à la mode, mais de choisir les bons outils pour résoudre les vrais problèmes.'
      },
      vision: `Le développement web et mobile est en constante mutation. Demain, l'IA générative, le web3, les PWA avancées et les architectures serverless redéfiniront notre métier. Je me prépare activement à ces évolutions, tout en restant ancré dans les fondamentaux : performance, sécurité, accessibilité et expérience utilisateur.

Pour moi, un bon développeur n'est pas celui qui connaît toutes les réponses, mais celui qui sait poser les bonnes questions et trouver rapidement les solutions adaptées.`,
      looking: `Je suis actuellement ouvert aux opportunités en freelance et en CDI pour des projets stimulants où je peux faire la différence. 

Que ce soit pour développer une application web complète de zéro, architecturer et sécuriser une API backend, créer une app mobile cross-platform performante, refondre une interface existante avec une stack moderne, ou contribuer à des projets open source ambitieux — je suis prêt à m'investir pleinement.

Mon idéal ? Rejoindre une équipe qui valorise l'excellence technique autant que l'humain.`
    },

    skills: {
      title: 'Une stack complète pour des projets d\'envergure',
      intro: 'Au fil de mon parcours, j\'ai développé une polyvalence rare : je peux piloter un projet de bout en bout, de la conception de l\'architecture backend jusqu\'au déploiement d\'applications mobiles en production.',
      backend: {
        title: 'Backend : la fondation solide',
        description: `Mon terrain de prédilection, c'est Laravel. J'y construis des API REST robustes, sécurisées et performantes. Gestion d'authentification JWT, middlewares personnalisés, queues pour les traitements asynchrones, optimisation des requêtes SQL — je maîtrise l'écosystème Laravel dans ses moindres détails.

Au-delà du framework, je comprends PHP en profondeur : PSR, Composer, namespaces, traits, interfaces. Je sais concevoir des bases de données relationnelles normalisées (MySQL, PostgreSQL) et intégrer des solutions NoSQL (MongoDB) quand le besoin s'en fait sentir.

La sécurité est au cœur de mes préoccupations : protection CSRF, validation stricte des inputs, prévention des injections SQL, hashage bcrypt, gestion fine des permissions avec des ACL ou RBAC.`
      },
      frontend: {
        title: 'Frontend : l\'expérience qui marque',
        description: `Côté interface, je jongle entre Angular et React selon les contextes. Angular pour les applications d'entreprise complexes, avec son architecture opiniâtrée, ses services, et son typage strict TypeScript. React pour sa flexibilité, sa légèreté et son écosystème riche (Redux, Context API, React Router).

Je ne me contente pas de faire fonctionner une interface : je l'optimise. Lazy loading, tree-shaking, memoization, code splitting — autant de techniques que j'applique pour garantir des temps de chargement rapides et une expérience fluide.

Je travaille main dans la main avec les principes UI/UX : accessibilité (WCAG), design responsive, micro-interactions, et cohérence visuelle. Mes interfaces ne sont pas seulement belles, elles sont pensées pour l'utilisateur.`
      },
      mobile: {
        title: 'Mobile : la puissance du cross-platform',
        description: `Avec React Native et Flutter, je développe des applications mobiles qui rivalisent avec le natif. Navigation fluide, animations performantes, intégration de caméra, géolocalisation, notifications push — je transforme des concepts en apps prêtes pour l'App Store et le Play Store.

Le responsive design est une seconde nature : mes applications s'adaptent intelligemment à tous les formats d'écran, du smartphone au desktop 4K.`
      },
      tools: {
        title: 'Outils et méthodologies : l\'efficacité au quotidien',
        description: `Je maîtrise Git pour versionner proprement mon code et collaborer en équipe (branching strategies, pull requests, code reviews).

Docker me permet de containeriser mes environnements et de garantir la cohérence dev/production.

J'intègre systématiquement des pipelines CI/CD (GitLab CI, GitHub Actions) pour automatiser les tests et les déploiements.

Les tests unitaires (PHPUnit, Jest, Jasmine) et les tests d'intégration font partie intégrante de mon workflow.

Enfin, je travaille en Agile : sprints, stand-ups, rétrospectives, estimation en story points — je m'adapte aux méthodologies de l'équipe.`
      },
      conclusion: 'Ma vraie force, c\'est cette capacité à passer du backend au frontend, du web au mobile, sans perdre en qualité. Je comprends les enjeux de chaque couche applicative et je sais faire les bons arbitrages techniques. Cette vision globale me permet de concevoir des architectures cohérentes et évolutives.'
    },

    projects: [
      {
        id: 1,
        title: 'Plateforme de gestion événementielle',
        challenge: 'Une association souhaitait moderniser sa gestion d\'événements : inscription des participants, validation des présences, envoi automatique de rappels par email, et tableau de bord administrateur en temps réel.',
        stack: ['Laravel 10', 'API REST', 'JWT', 'Angular 16', 'Angular Material', 'RxJS', 'PostgreSQL', 'Docker', 'GitLab CI/CD', 'PHPUnit'],
        result: 'Grâce à cette plateforme, l\'équipe organisatrice a réduit de 60% le temps consacré à la gestion manuelle des inscriptions. Le taux de présence aux événements a augmenté de 25% grâce aux rappels automatiques. L\'interface intuitive a été saluée par les administrateurs, qui peuvent désormais gérer tout en quelques clics.'
      },
      {
        id: 2,
        title: 'Application mobile de suivi fitness',
        challenge: 'Créer une app mobile cross-platform permettant aux utilisateurs de suivre leurs séances de sport, visualiser leurs progrès via des graphiques, et synchroniser leurs données sur tous leurs appareils.',
        stack: ['React Native', 'React Navigation', 'Redux', 'Laravel API', 'OAuth2', 'Victory Native', 'AsyncStorage'],
        result: 'L\'application a été téléchargée par 5 000+ utilisateurs en 6 mois, avec une note moyenne de 4.6/5. Les utilisateurs apprécient particulièrement la fluidité de l\'interface et la fiabilité de la synchronisation. Ce projet m\'a confronté aux défis du mobile : optimisation des performances, gestion de la connectivité intermittente, et publication sur les stores.'
      },
      {
        id: 3,
        title: 'Dashboard analytique en temps réel',
        challenge: 'Une startup avait besoin d\'un tableau de bord pour visualiser en temps réel les métriques de leurs campagnes marketing : clics, conversions, ROI, avec filtrage dynamique par période et canal.',
        stack: ['React 18', 'TypeScript', 'TanStack Query', 'Chart.js', 'Laravel API', 'Laravel Echo', 'Pusher', 'Redis', 'Jest', 'React Testing Library'],
        result: 'Le dashboard affiche maintenant des données en temps réel avec une latence inférieure à 2 secondes. Les équipes marketing peuvent ajuster leurs stratégies instantanément, ce qui a entraîné une amélioration de 30% du ROI sur certaines campagnes. Cette réalisation m\'a permis de maîtriser les architectures temps réel et l\'optimisation des performances pour des applications data-intensive.'
      },
      {
        id: 4,
        title: 'Refonte complète d\'une app de e-commerce',
        challenge: 'Un site e-commerce legacy (PHP procédural + jQuery) souffrait de problèmes de performance, de sécurité et d\'UX. L\'objectif : refonte totale avec une stack moderne, sans interruption de service.',
        stack: ['Laravel', 'API RESTful', 'Stripe', 'React', 'Next.js', 'Tailwind CSS', 'Flutter', 'Apple Pay', 'Google Pay', 'CI/CD'],
        result: 'Après la refonte, le temps de chargement des pages a diminué de 70%. Le taux de conversion a augmenté de 42% grâce à une UX repensée et une performance optimale. Les utilisateurs mobiles disposent maintenant d\'une app native fluide. Ce projet d\'envergure m\'a enseigné la gestion de migrations complexes, la coordination entre équipes, et la mise en production progressive pour minimiser les risques.'
      }
    ],

    contact: {
      title: 'Transformons votre vision en réalité digitale',
      message: `🚀 Vous avez un projet ambitieux ? Une idée qui mérite d'exister ? Je suis là pour la concrétiser.

En tant que développeur full-stack expérimenté, je propose bien plus qu'un simple service de développement. Je vous offre un partenariat technique complet, de la conception à la mise en production, avec un suivi post-livraison.

📱 APPLICATIONS MOBILES (React Native & Flutter)
Je développe des applications mobiles natives iOS et Android performantes, avec une UX/UI moderne et intuitive. Que ce soit pour une app e-commerce, une plateforme de réservation, un réseau social, ou tout autre concept innovant — je maîtrise l'ensemble du processus : wireframes, design, développement, intégration API, notifications push, paiements en ligne, et publication sur les stores.

💻 APPLICATIONS WEB (Angular & React)
Je crée des interfaces web modernes et réactives qui captivent vos utilisateurs. Dashboard administratifs, plateformes SaaS, sites vitrines haut de gamme, applications métiers complexes — je transforme vos besoins en solutions web élégantes et performantes, optimisées pour le SEO et la conversion.

⚙️ BACKEND ROBUSTE (Laravel & PHP)
Je construis des architectures backend solides et scalables : API REST/GraphQL sécurisées, systèmes d'authentification avancés, gestion de bases de données complexes, intégrations tierces (Stripe, PayPal, SMS, Mailing), microservices, et bien plus. Votre infrastructure technique sera fiable, maintenable et évolutive.

🎯 MON APPROCHE UNIQUE

✅ ANALYSE APPROFONDIE : Je prends le temps de comprendre votre business model, vos utilisateurs cibles, et vos objectifs commerciaux pour créer une solution parfaitement adaptée.

✅ ARCHITECTURE PENSÉE : Avant d'écrire la moindre ligne de code, je conçois une architecture technique propre, documentée et évolutive qui anticipe vos besoins futurs.

✅ DÉVELOPPEMENT AGILE : Livraisons fréquentes, feedback continu, ajustements en temps réel. Vous restez maître de votre projet à chaque étape.

✅ CODE DE QUALITÉ : Tests automatisés, code reviews, documentation complète, respect des best practices. Je ne livre que du code dont je suis fier.

✅ PERFORMANCE & SÉCURITÉ : Optimisation des temps de chargement, protection contre les vulnérabilités, conformité RGPD. Votre application sera rapide et sécurisée.

✅ SUPPORT POST-LAUNCH : Formation de votre équipe, documentation technique, maintenance évolutive, corrections de bugs. Je reste disponible après la livraison.

🎓 EXPERTISE CERTIFIÉE
Plus de [X] projets livrés avec succès dans des domaines variés : e-commerce, fintech, santé, éducation, logistique. Des clients satisfaits qui reviennent et recommandent mes services.

💼 POUR QUI ?

• STARTUPS : Besoin d'un MVP rapide pour lever des fonds ? Je transforme votre pitch en produit concret en quelques semaines.

• AGENCES : Débordés par les projets ? Je renforce votre équipe technique en tant que freelance expert.

• PME/GRANDES ENTREPRISES : Votre legacy code vous freine ? Je modernise votre stack technologique et optimise vos processus.

• ENTREPRENEURS : Une idée mais pas de CTO ? Je deviens votre bras droit technique et vous accompagne de A à Z.

🌟 CE QUE MES CLIENTS APPRÉCIENT LE PLUS

→ Ma réactivité : Réponse sous 24h maximum, disponibilité pour les urgences.
→ Ma pédagogie : J'explique clairement les choix techniques, pas de jargon incompréhensible.
→ Mon honnêteté : Si quelque chose n'est pas faisable ou pertinent, je vous le dis franchement.
→ Mon engagement : Vos délais sont mes délais. Vos objectifs sont mes objectifs.
→ Ma passion : Chaque ligne de code est écrite avec soin et fierté.

💰 TARIFS TRANSPARENTS
Forfait projet ou régie au jour/homme selon vos besoins. Devis détaillé gratuit sous 48h. Pas de mauvaises surprises, pas de coûts cachés.

📞 PRÊT À DÉMARRER ?

Que votre projet soit clairement défini ou encore à l'état d'idée, contactez-moi pour un premier échange gratuit et sans engagement. Je vous conseillerai objectivement sur la meilleure approche technique et vous proposerai un plan d'action concret.

Ensemble, créons quelque chose d'exceptionnel. 🚀`,
      email: 'gueye.medoune@mit.edu.sn',
      linkedin: 'https://linkedin.com/in/madu-tech',
      github: 'https://github.com/Madu_Tech',
      cv: '/cv.pdf',
      primaryCta: 'Discutons de votre projet',
      secondaryCta: 'Voir mon GitHub'
    },

    metaDescription: 'Développeur full-stack Laravel, Angular, React, React Native & Flutter. Je crée des applications web et mobiles performantes avec passion et rigueur.'
  };

  getPortfolioData(): PortfolioData {
    return this.portfolioData;
  }

  getHero() {
    return this.portfolioData.hero;
  }

  getAbout() {
    return this.portfolioData.about;
  }

  getSkills() {
    return this.portfolioData.skills;
  }

  getProjects() {
    return this.portfolioData.projects;
  }

  getContact() {
    return this.portfolioData.contact;
  }
}
