// Step 1: Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Step 2: Select the form element
    const form = document.getElementById('registration-form');

    // Step 3: Select the feedback division
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 4: Add event listener to the form for the 'submit' event
    form.addEventListener('submit', function(event){
        // Step 5: Prevent the default form submission
        event.preventDefault();
        
        // Step 6: Retrieve and trim user inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Step 7: Initialize validation variables
        let isValid = true;
        const messages = [];

        // Step 8: Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        // ste 9: Email validation
        if (!email.includes('@') || !email.includes('.')){
            isValid = false;
            messages.push('Please enter a valid email address.')
        }
        //step 10: Password validation
        if (password.length < 8){
            isValid = false;
            messages.push('Password must be at least 8 characters long')
        }
        //Display feedback
        if (isValid){
            feedbackDiv.textContent = 'Registration Successful!';
            feedbackDiv.style.color = '#28a745';
        }
        else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }




       feedbackDiv.style.display = 'block'; //make feedback visible

    });
});