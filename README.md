# Sidehelp!

A peer-to-peer marketplace for finding help with side projects. Users can post their projects with descriptions while others can contact owners of interesting projects to help them.

Motivations for creating this project include seeing friends as well as myself always lose motivation while trying build a cool project due to numerous reasons such as too much work or not enough time. Hopefully this will help connect people together to motivate them to finish their projects.

Finally, this was created as a learning experience for myself so I hope to share what I learned for all people who want to go into web development.

# Technology
The application is mostly **React** on the front-end with a lot of different packages from the ecosystem such as **Redux**, **ReactBootstrap**, and **React-Router v4**. The back-end is built with **NodeJS** with **Express** while using **MongoDB (Mongoose)** as a database.  Most of the code is written in ES6 but the server-side stuff needs to be updated.

The bundler being used is **Webpack** with **Babel** helping to transpile the Javascript code.

The project is currently being hosted on **Heroku** cause it's cheap and easy but I'd like to be able to migrate it off there one day.

## Installation
In order to run the project locally you'll need `node` installed as well as `nvm`.

Once installed you should be able to run `npm install` which will fetch all the necessary dependencies for you. If anything seems to fail, clear out your `node_modules` and try again.

To start up the project there are two options, `npm start` or `npm start dev`, both running on `port 3040`.

`npm start dev` has hot-reloading as it's running the webpack dev server. It's a little buggy so it's not currently recommended until somebody goes around to fixing it up.

`npm start` is the one I generally use. It'll automatically repackage on changes and you'll just need to refresh to see your changes propagated.

Neither of the options will reload the node server if changes are made to `server.js`.  You'll need to restart it currently if changes are made.

**Note**: There is one bug that occurs when making multiple changes in the css files. It'll error out on the browser and you'll have to restart the server.

## Contributing
In the spirit of the project itself, please feel free to contribute to any open issues. Some may need environment variables, which can be given if you contact me.

For all issues please create a pull request with a new branch labelled **feature/{ issue name }** and submit a pull request to `develop` when ready.

Thanks!
