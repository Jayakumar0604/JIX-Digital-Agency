# Jix Digital Agency

A modern, responsive digital agency website built with React and Vite. Showcasing professional web design and development services with a clean, user-friendly interface.

**🌐 Live Demo:** [https://jix-digital-agency.netlify.app/](https://jix-digital-agency.netlify.app/)

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?logo=react-router&logoColor=white)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and intuitive user interface with smooth navigation
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Service Showcase**: Highlighting services including:
  - UI/UX Design
  - Website Development
  - Digital Marketing
  - Social Media Management
  - E-Commerce Solutions
  - Technical Support
- **Interactive Components**: Dynamic navigation with mobile menu, customer testimonials, and quote sections
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **SEO Friendly**: Structured routing and semantic HTML

## 🛠️ Tech Stack

- **React 19.1.1** - Modern UI library
- **Vite 7.1.14** - Next-generation frontend tooling
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **React Icons 5.0.0** - Icon library

## 📁 Project Structure

```
digital-agency/
├── public/
│   ├── _redirects       # Netlify redirects configuration
│   └── favicon.svg
├── src/
│   ├── Components/
│   │   ├── Achievement/    # Achievement showcase component
│   │   ├── Background/     # Background image component
│   │   ├── Customer/       # Customer testimonials
│   │   ├── FeatureItems/   # Feature display items
│   │   ├── Footer/         # Footer component
│   │   ├── Header/         # Navigation header
│   │   ├── Help/           # Services help section
│   │   └── Quote/          # Quote request section
│   ├── Layouts/
│   │   └── Mainlayout.jsx  # Main layout wrapper
│   ├── Pages/
│   │   ├── About/          # About page components
│   │   ├── Contact/        # Contact page with form
│   │   ├── Home/           # Home page components
│   │   └── Services/       # Services page
│   ├── assets/            # Images and static assets
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── dist/                  # Production build output
├── vite.config.js         # Vite configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digital-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production (outputs to `dist/`)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Pages Overview

### Home Page
- Hero section with call-to-action
- Services overview
- Customer testimonials
- Quote request section

### About Page
- Company introduction and mission
- Team information
- Service offerings list
- Company achievements

### Services Page
- Comprehensive service descriptions
- Detailed service breakdown
- Customer testimonials
- Contact information

### Contact Page
- Contact form
- Company contact details
- Location information

## 🌐 Deployment

This project is configured for deployment on Netlify with:
- SPA routing support via `_redirects` file
- Optimized production builds
- Fast loading times

The live version is deployed at: [https://jix-digital-agency.netlify.app/](https://jix-digital-agency.netlify.app/)

## 🎯 Key Features Implementation

- **Responsive Navigation**: Mobile-friendly hamburger menu with smooth transitions
- **Routing**: Client-side routing using React Router for seamless navigation
- **Component Architecture**: Modular component structure for maintainability
- **Tailwind CSS**: Utility-first styling for rapid development
- **Performance**: Optimized images and lazy loading where applicable

## 📝 License

This project is private and proprietary.

## 👥 Contact

For inquiries about this project or Jix Digital Agency services, please visit the [live website](https://jix-digital-agency.netlify.app/) or use the contact form on the site.

---

**Built with ❤️ using React and Vite**
