document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const faqItems = document.querySelectorAll('.faq-item');

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                showError(field, 'This field is required');
            } else {
                clearError(field);
            }
        });

        const emailField = document.getElementById('email');
        if (emailField.value && !isValidEmail(emailField.value)) {
            isValid = false;
            showError(emailField, 'Please enter a valid email address');
        }

        return isValid;
    }

    function showError(field, message) {
        clearError(field);
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        field.parentNode.appendChild(errorElement);
        field.classList.add('error');
    }

    function clearError(field) {
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
        field.classList.remove('error');
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // FAQ toggle functionality
    faqItems.forEach(item => {
        const question = item.querySelector('p');
        const toggleBtn = item.querySelector('.toggle-btn');
        const answer = document.createElement('div');
        answer.className = 'faq-answer';
        answer.textContent = 'This is a placeholder answer. Replace it with the actual answer for each question.';
        answer.style.display = 'none';
        item.appendChild(answer);

        toggleBtn.addEventListener('click', () => {
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
            toggleBtn.classList.toggle('active');
            toggleBtn.setAttribute('aria-expanded', answer.style.display === 'block');
        });
    });
});