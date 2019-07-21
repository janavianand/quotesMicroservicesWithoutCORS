Quotes Project

* Implemented using Microservices
* UI/Frontend and Backend runs on different server
* UI is rendered in https://localhost:5000
* Backend runs on https://localhost:5001

Steps

* Clone the repo
* Enter quotes-ui and run `npm install` and `npm start`
* Open a new CLI or bash
* Create a PostgereSQL database named `quotesProject`
* Enter quotes-server and run `npm install` and `npm run seed`
* Now start the server `npm start`

Note: This application makes request to another microservice from the proxy server. The CORS error is generated only when the application makes a request from the browser or frontend.
