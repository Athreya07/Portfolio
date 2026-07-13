import { Folder, FileCode2, GraduationCap, BriefcaseBusiness, FileText, Wrench } from 'lucide-react';
import type { ComponentType } from 'react';
import type { Project, SectionId } from '../types/portfolio';

export const profile = {
  name: 'Atharva Galwade',
  githubUsername: 'Athreya07',
  role: 'Software Engineer',
  education: 'B.Tech Computer Science',
  location: 'Pune, India',
  email: 'atharvagalwade02@gmail.com',
  linkedin: 'https://www.linkedin.com/in/atharvagalwade',
  github: 'https://github.com/Athreya07',
  status: 'Open to Internship Opportunities',
  interests: ['Artificial Intelligence', 'Machine Learning', 'Full Stack Development'],
};

type SectionIcon = ComponentType<{ size?: number; className?: string }>;

export const sections: { id: SectionId; label: string; file: string; Icon: SectionIcon }[] = [
  { id: 'about', label: 'About', file: 'about.ts', Icon: FileCode2 },
  { id: 'skills', label: 'Skills', file: 'skills.json', Icon: Wrench },
  { id: 'projects', label: 'Projects', file: 'projects.tsx', Icon: Folder },
  { id: 'experience', label: 'Experience', file: 'experience.md', Icon: BriefcaseBusiness },
  { id: 'education', label: 'Education', file: 'education.md', Icon: GraduationCap },
  { id: 'resume', label: 'Resume', file: 'resume.pdf', Icon: FileText },
];

export const skills = {
  Languages: ['Python', 'C++', 'SQL', 'JavaScript', 'TypeScript'],
  Frontend: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['FastAPI', 'Flask', 'Node.js'],
  Database: ['MySQL', 'Firebase'],
  AI: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
  'Data & Analytics': ['Excel', 'Power BI', 'Tableau', 'Google Sheets'],
  Tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
};

export const skillEmojis: Record<string, string> = {
  Python: '🐍', 'C++': '⚙️', SQL: '🗃️', JavaScript: '🟨', TypeScript: '🔷',
  React: '⚛️', HTML: '📄', CSS: '🎨', 'Tailwind CSS': '💨',
  FastAPI: '⚡', Flask: '🧪', 'Node.js': '🟢',
  MySQL: '🐬', Firebase: '🔥',
  TensorFlow: '🧠', 'Scikit-learn': '🔬', Pandas: '🐼', NumPy: '🔢',
  Excel: '📊', 'Power BI': '📈', Tableau: '📉', 'Google Sheets': '📑',
  Git: '🌿', GitHub: '🐙', 'VS Code': '💻', Postman: '📮', Docker: '🐳',
};

export const categoryEmojis: Record<string, string> = {
  Languages: '💻', Frontend: '🎨', Backend: '⚙️', Database: '🗄️', AI: '🤖', 'Data & Analytics': '📊', Tools: '🛠️',
};

export const projects: Project[] = [
  {
    name: 'AI Chess', slug: 'ai-chess', language: 'Python', stars: 12, forks: 3, updated: 'Recently updated',
    description: 'Chess engine project with AI move selection, board logic, and an interactive user interface.',
    techStack: ['Python', 'AI Logic', 'Game Development'],
    features: ['AI-based move decision system', 'Legal move validation', 'Interactive chess board', 'Clean game loop architecture'],
    challenges: ['Optimizing move generation', 'Handling special chess rules', 'Improving AI decision quality'],
    github: 'https://github.com/Athreya07/AI-Chess', live: '#'
  },
  {
    name: 'TruthGuard', slug: 'truthguard', language: 'Python', stars: 18, forks: 4, updated: 'Recently updated',
    description: 'Fake news detection web app using machine learning and a Flask backend.',
    techStack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'HTML', 'CSS'],
    features: ['News classification', 'ML model pipeline', 'Clean web interface', 'Prediction confidence output'],
    challenges: ['Dataset quality', 'Model accuracy', 'Reducing false predictions'],
    github: 'https://github.com/Athreya07/TruthGuard-Fake-News-Detection', live: '#'
  },
  {
    name: 'Weather Forecasting', slug: 'weather-forecasting', language: 'Python', stars: 15, forks: 5, updated: 'Recently updated',
    description: 'Weather prediction dashboard using ML/deep learning concepts and a modern interface.',
    techStack: ['Python', 'FastAPI', 'React', 'Pandas', 'Machine Learning'],
    features: ['Temperature prediction', 'Rain probability', 'Dashboard UI', 'API-driven architecture'],
    challenges: ['Data preprocessing', 'Feature engineering', 'Model reliability'],
    github: 'https://github.com/Athreya07/Weather-forecasting-system', live: '#'
  },
  {
    name: 'AI Assistant', slug: 'ai-assistant', language: 'Python', stars: 0, forks: 0, updated: 'Recently updated',
    description: 'Python-based virtual assistant that uses AI, NLP, speech recognition, and text-to-speech to perform tasks through voice and text commands.',
    techStack: ['Python', 'NLP', 'Speech Recognition', 'Text-to-Speech', 'Tkinter'],
    features: ['Voice and text command support', 'Opens applications automatically', 'Web search integration', 'Real-time weather updates', 'Query answering & task automation'],
    challenges: ['Accurate speech-to-text recognition', 'Natural language intent parsing', 'Reliable text-to-speech output', 'Handling diverse voice commands'],
    github: 'https://github.com/Athreya07/AI-ASSISTANT', live: '#'
  }
];

export const education = [
  {
    title: 'Vishwakarma University', subtitle: 'B.Tech Computer Science and Engineering',
    meta: '2024 - 2027 • Pune', icon: 'GraduationCap', score: 'CGPA 8.91', current: true,
    highlights: ['Core CS: DSA, OOP, DBMS, OS, Networks', 'Coursework in AI, ML & Full Stack Development', 'Active in coding & project-building communities'],
  },
  {
    title: 'AISSMS Polytechnic', subtitle: 'Diploma in Computer Engineering',
    meta: '2021 - 2024 • Pune', icon: 'BookOpen', score: '83%',
    highlights: ['Built foundation in programming & software design', 'Hands-on labs in web & database development'],
  },
  {
    title: 'AEMS', subtitle: 'SSC',
    meta: '2021', icon: 'School', score: '86%',
    highlights: ['Built strong fundamentals in Math & Science'],
  },
];

export const experience = [
  {
    title: 'Software Development Projects', meta: '2025 - Present', icon: 'Code2', current: true,
    body: 'Built AI, machine learning, and full-stack projects focused on real-world problem solving, deployment, and clean user experience.',
    highlights: ['Shipped 5+ end-to-end AI, ML & full-stack products', 'Focused on clean architecture, deployment & UX', 'Worked across Python, React, FastAPI & ML pipelines'],
  },
  {
    title: 'Open to Internship Opportunities', meta: 'Currently Available', icon: 'Rocket', current: true,
    body: 'Actively looking for Software Development, AI/ML, and Full Stack internship roles.',
    highlights: ['Software Development Internships', 'AI / Machine Learning roles', 'Full Stack Development roles'],
  },
];
