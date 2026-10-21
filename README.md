# FieldBook – Sports Field Reservation (React)

A responsive frontend for booking sports fields (futsal, badminton, basketball). Users can browse fields, pick a date and time slots, and manage their reservations.

This is the React version of my Laravel project: [field_reservation](https://github.com/hanira-bee/field_reservation).

🔗 **Live demo:** [field-reservation-react](https://field-reservation-react-vert.vercel.app/)

## Screenshots

| Fields list | Field detail & booking | Reservation history |
|---|---|---|
| ![Fields list](src/assets/field-list.png) | ![Detail](src/assets/field-detail.png) | ![History](src/assets/history.png) |

## Features

- **Browse fields** with search by name and filter by sport type
- **Field detail** page with photo, price per hour, and facilities
- **Date and time-slot picker**: already-booked slots are disabled
- **Booking form** with validation and automatic total price calculation
- **Reservation history** with status (confirmed / cancelled) and cancel action
- Field catalog and time slots are loaded from `public/fields.json`
- Reservations persist in the browser via `localStorage`
- Responsive layout (mobile and desktop)

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Custom hooks (`useFields` and `useBookings`) for catalog loading and reservation persistence

## Project Structure

```
public/
├── fields/        # field images
└── fields.json    # field catalog and time slots
src/
├── components/    # Navbar, FieldCard, SlotPicker, BookingForm
├── hooks/         # useFields (fetch), useBookings (localStorage)
├── pages/         # FieldsPage, FieldDetailPage, HistoryPage
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
git clone https://github.com/hanira-bee/field-reservation-react.git
cd field-reservation-react
npm install
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Notes

The field catalog and time slots are fetched from a static JSON file in `public/`; reservations still use browser `localStorage` and are not sent to an API. The Laravel version contains the full-stack implementation (authentication, admin dashboard, MySQL).

## Author

**Hanira** – [GitHub](https://github.com/hanira-bee)