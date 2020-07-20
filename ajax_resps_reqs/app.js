document.getElementById('button-1').addEventListener('click', loadAnswerOne);

document.getElementById('button-2').addEventListener('click', loadAnswerTwo);

const containerOne = document.getElementById('first-q-con');

const containerTwo = document.getElementById('sec-q-con');





function loadAnswerOne() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'answer1.text', true);

    xhr.onload = function () {
        
        if (this.status === 200) {
            console.log(this.responseText);
            containerOne.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.send();

};

function loadAnswerTwo() {
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'answer2.text', true);

    xhr.onload = function () {
        
        if (this.status === 200) {
            console.log(this.responseText);
            containerTwo.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.send();
}


