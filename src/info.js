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