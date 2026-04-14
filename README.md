# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Parking App Guide

This project includes a simple parking slot booking app built with React and Konva.

### How to run

1. Open a terminal in `my-react-app`
2. Run `npm install` if dependencies are not already installed
3. Run `npm run dev`
4. Open the local URL shown by Vite in your browser

### How to use the app

1. Select a vehicle type: `Car` or `Motorcycle`
2. Enter the license plate number
3. Enter the parking duration in hours
4. Click `Continue to Parking Lot →`
5. Click an available blue slot to reserve it
6. Confirm booking in the modal

### Booking behavior

- When a slot is booked, it turns red
- Clicking a booked slot opens a confirmation modal to end the parking session
- Ending a session frees the slot again

### Parking status

- Use `Check Parking Availability` from the initial form to view the current parking layout for both cars and motorcycles
- The status view is read-only and shows which slots are booked

### Notes

- Car bookings and motorcycle bookings are managed separately
- Duration and cost are displayed during booking confirmation
- The app uses local component state and does not persist data after page reloads
