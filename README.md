
# Gas Slot Booking App - Backend

This is the backend of the Gas Slot Booking App, built using Node.js, Express, and MongoDB. It provides RESTful APIs for user management, booking management, and payment processing.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [License](#license)

## Features
- User authentication using JWT
- CRUD operations for bookings
- Integration with Razorpay for payments
- Secure routes with role-based access control

## Tech Stack
- **Node.js**: Backend runtime.
- **Express**: For building RESTful APIs.
- **MongoDB**: For database storage.
- **Mongoose**: For object data modeling.
- **JWT**: For secure authentication.
- **Razorpay**: For payment processing.

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000`.

## API Endpoints
### Authentication
- **POST** `/auth/register`: Register a new user.
- **POST** `/auth/login`: Log in an existing user.

### Bookings
- **POST** `/api/bookings/create`: Create a new booking.
- **GET** `/api/bookings`: Get all bookings for the logged-in user.
- **PUT** `/api/bookings/:bookingId/update`: Update a booking.
- **PUT** `/api/bookings/:bookingId/cancel`: Cancel a booking.

### Payment
- **POST** `/api/create-order`: Create a Razorpay order for payments.

## Environment Variables
| Variable              | Description                         |
|-----------------------|-------------------------------------|
| `PORT`                | Port for server                     |
| `MONGO_URI`           | MongoDB connection string           |
| `JWT_SECRET`          | JWT secret for authentication       |
| `RAZORPAY_KEY_ID`     | Razorpay Key ID                     |
| `RAZORPAY_KEY_SECRET` | Razorpay Key Secret                 |

## Deployment
1. **Deploy on Render:**
   - Go to [Render](https://render.com/) and create a new **Web Service**.
   - Set the start command to `npm start` and configure environment variables.
2. Ensure the backend URL matches the frontend `.env` configuration.

## License
This project is licensed under the MIT License.
