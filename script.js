const questions = [
    {
        question: "After a tiring day, what helps you feel re-energized?",
        options: ["Spending time by yourself", "Socializing with friends"]
    },
    {
        question: "At social gatherings, you usually:",
        options: ["Stick to conversations with a few close friends", "Mingle and meet new people"]
    },
    {
        question: "How do you prefer to manage stress?",
        options: ["Think things through on your own", "Discuss your problems with others"]
    },
    {
        question: "Your perfect weekend activity is:",
        options: ["Enjoying a quiet evening with a book", "Going out and having fun with friends"]
    },
    {
        question: "When making decisions, you:",
        options: ["Take time to reflect and analyze", "Prefer to talk it out with others"]
    },
    {
        question: "In your free time, you are more likely to:",
        options: ["Engage in a solitary hobby", "Participate in group activities"]
    },
    {
        question: "In a team setting, you:",
        options: ["Prefer to work independently or with a small group", "Thrive in a large, collaborative group"]
    },
    {
        question: "When meeting new people, you:",
        options: ["Feel reserved and take time to open up", "Feel energized and engage easily"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question').innerText = question.question;
        document.getElementById('option1').innerText = question.options[0];
        document.getElementById('option2').innerText = question.options[1];
    } else {
        showResult();
    }
}

function selectAnswer(option) {
    if (option === 1) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    const resultElement = document.getElementById('result');
    let resultText;
    if (score >= 6) {
        resultText = "Introvert";
    } else if (score <= 2) {
        resultText = "Extrovert";
    } else {
        resultText = "Balanced traits of introversion and extroversion";
    }
    resultElement.innerText = `Your score is ${score}. You are likely an ${resultText}.`;
    document.getElementById('quiz-container').style.display = 'none';
}
function changingImg(){
    document.getElementById("y").src="c:/Users/hp/Downloads/innnn.jpg"
}

window.onload = loadQuestion;
