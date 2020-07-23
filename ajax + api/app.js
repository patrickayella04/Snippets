document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
   
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            // The json string we get, we want to be able to turn it into an (JavaScript Object) object that we can do things to like loop through. So we wrap the this.resposneText in the JSON.parse() function. This gives us joke objects in an array index in the form of a JavaScript Object. All jokes will be random. The process of getting jokes from the API is now complete. Now the jokes need to put into the DOM(Document Object Model).
            const response = JSON.parse(this.responseText);
            console.log(response);
            
            let output = '';

            if (response.type === 'success') {
                // Check what the api reuturns, and the response may be an object. The data needed is its value, thus in this case the variable response.forEach is incorrect. response.value.forEach is correct. check the console.log to make sure each time the value you want is looping through the value and not the object.
                response.value.forEach(function (joke) {
                    
                });
            } else {
                output += '<li>Something went wrong</li>';
            }
        }
    }

    xhr.send();


    e.preventDefault()
}