import { useState } from "react";
import { fields } from "../data/fields";
import FieldCard from "../components/FieldCard";

export default function FieldsPage() {
    // state: nilai filter. Kalau berubah, tampilan otomatis ter-update
    const [search, setSearch] = useState("");
    const [sport, setSport] = useState("Semua");

    const sports = ["Semua", ...new Set(fields.map((f) => f.sport))];

    const filtered = fields.filter((f) => {
        const matchName = f.name.toLowerCase().includes(search.toLowerCase());
        const matchSport = sport === "Semua" || f.sport === sport;
        return matchName && matchSport;
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Daftar Lapangan</h1>

            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Cari lapangan..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded px-3 py-2 flex-1"
                />
                <select
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    className="border rounded px-3 py-2"
                >
                    {sports.map((s) => <option key={s}>{s}</option>)}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((f) => <FieldCard key={f.id} field={f} />)}
            </div>

            {filtered.length === 0 && (
                <p className="text-gray-500 text-center mt-10">Lapangan tidak ditemukan.</p>
            )}
        </div>
    );
}