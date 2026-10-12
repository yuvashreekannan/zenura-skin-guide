# ZENURA – Smart Diagnosis of Skin Disease with Deep Learning

## About the Project
ZENURA is an AI-powered healthcare platform designed to support skin disease identification using deep learning and Vision Transformers (ViT). Users can upload skin images to receive AI-generated predictions, disease information, and personalized skincare recommendations.

The platform also provides specialized care guidance for pregnancy, menstruation, and menopause, promoting accessible and inclusive skin healthcare.

## Key Features
- **AI-Based Skin Disease Classification:** Analyzes uploaded skin images using a Vision Transformer model.
- **Personalized Recommendations:** Provides disease information and skincare guidance based on predictions.
- **AI Chatbot:** Offers skin health awareness and basic skincare assistance.
- **Specialized Care:** Includes pregnancy, menstruation, and menopause care sections.
- **User Authentication:** Supports secure login and access to platform features.
- **Admin Panel:** Supports administrative management of the platform.

## Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| AI / Deep Learning | Python, PyTorch |
| Model Architecture | Vision Transformer (ViT) |
| Image Processing | Python imaging libraries |
| Version Control | Git, GitHub |

*Add your actual backend, database, and deployment technologies if applicable.*

## Project Structure

```text
ZENURA/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.example
├── model/
│   ├── train.py
│   ├── predict.py
│   └── requirements.txt
├── docs/
│   └── technical-design.md
├── .gitignore
└── README.md
```

*This is a suggested structure. Update it to match your actual repository.*

## Prerequisites
- Node.js and npm
- Python 3.10 or a version compatible with your installed PyTorch release
- Git
- A trained ViT model checkpoint and the required dataset, if running inference or training locally

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd ZENURA
```

### 2. Set Up the Frontend

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend directory and add the environment variables required by your application.

Example:

```env
VITE_API_BASE_URL=http://localhost:8000
```

Replace the URL with your actual backend endpoint. If your frontend does not use a backend API, this variable may not be needed.

### 3. Set Up the AI Model Environment

Open a new terminal from the project root.

```bash
cd model
python -m venv venv
```

Activate the environment.

**Windows:**
```bash
venv\Scripts\activate
```

**Linux / macOS:**
```bash
source venv/bin/activate
```

Install the dependencies listed in `requirements.txt`:

```bash
pip install -r requirements.txt
```

Ensure that the required PyTorch version and any image-processing libraries are installed.

### 4. Configure Environment Variables

Store configuration values in environment files instead of hardcoding them into the source code.

Example variables, depending on the actual implementation:

```env
VITE_API_BASE_URL=http://localhost:8000
MODEL_PATH=./checkpoints/vit_model.pth
```

- `VITE_API_BASE_URL`: URL of the backend API used by the frontend.
- `MODEL_PATH`: Location of the trained model checkpoint, if your inference code reads it from an environment variable.

These are examples, not confirmed settings for the current implementation. Add authentication keys, database URLs, or AI service keys only if your project actually uses those services.

**Security:** Never commit real passwords, API keys, or private credentials to GitHub. Add `.env` and other secret files to `.gitignore`. Provide an `.env.example` containing placeholder values only.

### 5. Run the Application

Start the frontend:

```bash
cd frontend
npm run dev
```

Open the local URL printed by Vite in the terminal.

If the project includes a separate backend or model inference API, start it using its actual entry point and configuration. The frontend API URL must point to the running service.

## How It Works

1. The user uploads a skin image.
2. The image is prepared for model inference.
3. The trained Vision Transformer analyzes image features and predicts a supported skin disease class.
4. The platform displays the prediction and relevant skin health information.
5. The user can explore skincare guidance, chatbot assistance, and specialized care resources.

## Expected Outcomes
- Accessible preliminary skin image assessment.
- Improved awareness of common skin conditions.
- Personalized skin health guidance.
- More inclusive healthcare information for different stages of life.

## Intended Impact
ZENURA aims to reduce barriers to preliminary skin health assessment, promote early awareness, and encourage informed healthcare decisions, particularly in underserved communities.

## Future Enhancements
- Support for more skin conditions and diverse skin tones.
- Multilingual chatbot assistance.
- Dermatologist feedback and validation.
- Offline or mobile access.
- Integration with healthcare systems where appropriate.

## Disclaimer
ZENURA is an AI-based support and awareness tool. Its predictions are not a definitive medical diagnosis and must not replace consultation with a qualified dermatologist. Users should seek professional medical advice for concerning, persistent, or changing skin conditions.

## Contributors
- Yuvashree K
- J. Akshya
- K. V. Diksha

## License
Add the license applicable to this project. If no license has been selected, clarify the intended usage and permissions before adding one.
