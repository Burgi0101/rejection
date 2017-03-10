//factories
const createQuestionObject = (data) => Object.assign({}, {
    timestamp: new Date().toLocaleString(),
    question: "",
    status: ""
}, data);

const createQuestion = (arr) => {
    document.getElementById("questions").innerHTML = arr.map((obj, index) => {
        return '<div> Question ' + index + ': ' + obj.question +
            ' <button onclick="answerQuestion(rejected)">rejected</button>' +
            ' <button onclick="answerQuestion(accepted)">accepted</button></div></br>';
    }).join(" ");
};

//###########################################################################

function getStoredData() {
    const existingQuestions = JSON.parse(localStorage.getItem('allquestions')) || [];
    createQuestion(existingQuestions);
}

// creates a new question object and adds it to the localStorage
function addQuestion() {
    let currentQuestion = document.getElementById('askQuestion');

    if (currentQuestion.value !== '' && currentQuestion.value.length >= 6) {

        // clear the error div if the criteria was met
        document.getElementById("errors").innerText = "";

        // get stored questions
        const existingQuestions = JSON.parse(localStorage.getItem('allquestions')) || [];

        // create new question object with the current value of the input field
        const newQuestionObject = createQuestionObject({ question: currentQuestion.value, status: 'asked' });

        //add it to the already existing questions
        existingQuestions.push(newQuestionObject);

        // push the whole array (old questions + current) to the local storage again
        localStorage.setItem('allquestions', JSON.stringify(existingQuestions));

        // create a div for every question and enter the question as text
        createQuestion(existingQuestions);

        // clear the input field if the question was added
        currentQuestion.value = "";
    }
    else {
        // show error if the criteria was not met
        document.getElementById("errors").innerText = "Your question has to be at least 6 characters long!";
    }
}

function clearStorage() {
    localStorage.clear();

    // clear the questions as the local storage was cleared
    document.getElementById("questions").innerHTML = "";
}