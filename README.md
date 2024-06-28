# Vacation Scheduler App

Welcome to the Vacation Scheduler App! This application allows users to manage vacations for employees.

## Features

- View a list of vacations
- Add new vacations
- Edit existing vacations
- Authentication using JWT tokens
- Responsive design

## Technologies Used

- React
- React Router
- React Query
- Material-UI
- Axios
- JWT for authentication

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd vacation_scheduler_frontend
   ```
### Install dependencies:
```
npm install
```
#### or
```
yarn install
```
###  Configuration
Set up the backend API: Make sure the backend API is running and accessible. Update the API URL if necessary in src/api/api.js.

#### Start the development server:
```
npm start
```
#### or
```
yarn start
```

Open http://localhost:3000 to view the app in the browser.

### Usage
- Navigate through the app using the links in the header.
- Home: Provides links to view existing vacations and add new vacations.
- View Vacations: Lists all vacations fetched from the API.
- Add Vacation: Allows adding a new vacation with employee name, start date, and end date.
- Edit Vacation: Edit details of an existing vacation.
- Testing

### To run tests:
```
npm test
```
#### or
```
yarn test
```