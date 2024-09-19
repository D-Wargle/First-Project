//create a variable that selects the form element
let userInput = document.querySelector('#userInput');

//create a variable that builds and element and appends it to the '#userInput' id
const buildElement = function (element. text, className) {
    let newElement = document.createElement('elementType');
    element.textContent = text;
    if (className) newElement.className = className;
    return newElement;
 }

 //create a function that handles the case where there are no blog posts to display 
    const handleNoPosts = function () {
        let noPosts = buildElement('p', 'no-posts');
        noPosts.textContent = 'No user input to display';
        userInput.appendChild(noPosts);
    }

    //create a function that renders the user input if it exists. if they do not exist, call the handleNoPosts function
    const renderUserInput = function () {
        let userInformation = JSON.parse(localStorage.getItem('blogp'))
    }





