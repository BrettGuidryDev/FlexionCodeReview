# FlexionCodeReview

Sample assessment

To start up this web app
Clone the repo from https://github.com/BrettGuidryDev/FlexionCodeReview.git
cd into the directory created for this repo and run 'npm run dev'

This project was set up with Vite so the server port can be configured in the vite.config.js. Currently it's set to 3000

Once the server is running you should be able to access the application at the following URL: http://localhost:3000/

Inputs and expected results are rounded to 2 decimal places which means
if the function is checking the conversion 1000 Rankine --> Celsius the following inputs will resolve
in the following way:
282.41 === "correct"
282.406 === "correct"
282.415 === "incorrect"
282.405 === "incorrect"

Units of volume are consistent with US volume measures
1 US cup === 8.115 fluid ounces
1 US gallon === 3.785 liters
1 US tablespoon === .5 fluid ounces

List of further development tasks:
Add unit testing (jest, Mocha, etc)
Clean up the front end styling
Change color palate for better visibilty
Improve dropdown menues with additional styling
Add options for light / dark mode
Adjust element alignment
Add in live typing notification for invalid characters
Add SQLdatabase backend
Record records per student
maintain records of correct / incorrect answers
