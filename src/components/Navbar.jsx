import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-red-700 text-white">
            <div className="max-w-6xl mx-auto p-4 flex justify-between">
                <Link to="/" className="font-bold text-lg">FieldBook</Link>
                <Link to="/history" className="hover:underline">Riwayat</Link>
            </div>
        </nav>
    );
}