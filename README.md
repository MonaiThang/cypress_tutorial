# Cypress Tutorial

This tutorial was written for a Women Who Code Sydney workshop on Cypress

## Installation

* Node
* Yarn
* NPX

## Running

### Install dependencies

```
yarn install
```

### Run the app

This will run the app and create the database

```
node index.js
```

### Run DB Migrations

To run (all):

```
npx sequelize db:seed:all --debug
```

To undo (all):

```
npx sequelize db:seed:undo:all --debug
```


### Example API request

```
curl http://localhost:3000/api/authors
```

### Example view

```
curl http://localhost:3000/
```