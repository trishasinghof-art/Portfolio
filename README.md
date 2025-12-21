# React Portfolio Project

A modern, responsive portfolio website built with React, Vite, and React Router. This is a production-ready scaffold with all configurations and boilerplate set up - just add your content!

## 🚀 Features

- ⚡ **Vite** - Lightning-fast development and build tool
- ⚛️ **React 18** - Latest stable version with modern features
- 🛣️ **React Router** - Multi-page navigation
- 🎨 **CSS Modules** - Scoped styling for each component
- 📱 **Responsive Design** - Mobile-friendly layouts
- 🧹 **ESLint** - Code quality and consistency
- 📦 **Production Ready** - Optimized build configuration

## 📁 Project Structure

```
portfolio1/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, and other media
│   │   ├── images/
│   │   └── icons/
│   ├── components/       # Reusable components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── pages/            # Page components
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── WebAdventures/
│   │   │   ├── WebAdventures.jsx
│   │   │   └── WebAdventures.css
│   │   ├── DesignGallery/
│   │   │   ├── DesignGallery.jsx
│   │   │   └── DesignGallery.css
│   │   └── About/
│   │       ├── About.jsx
│   │       └── About.css
│   ├── routes/           # Route configuration
│   │   └── AppRoutes.jsx
│   ├── styles/           # Global styles
│   │   └── global.css
│   ├── App.jsx           # Main app component
│   └── main.jsx          # App entry point
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore rules
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization Guide

### Adding Your Content

All components are set up with placeholder content. Simply edit the JSX and CSS files:

1. **Home Page** - Edit `src/pages/Home/Home.jsx` and `Home.css`
2. **Skills** - Edit `src/pages/Skills/Skills.jsx` and `Skills.css`
3. **Web Adventures** - Edit `src/pages/WebAdventures/WebAdventures.jsx` and `WebAdventures.css`
4. **Design Gallery** - Edit `src/pages/DesignGallery/DesignGallery.jsx` and `DesignGallery.css`
5. **About** - Edit `src/pages/About/About.jsx` and `About.css`

### Adding Images

1. Place images in `src/assets/images/`
2. Import in your component:
   ```jsx
   import myImage from '../assets/images/myImage.jpg';
   ```
3. Use in JSX:
   ```jsx
   <img src={myImage} alt="Description" />
   ```

### Updating Navigation

Edit `src/components/Navbar/Navbar.jsx` to modify navigation links and branding.

### Global Styles

Edit `src/styles/global.css` to change:
- Typography
- Color scheme
- Default spacing
- Container widths

## 🌐 Routes

The following routes are configured:

- `/` - Home page
- `/skills` - Skills showcase
- `/web-adventures` - Web development projects
- `/design-gallery` - Design portfolio
- `/about` - About page

To add new routes, edit `src/routes/AppRoutes.jsx`.

## 🔧 Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **ESLint** - Code linting

## 📦 Dependencies

### Production Dependencies
- `react` - ^18.3.1
- `react-dom` - ^18.3.1
- `react-router-dom` - ^6.26.0

### Development Dependencies
- `vite` - ^5.3.4
- `@vitejs/plugin-react` - ^4.3.1
- `eslint` - ^8.57.0
- `eslint-plugin-react` - ^7.34.3
- `eslint-plugin-react-hooks` - ^4.6.2
- `eslint-plugin-react-refresh` - ^0.4.7

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

Add your contact information here once you customize the portfolio.

---

**Ready to build your portfolio?** Just run `npm install && npm run dev` and start editing!
