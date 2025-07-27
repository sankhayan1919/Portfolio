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
import gitImg from '../images/git.png';
import postmanImg from '../images/postman.png';
import seleniumImg from '../images/selenium.png';
import playwrightImg from '../images/playwright.png';
import githubImg from '../images/github.png';
import vscodeImg from '../images/vscode.png';
import collegeImg from '../images/college.png';
import schoolImg from '../images/school.png';

import { tab } from '@testing-library/user-event/dist/tab';
export const Bio = {
  name: "Sankhayan Sadhukhan",
  roles: [
    "Full Stack Developer",
    "AI/ML Engineer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/sankhayan1919",
  resume:
    "https://drive.google.com/file/d/19GDGNvj70-C_skYFG7mIcfPyhgYSmGUE/view?usp=sharing",
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
        name: "VS Code",
        image: vscodeImg,
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
    description: "",
  },
  {
    id: 1,
    title: "Google Data Analytics Professional Certificate",
    description: "",
  },
  {
    id: 2,
    title: "Machine Learning with Python",
    description: "",
  }
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
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website built using React.js, HTML, and CSS. It showcases my skills, projects, and experiences.",  }
]
  