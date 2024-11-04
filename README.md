# ERIA Design System

![Pull Requests](https://img.shields.io/github/issues-pr/SvenLoeve/ERIA-DesignSystem)
![Total Successful Pull Requests](https://img.shields.io/github/issues-pr-closed/SvenLoeve/ERIA-DesignSystem)
![Activity](https://img.shields.io/github/commit-activity/m/SvenLoeve/ERIA-DesignSystem)
![Build Status](https://github.com/SvenLoeve/ERIA-DesignSystem/actions/workflows/deploy.yml/badge.svg)

ERIA Design System is a comprehensive design system created to ensure consistency and usability across all platforms for ERIA. It provides a collection of reusable components and guidelines for developers and designers to create a cohesive and user-friendly interface for the ERIA platform.

## The Documentation
Quickly get started with the design system on the [documentation site](https://svenloeve.github.io/ERIA-DesignSystem).

## Installation Instructions and Prerequisites

### Prerequisites
- Node.js (version 20 or higher)
- npm (version 6 or higher)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/SvenLoeve/ERIA-DesignSystem.git
   cd ERIA-DesignSystem
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## How to Contribute
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Project Structure
- `src/`: Source files
  - `assets/`: Static assets
  - `data/`: Data files
  - `layouts/`: Layout templates & Reusable components
  - `pages/`: Pages & Documentation
  - `styles/`: CSS styles
- `public/`: Output directory
- `.github/`: GitHub configuration files
- `package.json`: Project metadata and dependencies
- `.eleventy.js`: Eleventy configuration file
- `postcss.config.js`: PostCSS configuration file
- `tailwind.config.js`: Tailwind CSS configuration file