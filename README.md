## Getting started

First fork and clone the project

The version of node used for this project is `13.5.0`.

The version of the vue-cli is `4.1.1` but this should be installed as apart of of the `npm install`. The reason for using the CLI vs just installing vue is that it is easier to scaffold assets that are needed.

This project also requires a global installation of nodemon for easy development of the server code `npm install -g nodemon`.

At the root of the app run `npm install` to install all the dependencies/dev-dependencies for the server aspect of this project.

Then navigate to the client folder, path should be `/candidate-challenge/client` and run `npm install` again to install all the dependencies/dev-dependencies for the client aspect of this project. 

### Running the app locally

To get things up and running locally it will require two terminal sessions (or optionally one if checking the lighthouse score).
    
1) First open a terminal at the root folder `/candidate-challenge` and run the `nodemon app.js`.

2) Then navigate to the client folder, path should be `/candidate-challenge/client`, and run `npm run serve`. Follow the prompts for the dev server its being served on, typically this will be localhost:8080.

Optional) If checking the lighthouse score the frontend is published on netlify at https://condescending-easley-aaf64b.netlify.com/ and the only dev server needed will be for the backend which will still require the command `nodemon app.js` while being in the root folder `/candidate-challenge`.

### Endpoints

There is currently only one endpoint that exists in this project.

```
GET /fetch-data
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

If the endpoint is hit with an improper path like `/ftch-data` the response will be a 404

```
{
    "code":404,
    "message":"The requested resource does not exist"
}
```

### Unit tests 

To run the unit tests for the API

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

### Design Decisions

#### Backend

When thinking about choosing what framework/languange to use, I felt that using node.js with express was a very clean and functional way of creating endpoints to be consumed while also allowing room for expansion to create additional endpoints, should the need arise, faster.


#### Frontend 

For me the choice was obvious for the frontend. Vue.js is a powerful, lightwieght, and thoughtfully designed frontend framework that provides great features at the get go. For example things like the inclusion of lazy loading to allow for dynamic insertion is one of the main reasons Vue is as great as it is. Also Vue's CLI  makes it much easier to scaffold assets that are needed quicker and be up and running.

I used tailwind.css for the great documentation as well as the ability to maintain unformity of the components without having to write a ton of css leading to faster development.

#### Including two package.json's and package-lock.json's for the client and the backend

I felt that this was the better approach to have a microservice layout, as well as for ease of updating in the future vs a monolithic approach with just one.

