# Use the official Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3100 to the outside world
EXPOSE 3100

# Command to run the application with nodemon
CMD ["npm", "run", "dev"]
