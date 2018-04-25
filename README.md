<h1>Weather App</h1>
My first React project, the Weather Finder app where users can search for real-time weather results courtesy of the Open Weather Map API.

<h4>Getting Started</h4>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

<h4>Prerequisites<h4>
Install Node.js 

<h4>Give examples<h4>
Installing

<h4>Running the tests<h4>
Running Tests
Note: this feature is available with react-scripts@0.3.0 and higher.
Read the migration guide to learn how to enable it in older projects!

Create React App uses Jest as its test runner. To prepare for this integration, we did a major revamp of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as window thanks to jsdom, they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.
<h4>Deployment</h4>
npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file.

Static Server
For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:

npm install -g serve
serve -s build
The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -p or --port flags.

Run this command to get a full list of the options available:

serve -h

<h4>Built With</h4>
React.js
JavaScript/ES6
Create-React-App
Node

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Author
Tae'lur Alexis- Co-Founder of DigiConMedia.io
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments

etc
