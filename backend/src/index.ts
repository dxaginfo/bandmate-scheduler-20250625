import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { logger } from './utils/logger';

// Import routes
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import bandRoutes from './routes/band.routes';
import rehearsalRoutes from './routes/rehearsal.routes';
import availabilityRoutes from './routes/availability.routes';
import venueRoutes from './routes/venue.routes';

// Load environment variables
config();

// Initialize Prisma client
export const prisma = new PrismaClient();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // HTTP request logger
app.use(compression()); // Compress responses

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bands', bandRoutes);
app.use('/api/rehearsals', rehearsalRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/venues', venueRoutes);

// Health check endpoint
app.get('/health', (_, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.stack);
  
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

// Start server
const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: Error) => {
  logger.error(`Unhandled Rejection: ${reason.message}`);
  logger.error(reason.stack || '');
  
  // Close server & exit process
  server.close(() => process.exit(1));
});

export default app;