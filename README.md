[![Build Status](https://travis-ci.org/lxanders/node-express-base.svg?branch=master)](https://travis-ci.org/lxanders/node-express-base)
[![Coverage Status](https://img.shields.io/coveralls/lxanders/node-express-base.svg?style=flat)](https://coveralls.io/r/lxanders/node-express-base)

# node-express-base

This aims to be one possible project configuration for a server side rendered web application.

## Prerequisites

The recommended platform is `io.js` version `v1.8.1`. 

Additionally the project is currently compatible with `node.js` version `v0.10` or higher. This however may change in the future.

## Getting started

These steps will get you started and show the most important steps.

**1. Get the project base**

Clone the project from GitHub without taking its history. E.g. using `https`

```
git clone --depth=1 https://github.com/lxanders/node-express-base.git 
```

**2. Install the dependencies**

```
npm install
```

**3. Make sure your project base is fine**

```
npm test
```

This will check for linting errors and will recursively execute all tests in `test/`.

**4. Start the project in watcher mode**

```
npm run dev
```

This will start the `express` server on [http://localhost:3000](http://localhost:3000).

**5. Update the project information**

Important: The following files should be updated to fit your new project.

* `package.json`: Update fields like
  * `name`: The project name
  * `description`: A short description of your project
  * `version`: The version number for your project
  * `repository`: This should point to your project repository
  * `author`: This can be removed entirely or updated to your preferred name
  * `license`: Update the type of license you want to use (or use the preconfigured MIT license)
* `LICENSE`: Update this to fit your needs

**Hints**

* Running the `dev` script will start your server and restart it each time a relevant file changes
* Run `npm test` and run it often. Once you add code and tests this makes sure that you comply to the code standards and your tests still work

# Additional information

## The stack

The following libraries and tools are used:

* Simple `npm` scripts for all project related tasks
* `Express.js` as the server side web application framework ([github home](https://github.com/visionmedia/express))
* Testing and stubbing:
  * Test-Framework: `Mocha` ([github home](https://github.com/visionmedia/mocha))
  * Assertions: `Chai` ([github home](https://github.com/chaijs/chai))
  * Stubbing etc.: `Sinon.JS` ([github home](https://github.com/cjohansen/Sinon.JS))
* `ESLint` for linting ([homepage](http://eslint.org/))
