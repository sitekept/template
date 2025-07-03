# WebFacto - Next.js Boilerplate

A robust, production-ready Next.js boilerplate with TypeScript, ESLint, Prettier, and Husky
pre-configured for modern web development.

## 🚀 Features

- **Next.js 15** - The React framework for production
- **TypeScript** - Static type checking with strict configuration
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Comprehensive linting with TypeScript, React, and accessibility rules
- **Prettier** - Opinionated code formatting with import organization
- **Husky** - Git hooks for code quality enforcement
- **Lint-staged** - Run linters on staged files
- **shadcn/ui** - Beautiful, accessible UI components
- **VS Code** - Optimized settings and extensions recommendations

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended package manager)
- Git

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd webfacto
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up Husky:

```bash
pnpm run prepare
```

## 🚀 Development

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

## 📝 Available Scripts

- `pnpm run dev` - Start development server with Turbopack
- `pnpm run build` - Build the application for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Run ESLint with auto-fix
- `pnpm run format` - Format code with Prettier
- `pnpm run format:check` - Check if code is formatted
- `pnpm run type-check` - Run TypeScript type checking
- `pnpm run validate` - Run type-check, lint, and format check

## 🔧 Configuration

### TypeScript

- Strict mode enabled with additional type safety rules
- Path aliases configured for clean imports
- Enhanced compiler options for better development experience

### ESLint

- Comprehensive rules for TypeScript, React, and accessibility
- Import organization and unused imports removal
- Next.js specific optimizations
- Conventional commit message validation

### Prettier

- Consistent code formatting across the project
- Tailwind CSS class sorting
- Import organization
- File-specific formatting rules

### Husky & Git Hooks

- **Pre-commit**: Type checking, linting, and formatting
- **Commit-msg**: Conventional commit message validation

## 📁 Project Structure

```
├── .husky/                 # Git hooks
├── .vscode/               # VS Code settings and extensions
├── public/                # Static assets
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── .eslintrc.mjs        # ESLint configuration
├── .prettierrc.mjs      # Prettier configuration
├── tsconfig.json        # TypeScript configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🎯 Code Quality

This boilerplate enforces high code quality through:

1. **TypeScript strict mode** with enhanced type checking
2. **ESLint rules** for consistent code style and error prevention
3. **Prettier formatting** for consistent code appearance
4. **Git hooks** to prevent committing poorly formatted or broken code
5. **Conventional commits** for clear commit history

## 🔍 VS Code Integration

Recommended extensions are automatically suggested, and the workspace is configured for:

- Format on save
- Auto-fix ESLint issues
- Import organization
- Tailwind CSS IntelliSense
- TypeScript enhanced support

## 📦 Deployment

### Vercel (Recommended)

```bash
pnpm run build
```

Deploy to Vercel with zero configuration.

### Other Platforms

The built application in `.next` folder can be deployed to any Node.js hosting platform.

## 🤝 Contributing

1. Follow the conventional commit format
2. Ensure all quality checks pass (`pnpm run validate`)
3. Update documentation as needed

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
