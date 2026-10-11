# FlameOps-LMS

A learning management system (LMS) for FlameOps training classes — a technical academy for cloud-native infrastructure. Built with Astro 7 + Tailwind CSS 4 as a static site, with course and lesson content from mock data.

## 🚀 Project Structure

```text
/
├── public/
│   └── favicons + logos
├── src
│   ├── components/
│   │   ├── AppHeader.astro
│   │   ├── CourseSidebar.astro
│   │   ├── Logo.astro
│   │   ├── MainNav.astro
│   │   └── ThemeToggle.astro
│   ├── data/
│   │   └── course.ts        # hardcoded mock course/lesson content
│   ├── layouts/
│   │   └── Layout.astro     # shared HTML shell + theme bootstrap
│   ├── pages/
│   │   ├── index.astro
│   │   ├── courses.astro
│   │   ├── course.astro
│   │   ├── lesson.astro
│   │   └── login.astro
│   └── styles/
│       └── global.css       # Tailwind v4 + theme tokens
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into [the Astro Discord server](https://astro.build/chat).
