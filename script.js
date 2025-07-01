document.addEventListener("DOMContentLoaded", function () {
    // For each quiz section
    ['Q1', 'Q2', 'Q3'].forEach(sectionClass => {
        const section = document.querySelector(`.${sectionClass}`);
        if (section) {
            const images = section.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('click', function () {
                    // Remove 'selected' from all images in this section
                    images.forEach(i => i.classList.remove('selected'));
                    // Add 'selected' to the clicked image
                    img.classList.add('selected');
                    // You can add more logic here, e.g., save the answer
                });
            });
        }
    });
});

    // Store user answers
    const userAnswers = {};
    const resultDiv = document.querySelector('.result');

    // Update event listeners to save answers and check results
    ['Q1', 'Q2', 'Q3'].forEach(sectionClass => {
        const section = document.querySelector(`.${sectionClass}`);
        if (section) {
            const images = section.querySelectorAll('img');
            images.forEach((img, idx) => {
                img.addEventListener('click', function () {
                    images.forEach(i => i.classList.remove('selected'));
                    img.classList.add('selected');
                    userAnswers[sectionClass] = idx;
                    checkResults();
                });
            });
        }
    });

    function checkResults() {
        if (
            userAnswers.Q1 !== undefined &&
            userAnswers.Q2 !== undefined &&
            userAnswers.Q3 !== undefined
        ) {
            let resultText = "";
            if (
                userAnswers.Q1 === 0 &&
                userAnswers.Q2 === 0 &&
                userAnswers.Q3 === 0
            ) {
                resultText = "You are super chill and love relaxing weekends!";
            } else if (
                userAnswers.Q1 === 1 &&
                userAnswers.Q2 === 2 &&
                userAnswers.Q3 === 1
            ) {
                resultText = "You are adventurous and love exploring new things!";
            } else if (
                userAnswers.Q1 === 2 &&
                userAnswers.Q2 === 2 &&
                userAnswers.Q3 === 2
            ) {
                resultText = "You like getting things done!";
            } else {
                resultText = "You have a balanced vibe. Enjoy your unique style!";
            }
            resultDiv.textContent = resultText;
        } else {
            resultDiv.textContent = "";
        }
    }