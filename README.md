# CodingChallengeClient

## Overview ##
CodingChallengeClient is a react/webpack app which has a simple web responsive web page. It also interacts with codingChallengeAPI server

## Tech Stack ##

* Node/React/Webpack
* Other libraries like file/css/style/url-loaders

## Feature Supported ##

* Navigate through the list
* Send a message and see if server accepts it or denies. 

## Usage ##

To run in local, 

```
Start the codingChallengeAPI Server
npm install
npm start
```

This app is also hosted in Heroku, 

```
https://mj-coding-challenge-client.herokuapp.com/
```

## Business Logic ##

* On page load, We load the list from the codingChallengeAPI
* On each template, when you type the message and send, it is a POST call to the codingChallengeAPI and gets the response back and displayed in the template.
