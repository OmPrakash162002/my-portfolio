import axios from "./assets/icons/axios.png"
import bootstrap from "./assets/icons/bootstrap.png"
import css from "./assets/icons/css.png"
import git from "./assets/icons/git.png"
import github from "./assets/icons/github.png"
import html from "./assets/icons/html.png"
import javaScript from "./assets/icons/javaScript.png"
import java from "./assets/icons/java.png"
import react from "./assets/icons/react.png"
import tailwind from "./assets/icons/tailwind.png"
import vscode from "./assets/icons/vs code.png"
import aichatapp from "./assets/project images/Ai chat app.png"
import ecommerce from "./assets/project images/e-commerce.png"
import ggv from "./assets/Education images/ggv.png"
import xi from "./assets/Education images/government.jpg"
import x from "./assets/Education images/sishumandir.jpeg"


//skills info

export const skillLogos = [
    {
        title : "Frontend",
        skills : [
            {name : "html", logo : html},
            {name : "css", logo : css},
            {name : "javaScript", logo:javaScript },
            {name : "React", logo : react},
            {name : "Tailwind css", logo : tailwind},
            {name : "bootstrap", logo : bootstrap},
            {name : "axios", logo : axios}
        ]
    },

    {
        title : "Languages",
        skills : [
            {name : "Java", logo: java},
            {name : "javaScript", logo  : javaScript}
        ]
    },

    {
        title : "Tools",
        skills : [
            {name : "Git", logo : git},
            {name : "github", logo : github},
            {name : "VS code", logo : vscode}
        ]
    }
]

//project info

export const ProjectInfo = [
    {
        title : "AI CHAT APP",
        caption : "An Ai Chat Application built with Geminis API that helps answer yours quesion",
        stack : ["React JS ", "CSS3", "Axios", "Gemini API"],
        github : "",
        web : "",
        image : aichatapp
    },
    {
        title : "E-commers website",
        caption : "An e-commerce website that has latest collection of new fashioneble items",
        stack : ["React JS ", "CSS3", "React Router"],
        github : "",
        web : "",
        image : ecommerce
    }
]


//Education info

export const EducationInfo = [
    {
        collageLogo : ggv,
        collageName : "GURU GHASIDAS VISHWAVIDYALAYA KONI BILASPUR",
        degree : "MCA(Masters of Computer Application)",
        date : "September 2023 - May 2025",
        cgpa : "CGPA 8.03/10",
        descereption : "I have completed my Master of Computer Applications (MCA) in 2025 from Guru Ghasidas Vishwavidyalaya, a Central University located in Bilaspur, Chhattisgarh. During this program, I gained a strong foundation in computer science, covering subjects such as data structures, algorithms, database management systems, operating systems, and software engineering. I also worked on practical projects that strengthened my skills in full-stack web development, cloud computing, and emerging technologies like machine learning. The academic environment, combined with hands-on coding and collaborative learning, has prepared me to take on real-world software development challenges with confidence and adaptability.",

    },
    {
        collageLogo : ggv,
        collageName : "GURU GHASIDAS VISHWAVIDYALAYA KONI BILASPUR",
        degree : "Bs.c(Bacholers of Computer Science)",
        date : "Sectember 2020 - June 2023",
        cgpa : "CGPA 7.25/10",
        descereption : "I completed my Bachelor of Science (B.Sc.) in Computer Science in 2023 from Guru Ghasidas Vishwavidyalaya, a Central University in Bilaspur, Chhattisgarh. During this program, I built a strong conceptual understanding of core computing subjects such as programming fundamentals, object-oriented programming, data structures, operating systems, and computer networks. The curriculum emphasized both theoretical knowledge and practical application, allowing me to develop problem-solving skills through coding assignments and lab sessions. This degree laid the groundwork for my interest in software development and equipped me with the technical mindset needed to pursue advanced studies and real-world tech projects.",

    },
    {
        collageLogo : xi,
        collageName : "Government Higher Secondary School Ghutku",
        degree : "Higher Secendory School(XI)",
        date : "June 2019 - March 2020",
        cgpa : "Aggregate : 80.8%",
        descereption : "I completed my higher secondary education with a focus on Physics, Chemistry, and Mathematics (PCM) from Government Higher Secondary School, Ghutku. This academic foundation strengthened my analytical thinking and problem-solving abilities, which later played a crucial role in shaping my interest in computer science and programming. The logical and structured approach developed through subjects like mathematics helped me transition smoothly into coding and technical concepts during my higher education. My time in school laid the groundwork for disciplined learning and a curiosity-driven mindset that continues to guide my journey in the field of technology.",

    },
    {
        collageLogo : x,
        collageName : "Saraswati Shishu Mandir Koni",
        degree : "High School(X)",
        date : "May 2017 - March 2018",
        cgpa : "Aggregate : 71.8%",
        descereption : "I completed my Class X education from Saraswati Shishu Mandir, Koni. This phase of my academic journey helped me develop a strong foundation in core subjects and instilled in me the values of discipline, consistency, and a passion for learning. The supportive environment and focus on holistic development at the school played a key role in shaping my communication skills, work ethic, and interest in science and technology, which later guided my academic and career path in the field of computer science.",

    }

]