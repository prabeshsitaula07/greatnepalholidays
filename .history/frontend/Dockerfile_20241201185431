# Use Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the Vite development server's default port
EXPOSE 5173

# Start Vite's dev server
CMD ["npm", "run", "dev", "--", "--host"]
