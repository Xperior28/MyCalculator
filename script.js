const calculator = document.querySelector('.calculator');
const rows = document.querySelectorAll(".row");
const clearBtn = calculator.querySelector('#clear');
const content = document.querySelector('.content');
const equalBtn = calculator.querySelector('.equal');

rows.forEach((row) => {
    const btns = row.querySelectorAll('div');

    btns.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.opacity = 0.5;
            div.style.cursor = "pointer";
        });
        div.addEventListener('mouseout', () => { 
            div.style.opacity = 1;
            div.style.cursor = "default";
        });
    });
});

function Calculator() {
    const num = calculator.querySelectorAll('.num');
    num.forEach((btn) => {
        btn.addEventListener('click', () => {
            if(content.textContent === '0') {
                content.innerHTML="";
            }
            content.textContent += btn.textContent;
        });
    });
    const op = calculator.querySelectorAll('.op');
    op.forEach((btn) => {
        btn.addEventListener('click', () => {
            if(content.textContent === '0') {
                content.innerHTML="";
            }
            content.textContent += btn.textContent;
        })
    })

    equalBtn.addEventListener('click', Evaluate);


}

function Evaluate() {
    const ops = /[X/+-]/g;
    const n = content.textContent.match(ops).length;
    if(n!=1) {
        console.log('Error!');
        content.innerHTML = '0';
    } else {
        let op1 = 0;
        let op2 = 0;
        let res = 0;
        if(/[X]/.test(content.textContent)) {
            let i = content.textContent.indexOf('X');
            op1 = Number(content.textContent.slice(0,i));
            op2 = Number(content.textContent.slice(i+1));
            res = op1*op2;
            res = String(res);
            content.textContent = res;
        } else if(/[/]/.test(content.textContent)) {
            let i = content.textContent.indexOf('/');
            op1 = Number(content.textContent.slice(0,i));
            op2 = Number(content.textContent.slice(i+1));
            res = op1/op2;
            res = String(res);
            content.textContent = res;
        } else if(/[+]/.test(content.textContent)) {
            let i = content.textContent.indexOf('+');
            op1 = Number(content.textContent.slice(0,i));
            op2 = Number(content.textContent.slice(i+1));
            res = op1+op2;
            res = String(res);
            content.textContent = res;
        } else if(/[-]/.test(content.textContent)) {
            let i = content.textContent.indexOf('-');
            op1 = Number(content.textContent.slice(0,i));
            op2 = Number(content.textContent.slice(i+1));
            res = op1-op2;
            res = String(res);
            content.textContent = res;
        }
    }
}


clearBtn.addEventListener('click', () => {
    content.innerHTML = '0';
    console.log('cleared!');
});

Calculator();



