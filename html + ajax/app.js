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
    // console.log('READYSTATE', xhr.readyState);

    // Optional onprogress - Used for spinners/loaders, so while page is loading you can display file or url  before loading is complete
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState); // stage three, processing request
    }

    

    xhr.onload = function () {
        // console.log('READYSTATE', xhr.readyState);
        if (this.status === 200) {
            // console.log(this.responseText);
            container.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // xhr.onreadystatechange = function () {
    //     console.log('READYSTATE', xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    // just incase something goes wrong you should use -
    xhr.onerror = function () {
        console.log('Request error...')
    }

    xhr.send();
}

// .onload is relatively new. The onld method was onreadystatechange. .Onload takes you straight to statge .4 below. 

//readState Values
// 0: Request not initialized
// 1: server connection established
// 2: request recieved 
// 3: processing request
// 4: request finsished and response is ready


// We have an event listener that calls the loadData() function, 
// We then create a new instance of the new XMLHttpRequest() object. We then call the .open and pass in the type of request we  want which is a GET request - GET request means you want to read the file or URL. And 'data.text' is what we are reading in as the file or (URL). Once everything is ready it will call .onload() function and we want to make sure its status of 200 which means OK. Then console log the responseText which is the data included in the 'data.text' file. Finally we us .send() for it to all acutally work. 
    