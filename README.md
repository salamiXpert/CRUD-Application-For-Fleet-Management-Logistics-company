Fleet & Supply Chain Management System

A full CRUD application for managing vehicles, drivers, shipments, trips, and overall transport operations — built with Node.js, Express, Morgan, and a modular service-based architecture.


Project Overview

This application centralizes fleet operations into one unified backend system. It provides RESTful CRUD endpoints for:

Vehicle registration & maintenance logging

Driver management

Shipment creation & tracking

Trip dispatching

Fuel logs & operational expenses

Document tracking (insurance, licenses, etc.)

It’s designed to be extensible, so new modules (like predictive maintenance or GPS tracking) can be added without tearing the system apart.

FOLDER STRUCTURE INC
project-root/
│
├── src/
│   ├── config/          # Database config, environment loader
│   ├── controllers/     # Request handlers (thin layer)
│   ├── routes/          # Route definitions for each module
│   ├── models/          # Database models / schemas
│   ├── services/        # Business logic (keeps controllers clean)
│   ├── middleware/      # Auth, logging, error handlers
│   ├── utils/           # Helpers, formatters, validators
│   └── Fleet_app.js           # Express app setup
│
├── tests/               # Future test suite (left open intentionally)
├── .env.example         # Sample environment variables
├── package.json
├── README.md
└── Fleet.js            # Application entry point



**Rationale (honest & practical):**

Controllers stay small so debugging isn’t a nightmare at 2 a.m.

Services hold business logic making the app easier to scale.

Routes stay separate so navigation through the project doesn’t feel like wading through spaghetti.

Models keep the data definitions in one place so schema changes don’t break everything.

Middleware (like Morgan + error handlers) keeps cross-cutting concerns centralized.

Tests folder exists as a promise to the future version of you.

The structure wasn't planned to be perfect—it just worked, and that’s sometimes good enough.

Running the Application Locally
1. Clone the repository
   git clone https://github.com/salamiXpert12/your-repo-name.git
cd your-repo-name

Start the server:
npm run Fleetdev







