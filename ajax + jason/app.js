document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText)

            const customer = JSON.parse(this.responseText); // turns json string into javaScript object...thus we can access using customer.name, or customer.id and put the index's values into our page.

            const output =
                `<ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li> 
                    <li>Phone: ${customer.phone}</li>
                </ul>`;
            
            document.getElementById('customer').innerHTML = output;


        }
    }

    xhr.send();
}





