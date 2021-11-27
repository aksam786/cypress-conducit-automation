# cypress-conducit-automation

Let’s use RealWorld example app as an application you are going to write automated tests for. The application is a social blogging site (i.e. a Medium.com clone) called "Conduit".

Follow the instructions below to setup frontend and backend apps locally before creating automation:

1- Clone the frontend repository https://github.com/gothinkster/react-redux-realworld-example-app
2- Install packages: npm install
3- Clone the backend repository https://github.com/gothinkster/node-express-realworld-example-app
4- Install backend packages: npm install
5- Install MongoDB Community Edition (instructions) and run it by executing: mongod
6- Start the local backend server: npm run dev 
7- Set up API_ROOT for the frontend. Edit src/agent.js and and change API_ROOT to the local server's URL: http://localhost:3000/api
8- Start the frontend app: npm start (executed in the frontend project)
9- Open the frontend app in the browser: http://localhost:4100/

# Cypress automation code

1- clone the repository https://github.com/aksam786/cypress-conducit-automation.git

2- install packages: npm install

3- Execute command: npx cypress open

4- Click Run All Integration Tests
