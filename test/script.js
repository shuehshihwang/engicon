document.addEventListener('DOMContentLoaded', () => {
    const vocabularyImages = document.querySelectorAll('.vocabulary-image');

    vocabularyImages.forEach(image => {
        image.addEventListener('click', () => {
            const vocabularyList = image.getAttribute('data-text');
            const textArea = image.nextElementSibling;
            if (textArea.style.display === 'none' || textArea.style.display === '') {
                textArea.style.display = 'block';
                textArea.textContent = vocabularyList;
            } else {
                textArea.style.display = 'none';
            }
        });
    });
});

