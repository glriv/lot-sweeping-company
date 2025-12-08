# Lot Sweeping Company Website

A professional single-page application built with Angular for a lot sweeping and pavement maintenance company.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Clean, professional interface with smooth animations
- **Easy Navigation** - Simple three-page structure (Home, About, Employment)
- **PDF Download** - I-9 employment form download functionality
- **Fast Loading** - Optimized for performance
- **SEO Friendly** - Built with best practices for search engines

## 📋 Pages

### Home

- Hero section with company introduction
- Services showcase
- Why choose us section
- Call-to-action for quotes

### About

- Company story and history
- Mission and values
- Team member profiles
- Company statistics

### Employment

- Current job openings
- Benefits of working with the company
- I-9 form download
- Application instructions

## 🛠️ Built With

- [Angular 18+](https://angular.io/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [CSS3](https://www.w3.org/Style/CSS/) - Styling
- [Angular Router](https://angular.io/guide/router) - Navigation

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Setup

1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/lot-sweeping-company.git
cd lot-sweeping-company
```

2. Install dependencies

```bash
npm install
```

3. Add I-9 PDF form

- Download the official I-9 form from [USCIS](https://www.uscis.gov/i-9)
- Place it in `src/assets/forms/i-9.pdf`

4. Update company information

- Edit component files to replace placeholder text
- Update contact information in header and footer components
- Customize colors and styling as needed

## 🚀 Development

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes.

## 🏗️ Build

Build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run unit tests:

```bash
ng test
```

Run end-to-end tests:

```bash
ng e2e
```

## 📤 Deployment

### AWS S3 + CloudFront

1. Build the production version

```bash
ng build --configuration production
```

2. Upload to S3

```bash
aws s3 sync dist/lot-sweeping-company/browser s3://YOUR-BUCKET-NAME --delete
```

### AWS Amplify

```bash
amplify publish
```

### Other Hosting Options

- Netlify: Drag and drop the `dist` folder
- Vercel: Connect your GitHub repository
- Firebase Hosting: `firebase deploy`

## 📁 Project Structure

```
lot-sweeping-company/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navigation component
│   │   │   ├── footer/          # Footer component
│   │   │   ├── home/            # Home page
│   │   │   ├── about/           # About page
│   │   │   └── i9-download/     # Employment page
│   │   ├── app.component.*      # Root component
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Route definitions
│   ├── assets/
│   │   └── forms/
│   │       └── i-9.pdf          # Employment form
│   ├── styles.css               # Global styles
│   └── index.html               # Main HTML file
├── angular.json                 # Angular configuration
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                    # This file
```

## 🎨 Customization

### Changing Colors

Edit the color values in component CSS files:

- Primary: `#3498db` (Blue)
- Secondary: `#667eea` (Purple)
- Success: `#27ae60` (Green)
- Dark: `#2c3e50` (Dark Blue)

### Adding New Pages

1. Generate new component

```bash
ng generate component components/YOUR-PAGE
```

2. Add route in `app.routes.ts`

```typescript
{ path: 'your-page', component: YourPageComponent }
```

3. Add navigation link in header component

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Jorge Rivera Lopez - Initial work - [YourGitHub](https://github.com/YOUR-USERNAME)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Inspired by [Paradise Sweeping](https://paradisesweeping.com)
- Angular team for the amazing framework
- Community contributors

---

**Made with ❤️ for the lot sweeping industry**
