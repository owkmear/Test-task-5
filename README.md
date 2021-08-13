# Test task

Written using `react`,`redux-saga`, `reselect`, `less`.

### Task

Need to create an application with dynamic image loading and routing.
API for receiving pictures: https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY

The application have 2 pages:

* Home - display the image and the "Download" button, by clicking on which a new application will be loaded. When the application is loaded for the first time - the image should be loaded without pressing the button.
* History - display all uploaded pictures from the main page (picture, download time and picture name). Add pagination and the ability to delete a previously uploaded image.

## Requirements

You will need the following things properly installed on your computer:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [create-react-app](https://facebook.github.io/create-react-app/)

## Installation

* `git clone <repository-url>`
* `cd Test-task`
* `npm install`

## Development

`npm run start` command start `dev-server` at [http://localhost:3000](http://localhost:3000) with hot reloading.

### Building

`npm run build` command creates build in `\build` folder.