const statusStyle = {
    confirmed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
};

export default function HistoryPage({ bookings, cancelBooking }) {
    const sorted = [...bookings].reverse(); // terbaru di atas

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Riwayat Reservasi</h1>

            {sorted.length === 0 && <p className="text-gray-500">Belum ada reservasi.</p>}

            <div className="space-y-3">
                {sorted.map((b) => (
                    <div key={b.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">{b.fieldName}</h3>
                            <p className="text-sm text-gray-600">{b.date} · {b.slots.join(", ")}</p>
                            <p className="text-sm">Rp {b.total.toLocaleString("id-ID")}</p>
                        </div>
                        <div className="text-right space-y-2">
                            <span className={`text-xs px-2 py-1 rounded ${statusStyle[b.status]}`}>
                                {b.status}
                            </span>
                            {b.status === "confirmed" && (
                                <button onClick={() => cancelBooking(b.id)}
                                    className="block text-sm text-red-600 hover:underline">
                                    Batalkan
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}