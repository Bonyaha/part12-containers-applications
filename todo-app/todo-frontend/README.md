# React application

This application is created from create-react-app.

Install dependencies with `npm install`

You can run the application in development mode with `npm start`

You can build static files for production release with `npm run build`

You can run tests with `npm run test`

## Environment variables

Use REACT_APP_BACKEND_URL to set where the backend for this application is.
## build the image
docker build . -t todo-frontend
## start container
docker run -p 8000:80 todo-frontend