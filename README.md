# TrimTime

**TrimTime** is a SaaS platform designed to solve one of the most common problems in barber shops and salons — long waiting times and poor queue management.

Customers can quickly check salon availability, book services, or join a live queue by scanning a QR code placed at the salon.

The platform allows salons to manage bookings, services, barbers, and real-time queue updates through a simple dashboard.

---

## Problem

In most barber shops:

* Customers must physically visit the shop to see if a barber is free
* Long waiting times lead to poor customer experience
* Salon owners cannot manage bookings or queues efficiently
* Walk-ins and appointments create confusion

TrimTime solves this by introducing a **smart queue and appointment system**.

---

## Solution

TrimTime provides a digital platform where:

Customers can:

* Scan a QR code outside the salon
* View available services
* Check live queue status
* Book a time slot
* Join the waiting queue remotely

Salon owners can:

* Manage barbers and services
* Track bookings and walk-ins
* Update queue status
* Control availability and working hours

---

## Key Features

### Customer Side

* QR code based salon access
* Live queue tracking
* Appointment booking
* Service selection
* Phone number login
* Estimated wait time

### Salon Dashboard

* Barber management
* Service management
* Queue control
* Walk-in entry
* Booking overview
* Opening hours management

### Platform Features

* Multi-salon system
* Subscription plans
* Real-time queue updates
* Booking system
* OTP authentication (planned)
* Analytics (planned)

---

## Tech Stack

### Backend

* Node.js
* TypeScript
* PostgreSQL
* Prisma ORM

### Frontend (Planned)

* React / Next.js
* Tailwind CSS

### Other Tools

* REST APIs
* QR code based access
* Git & GitHub

---

## Project Structure

```
TrimTime
│
├── trimtime-api
│   ├── prisma
│   │   ├── migrations
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── src
│   ├── package.json
│   └── README.md
│
├── trimtime-web
│   └── (frontend application)
│
├── trimtime-design
│   └── (UI mockups and wireframes)
│
└── README.md
```

---

## Database Design

The platform uses a relational database powered by **PostgreSQL and Prisma**.

Main entities:

* User
* Salon
* Barber
* Service
* Booking
* QueueEntry
* SubscriptionPlan
* OpeningHours

This allows the platform to support **multiple salons with independent queues and booking systems**.

---

## Example Flow

### Customer Flow

1. Customer scans salon QR code
2. Salon page opens
3. Customer selects service
4. Customer books a time slot or joins queue
5. Salon receives booking
6. Queue updates in real time

### Salon Flow

1. Salon registers on platform
2. Adds barbers and services
3. Sets opening hours
4. Receives bookings and walk-ins
5. Manages queue through dashboard

---

## Local Development Setup

### 1. Clone the repository

```
git clone https://github.com/AKSHIT0305/TrimTime.git
cd TrimTime
```

---

### 2. Setup backend

```
cd trimtime-api
npm install
```

---

### 3. Setup environment variables

Create a `.env` file based on `.env.example`.

Example:

```
DATABASE_URL="postgresql://user:password@localhost:5432/trimtime"
```

---

### 4. Run database migrations

```
npx prisma migrate dev
```

---

### 5. Seed the database

```
npx prisma db seed
```

---

### 6. Start the backend server

```
npm run dev
```

---

## Future Improvements

Planned features for upcoming versions:

* OTP authentication
* Real-time queue using WebSockets
* SMS notifications
* Barber availability tracking
* Payment integration
* Analytics dashboard
* Mobile friendly UI
* Multi-location salons

---

## Author

**Akshit Goel**

Full Stack Developer
India

GitHub:
https://github.com/AKSHIT0305

---

## License

This project is currently open for learning and development purposes.
