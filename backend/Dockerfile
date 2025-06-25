# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy application code
COPY . .

# Build TypeScript
RUN npm run build

# Set production environment
ENV NODE_ENV=production

# Expose port
EXPOSE 5000

# Run migrations and start the server
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]