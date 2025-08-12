import htmlImg from '../images/html.png';
import cssImg from '../images/css.png';
import jsImg from '../images/js.png';
import reactImg from '../images/react.png';
import bootstrapImg from '../images/bootstrap.png';
import tailwindImg from '../images/tailwind.png';
import nodeImg from '../images/node.png';
import expressImg from '../images/express.png';
import flaskImg from '../images/flask.png';
import mongoImg from '../images/mongodb.png';
import pythonImg from '../images/python.png';
import tensorflowImg from '../images/tensorflow.png';
import googleColabImg from '../images/colab.png';
import sklearnImg from '../images/sklearn.png';
import streamlitImg from '../images/streamlit.png';
import huggingFaceImg from '../images/huggingface.png';
import javaImg from '../images/java.png';
import gitImg from '../images/git.png';
import postmanImg from '../images/postman.png';
import seleniumImg from '../images/selenium.png';
import playwrightImg from '../images/playwright.png';
import githubImg from '../images/github.png';
import collegeImg from '../images/college.png';
import schoolImg from '../images/school.png';
import be10xImg from '../images/be10x.png';
import GoogleImg from '../images/Google.png';
import IBMImg from '../images/IBM.png';
import DetectronImg from '../images/Detectron.png';
import PortfolioImg from '../images/Portfolio.png';
import IntellibotImg from '../images/Intellibot.png';
import MessageMapperImg from '../images/MessageMapper.png';
import CancerImg from '../images/Cancer.png';
import EstateImg from '../images/Estate.png';
import WeatherImg from '../images/Weather.png';
import RCSImg from '../images/RCS.png';
import PasswordImg from '../images/Password.png';
import QRImg from '../images/QR.png';
import TurtleImg from '../images/Turtle.png';
/*import { tab } from '@testing-library/user-event/dist/tab';*/
export const Bio = {
  name: "Sankhayan Sadhukhan",
  roles: [
    "Full Stack Developer",
    "AI/ML Developer",
  ],
  description: "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/sankhayan1919",
  resume: "https://drive.google.com/file/d/19GDGNvj70-C_skYFG7mIcfPyhgYSmGUE/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sankhayan-sadhukhan-708682303/",
  insta: "https://www.instagram.com/sadhukhansankhayan/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: htmlImg,
      },
      {
        name: "CSS",
        image: cssImg,
      },
      {
        name: "JavaScript",
        image: jsImg,
      },
      {
        name: "Bootstrap",
        image: bootstrapImg
      },
      {
        name: "Tailwind CSS",
        image: tailwindImg,
      },
      {
        name: "React Js",
        image: reactImg,
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image: pythonImg,
      },
      {
        name: "Tenserflow",
        image: tensorflowImg,
      },
      {
        name: "Colab",
        image: googleColabImg,
      },
      {
        name: "Scikitlearn",
        image: sklearnImg,
      },
      {
        name: "Streamlit",
        image: streamlitImg,
      },
      {
        name: "Hugging Face",
        image: huggingFaceImg,
      }
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node",
        image: nodeImg,
      },
      {
        name: "Express Js",
        image: expressImg,
      },
      {
        name: "Flask",
        image: flaskImg,
      },
      {
        name: "MongoDB",
        image: mongoImg,
      }
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Java",
        image: javaImg, 
      },
      {
        name: "Selenium",
        image: seleniumImg,
      },
      {
        name: "Playwright",
        image: playwrightImg,
      },
      {
        name: "Git",
        image: gitImg,
      },
      {
        name: "GitHub",
        image: githubImg,
      },
      {
        name: "Postman",
        image: postmanImg,
      },
    ],
  },
];

export const achievements = [
  {
    id: 0,
    title: "AI Tools Certification",
    desc: "Completed a hands-on certification focused on practical AI tools and their real-world applications. Gained experience with generative AI, automation, and productivity-enhancing tools for modern workflows.",
    img: be10xImg,
  },
  {
    id: 1,
    title: "Machine Learning with Python",
    desc: "Completed a comprehensive course covering key machine learning algorithms, model evaluation, and data preprocessing using Python libraries like scikit-learn, pandas, and NumPy. Gained hands-on experience in building and deploying ML models.",
    img: IBMImg,
  },
  {
    id: 2,
    title: "Google Data Analytics Professional Certificate",
    desc: "Completed an in-depth program covering data cleaning, analysis, visualization, and data-driven decision-making using tools like SQL, spreadsheets, and Tableau. Developed strong foundations in analytical thinking and real-world problem-solving",
    img: GoogleImg,
  },
];

