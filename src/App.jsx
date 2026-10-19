import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FieldsPage from "./pages/FieldsPage";
import FieldDetailPage from "./pages/FieldDetailPage";
import HistoryPage from "./page/HistoryPage";
import { useBookings } from "./hooks/useBookings";

export default function App() {
    const { bookings, addBooking, cancelBooking } = useBookings();

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-6xl mx-auto p-4">
                <Routes>
                    <Route path="/" element={<FieldsPage />} />
                    <Route path="/fields/:id" element={<FieldDetailPage bookings={bookings} addBooking={addBooking} />} />
                    <Route path="/history" element={<HistoryPage bookings={bookings} cancelBooking={cancelBooking} />} />
                </Routes>
            </main>
        </div>
    )
}