Calculator Application
This project is a feature-rich calculator built with React and Math.js, offering a wide range of mathematical functions. The application includes a responsive design, memory functions, and even a confetti explosion for specific input patterns.

Features
Basic arithmetic operations (addition, subtraction, multiplication, division)
Advanced mathematical functions (square root, cube root, reciprocal, exponentiation)
Trigonometric functions (sin, cos, tan) in both radian and degree modes
Memory functions (MC, M+, M-, MR)
Random number generation
Factorial calculation
Responsive design for various screen sizes
Confetti explosion for specific input patterns (e.g., sequences involving 3 and 4)
Installation
To run this project locally, follow these steps:

Clone the repository:

sh
Copy code
git clone https://github.com/pr194/scientific-calculator-Abcd
cd calculator-app
Install dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm start
The application will be available at http://localhost:3000.

Usage
Open the application in your web browser.
Use the buttons to input your expressions and perform calculations.
The display will show the current input and the result of your calculations.
Components
Calculator.js
This is the main component of the application. It includes the following key features:

useState hooks for managing the state of the expression, mode, memory, and custom variables.
Handlers for various mathematical operations.
Input handling for buttons.
Confetti explosion trigger based on specific input patterns.
App.css
The CSS file for styling the calculator. The styles are designed to be responsive, ensuring the calculator looks good on various screen sizes.

Responsive Design
The CSS includes media queries and flexbox layout to ensure the calculator is responsive. The .main-div and other key elements adjust their size and layout based on the screen width, making the application usable on both desktop and mobile devices.

Key CSS Classes
.main-div: The main container for the calculator, styled to be centered and responsive.
.upper-div: Container for the display and delete button.
.btn-div: Wrapper for all the buttons, using flexbox for layout.
.btn: Base class for all buttons, with additional styling for specific types (e.g., .last-btn for the equals button).
Confetti Explosion
The application uses the react-confetti-explosion package to display a confetti explosion for specific input patterns. This is a fun feature that adds a bit of celebration when the user enters certain sequences.

Dependencies
React: Front-end library for building user interfaces.
Math.js: Library for mathematical operations.
react-confetti-explosion: Component for confetti animations.
@mui/icons-material: Icon library for Material UI.
Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

License
This project is licensed under the MIT License.

Acknowledgements
Math.js for providing comprehensive mathematical functions.
react-confetti-explosion for the fun confetti effect.
Material UI Icons for the backspace icon.
