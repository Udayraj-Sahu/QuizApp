const questions = [
	{
		'que': "Which of the following is a markup language?",
		'a': "HTML",
		'b': "CSS",
		'c': "JavaScript",
		'd': "PHP",
		'result': "a",
	},
	{
		'que': "The correct sequence of HTML tags for starting a webpage is -",

		'a': "Head, Title, HTML, body",
		'b': "HTML, Body, Title, Head",
		'c': "HTML, Head, Title, Body",
		'd': "HTML, Head, Title, Body",
		'result': "d",
	},

	{
		'que': "Which of the following element is responsible for making the text bold in HTML?",
		'a': "<pre>",
		'b': "<a>",
		'c': "<b>",
		'd': "<br></br>",
		'result': "c",
	},
];
let idx = 0;
let total = questions.length;
let right = 0,
	wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");
const loadQuestion = () => {
	if (idx === total) {
		return endQuiz();
	}
	reset();
	const data = questions[idx];
	quesBox.innerText = `${idx + 1}) ${data.que}`;
	optionInput[0].nextElementSibling.innerText = data.a;
	optionInput[1].nextElementSibling.innerText = data.b;
	optionInput[2].nextElementSibling.innerText = data.c;
	optionInput[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
    const data = questions[idx]
	const ans = getAnswer();
	if (ans == data.result) {
		right++;
	} else {
		wrong++;
	}
	idx++;
	loadQuestion();
	return;
};

const getAnswer = () => {
	let answer;
	optionInput.forEach((input) => {
		if (input.checked) {
			answer = input.value;
		}
	});
	return answer;
};
const reset = () => {
	optionInput.forEach((input) => {
		input.checked = false;
	});
};
const endQuiz = () => {
	document.getElementById("box").innerHTML = `
    <h3> Thank You For Playing The Quiz <h3>
    <h2> ${right} / ${total} are correct <h2>
    `;
};
loadQuestion();
