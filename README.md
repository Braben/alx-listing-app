# ALX Listing App

## Overview

The **ALX Listing App** is a simple property listing web application inspired by Airbnb.  
Its main goal is to provide a platform where users can view and interact with property listings — such as houses, apartments, or rooms — with options to explore details or make bookings.

This project serves as a foundation for building scalable front-end applications using **NextJS + TypeScript**, focusing on reusable components, clean architecture, and modular code organization.

---

### `components/`

Contains reusable UI components used throughout the project.

- **common/Card.tsx:** A reusable Card component for displaying property details such as title, description, and image.
- **common/Button.tsx:** A reusable Button component used for various actions like “Book Now” or “View Details”.

---

### `interfaces/`

Houses all TypeScript interfaces to ensure strong typing and consistency across components.  
Currently includes:

- **CardProps** — defines the structure for card-related data.
- **ButtonProps** — defines the structure for button properties.

---

### `constants/`

Contains global constants and reusable values used across the app, such as API URLs, configuration data, and UI text labels.

---

### `public/assets/`

This directory stores static files such as images, icons, or logos that are used throughout the application.

---

## Getting Started

### Clone the repository

````bash
git clone https://github.com/braben/alx-listing-app.git
cd alx-listing-app


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
