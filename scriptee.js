function selectAnswer(index) {
    const correct = quizQuestions[currentQuestion].answer;
    Array.from(quizOptionsEl.children).forEach((btn, i) => {
        btn.disabled = true;
        if(i === correct) btn.classList.add('correct');
        if(i === index && i !== correct) btn.classList.add('wrong');
    });
    if(index === correct) score++;
    nextBtn.style.display = 'inline-block';
}
