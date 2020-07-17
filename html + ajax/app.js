const xhr = new XMLHttpRequest();
const container = document.getElementById('container');
// const head = document.getElementById('head');

xhr.onload = function () {
    if (xhr.status === 200) {
        container.innerHTML = xhr.responseText;
        // head.innerHTML = xhr.responseText
    } else {
        console.warn('Did not recieve 200 of from response!')
    }
};

// xhr.open('GET', 'header.html', true);
xhr.open('GET', 'colors.html', true);
xhr.send(null); 
/////////////////////////////////////////

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an XHR object
    const xhr = new XMLHttpRequest();

    // OPEN 
    xhr.open('GET', 'data.text', true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }


    xhr.send();
}


    