window.addEventListener("DOMContentLoaded", () => {
    const elementOne = document.getElementById('count-one')
    const elementTwo = document.getElementById('count-two')
    const elementThree = document.getElementById('count-three')
    const elementFour = document.getElementById('count-four')
    
    let countOne = 0;
    let interval = setInterval(() => {
        if (countOne < 150) {
            countOne++;
            elementOne.innerHTML = countOne
        } else {
            clearInterval(interval);
        }
    }, 10);

    let countTwo = 0
    let intervalTwo = setInterval(() => {
        if (countTwo < 10) {
            countTwo++
            elementTwo.innerHTML = countTwo
        } else {
            clearInterval(intervalTwo)
        }
    }, 10);

    let countThree = 0
    let intervalThree = setInterval(() => {
        if (countThree < 50) {
            countThree++
            elementThree.innerHTML = countThree
        } else {
            clearInterval(intervalThree)
        }
    }, 10);

    let countFour = 0
    let intervalFour = setInterval(() => {
        if (countFour < 100) {
            countFour++
            elementFour.innerHTML = countFour
        } else {
            clearInterval(intervalFour)
        }
    }, 10);
})

function hoverOnProject(){
    const project = document.querySelectorAll('.card-projects')
    
    project.forEach(element => {
        element.addEventListener("mouseover", () => {
            const cover = element.getElementsByClassName('cover-projects')
            cover[0].classList.add('show-project')
        })
        element.addEventListener( "mouseout", () => {
            const cover = element.getElementsByClassName('cover-projects')
            cover[0].classList.remove('show-project')
        })
    })
}
hoverOnProject()