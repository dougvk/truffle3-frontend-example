# truffle3-frontend-example

## In order to build and run the frontend code, first
1. `yarn install` or `npm install` depending on your preference
2. make sure you have testrpc running , and change `truffle.js` to point to that network. e.g. `localhost:8545`.
3. `truffle compile` to create the json contract artifacts
4. `truffle migrate` to deploy the contracts onto the network
5. change the web3 provider in `app/main.js` to point to the testrpc server.
6. `npm run build` to compile the javascript and html assets into the `build` folder
7. `truffle serve` to serve the assets in the build folder

## Possible upgrades
* Use the webpack hotloader to sense when contracts or javascript have been recompiled and rebuild the application
