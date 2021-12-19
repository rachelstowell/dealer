# dealer

## Description

This simple page allows you to click a button and receive a playing card. That's really all there is to it. ♠️ ♣️ ♦️ ♥️ 

## Getting Started

### Dependencies

You'll need to have nodejs and npm installed. If you'd like to run the test in jest.config.js on Ubuntu, you'll need several dependencies (outlined below) for the chromium browser to launch. 

https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix

### Installing
```
git clone https://github.com/rachelstowell/dealer.git
npm install
```
### Executing program

Create a .env file at the root of the source tree containing environment variables for LOCAL_PORT and LOCAL_HOST. This will specify what host and port the server will listen on.
```
LOCAL_PORT=3000
LOCAL_HOST=127.0.0.1
```
Run the app with:
```
node index.js
```
You should see the following in the console:
```
Server running at http://LOCAL_HOST:LOCAL_PORT/
```
Hit CTRL+C to stop running the server.

### Running a test

The test will start the server on http://127.0.0.1:3000, and launch a headless browser to click the "Hit me!" button and validate whether text appears on the page.
Run the test with:
```
npm test
```
### What else is in here?

* Dockerfile - A dockerfile based on Ubuntu:20.04 with all required app dependencies and puppeteer dependencies.
* .circleci/config.yml - CircleCI config file for running the app in a docker container built from the included Dockerfile. This config will also run the jest test and deploy the app to Heroku at https://murmuring-coast-12391.herokuapp.com/
* jest-puppeteer.config.js - Config file specifying settings and arguments for jest to use when launching puppeteer.
* jest.config.js - Config file for jest.
* Procfile - To be used when deploying to Heroku.

### Help
Check out some of these resources, or send me an e-mail.

* https://deckofcardsapi.com/
* https://github.com/facebook/jest
* https://github.com/smooth-code/jest-puppeteer

