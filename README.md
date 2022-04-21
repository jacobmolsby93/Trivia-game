# __Trivmaster__

A react application that runs with a django rest framework I have created to serve as a database for the users. The games objective is simple, to let the user add a name and a profile image. Then simply jump right in, the game consists of multiple questions that is taken from the-trivia-api. 
Each question has 4 answers where as one of them is correct. At the moment the users can only add their name and profile image as well as play the game, but in the near future I want to implement a last screen with all the scores of the different players.

Deployed link can be found here: [Trivmaster](https://trivmaster.herokuapp.com/).

[![landing-triv.png](https://i.postimg.cc/brv9VRBm/landing-triv.png)](https://postimg.cc/34PGd27G)

# __Features__

Game
- After enter has been pressed the user will be redirected to next page where the user is prompted to enter their name and add a profile image if they wish.
[![details.png](https://i.postimg.cc/ZYgwsGJ3/details.png)](https://postimg.cc/t73dYmZC)

- The ingame features a question based game where the user has the ability the choose between 4 different answers, if the answer is correct the answer will highlight in green.
If the answer is incorrect it will highlight in red and the correct answer will be highlighted green.

- The user has 120 seconds per question, if the timer runs out and the question is not answered. All 3 lives will be lost and the game is over.
If however the user get an incorrect answer, one life is lost and the clock is reset for the next question. When all 3 lives have been used up the game is over and the user has the ability to back to the home screen.
[![game-screen.png](https://i.postimg.cc/BvMgTyhj/game-screen.png)](https://postimg.cc/R3JK9Pxm)

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
