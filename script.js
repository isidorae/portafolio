
function openGithub() {
    window.open("https://github.com/isidorae/", "_blank")
}

function openLinkedin() {
    window.open("https://www.linkedin.com/in/isidora-errazuriz-a9267412b/", "_blank")
}

function downloadCV() {
    
    let cvBtn = document.getElementById("cv").classList.value

    if (cvBtn == "en") {
        //download english cv
        window.open("https://drive.google.com/file/d/1t_ik16FiMcdAsGDDdFsiPRc21D83EGM2/view?usp=drive_link", "_blank")
    } else {
        //download spanish cv
        window.open("https://drive.google.com/file/d/1YDn3Xi_dYc5GGRWEfiIhgKd2v__hCkud/view?usp=drive_link", "_blank")
    }


}
