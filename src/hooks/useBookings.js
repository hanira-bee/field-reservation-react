import { useState, useEffect } from "react";

export function useBookings() {
    const [bookings, setBookings] = useState(() => {
        const saved = localStorage.getItem("bookings");
        return saved ? JSON.parse(saved) : [];
    });

    // setiap bookings berubah, simpan ke localStorage
    useEffect(() => {
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }, [bookings]);

    const addBooking = (booking) =>
        setBookings((prev) => [...prev, { ...booking, id: Date.now(), status: "confirmed" }]);

    const cancelBooking = (id) =>
        setBookings((prev) =>
            prev.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b))
        );

    return { bookings, addBooking, cancelBooking };
}