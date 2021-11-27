# cypress-conducit-automation

Let’s use RealWorld example app as an application you are going to write automated tests for. The application is a social blogging site (i.e. a Medium.com clone) called "Conduit".

Follow the instructions below to setup frontend and backend apps locally before creating automation:

Clone the frontend repository https://github.com/gothinkster/react-redux-realworld-example-app
Install packages: npm install
Clone the backend repository https://github.com/gothinkster/node-express-realworld-example-app
Install backend packages: npm install
Install MongoDB Community Edition (instructions) and run it by executing: mongod
Start the local backend server: npm run dev 
Set up API_ROOT for the frontend. Edit src/agent.js and and change API_ROOT to the local server's URL: http://localhost:3000/api
Start the frontend app: npm start (executed in the frontend project)
Open the frontend app in the browser: http://localhost:4100/

# Cypress automation code

1- clone the repository https://github.com/aksam786/cypress-conducit-automation.git

2- install packages: npm install

3- Execute command: npx cypress open

4- Click Run All Integration Tests
