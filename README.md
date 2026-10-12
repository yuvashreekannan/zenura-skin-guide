# ZENURA – Smart Diagnosis of Skin Disease with Deep Learning

## About the Project

ZENURA is an AI-powered healthcare platform designed to support skin disease identification using deep learning and Vision Transformers (ViT). Users can upload skin images to receive AI-generated predictions, disease information, and skincare recommendations.

The platform also provides specialized care guidance for pregnancy, menstruation, and menopause to promote accessible and inclusive skin healthcare.

## Key Features

- **Skin Disease Prediction:** AI-based classification of uploaded skin images.
- **Disease Information:** Information about predicted skin conditions.
- **Personalized Skincare:** Recommendations and home-care guidance.
- **AI Chatbot:** Skin health awareness and assistance.
- **Specialized Care:** Pregnancy, menstruation, and menopause care sections.
- **User Authentication:** Login and account access, if enabled in the application.
- **Admin Panel:** Administrative features, if enabled in the application.

## Technology Stack

- **Frontend:** React.js, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS
- **Code Quality:** ESLint
- **AI Model:** Vision Transformer (ViT), PyTorch, Python, if connected to the application
- **Package Management:** npm

## Project Structure

```text
ZENURA/
├── public/                 # Static assets
├── src/                    # React application source code
├── .gitignore              # Git ignored files
├── README.md               # Project documentation
├── bun.lockb               # Bun dependency lockfile
├── components.json          # UI component configuration
├── eslint.config.js         # ESLint configuration
├── index.html              # Main HTML entry point
├── package-lock.json       # npm dependency lockfile
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.app.json       # Application TypeScript configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # Node-side TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Prerequisites

- Node.js
- npm
- Git

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd ZENURA
```

Replace `<YOUR_REPOSITORY_URL>` with your actual repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

If the application requires a backend API, create a `.env` file in the project root.

Example:

```env
VITE_API_BASE_URL=http://localhost:8000
```

Replace the example URL with your actual backend API URL. If your application does not require environment variables, this step can be skipped.

Do not store private API keys or passwords in frontend environment variables. Variables prefixed with `VITE_` can be exposed in the browser.

### 4. Run the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal to access ZENURA.

### 5. Build for Production

```bash
npm run build
```

The production-ready files are generated in the `dist/` directory.


## How It Works

1. The user uploads a skin image.
2. The application processes the image for analysis.
3. The connected AI model predicts a supported skin disease category.
4. The application displays the prediction and relevant skin health information.
5. Users can explore skincare recommendations and specialized care resources.

*Actual prediction functionality depends on the AI model and backend being configured and connected.*

## Expected Outcomes

- Improved awareness of skin diseases.
- Accessible preliminary skin health assessment.
- Personalized skincare guidance.
- More inclusive health information for underserved communities.

## Future Enhancements

- Support for additional skin conditions and diverse skin tones.
- Multilingual chatbot assistance.
- Dermatologist feedback and validation.
- Mobile and offline accessibility.
- Integration with healthcare systems.

## Disclaimer

ZENURA is intended to support preliminary skin health awareness. AI-generated predictions are not a definitive medical diagnosis and do not replace consultation with a qualified dermatologist.

## Contributors

- Yuvashree K
- J. Akshya
- K. V. Diksha
