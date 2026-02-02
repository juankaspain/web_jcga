# Juan Carlos García Arriero - Professional Portfolio

Modern, professional portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber (optional)
- **Content**: MDX for rich project descriptions
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/juankaspain/web_jcga.git
cd web_jcga
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
web_jcga/
├── app/
│   ├── public_root/         # Main layout group
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── about/              # About page
│   ├── experience/         # Experience page
│   ├── projects/           # Projects listing & detail
│   ├── certifications/     # Certifications page
│   ├── skills/             # Skills page
│   ├── content/            # Blog/content pages
│   ├── contact/            # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Header, Footer, Nav
│   ├── home/               # Home page components
│   ├── ui/                 # Reusable UI components
│   └── ...
├── lib/
│   ├── data/               # Data files (experience, projects, etc.)
│   ├── animations/         # Framer Motion variants
│   └── utils/              # Utility functions
└── public/
    └── images/             # Static images
```

## 🎨 Features

- ✅ **Modern Design**: Clean, professional design with smooth animations
- ✅ **Fully Responsive**: Mobile-first approach
- ✅ **Dark Theme**: Optimized for readability
- ✅ **Performance Optimized**: Server Components, code splitting
- ✅ **SEO Ready**: Proper metadata and semantic HTML
- ✅ **Accessible**: WCAG 2.1 AA compliant
- ✅ **Type-Safe**: Full TypeScript coverage

## 📝 Content Management

Content is managed through TypeScript files in `lib/data/`:

- `experience.ts` - Professional experience
- `projects.ts` - Portfolio projects
- `skills.ts` - Technical skills
- `certifications.ts` - Certifications and badges

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

Vercel will automatically detect Next.js and configure everything.

## 📄 License

This project is personal and not open for public use.

## 👤 Author

**Juan Carlos García Arriero**
- LinkedIn: [juancarlosga](https://www.linkedin.com/in/juancarlosga/)
- Email: juanca755@hotmail.com

---

*Built with ❤️ using Next.js 15*
