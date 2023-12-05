
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
        window.open("https://drive.google.com/file/d/1t0utui41wbmp4er8njIVGnRTNL70XacJ/view?usp=drive_link", "_blank")
    } else {
        //download spanish cv
        window.open("https://drive.google.com/file/d/1sQ8obq2bG8NOw-DkcuApPr2sRmuAeGq7/view?usp=sharing", "_blank")
    }


}
