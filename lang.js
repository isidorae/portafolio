const spanish = {
    title: "Hola, mi nombre es Isidora :)",
    mainParagraph: "Lo que mas me gusta del area de la tecnología de la información es prácticar lo que voy aprendiendo en cuanto a técnicas de programación, ir generando nuevos circuitos neuronales, desarrollar y pulir la lógica de programación, aprender a usar nuevas tecnologías, y por sobre todas las cosas, aprender de aquellos que son expertos en el área.",
    backgroundData: "El año 2019 egrese de una carrera del área de la salud. Luego de probar diversas áreas, el año 2023 decidí dedicar la mayor parte de mi tiempo y energía en aprender programación y desarrollo web.",
    objective: "En continuo aprendizaje 🙏🏻 Buscando adquirir experiencia en el mundo laboral de la tecnología, aprender a planificar y diseñar de forma estratégica, con soluciones que prevalezcan en el tiempo.",
    knowledge: "Conocimientos Actuales",
    knowledgeData: "Js / Python / CSS / HTML / React / Flask /  Node / Express / MongoDB / SQLite / Diseño web / Adobe Photoshop",
    learning: "Aprendizaje en Desarrollo",
    learningData: "CS50: Introduction to Computer Science, Harvard University / SQL / Python / TypeScript + <i>Todo lo anterior</i> (Siempre hay más por aprender!)",
    repository: "Repositorio",
    repositoryFront: "Repositorio Frontend",
    repositoryBack: "Repositorio Backend",
    note: "**Ecommerce app puede tardar en inicializar muestra de productos e inicio de sesión por servidor usado para despliegue de backend. Revisar Repositorio Frontend para más info."

}

const english = {
    title: "Hello, my name is Isidora :)",
    mainParagraph: "What I like most about the field of information and technology is practicing what I am learning in terms of programming techniques, building new neural circuits, developing and refining programming logic, learning to use new technologies, and above all, learning from those who are experts in the field.",
    backgroundData: "In 2019, I graduated from a health-related field. After exploring various health related and non-related fields, in 2023, I decided to start a new journey towards learning programming and web development.",
    objective: "Avid learner 🙏🏻 Looking to gain experience in the professional world of technology, to learn to plan and design strategically, with solutions that endure over time.",
    knowledge: "Current Knowledge",
    knowledgeData: "Js / Python / CSS / HTML / React / Flask /  Node / Express / MongoDB / SQLite / Web design / Adobe Photoshop",
    learning: "Currently Learning",
    learningData: "CS50: Introduction to Computer Science, Harvard University / SQL / Python / TypeScript + <i> All of the above! </i> learning never ends!",
    repository: "Repository",
    repositoryFront: "Frontend Repository",
    repositoryBack: "Backend Repository",
    note: "**The E-commerce and Finance App may take time to initialize product samples and login due to the server used for the backend deployment. Check the Frontend Repository for more information."
}

document.addEventListener("DOMContentLoaded", function() {

esLang();

})

let title = document.getElementById("title")
let mainParagraph = document.getElementById("mainParagraph")
let backgroundData = document.getElementById("backgroundData")
let objective = document.getElementById("objective")
let knowledge = document.getElementById("knowledge")
let knowledgeData = document.getElementById("knowledgeData")
// let learning = document.getElementById("learning")
// let learningData = document.getElementById("learningData")
let repository = document.getElementsByClassName("repository")
let repositoryfront = document.getElementsByClassName("repositoryfront")
let repositoryback = document.getElementsByClassName("repositoryback")
let note = document.getElementById("note")



function esLang() {
    title.innerHTML = spanish.title;
    mainParagraph.innerHTML = spanish.mainParagraph;
    backgroundData.innerHTML = spanish.backgroundData;
    objective.innerHTML = spanish.objective;
    knowledge.innerHTML = spanish.knowledge;
    knowledgeData.innerHTML = spanish.knowledgeData
    // learning.innerHTML = spanish.learning;
    // learningData.innerHTML = spanish.learningData;

    for (let i = 0; i < repository.length; i++) {
        repository[i].innerHTML = spanish.repository;
    }

    for (let i = 0; i < repositoryfront.length; i++) {
        repositoryfront[i].innerHTML = spanish.repositoryFront;
    }

    for (let i = 0; i < repositoryback.length; i++) {
        repositoryback[i].innerHTML = spanish.repositoryBack;
    }

    note.innerHTML = spanish.note;

}

function enLang() {

    title.innerHTML = english.title;
    mainParagraph.innerHTML = english.mainParagraph;
    backgroundData.innerHTML = english.backgroundData;
    objective.innerHTML = english.objective;
    knowledge.innerHTML = english.knowledge;
    knowledgeData.innerHTML = english.knowledgeData
    // learning.innerHTML = english.learning;
    // learningData.innerHTML = english.learningData;

    for (let i = 0; i < repository.length; i++) {
        repository[i].innerHTML = english.repository;
    }

    for (let i = 0; i < repositoryfront.length; i++) {
        repositoryfront[i].innerHTML = english.repositoryFront;
    }

    for (let i = 0; i < repositoryback.length; i++) {
        repositoryback[i].innerHTML = english.repositoryBack;
    }

    note.innerHTML = english.note;
}

function toggleLang(event) {
    event.preventDefault();
    let EN_BTN = document.getElementById("EN")
    let ES_BTN = document.getElementById("ES")
    let cv = document.getElementById("cv")

    if (event.target.innerText== "EN") {
        enLang();
        ES_BTN.classList.remove("hidden")
        EN_BTN.classList.add("hidden")
        cv.classList.add("en")
        return cv.classList.remove("es")
    } else {
        esLang();
        EN_BTN.classList.remove("hidden")
        ES_BTN.classList.add("hidden")
        cv.classList.add("es")
        return cv.classList.remove("en")
    }

}