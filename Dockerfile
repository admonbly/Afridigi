FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built application
COPY .next ./.next
COPY public ./public

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
