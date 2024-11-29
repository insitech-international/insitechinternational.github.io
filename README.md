# homepage

This is the landing page of Insitech International.

<!-- logo bg color: #07363c
main text color: #e4c19d
secondary color: #fff -->

```
insitech-website/
├── src/
│   │   └── Shared/

│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── styles/
│   │   ├── base/
│   │   │   ├── _reset.css
│   │   │   ├── _typography.css
│   │   │   └── _variables.css
│   │   ├── modules/
│   │   │   ├── _buttons.css
│   │   │   ├── _forms.css
│   │   │   └── _cards.css
│   │   └── main.css
│   ├── js/
│   │   ├── utils/
│   │   │   ├── animations.js
│   │   │   └── helpers.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── emailService.js
│   │   └── main.js
│   └── templates/
│       └── partials/
│           ├── head.html
│           ├── scripts.html
│           └── meta.html
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── dist/
├── config/
│   └── webpack.config.js
└── package.json
```

Let's break down the structure and the modularization strategy:

1. Core HTML Components:

- Break index.html into logical, reusable components
- Each component has its own HTML, CSS, and JS files
- Components are organized by feature/functionality

2. Separation of Concerns:

- Components: Reusable UI elements
- Assets: Static files like images and fonts
- Styles: Global and modular CSS
- JS: Utilities and business logic
- Templates: Reusable HTML partials

3. Key Modularization Points:

a. Header Section:

- Navigation
- Logo
- Mobile menu
- Social links

b. Hero Section:

- Slider
- Animation elements
- Call-to-action buttons

c. Services Section:

- Service cards
- Icons
- Descriptions

d. Portfolio Section:

- Project cards
- Modal windows
- Image galleries

e. Contact Section:

- Contact form
- Map integration
- Contact details

Would you like me to provide the specific code splitting for any of these components? I can show you how to break down a specific section into its modular parts with the appropriate HTML, CSS, and JavaScript separation.
