document.addEventListener('DOMContentLoaded', () => {
    const faqItems = Array.from(document.querySelectorAll('.faq__main--items'))


    // console.log(faqItems)

    faqItems.forEach(item => {
        const question = item.querySelector('.faqQuestion');
        const answer = item.querySelector('.faqAnswers');
        const arrow = item.querySelector('.arrow');
        // console.log(question)
        // console.log(answer)
        // console.log(arrow)

        const toggleFAQ = () => {
            const isVisible = answer.style.display === 'block';


            faqItems.forEach(i => {
                i.querySelector('.faqAnswers').classList.remove('show');
                i.querySelector('.faqQuestion').classList.remove('active');
                i.querySelector('.arrow').classList.remove('arrow-up');
            });


            if (!isVisible) {
                answer.classList.add('show');
                question.classList.add('active');
                arrow.classList.add('arrow-up');
            }
        };

        question.addEventListener('click', toggleFAQ);
        arrow.addEventListener('click', toggleFAQ);
    });


});
