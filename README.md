# Office notarial Marceau, Lenglet & Brard

Site vitrine d’un office notarial **fictif**, réalisé comme étude de cas : accueil, présentation de
l’office et des notaires, domaines d’intervention, annonces immobilières, simulateur de frais
d’acquisition, actualités, demande de rendez-vous en trois étapes et page de contact.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router), React 19, JavaScript
- CSS Modules par composant, variables CSS globales dans `src/app/globals.css`
- Polices chargées avec `next/font/google` (Cormorant Garamond, Source Sans 3)
- Images servies par `next/image` depuis Unsplash
- ESLint (configuration Next.js) et Prettier

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # sert le build
npm run lint
npm run format   # formate le code avec Prettier
```

Node.js 18.18 ou plus récent est nécessaire.

## Comment le projet est organisé

### Les routes : un dossier = une page

Avec l’App Router, l’arborescence de `src/app` définit les URL. Chaque dossier qui contient un
`page.js` devient une page :

```
src/app/
├── layout.js            mise en page commune : <html lang="fr">, polices, en-tête, pied de page
├── globals.css          variables (couleurs, typographie, espacements) et styles de base
├── icon.svg             favicon, détecté automatiquement par Next.js
├── page.js              /
├── not-found.js         page 404
├── office/page.js       /office
├── domaines/page.js     /domaines
├── annonces/page.js     /annonces
├── frais/page.js        /frais
├── actualites/page.js   /actualites
├── rendez-vous/page.js  /rendez-vous
├── contact/page.js      /contact
└── mentions-legales/page.js
```

`layout.js` enveloppe toutes les pages : l’en-tête et le pied de page ne sont donc écrits qu’une
fois. Chaque page exporte un objet `metadata` (titre, description) ; le layout définit le modèle
`%s · Office notarial Marceau, Lenglet & Brard`, ce qui donne un titre d’onglet par page sans code
supplémentaire.

Le reste du code est rangé à côté :

- `src/components/` : un dossier par composant, avec son fichier `.module.css`. Les sections propres
  à l’accueil sont regroupées dans `components/home/`.
- `src/data/` : tout le contenu (office, équipe, domaines, annonces, actualités, catalogue de
  photos…). Les pages ne contiennent presque pas de texte en dur, on modifie le contenu ici.
- `src/lib/` : fonctions sans interface, faciles à tester à part (calcul des frais, dates et jours
  fériés, créneaux de rendez-vous, formatage des montants, URL Unsplash).

### Server Components et Client Components

Dans l’App Router, **tout composant est un Server Component par défaut** : il est rendu en HTML au
moment du build (ou sur le serveur) et n’envoie pas de JavaScript au navigateur. C’est le cas de la
quasi-totalité du site : pages, cartes d’annonces, équipe, frise historique, FAQ (qui utilise
simplement `<details>`), pied de page…

Un composant ne devient **Client Component** que s’il commence par `'use client'`. Il en a besoin
dès qu’il utilise un état (`useState`), un effet (`useEffect`) ou une API du navigateur. Dans ce
projet, il y en a six, tous volontairement petits :

| Composant                        | Pourquoi côté client                                              |
| -------------------------------- | ----------------------------------------------------------------- |
| `Header/MainNav.js`              | ouverture du menu mobile et lien actif (`usePathname`)            |
| `ListingsBrowser`                | filtre des annonces par type                                      |
| `FeeCalculator`                  | recalcul des frais à chaque saisie                                |
| `BookingFlow`                    | les trois étapes, la validation et la confirmation du rendez-vous |
| `CopyButton`                     | accès au presse-papiers (`navigator.clipboard`)                   |
| `AppointmentBand/NextPermanence` | date de la prochaine permanence, calculée le jour de la visite    |

Un Server Component peut afficher un Client Component (par exemple `Header`, côté serveur, contient
`MainNav`). L’inverse ne fonctionne pas de la même façon : tout ce qu’un Client Component importe
part dans le JavaScript du navigateur. On garde donc la partie client la plus petite possible.

Les pages étant générées au build, une date calculée côté serveur serait figée au jour du build.
C’est pour cela que la prochaine permanence et les jours proposés à la réservation sont calculés
dans le navigateur.

### Images

`next/image` optimise les photos (redimensionnement, formats modernes, chargement différé sauf pour
les visuels en haut de page marqués `priority`). Le domaine `images.unsplash.com` est autorisé dans
`next.config.mjs`. Toutes les photos sont déclarées dans `src/data/photos.js` avec leur texte
alternatif en français.

## Contenu fictif

Tout est inventé : l’office, les notaires, les collaborateurs, l’adresse (code postal 49999), les
biens et les actualités. Les numéros de téléphone sont dans la tranche 01 99 00 xx xx réservée par
l’Arcep à la fiction, les adresses e-mail utilisent le domaine réservé `.example`. Le formulaire de
rendez-vous n’envoie rien.

Les photographies sont de vraies prises de vue publiées sur [Unsplash](https://unsplash.com) sous
la licence Unsplash ; les portraits illustrent des personnages fictifs.

Les taux du simulateur (tarif des notaires, droits de mutation, contribution de sécurité
immobilière) sont ceux en vigueur au moment de l’écriture ; le résultat reste une estimation.
