const rows = document.querySelectorAll(".row");

rows.forEach((row) => {
    const btns = row.querySelectorAll('div');

    btns.forEach((div) => {
        div.addEventListener('mouseover', () => { div.style.opacity = 0.5; });
        div.addEventListener('mouseout', () => { div.style.opacity = 1; });
    })
})

function Calculator() {
    
}

