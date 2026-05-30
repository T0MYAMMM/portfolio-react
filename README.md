# Portfolio — Thomas Stefen Mardianto

A personal portfolio website built with React, showcasing projects, skills, and contact information.
The site is a single-page application with smooth-scroll navigation, animated section transitions,
and a responsive layout that works across mobile, tablet, and desktop viewports.

---

## Architecture / Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| UI library | React 18 (Create React App)                     |
| Styling    | Bootstrap 5, React Bootstrap, CSS (App.css)     |
| Animations | animate.css, react-on-screen (visibility hooks) |
| Carousel   | react-multi-carousel                            |
| Icons      | react-bootstrap-icons, SVG assets               |
| Fonts      | Centra No2 (local TTF, self-hosted)             |

---

## Project Structure

```
portfolio-react/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── font/          # Self-hosted Centra No2 font files
│   │   └── img/           # All image and SVG assets
│   ├── components/
│   │   ├── NavBar.js      # Fixed top navigation with scroll-spy
│   │   ├── Banner.js      # Hero section with typewriter greeting animation
│   │   ├── Skills.js      # Carousel of technology skills
│   │   ├── Projects.js    # Tabbed project gallery
│   │   ├── ProjectCard.js # Individual project card with modal detail view
│   │   ├── Contact.js     # Contact form (opens mailto link)
│   │   └── Footer.js      # Footer with social links
│   ├── data/
│   │   └── projects.js    # Project data: title, description, image, links
│   ├── hooks/
│   │   └── useTypewriter.js  # Reusable typewriter animation hook
│   ├── App.js             # Root component: composes all sections
│   ├── App.css            # Global styles and component-level CSS
│   └── index.js           # React DOM entry point
├── .env.example           # Environment variable reference (copy to .env)
└── package.json
```

---

## Local Setup and Installation

**Requirements:** Node.js 16+ and npm.

1. Clone the repository:

   ```bash
   git clone https://github.com/T0MYAMMM/portfolio-react.git
   cd portfolio-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the environment variable template:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set your contact email address.

4. Start the development server:

   ```bash
   npm start
   ```

   The application will open at `http://localhost:3000`.

---

## Usage

| Command         | Description                               |
|-----------------|-------------------------------------------|
| `npm start`     | Start the local development server        |
| `npm run build` | Create an optimized production build      |
| `npm test`      | Run the test suite                        |

To update portfolio content, edit the data file:

- **Projects** — `src/data/projects.js`: add or modify entries in the `website`, `mobile`, and `other` arrays.
- **Skills** — `src/components/Skills.js`: update the `SKILL_ITEMS` array.
- **Social links** — `src/components/NavBar.js` and `src/components/Footer.js`: update the href values in the constants.

---

## Future Improvements

- Migrate from Create React App to Vite for faster build times and smaller bundles.
- Replace external skill icon URLs with locally hosted SVG assets to avoid third-party dependencies.
- Integrate a serverless contact form backend (e.g., AWS Lambda, Vercel serverless function, or Formspree) to replace the current mailto fallback.
- Add a dark mode toggle using a React context and CSS custom properties.
- Introduce TypeScript for type safety across components and data definitions.
- Add a resume download button linked to a hosted PDF.
- Write component-level unit tests with React Testing Library.
