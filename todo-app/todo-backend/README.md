# Express application

Install dependencies with `npm install`

Run with `npm start`

Or in development mode with `npm run dev`

# Visit counter

When running the server, visit http://localhost:3000 to see visit counter, or give environment variable `PORT` to change the port.

# MongoDB

The application has /todos crud which requires a MongoDB. Pass connection url with env `MONGO_URL`

# Redis

Pass connection url with env `REDIS_URL`

# starting the Express application
REDIS_URL=redis://localhost:6379 MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database npm run dev

# start containers
docker compose -f docker-compose.dev.yml down --volumes (to ensure that nothing is left)
docker compose -f docker-compose.dev.yml up (start from a clean slate)
# open the redis-cli
redis-cli
# to execute a command inside a running Docker container
docker exec -it //id of container//bash