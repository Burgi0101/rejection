// question factory
const createQuestion = (data) => Object.assign({}, {
    timestamp: new Date().toLocaleString(),
    question: "",
    status: ""
}, data);


function getStoredData() {
    const existingQuestions = JSON.parse(localStorage.getItem('allquestions')) || [];
    document.getElementById("questions").innerHTML = existingQuestions.map((obj) => {
        return obj.question + "</br>";
    });
}

// creates a new question object and adds it to the localStorage
function addQuestion() {
    const currentQuestion = document.getElementById('question').value;

    if (currentQuestion !== '' && currentQuestion.length >= 6) {

        document.getElementById("errors").innerText = "";
        const existingQuestions = JSON.parse(localStorage.getItem('allquestions')) || [];

        const questionObj = createQuestion({ question: currentQuestion, status: 'asked' });
        existingQuestions.push(questionObj);

        localStorage.setItem('allquestions', JSON.stringify(existingQuestions));
        document.getElementById("questions").innerHTML = existingQuestions.map((obj) => {
            return obj.question + "</br>";
        });
    }
    else {
        document.getElementById("errors").innerText = "Your question has to be at least 6 characters long!";
    }
}

function clearStorage() {
    localStorage.clear();
    document.getElementById("questions").innerHTML = "";
}