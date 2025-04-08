# Use Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code
COPY . .

# Expose the port the backend listens on
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
