# Project
I learnt this project from Udemy.   
The course name is: The Complete React Web Developer Course (with Redux) - Author: Andrew Mead.  
Thanks to him, this course is super good for someone beginning to learn React & Redux.  
It helps me to understand about React & Redux clearly.  

# What I learnt
Some basic knowledge about:  
React  
Redux  
React Router  
Sass  
Jest & Enzyme  
Git  
Heroku  
Firebase  

# Git commands

git init - Create a new git repo  
git status - View the changes to your project code  
git add - Add files to staging area  
git commit - Creates a new commit with files from staging area  
git log - View recent commits  
git push  
git push -u origin master  

# Git SSH

# Heroku commands
heroku --version
heroku login  
heroku create react-redux-expensify-namndh  
git push heroku master  
heroku open  
heroku logs  
heroku config:set key=value  

# yarn scripts
yarn run dev-server  
yarn run build:prod  
yarn run build:dev  
yarn test -- --watchAll  
yarn run start  
yarn install  
yarn install --production  

# Firebase
const database = firebase.database();  
database.ref().on('value', (snapshot) => {
}, (e) => {
});  
database.ref.off('value', onValueChange);  
database.ref('isSingle').remove();
database.ref().update({});  
database.ref('notes').push({});  
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});  
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});   
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});  

# Sass


# installation
production + development  
    "babel-cli": "^6.26.0",  
    "babel-core": "^6.26.0",  
    "babel-loader": "^7.1.2",  
    "babel-plugin-transform-class-properties": "^6.24.1",  
    "babel-plugin-transform-object-rest-spread": "^6.26.0",  
    "babel-polyfill": "^6.26.0",  
    "babel-preset-env": "^1.6.1",  
    "babel-preset-react": "^6.24.1",  
    "css-loader": "^0.28.7",  
    "eslint": "^4.12.0",  
    "express": "^4.16.2",  
    "extract-text-webpack-plugin": "^3.0.2",  
    "firebase": "^4.6.2",  
    "history": "^4.7.2",  
    "moment": "^2.19.2",  
    "node-sass": "^4.7.2",  
    "normalize.css": "^7.0.0",  
    "numeral": "^2.0.6",  
    "raf": "^3.4.0",  
    "react": "16.2.0",  
    "react-addons-shallow-compare": "^15.6.2",  
    "react-dates": "^12.2.4",  
    "react-dom": "16.2.0",  
    "react-google-button": "^0.4.0",  
    "react-modal": "^3.1.4",  
    "react-redux": "^5.0.6",  
    "react-router-dom": "^4.2.2",  
    "redux": "^3.7.2",  
    "redux-mock-store": "^1.3.0",  
    "redux-thunk": "^2.2.0",  
    "sass-loader": "^6.0.6",  
    "style-loader": "^0.19.0",  
    "uuid": "^3.1.0",  
    "validator": "^9.1.2",  
    "webpack": "^3.8.1"  
development only  
    "cross-env": "^5.1.1",  
    "dotenv": "^4.0.0",  
    "enzyme": "^3.2.0",  
    "enzyme-adapter-react-16": "^1.1.0",  
    "enzyme-to-json": "^3.2.2",  
    "jest": "^21.2.1",  
    "jest-cli": "^21.2.1",  
    "live-server": "^1.2.0",  
    "react-test-renderer": "^16.1.1",  
    "react-with-styles": "^2.3.0",  
    "webpack-dev-server": "^2.9.4"  