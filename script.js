const questions = [
    {
        question: "What's our favorite thing to do together?",
        options: ["Spend quality time", "Adventure", "Cuddle & watch movies", "Travel"],
        correct: 0
    },
    {
        question: "How do you feel about our relationship?",
        options: ["Uncertain", "Good", "Very Happy! 💕", "Complicated"],
        correct: 2
    },
    {
        question: "What makes our relationship special?",
        options: ["Trust", "Fun times", "Deep connection", "All of the above"],
        correct: 3
    },
    {
        question: "How important is this relationship to you?",
        options: ["Not sure", "Somewhat", "Very Important!", "Everything"],
        correct: 3
    },
    {
        question: "Where do you see our relationship heading?",
        options: ["Taking it day by day", "Moving forward", "Growing stronger together", "Forever & always"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
const quizContent = document.getElementById('quizContent');
const result = document.getElementById('result');
const progressBar = document.getElementById('progressBar');

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        document.getElementById('question').textContent = question.question;
        
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => selectOption(index);
            optionsContainer.appendChild(btn);
        });
        
        updateProgress();
    }
}

function selectOption(index) {
    const question = questions[currentQuestion];
    if (index === question.correct) {
        score++;
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = progress + '%';
}

function showResult() {
    quizContent.style.display = 'none';
    result.style.display = 'block';
    
    const percentage = (score / questions.length) * 100;
    const resultText = document.getElementById('resultText');
    const resultMessage = document.getElementById('resultMessage');
    
    if (percentage === 100) {
        resultText.textContent = 'PERFECT! 💕';
        resultMessage.textContent = 'You absolutely nailed it! Our relationship is amazing! 💕';
    } else if (percentage >= 80) {
        resultText.textContent = 'AMAZING!';
        resultMessage.textContent = `Awesome! You got ${score}/${questions.length} right! 🎉`;
    } else if (percentage >= 60) {
        resultText.textContent = 'GREAT!';
        resultMessage.textContent = `Nice! You scored ${score}/${questions.length}! 💕`;
    } else {
        resultText.textContent = 'GOOD!';
        resultMessage.textContent = `You scored ${score}/${questions.length}! Let's keep building our relationship together 💕`;
    }
}

// Start the quiz
loadQuestion();