//create a variable that selects the form element
let userInput = document.querySelector('#userInput');

//create a variable that builds and element and appends it to the '#userInput' id
const buildElement = function (element, text, className) {
    let newElement = document.createElement(element);
    newElement.textContent = text;
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
        userInput.innerHTML = '';
        let userInformation = JSON.parse(localStorage.getItem('storedUserInput'));

        if (!userInformation || userInformation.length === 0) {
            handleNoPosts();
            return;
        }
        userInformation.forEach(post => {
            let trEl = buildElement('tr');
            let trailsCompleted = buildElement('td', post.value);
            let FirstAndLast = buildElement('td', post.firstName + ' ' + post.lastName);
            let trailName = buildElement('td', post.value);
            let trailRating = buildElement('td', post.value2);

            trEl.appendChild(trailsCompleted);
            trEl.appendChild(FirstAndLast); 
            trEl.appendChild(trailName);
            trEl.appendChild(trailRating);
            userInput.appendChild(trEl);
        });
    }
//call the renderUserInput function
    renderUserInput();



  





