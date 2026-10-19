import { useState } from "react";

export default function BookingForm({ field, date, slots, onSubmit }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    const total = field.price * slots.length;

    const handleSubmit = (e) => {
        e.preventDefault(); // cegah reload halaman

        const newErrors = {};
        if (name.trim().length < 3) newErrors.name = "Nama minimal 3 karakter";
        if (!/^08\d{8,11}$/.test(phone)) newErrors.phone = "Nomor HP tidak valid (contoh: 08123456789)";
        if (slots.length === 0) newErrors.slots = "Pilih minimal 1 jam";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        onSubmit({ name, phone, total });
        setName("");
        setPhone("");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow space-y-3">
            <h3 className="font-semibold">Data Pemesan</h3>

            <div>
                <input value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap" className="border rounded px-3 py-2 w-full" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
                <input value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="No. HP" className="border rounded px-3 py-2 w-full" />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {errors.slots && <p className="text-red-500 text-sm">{errors.slots}</p>}

            <div className="border-t pt-3 text-sm">
                <p>Tanggal: <b>{date}</b></p>
                <p>Jam: <b>{slots.length ? slots.join(", ") : "-"}</b></p>
                <p className="text-lg mt-1">
                    Total: <b>Rp {total.toLocaleString("id-ID")}</b>
                </p>
            </div>

            <button type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Pesan Sekarang
            </button>
        </form>
    );
}