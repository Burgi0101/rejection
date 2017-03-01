// question factory
const createQuestion = (data) => Object.assign({}, {
    timestamp: new Date().toLocaleString(),
    question: "",
    status: 'asked'
}, data);

// creates a new question object and adds it to the localStorage
function addQuestion() {
    const currentQuestion = document.getElementById('question').value;

    if (currentQuestion !== '' && currentQuestion.length >= 6) {

        const existingQuestions = JSON.parse(localStorage.getItem('allquestions')) || [];

        const questionObj = createQuestion({ question: currentQuestion });
        existingQuestions.push(questionObj);

        localStorage.setItem('allquestions', JSON.stringify(existingQuestions));
        document.getElementById("questions").innerHTML = existingQuestions.map((obj) => {
            return obj.question + "</br>";
        });
    }
}

function clearStorage() {
    localStorage.clear();
}