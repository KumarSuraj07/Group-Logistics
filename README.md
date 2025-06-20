# Group Logistics Website

A modern, responsive logistics company website built with ReactJS, Tailwind CSS, and Firebase.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Real-time Tracking**: Firebase Firestore integration for shipment tracking
- **Smooth Animations**: Framer Motion for engaging user experience
- **Modern UI**: Professional design reflecting speed and trust

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure Firebase:
   - Update `src/firebase.js` with your Firebase configuration
   - Create a Firestore collection named 'shipments' for tracking data

3. Start the development server:
   ```bash
   npm start
   ```

## Firebase Setup

Create sample shipment documents in Firestore:
```javascript
// Collection: shipments
// Document ID: TRACK001
{
  status: "In Transit",
  origin: "New York, USA",
  destination: "London, UK",
  currentLocation: "Atlantic Ocean",
  estimatedDelivery: "2024-01-15"
}
```

## Sections

- **Hero**: Full-screen video background with call-to-action
- **About**: Company milestones and statistics carousel
- **Services**: Four core logistics services
- **Track**: Real-time shipment tracking
- **Contact**: Contact form and company information