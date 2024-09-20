//create a variable that selects the form element
let userInput = document.querySelector('#userInput');

//create a variable that builds and element and appends it to the '#userInput' id
const buildElement = function (element, text, className) {
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
        let userInformation = JSON.parse(localStorage.getItem('userInput'));

        if (!userInformation || userInformation.length === 0) {
            handleNoPosts();
            return;
        }
        userInformation.forEach(post => {
            let trEl = buildElement('tr');
            let trailsCompleted = buildElement('th', post.trailsCompletedEl);
            let FirstAndLast = buildElement('th', post.FirstAndLastEl);
            let trailName = buildElement('th', post.trailNameEl);
            let trailRating = buildElement('th', post.trailRatingEl);

            trEl.appendChild(trailsCompleted);
            trEl.appendChild(FirstAndLast); 
            trEl.appendChild(trailName);
            trEl.appendChild(trailRating);
            userInput.appendChild(trEl);
        });
    }
//call the renderUserInput function
    renderUserInput();

    //





