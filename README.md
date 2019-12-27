## Getting started

First fork and clone the project

The version of node used for this project is `13.5.0`.

The version of the vue-cli is `4.1.1` but this should be installed as apart of of the `npm install`. The reason for using the CLI vs just installing vue is that it is easier to scaffold assets that are needed.

This project also requires a global installation of nodemon for easy development of the server code `npm install -g nodemon`.

At the root of the app run `npm install` to install all the dependencies/dev-dependencies for the server aspect of this applcation.

Then navigate to the client folder, path should be `/candidate-challenge/client` and run `npm install` again to install all the dependencies/dev-dependencies for the client aspect of this applcation.




### Running the app locally

To get things up and running locally it will require two terminal sessions.
    
1) First navigate to the client folder, path should be `/candidate-challenge/client` and run `npm run serve`

2) Open a new terminal and and cd back out off teh client folder to be in the root of the app `/candidate-challenge` and run `nodemon app.js`

### Endpoints

There is currently only one endpoint that exists in this project.

```
GET /candidate/fetch-data

```

Hitting this endpoint will fetch data from the https://randomuser.me/api API and the response will be structured like this.

```
{
    "name":"Mademoiselle Marilena Martinez",
    "email":"marilena.martinez@example.com",
    "photo":"https://randomuser.me/api/portraits/thumb/women/42.jpg",
    "birthday":"February 10th, 1975"

}
```

If the endpoint is hit with an improper path like `/candidate/ftch-data the response will be a 404

```
{
    "code":404,
    "message":"The requested resource does not exist"
}
```

### Unit tests 

To run the unit test(s) for the api

```
npm run test
```

### Client/Frontend

The frontend portion of this project exists under the client folder.

To compile and hot-reload for development

```
npm run serve
```

Compiles and minifies for production

```
npm run build
```

Lints and fixes files

```
npm run lint
```
