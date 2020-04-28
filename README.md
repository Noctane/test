Ce texte constitue l'exercice à réaliser dans le cadre d'un recrutement de développeur front.
Cet exercice doit être réalisé en 3 heures environ.

Récuperation des données de référence :
```
  https://jsonplaceholder.typicode.com/users
```

Il faut donc enregistrer les données dans un store redux, afin de pouvoir les afficher sous forme de liste :

- Nom
- Prénom
- Email
- Ville
- Companie

Une fois les données récupérées et stockées, il faut ajouter la capacité de filtrer ces données via :

- Nom
- Ville
- Nom de la companie

Il faut prévoir également la possibilité de supprimer un utilisateur de la liste, d'en ajouter un via une popup (avec toutes les infos)

Merci de respecter les bonnes pratiques (git, linter, hook, component), de FORK le projet et de push sur votre projet.

Pensez a refaire le README
Good luck !

---

## Installation et démarrage

- React 16.13.1
- Redux 7.1.3
- Bootstrap 4

Linter : ESlint -> configuration de Create-react-app

Pour l'installation :
```
npm install
```

Lancement du projet:
```
npm start
```
Une fenêtre du navigateur devrait automatiquement s'ouvrir sur http://localhost:3000

## Features & feedback

- Récupérer une liste d'utilisateur - _OK_
- Filtrer sur les noms, nom de compagnie et ville - _OK_
- Supprimer un utilisateur (côté client) - _OK_
- Afficher une modal - _OK_
- Ajouter un utilisateur - _OK_

Pour l'ajout d'utilisateur j'ai pris le parti de ne pas intégrer la totalité des informations mais plutôt de démontrer la façon dont j'ai mis en place la feature seulement avec un extrait.

Dans l'idéal il aurait fallu mettre en place une validation de formulaire mais cela me semble un peu juste compte tenu du temps imparti.


