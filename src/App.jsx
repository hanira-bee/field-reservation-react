import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FieldDataBoundary from "./components/FieldDataBoundary";
import FieldsPage from "./pages/FieldsPage";
import FieldDetailPage from "./pages/FieldDetailPage";
import HistoryPage from "./pages/HistoryPage";
import { useBookings } from "./hooks/useBookings";
import { useFields } from "./hooks/useFields";

export default function App() {
  const { bookings, addBooking, cancelBooking } = useBookings();
  const { fields, timeSlots, loading, error, retry } = useFields();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <FieldDataBoundary loading={loading} error={error} retry={retry}>
                <FieldsPage fields={fields} />
              </FieldDataBoundary>
            }
          />
          <Route
            path="/fields/:id"
            element={
              <FieldDataBoundary loading={loading} error={error} retry={retry}>
                <FieldDetailPage
                  fields={fields}
                  timeSlots={timeSlots}
                  bookings={bookings}
                  addBooking={addBooking}
                />
              </FieldDataBoundary>
            }
          />
          <Route
            path="/history"
            element={<HistoryPage bookings={bookings} cancelBooking={cancelBooking} />}
          />
        </Routes>
      </main>
    </div>
  );
}