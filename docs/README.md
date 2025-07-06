# TRT World Case Study

## Live Demo
[https://trtworld.netlify.app](https://trtworld.netlify.app)

## Project Purpose
This project is a modern, responsive, and SEO-friendly news portal interface developed for TRT World as a case study.

## Installation & Running
```bash
npm install
npm run dev
```

## Folder Structure
- `src/app`: Next.js app router pages
- `src/components`: All React components
- `src/styles`: Global and shared styles
- `src/types`: Shared type definitions
- `public`: Static files (logo, favicon, etc.)
- `docs`: Documentation files

## Technologies Used
- Next.js 13+
- TypeScript
- styled-components (CSS-in-JS)
- Axios
- Jest/Testing Library (for tests, if any)
- A11Y (basic accessibility improvements)

## Developer Notes
- Dynamic metadata API is used for SEO.
- Responsive and pixel-perfect design.
- Reusable styled-components are used to minimize repeated CSS.
- All props and types are defined with TypeScript.

## Navigation Tips
To access the Article Page, you can:

- Type "article" in the search field on the homepage.

- Or directly navigate to /article in the URL bar.

## Test
```bash
npm run test
``` 