export const education = [
  {
    id: 0,
    img: collegeImg,
    school: "Meghnad Saha Institute of Technology, Kolkata",
    date: "2022 - 2026",
    grade: "7.75 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Meghnad Saha Institute of Technology, Kolkata. I have completed 3 years and have a CGPA of 7.75. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: schoolImg,
    school: "Ramakrishna Mission Boys Home High School, Rahara",
    date: "2022",
    grade: "92%",
    desc: "I completed my class 12 high school education at Ramakrishna Mission Boys Home High School, Rahara, where I studied Pure Science.",
    degree: "WBCHSE(HS), Pure Science",
  },
  {
    id: 2,
    img: schoolImg,
    school: "Ramakrishna Mission Boys Home High School, Rahara",
    date: "2020",
    grade: "95%",
    desc: "I completed my class 10 education at Ramakrishna Mission Boys Home High School, Rahara.",
    degree: "WBBSE(MP)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Detectron",
    description: "A modern web application with authentication for only government officials and social media content analysis and automated screenshot taking capabilities.",
    image: DetectronImg,
    tags: ["React Js", "Vite", "TailwindCSS", "MongoDb", "Node Js", "Express Js", "Radix UI", "React Hook Form", "TypeScript", "Selenium", "Playwright"],
    category: "web app",
    github: "https://github.com/sankhayan1919/Detectron-project",
  },
  {
    id: 1,
    title: "Portfolio",
    description: "A modern and interactive portfolio website built with React and Three.js, featuring 3D animations, smooth scrolling, and a responsive design.",
    image: PortfolioImg,
    tags: ["React", "Three.js", "Framer Motion", "Material UI", "React Router", "EmailJS"],
    category: "web app",
    github: "https://github.com/sankhayan1919/Portfolio",
  },
  {
    id: 2,
    title: "Intellibot",
    description: "A full-stack chatbot UI built with React, Node.js, and MongoDB.",
    image: IntellibotImg,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js"],
    category: "web app",
    github: "https://github.com/sankhayan1919/Rag-chatbot-ui",
  },
  {
    id: 3,
    title: "MessageMapper",
    description: "MessageMapper is a tool designed to help you analyze, preprocess, and visualize WhatsApp chat data. It provides a simple interface to upload your chat files and gain insights into your conversations.",
    image: MessageMapperImg,
    tags: ["Python", "Streamlit", "Numpy", "Pandas", "Seaborn"],
    category: "machine learning",
    github: "https://github.com/sankhayan1919/MessageMapper",
  },
  {
    id: 4,
    title: "Cancer-Classifier",
    description: "A machine learning-based application that predicts whether breast tumors are malignant or benign based on diagnostic measurements.",
    image: CancerImg,
    tags: ["React", "Vite", "TailwindCSS", "TypeScript", "Python", "Flask", "Tensorflow", "Numpy"],
    category: "machine learning",
    github: "https://github.com/sankhayan1919/Cancer_classifier",
  },
  {
    id: 5,
    title: "Real Estate Price Prediction",
    description: "This project utilizes machine learning techniques to predict real estate prices based on various property features. The system analyzes historical data to provide accurate price estimations for residential properties.",
    image: EstateImg,
    tags: ["Numpy", "Flask", "TailwindCSS", "Python"],
    category: "machine learning",
    github: "https://github.com/sankhayan1919/Machine-Learning/tree/main/Projects/Real_estate",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Real-time weather application using JavaScript and OpenWeatherMap API. Users can search any city to view live temperature, humidity, and weather conditions.",
    image: WeatherImg,
    tags: ["JavaScript"],
    category: "mini projects",
    github: "https://github.com/sankhayan1919/Javascript/tree/main/(3)Projects/(4)Weather%20App",
  },
  {
    id: 7,
    title: "Rock-Paper-Scissor Game",
    description: "A simple and interactive Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. Implements basic game logic with dynamic UI updates based on user and computer choices.",
    image: RCSImg,
    tags: ["JavaScript"],
    category: "mini projects",
    github: "https://github.com/sankhayan1919/Javascript/tree/main/(3)Projects/(1)Rock%2CPaper%2CScissor%20Game",
  },
  {
    id: 8,
    title: "Password Generator",
    description: "A customizable password generator built in JavaScript. Users can generate secure, random passwords instantly.",
    image: PasswordImg,
    tags: ["JavaScript"],
    category: "mini projects",
    github: "https://github.com/sankhayan1919/Javascript/tree/main/(3)Projects/(6)Password%20Generator",
  },
  {
    id: 9,
    title: "QR Code Generator",
    description: "A JavaScript-based QR code generator that takes user input (text/URL) and generates a downloadable QR code using a public API.",
    image: QRImg,
    tags: ["JavaScript"],
    category: "mini projects",
    github: "https://github.com/sankhayan1919/Javascript/tree/main/(3)Projects/(7)QR%20Code%20Generator",
  },
  {
    id: 10,
    title: "Turtle Race Game",
    description: "A fun graphical race simulation using Python's Turtle library. Multiple turtles race with randomized speeds, making each race unpredictable and engaging.",
    image: TurtleImg,
    tags: ["python"],
    category: "mini projects",
    github: "https://github.com/sankhayan1919/Python/blob/main/(3)-Games/(7).Turtle%20Race%20Game.py",
  },
]
  