# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

1. Install [Docker](https://docs.docker.com/get-docker/).
2. Verify Docker is ready by running `docker -v` and `docker-compose -v` in your terminal.
3. Run `docker-compose up` from the project root directory to load Anythink's backend and frontend.
4. Test the backend by pointing your browser to [http://localhost:3000/api/ping](http://localhost:3000/api/ping).
5. Check that the frontend is connected to the backend: if working properly, you should be able to create a new user at [http://localhost:3001/register](http://localhost:3001/register)
