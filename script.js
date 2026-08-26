const questions = [
    {
        question: `I tell Dr Amrita:

“Whenever I see you, my pupils dilate.”

She replies, “That could literally just be sympathetic stimulation.”

Which muscle causes pupillary dilation?`,

        answers: [
            "A. Sphincter pupillae",
            "B. Dilator pupillae",
            "C. Ciliary muscle",
            "D. Orbicularis hopelessromanticus"
        ],

        correct: 1,

        correctMessage: "✓ Correct. Dilator pupillae. Sympathetic stimulation wins again."
    },

    {
        question: `I tell Dr Amrita:

“You take my breath away.”

She becomes concerned, obtains an ABG, and discovers a PaCO₂ of 29 mmHg after I hyperventilate during an argument.

Which disturbance is most likely?`,

        answers: [
            "A. Respiratory acidosis",
            "B. Respiratory alkalosis",
            "C. Metabolic alkalosis",
            "D. Acute girlfriend-induced pneumonitis"
        ],

        correct: 1,

        correctMessage: "✓ Correct. Hyperventilation decreases PaCO₂. Romance has once again become an ABG question."
    },

    {
        question: `A medical student says:

“Every time I see you, I develop palpitations. Are you willing to become my propranolol?”

Propranolol acts primarily as:`,

        answers: [
            "A. Selective β1 antagonist",
            "B. Nonselective β antagonist",
            "C. α1 agonist",
            "D. Emotional-support molecule"
        ],

        correct: 1,

        correctMessage: "✓ Correct. Propranolol blocks both β1 and β2 receptors."
    },

    {
        question: `Rohan confesses to Amrita:

“Are you oxygen? Because I have four binding sites and somehow I still feel incomplete without you.”

Adult hemoglobin A consists of:`,

        answers: [
            "A. α₂β₂",
            "B. α₂γ₂",
            "C. α₂δ₂",
            "D. Romeo₂Juliet₂"
        ],

        correct: 0,

        correctMessage: "✓ Correct. Adult HbA is α₂β₂. Four chains, considerably fewer emotional complications."
    },

    {
        question: `Rohan remembers the Taylor Swift song Amrita sang for him and tells her:

“You've gone viral in my heart.”

Viruses require host cells primarily because they:`,

        answers: [
            "A. Lack independent machinery necessary for replication",
            "B. Lack nucleic acids",
            "C. Cannot contain proteins",
            "D. Are emotionally codependent"
        ],

        correct: 0,

        correctMessage: "✓ Correct. Viruses depend on host-cell machinery for replication."
    },

    {
        question: `Rohan develops periumbilical pain that later migrates to the right lower quadrant while on a first date with Amrita.

He refuses to leave because “things are actually going really well.”

Which diagnosis is most likely?`,

        answers: [
            "A. Acute appendicitis",
            "B. Acute pancreatitis",
            "C. Cholecystitis",
            "D. Terminal romantic optimism"
        ],

        correct: 0,

        correctMessage: "✓ Correct. Migratory periumbilical-to-RLQ pain is classic acute appendicitis."
    },

    {
        question: `1990s. Dr Satpal tells Dr Lovely:

“Are you IV contrast? Because the moment you entered my circulation, you went straight to my heart.”

After injection into a peripheral vein, contrast first enters which cardiac chamber?`,

        answers: [
            "A. Left atrium",
            "B. Left ventricle",
            "C. Right atrium",
            "D. The chamber of secrets"
        ],

        correct: 2,

        correctMessage: "✓ Correct. Peripheral venous blood returns first to the right atrium."
    },

    {
        question: `Dr PK tells Dr Ananya:

“I've managed difficult airways, but I still can't find the words to talk to you.”

Which bedside assessment is commonly used to help predict difficult intubation?`,

        answers: [
            "A. Mallampati classification",
            "B. Glasgow Coma Scale",
            "C. APGAR score",
            "D. Hot-to-crazy ratio"
        ],

        correct: 0,

        correctMessage: "✓ Correct. Mallampati classification. Difficult airway: assessed. Difficult conversation: prognosis uncertain."
    },

    {
        question: `Dr PK tells Dr Ananya:

“Are you propofol? Because one look at you and I'm completely knocked out.”

Propofol primarily enhances activity at which receptor?`,

        answers: [
            "A. NMDA",
            "B. GABA-A",
            "C. Dopamine D2",
            "D. Love receptor 5-HT69"
        ],

        correct: 1,

        correctMessage: "✓ Correct. Propofol potentiates GABA-A receptor activity."
    },

    {
        question: `1990s. After a significant period of courtship, Dr Satpal tells Dr Lovely:

“Our relationship is like fluid on T2.”

She asks why.

“Because it looks bright.”

Simple fluid on a conventional T2-weighted MRI typically appears:`,

        answers: [
            "A. Dark",
            "B. Bright",
            "C. Invisible",
            "D. Emotionally complicated"
        ],

        correct: 1,

        correctMessage: "✓ Correct. Fluid is typically bright on T2-weighted MRI."
    },

    {
        question: `After an argument between Amrita and Rohan:

Rohan: “You've broken my heart.”

Amrita: “Severe emotional stress can actually cause Takotsubo cardiomyopathy.”

Rohan: “Can I just be dramatic for five minutes?”

Takotsubo cardiomyopathy classically demonstrates:`,

        answers: [
            "A. Apical ballooning",
            "B. Boot-shaped heart",
            "C. Snowman sign",
            "D. Anatomically fractured myocardium"
        ],

        correct: 0,

        correctMessage: "✓ Correct. Takotsubo cardiomyopathy classically causes apical ballooning."
    },

    {
        question: `Rohan: “You're constantly on my mind.”

Amrita: “Obsessive thoughts?”

Rohan: “ROMANCE.”

Which brain structure plays a major role in formation of new declarative memories?`,

        answers: [
            "A. Hippocampus",
            "B. Medulla",
            "C. Substantia nigra",
            "D. Nucleus girlfriendus"
        ],

        correct: 0,

        correctMessage: "✓ Correct. The hippocampus is critical for formation of new declarative memories."
    }
];


let currentQuestion = 0;
let answered = false;


const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const finalScreen = document.getElementById("final-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const progressElement = document.getElementById("progress");


startBtn.addEventListener("click", function () {

    welcomeScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
});


function showQuestion() {

    answered = false;

    const questionData = questions[currentQuestion];

    questionElement.textContent = questionData.question;

    progressElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    answersElement.innerHTML = "";
    feedbackElement.textContent = "";

    nextBtn.style.display = "none";


    questionData.answers.forEach(function (answer, index) {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-btn");

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        answersElement.appendChild(button);
    });
}


function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const questionData = questions[currentQuestion];

    const allButtons =
        document.querySelectorAll(".answer-btn");


    if (selectedIndex === questionData.correct) {

        selectedButton.classList.add("correct");

        feedbackElement.textContent =
            questionData.correctMessage;

    } else {

        selectedButton.classList.add("wrong");

        feedbackElement.textContent =
            "✗ Incorrect. Medicine remains cruel and romance remains poorly peer-reviewed.";

        allButtons[questionData.correct]
            .classList.add("correct");
    }


    allButtons.forEach(function (button) {
        button.disabled = true;
    });


    nextBtn.style.display = "inline-block";
}


nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        quizScreen.classList.remove("active");
        finalScreen.classList.add("active");

    }

});