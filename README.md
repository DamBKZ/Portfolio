# Portfolio – Damien Baczkiewicz

Mon portfolio personnel : présentation, projets et contact.

Développeur junior chez CGI et étudiant en Mastère MAALSI au CESI d'Arras.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (thème clair / sombre)
- Site bilingue français / anglais

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Organisation

- `src/components/` : les sections du site (Header, Hero, About, Projects, ContactForm, Footer)
- `src/data/projects.ts` : la liste des projets (ajouter un projet = ajouter une entrée ici)
- `src/data/technologies.ts` : les icônes de la stack
- `src/data/translations/` : les textes en français et en anglais
- `src/context/` : thème et langue (mémorisés dans le navigateur)
