const submitEl = document.querySelector('#userInputForm');

// this is the function that will handle the form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const firstName = document.querySelector('#firstName-Box').value;
    const lastName = document.querySelector('#lastName-Box').value;
    let e = document.getElementById("inputGroupSelect01");
    let text = e.options[e.selectedIndex].text;
    let e2 = document.getElementById("inputGroupSelect02");
    let text2 = e2.options[e2.selectedIndex].text;
    
    if (!firstName || !lastName || !text|| !text2) {
        alert('You need to fill out the form');
        return;
    }

    const allUserData ={
        firstName,
        lastName,
        value: text,
        value2: text2
    }
    
    let storedUserInput = JSON.parse(localStorage.getItem('storedUserInput')) || []
    
    storedUserInput.push(allUserData)
    
    localStorage.setItem('storedUserInput', JSON.stringify(storedUserInput))
    renderUserInput();
    
}

submitEl.addEventListener('submit', handleFormSubmit);

