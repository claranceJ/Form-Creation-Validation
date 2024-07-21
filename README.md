User Data Display and Form Validation Projects
Introduction

This repository contains two projects demonstrating modern JavaScript practices: a user data display application that fetches and displays data from an external API, and a form validation application that ensures user input meets specific criteria.
Table of Contents

    Live Demo
    Features
    Technologies Used
    Getting Started
        Prerequisites
        Installation
    Usage
        User Data Display
        Form Validation
    Project Structure
    Contributing
    License

Live Demo

Check out the live demo of both projects here.
Features
User Data Display

    Fetches user data from an external API.
    Displays user data in a clean and responsive UI.
    Handles loading states and errors gracefully.

Form Validation

    Validates user input for a registration form.
    Provides instant feedback on form submission.
    Ensures username, email, and password meet specific criteria.

Technologies Used

    HTML5
    CSS3
    JavaScript (ES6+)
    JSONPlaceholder API (User Data Display)

Getting Started
Prerequisites

Before you begin, ensure you have the following installed on your machine:

    A modern web browser (Chrome, Firefox, Edge, etc.)
    Code editor (VSCode, Sublime Text, etc.)

Installation

    Clone the repository:

bash

git clone https://github.com/yourusername/projects.git

    Navigate to the project directory:

bash

cd projects

    Open index.html in your preferred web browser.

Usage
User Data Display

    Open the index.html file in the user-data-display directory in your browser.
    The application will display a list of users fetched from the JSONPlaceholder API.
    If there's an error fetching the data, a message will be displayed to inform the user.

Form Validation

    Open the index.html file in the form-validation directory in your browser.
    Fill out the registration form and click "Register".
    The form will validate the input and display feedback messages based on the validation rules.

Project Structure

graphql

projects/
│
├── user-data-display/
│   ├── fetch-data.css      # CSS styles for the user data display project
│   ├── fetch-data.js       # JavaScript for fetching and displaying user data
│   └── index.html          # Main HTML file for user data display
│
├── form-validation/
│   ├── style.css           # CSS styles for the form validation project
│   ├── script.js           # JavaScript for form validation
│   └── index.html          # Main HTML file for form validation
│
└── README.md               # Project README

Detailed Explanation
User Data Display

    HTML Structure: The index.html file contains the basic structure of the web page, including the main container where user data will be displayed.
    CSS Styling: The fetch-data.css file includes styles to make the application visually appealing and responsive.
    JavaScript Functionality: The fetch-data.js file contains the main logic for fetching and displaying user data:
        Defines an asynchronous function fetchUserData.
        Uses fetch to retrieve data from the API.
        Handles loading states and errors.
        Dynamically creates and appends HTML elements to display the user data.

Form Validation

    HTML Structure: The index.html file contains the structure of the registration form with inputs for username, email, and password.
    CSS Styling: The style.css file includes styles to enhance the form’s appearance.
    JavaScript Functionality: The script.js file contains the logic for validating the form:
        Adds an event listener to the form for the submit event.
        Prevents the default form submission.
        Retrieves and trims user inputs.
        Validates the username, email, and password based on predefined rules.
        Displays appropriate feedback messages.

Contributing

Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.

Crafted with 💻 and ☕ by Jacktone Clarance