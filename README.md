# Project Overwatch

## Installations
---

### Node
Make sure you have the appropriate NodeJS version (v6.2.2) installed.
A nodeJS version manager is recommended.

#### For MAC: See `nvm` @ https://github.com/creationix/nvm

```curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash```

```nvm install v6.2.2```

```nvm use v6.2.2```

#### For WINDOWS: See `nvm-windows` @ https://github.com/coreybutler/nvm-windows

```nvm install 6.2.2```

```nvm use 6.2.2```

### Babel
Babel (v6.8.0) is used to transpile a subset of ES2015/ES6 Javascript via webpack.

Require a global installation of `babel-cli` in order to run the `babel-node` commands described in the node scripts of our `package.json`.

Run: ```npm install -g babel-cli```

## Getting Started
---
While inside project directory, run the following command to grab dependencies:

```npm install```

After a few minutes, you should now be able to start project by running:

```npm start```

Observe that changes you make to the `components` and other `js` files are updated live via hot reloading.

