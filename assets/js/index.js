window.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById('count-one')
    
    let count = 0;
    let interval = setInterval(() => {
        if (count < 150) {
            count++;
            element.innerHTML = count
        } else {
            clearInterval(interval);
        }
    }, 10);
})
