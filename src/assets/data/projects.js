import Resumeimage from '../images/resume.png'
import chatapp from '../images/chatapp.png'
const projects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    category: "Full Stack Development",

    description:
      "A full-stack AI-powered resume analyzer that allows users to upload PDF resumes, analyze their content and evaluate compatibility with job descriptions.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PDF Parsing"
    ],

    features: [
      "User Authentication",
      "Email OTP Verification",
      "PDF Resume Upload",
      "Resume Analysis",
      "Session-Based Authentication",
      "Protected Routes"
    ],

    github: "https://github.com/shavezali5858-lang/AI_ResumeAnalyzer",
    live: "https://ai-resume-analyzer-nx5g.onrender.com/",
    image: Resumeimage
  },

  {
    id: 2,
    title: "Real-Time Chat Application",
    category: "Full Stack Development",

    description:
      "A real-time messaging application that enables users to communicate through chat rooms and private conversations with live online user tracking.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Tailwind CSS"
    ],

    features: [
      "Real-Time Messaging",
      "Private Messaging",
      "Chat Rooms",
      "Online User Tracking",
      "Message History",
      "Typing Indicators"
    ],

    github: "https://github.com/shavezali5858-lang/realtime-chat-app",
    live: "https://realtime-chat-app-henna-two-30.vercel.app/",
    image: chatapp
  },

  {
    id: 3,
    title: "Smart Expense Tracker",
    category: "Frontend Development",

    description:
      "A personal finance management application that helps users track expenses, manage spending categories and visualize their financial activities through interactive dashboards.",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Chart.js"
    ],

    features: [
      "Expense Management",
      "Category Management",
      "Interactive Dashboard",
      "Expense Analytics",
      "Data Visualization",
      "Responsive Interface"
    ],

    github: "https://github.com/shavezali5858-lang/React_ExpenseTracker",
    live: "https://shavez-expensetracker.netlify.app/",
    image: ""
  }
];

export default projects;
