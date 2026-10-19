import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fields } from "../data/fields";
import SlotPicker from "../components/SlotPicker";
import BookingForm from "../components/BookingForm";

export default function FieldDetailPage({ bookings, addBooking }) {
    const { id } = useParams(); // ambil {id} dari URL
    const navigate = useNavigate();
    const field = fields.find((f) => f.id === Number(id));

    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(today);
    const [selectedSlots, setSelectedSlots] = useState([]);

    if (!field) return <p>Lapangan tidak ditemukan.</p>;

    // slot yang sudah dipesan pada lapangan & tanggal ini
    const bookedSlots = bookings
        .filter((b) => b.fieldId === field.id && b.date === date && b.status !== "cancelled")
        .flatMap((b) => b.slots);

    const toggleSlot = (time) => {
        setSelectedSlots((prev) =>
            prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
        );
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setSelectedSlots([]); // reset pilihan saat ganti tanggal
    };

    const handleSubmit = ({ name, phone, total }) => {
        addBooking({
            fieldId: field.id,
            fieldName: field.name,
            date,
            slots: selectedSlots,
            name,
            phone,
            total,
        });
        navigate("/history");
    };

    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div>
                <img src={field.image} alt={field.name} className="rounded-xl w-full h-64 object-cover" />
                <h1 className="text-2xl font-bold mt-4">{field.name}</h1>
                <p className="text-gray-600">Rp {field.price.toLocaleString("id-ID")} / jam</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                    {field.facilities.map((f) => (
                        <span key={f} className="bg-gray-200 text-sm px-2 py-1 rounded">{f}</span>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Pilih Tanggal</label>
                    <input type="date" value={date} min={today} onChange={handleDateChange}
                        className="border rounded px-3 py-2" />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Pilih Jam</label>
                    <SlotPicker bookedSlots={bookedSlots} selected={selectedSlots} onSelect={toggleSlot} />
                </div>

                <BookingForm field={field} date={date} slots={selectedSlots} onSubmit={handleSubmit} />
            </div>
        </div>
    );
}