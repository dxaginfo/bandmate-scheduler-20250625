# BandMate - Rehearsal Scheduler

BandMate is a comprehensive web application designed to help bands and music groups efficiently schedule rehearsals, track attendance, send reminders, and suggest optimal rehearsal times based on member availability.

## Features

- **User Authentication and Management**
  - Role-based permissions (Admin, Band Manager, Band Member)
  - Band creation and member invitation system

- **Availability Management**
  - Members can mark their availability on a calendar
  - Recurring availability patterns
  - Blackout dates for unavailability

- **Rehearsal Scheduling**
  - Create and manage rehearsal events
  - Automatic conflict detection
  - Venue/location selection and management

- **Optimization Engine**
  - Suggest optimal rehearsal times based on member availability
  - Prioritize rehearsals for upcoming performances

- **Notifications and Reminders**
  - Email notifications for new rehearsals
  - Configurable reminder system

- **Attendance Tracking**
  - Check-in system for rehearsals
  - Attendance history and analytics

- **Integration Capabilities**
  - Calendar sync (Google Calendar, iCal)
  - Export functionality (PDF, CSV)

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI for UI components
- FullCalendar.js for calendar views

### Backend
- Node.js with Express
- RESTful API design
- JWT authentication

### Database
- PostgreSQL with Prisma ORM
- Redis for caching

### DevOps
- Docker for containerization
- GitHub Actions for CI/CD
- Vercel for frontend hosting
- Heroku for backend hosting

## Getting Started

### Prerequisites
- Node.js (v18+)
- Docker and Docker Compose
- PostgreSQL
- Redis

### Installation

1. Clone the repository
   ```
   git clone https://github.com/dxaginfo/bandmate-scheduler-20250625.git
   cd bandmate-scheduler-20250625
   ```

2. Install dependencies
   ```
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Set up environment variables
   ```
   # In the backend directory
   cp .env.example .env
   # Edit .env with your database configuration and other settings
   ```

4. Start the development servers
   ```
   # Start the backend server
   cd backend
   npm run dev

   # Start the frontend server in another terminal
   cd frontend
   npm start
   ```

5. The application will be available at:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Docker Setup

Alternatively, you can use Docker to run the entire application:

```
docker-compose up
```

## Project Structure

```
bandmate-scheduler/
├── frontend/              # React frontend application
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── features/      # Redux slices and features
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── package.json       # Frontend dependencies
├── backend/               # Node.js backend application
│   ├── src/               # Source code
│   │   ├── controllers/   # Request handlers
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── middlewares/   # Custom middlewares
│   │   └── utils/         # Utility functions
│   └── package.json       # Backend dependencies
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # Project documentation
```

## API Documentation

API documentation is available at `/api/docs` when the server is running.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Material-UI](https://mui.com/)
- [FullCalendar](https://fullcalendar.io/)