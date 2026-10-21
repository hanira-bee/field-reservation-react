export default function FieldDataBoundary({ loading, error, retry, children }) {
    if (loading) {
        return (
            <p role="status" className="py-10 text-center text-gray-600">
                Memuat data lapangan...
            </p>
        );
    }

    if (error) {
        return (
            <div role="alert" className="py-10 text-center">
                <p className="text-red-600">Gagal memuat data lapangan: {error}</p>
                <button
                    type="button"
                    onClick={retry}
                    className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                    Coba Lagi
                </button>
            </div>
        );
    }

    return children;
}
