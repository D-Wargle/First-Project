const submitEl = document.querySelector('#UseriputForm');
const trailEL = document.querySelector('#inputGroupSelector01');
const ratingEL = document.querySelector('#inputGroupSelector02');

// this is the function that will handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const firstName = document.querySelector('#firstName-Box').value;
    const lastName = document.querySelector('#lastName-Box').value;
    let e = document.getElementById("inputGroupSelector01");
    let value = e.value;
    let text = e.options[e.selectedIndex].text;
    let e2 = document.getElementById("inputGroupSelector02");
    let value2 = e2.value;
    let text2 = e2.options[e2.selectedIndex].text;
    
    if (!firstName || !lastName || !e|| !e2) {
        alert('You need to fill out the form');
        return;
    }
}

//this is the object that will be sent to the server
const allUserData ={
    firstName,
    lastName,
    value: text,
    value2: text2,
};

let storedUserInput = JSON.parse(localStorage.getItem('storedUserInput')) || [];

storedUserInput.push(allUserData);

localStorage.setItem('storedUserInput', JSON.stringify(storedUserInput));



submitEl.addEventListener('submit', handleFormSubmit);
