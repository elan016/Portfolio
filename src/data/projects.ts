export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  imageHint: string;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    title: "Speech-to-Text Web Application",
    shortDescription: "A lightweight web app converting spoken audio to structured text in real-time, leveraging the WebSpeech API and Flask.",
    description: "A web application that transcribes speech into text in real-time. Features translation support and customized audio preprocessing pipelines, leveraging web audio APIs and deep learning integrations for higher accuracy.",
    tags: ["Flask", "WebSpeech API", "Python", "Deep Learning", "Audio Preprocessing"],
    githubUrl: "https://github.com/elan026/S2T.git",
    liveUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=800&auto=format&fit=crop",
    imageHint: "speech recognition interface",
    features: [
      "Real-time audio capturing and streaming",
      "WebSpeech API-powered low latency transcription",
      "Robust audio preprocessing and noise filtering",
      "Multilingual translation and formatting capabilities"
    ]
  },
  {
    title: "Plate Vision (ALPR)",
    shortDescription: "An Automatic License Plate Recognition system using YOLOv5 and OCR to detect and read license plates.",
    description: "A computer vision platform designed to detect and recognize vehicle license plates. It integrates custom-trained YOLOv5 object detection model with OCR and a Flask web service for streaming videos/images and database storage.",
    tags: ["YOLOv5", "OpenCV", "Flask", "Python", "OCR", "Computer Vision"],
    githubUrl: "https://github.com/elan026/Plate-Vision-ALPR-.git",
    liveUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    imageHint: "automatic license plate recognition system",
    features: [
      "Custom YOLOv5 model for high-speed license plate localization",
      "OCR-based character extraction from cropped plates",
      "Support for live camera feed and video file analysis",
      "Database logging of timestamps, locations, and plate numbers"
    ]
  },
  {
    title: "AI Powered IoT M-Sand Quality Monitoring",
    shortDescription: "An intelligent IoT system to monitor and predict manufactured sand quality metrics in real-time.",
    description: "An end-to-end industrial IoT solution that gathers real-time physical metrics (moisture, particle size, etc.) through sensors and classifies the sand quality utilizing machine learning models deployed on a Flask API with a React web client.",
    tags: ["React", "Flask", "SQLite", "IoT", "Machine Learning", "Scikit-Learn"],
    githubUrl: "https://github.com/elan026/AI-IoT-MSand-Quality",
    liveUrl: "",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    imageHint: "industrial sensor monitoring interface",
    features: [
      "Real-time sensor telemetry via WebSocket or HTTP push requests",
      "Machine learning classification model for quality grading",
      "SQLite database for tracking quality metrics and logs",
      "Interactive React administrator dashboard with charts"
    ]
  },
  {
    title: "Urudhunai Community Network",
    shortDescription: "A hyperlocal community resource sharing platform matching local needs with local resources.",
    description: "Urudhunai is a full-stack hyperlocal platform built to facilitate resource sharing, emergency assistance, and community coordination. It features an interactive UI, geolocation mapping, and real-time request tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Vercel", "Render", "Tailwind CSS"],
    githubUrl: "https://github.com/elan026/Urudhunai-Community-Network",
    liveUrl: "https://uruthunaiplatform.vercel.app/",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    imageHint: "community network visual illustration",
    features: [
      "Hyperlocal resource search and map tagging",
      "Real-time requests and notifications for users",
      "Secure authentication and user profile management",
      "Deployed and hosted fully on Vercel (frontend) and Render (backend)"
    ]
  },
  {
    title: "RAG AI Chatbot",
    shortDescription: "A RAG chatbot built with Streamlit and LangChain that answers questions from an uploaded PDF.",
    description: "This project is a Retrieval-Augmented Generation (RAG) chatbot built with Streamlit, LangChain, FAISS, and Ollama. It allows you to upload a PDF, indexes its content using embeddings, and lets you ask questions about the document. It features PDF upload, text extraction, FAISS vector storage, and an interactive UI.",
    tags: ["Streamlit", "LangChain", "FAISS", "Ollama", "RAG"],
    githubUrl: "https://github.com/elan026/RAG_AI_Chatbot.git",
    liveUrl: "",
    imageUrl: "https://opengraph.githubassets.com/1/elan026/RAG_AI_Chatbot",
    imageHint: "AI chatbot",
    features: [
      "Upload and extract text dynamically from PDF documents",
      "Local FAISS vector store index generation and querying",
      "LangChain chain interface connecting text chunks to model responses",
      "Interact using a clean and intuitive Streamlit chat interface"
    ]
  },
  {
    title: "AI Resume Analyzer",
    shortDescription: "An AI tool that evaluates resumes against job descriptions, providing an ATS-style analysis and feedback.",
    description: "An AI-powered tool built with LangChain and Streamlit to help evaluate resumes against job descriptions. It extracts key skills, identifies strengths and weaknesses, and provides improvement suggestions. It supports both online (OpenAI) and offline (Hugging Face) embeddings.",
    tags: ["LangChain", "Streamlit", "OpenAI", "Hugging Face", "ATS"],
    githubUrl: "https://github.com/elan026/AI_Resume_Analyzer.git",
    liveUrl: "",
    imageUrl: "https://opengraph.githubassets.com/1/elan026/AI_Resume_Analyzer",
    imageHint: "resume analysis",
    features: [
      "Calculates ATS scores based on job descriptions",
      "Identifies missing tech stack keywords and matches role requirements",
      "Supports OpenAI and local Hugging Face model endpoints",
      "Interactive feedback panels for formatting and style improvement"
    ]
  },
  {
    title: "IBM HR Analytics Dashboard",
    shortDescription: "An interactive Power BI dashboard visualizing employee attrition patterns and key influencing factors.",
    description: "An analysis of IBM's employee dataset to understand attrition patterns and identify key factors affecting it. Visualized through an interactive dashboard covering income, satisfaction, overtime, and more.",
    tags: ["Data Analysis", "Power BI", "HR Analytics", "Dashboard"],
    githubUrl: "https://github.com/elan026/IBM-HR-Analytics.git",
    liveUrl: "",
    imageUrl: "https://opengraph.githubassets.com/1/elan026/IBM-HR-Analytics",
    imageHint: "HR analytics dashboard",
    features: [
      "Dynamic data cleaning and transformation using Power Query",
      "Interactive graphs segmenting employee attrition by department and age",
      "Predictive indicators for high-risk employee categories",
      "A clean stakeholder reporting layout with quick filters"
    ]
  }
];
