# Stage 1: Test React app
FROM node:16 AS test-stage
WORKDIR /usr/src/app

COPY . .

RUN npm ci

# Run tests
RUN CI=true npm test


# Stage 2: Build React app
FROM test-stage AS build-stage
WORKDIR /usr/src/app

# Set environment variable for backend URL
# Uncomment the line below for development mode
# ENV REACT_APP_BACKEND_URL=http://localhost:3100
ENV REACT_APP_BACKEND_URL=http://localhost:8080/api
COPY . .

RUN npm ci

RUN npm run build

# Stage 3: Serve static files using Nginx
FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Uncomment the line below for development mode
# Expose port 80
#EXPOSE 80

# Command to run Nginx and serve the static files
#CMD ["nginx", "-g", "daemon off;"]
