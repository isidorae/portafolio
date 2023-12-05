function toggleMode(event) {
    console.log(event.target.id)

    let lightThemeBtn = document.getElementById("light-theme")
    let darkThemeBtn = document.getElementById("dark-theme")
    let body = document.querySelector("body")
    let proyectCards = document.getElementsByClassName("proyect-card")
    let navBtns = document.getElementsByClassName("nav-btn")
    let titlesColor = document.querySelectorAll("h1, h2, h3")
    let cardTitlesColor = document.querySelectorAll("h3")

    //ponerlo en light
    if(event.target.id == "light-theme") {
        body.classList.remove("dark-theme")
        for (let i = 0; i < proyectCards.length; i++) {
            proyectCards[i].classList.remove("card-dark-theme")
        }
       for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove("dark-btn")
       }

       for (let i = 0; i < titlesColor.length; i++) {
        titlesColor[i].style.color = "rgb(96, 121, 250)";
       }

        darkThemeBtn.classList.remove("hidden")
        return lightThemeBtn.classList.add("hidden")

    } else {
        body.classList.add("dark-theme")
        for (let i = 0; i < proyectCards.length; i++) {
            proyectCards[i].classList.add("card-dark-theme")
        }
        for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.add("dark-btn")
       }

       for (let i = 0; i < titlesColor.length; i++) {
        titlesColor[i].style.color = "rgb(138, 157, 255)";
       }
        darkThemeBtn.classList.add("hidden")
        return lightThemeBtn.classList.remove("hidden")
    }

}
