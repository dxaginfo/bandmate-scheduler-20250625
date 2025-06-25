# BandMate - Rehearsal Scheduler

BandMate is a comprehensive web application designed to help bands and music groups efficiently schedule rehearsals, track attendance, send reminders, and suggest optimal rehearsal times based on member availability.

## 🎵 Features

- **User Authentication & Management**
  - Secure login and registration
  - Role-based access control (Admin, Manager, Member)
  - Profile management

- **Band Management**
  - Create and manage multiple bands
  - Member invitation and management
  - Band profile customization

- **Availability Management**
  - Weekly recurring availability settings
  - Blackout dates for unavailability
  - Visual availability dashboard

- **Rehearsal Scheduling**
  - Create single and recurring rehearsals
  - Conflict detection
  - Optimal time recommendation engine
  - Venue management and booking

- **Notifications & Reminders**
  - Customizable email notifications
  - Push notifications
  - Rehearsal reminders

- **Attendance Tracking**
  - RSVP functionality
  - Check-in capability
  - Attendance reporting and analytics

- **Calendar Integration**
  - Export to iCal, Google Calendar
  - Subscribe to band calendar

## 🚀 Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI components
- FullCalendar.js for calendar visualization
- Formik with Yup validation
- Axios for HTTP requests

### Backend
- Node.js with Express
- RESTful API architecture
- JWT authentication
- PostgreSQL with Prisma ORM
- Redis for caching

### DevOps
- Docker containerization
- CI/CD with GitHub Actions
- Deployment on Vercel (frontend) and Heroku (backend)

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- PostgreSQL
- Redis

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/dxaginfo/bandmate-scheduler-20250625.git
   cd bandmate-scheduler-20250625
   ```

2. Install dependencies
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. Environment Setup
   ```bash
   # Backend
   cp .env.example .env
   # Edit .env file with your database credentials and other settings
   ```

4. Database Setup
   ```bash
   # From backend directory
   npx prisma migrate dev
   npx prisma db seed
   ```

5. Running the application
   ```bash
   # Using Docker
   docker-compose up

   # Or running individually
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd frontend
   npm start
   ```

## 🔧 Development

### Backend Structure
- `src/controllers/` - Request handlers
- `src/routes/` - API routes
- `src/models/` - Data models
- `src/middleware/` - Custom middleware
- `src/utils/` - Utility functions
- `prisma/` - Database schema and migrations

### Frontend Structure
- `src/components/` - Reusable UI components
- `src/features/` - Feature-specific components and logic
- `src/layouts/` - Page layouts
- `src/pages/` - Page components
- `src/store/` - Redux store configuration
- `src/services/` - API service calls

## 📊 Database Schema

The application uses a PostgreSQL database with the following main entities:
- Users
- Bands
- BandMembers
- Venues
- Rehearsals
- Availability
- BlackoutDates
- RehearsalAttendance
- Notifications

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Material-UI](https://mui.com/)
- [FullCalendar](https://fullcalendar.io/)