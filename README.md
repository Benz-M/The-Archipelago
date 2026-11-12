# THE ARCHIPELAGO

**THE ARCHIPELAGO** is a tourism web application that showcases the diverse beauty of the Philippines. It brings together information about Filipino culture, activities, food, and destinations in one accessible digital experience.

This project is developed using **React and TypeScript** as a course requirement for **ITE2 – Front-End Development**.

## Project Overview

The Philippines is home to a wide range of cultural traditions, local cuisines, activities, and destinations. THE ARCHIPELAGO aims to present these attractions through a user-friendly tourism website.

Visitors can explore content featuring:

- **Culture** — Filipino traditions, heritage, festivals, and local communities.
- **Activities** — Experiences and things to do in different parts of the country.
- **Food** — Filipino dishes, regional specialties, and local food experiences.
- **Places** — Tourist destinations, landmarks, beaches, and other notable locations.

The application is intended to make discovering the Philippines more engaging and convenient through an organized, visually appealing web interface.

## Technologies and Dependencies

The project uses the following front-end technologies and libraries:

| Technology / Dependency | Purpose |
| --- | --- |
| React | Builds the user interface using reusable components. |
| TypeScript | Adds static typing to JavaScript to improve code clarity and help catch errors during development. |
| Tailwind CSS | Provides utility classes for styling and responsive layouts. |
| Lucide React | Supplies consistent, customizable icons for the interface. |
| React Router | Handles client-side navigation between application pages. |
| Vite | Provides the development server and build tooling for the React application. |

### Main Dependencies

- **Tailwind CSS** — Utility-first CSS framework used to style page layouts, components, spacing, colors, and responsive behavior.
- **Lucide Icons (`lucide-react`)** — Icon library used to display interface icons as React components.
- **React Router (`react-router-dom`)** — Routing library used to navigate between pages without requiring a full page reload.

## Requirements

Before setting up the project, install the following:

- [Node.js](https://nodejs.org/) — Use a current LTS version.
- npm — Included with Node.js.
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor.
- Git (optional) — Useful for cloning and managing the project repository.

To verify that Node.js and npm are installed, open a terminal and run:

```bash
node -v
npm -v
```

Both commands should display version numbers.

## Installation and Local Setup

Follow these steps to run THE ARCHIPELAGO on your local machine.

### 1. Obtain the project

If the project is hosted in a Git repository, clone it:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd <project-folder>
```

If you already have the project folder on your computer, open that folder in your terminal or code editor instead.

### 2. Install project dependencies

Run the following command from the project root directory:

```bash
npm install
```

This installs the packages listed in `package.json` and creates the local `node_modules` directory.

### 3. Start the development server

For a Vite-based React project, run:

```bash
npm run dev
```

Vite will display a local development URL in the terminal, commonly:

```text
http://localhost:5173/
```

Open the displayed URL in your browser to view the application. Keep the terminal running while developing.

### 4. Stop the development server

To stop the server, focus the terminal where it is running and press:

```text
Ctrl + C
```

## Useful Development Commands

| Command | Description |
| --- | --- |
| `npm install` | Installs the project's dependencies. |
| `npm run dev` | Starts the local development server. |
| `npm run build` | Creates an optimized production build. |
| `npm run preview` | Locally previews the production build, if configured. |

The available commands are defined in the project's `package.json`. If a command is unavailable, check the `scripts` section of that file.

## Project Structure

A typical React + TypeScript + Vite project may use a structure similar to the following. The actual folders and filenames may differ depending on the project implementation.

```text
THE-ARCHIPELAGO/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
```

- `public/` — Static files served directly by the application.
- `src/assets/` — Images, fonts, and other assets imported by the source code.
- `src/components/` — Reusable interface components.
- `src/pages/` — Page-level components used by the application.
- `src/App.tsx` — Main application component.
- `src/main.tsx` — Application entry point.
- `src/index.css` — Global styles and Tailwind CSS entry point, depending on the Tailwind setup.
- `package.json` — Project metadata, dependencies, and npm scripts.

## Installing Individual Libraries

If the dependencies are not already listed in `package.json`, install the relevant packages using the commands below.

### Tailwind CSS

For a Vite project using Tailwind CSS v4:

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure the Tailwind Vite plugin in `vite.config.ts` and add the Tailwind import to the main CSS file:

```css
@import "tailwindcss";
```

Follow the official installation instructions if the project uses Tailwind CSS v3 or a different build setup.

### Lucide React

```bash
npm install lucide-react
```

Example usage:

```tsx
import { MapPin } from "lucide-react";

export default function Example() {
  return <MapPin size={20} />;
}
```

### React Router

```bash
npm install react-router-dom
```

Example usage:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

Adjust the import paths to match the actual locations of your page components. If the project already uses a different React Router package or version, follow the setup for that installed version rather than installing a second routing package.

## Troubleshooting

- **`npm` is not recognized:** Install Node.js, then restart the terminal or code editor.
- **The local page does not open:** Check the terminal for the URL printed by Vite and confirm that the development server is still running.
- **A dependency cannot be found:** Run `npm install` from the directory containing `package.json`.
- **Changes do not appear:** Save the file and refresh the browser. Check the terminal and browser console for errors.
- **A command such as `npm run dev` is missing:** Open `package.json` and inspect the `scripts` section. The project may use a different development command.

## Academic Context

**Course:** ITE2 – Front-End Development  
**Project:** THE ARCHIPELAGO  
**Application Type:** Tourism Web Application  
**Technology Stack:** React, TypeScript, Tailwind CSS, Lucide React, and React Router

THE ARCHIPELAGO is an academic front-end development project intended to demonstrate the use of modern web technologies in creating an informative and accessible tourism experience focused on the Philippines.
