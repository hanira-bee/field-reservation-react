import { Link } from "react-router-dom";

export default function FieldCard({ field }) {
    return (
        <Link to={`/fields/${field.id}`}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={field.image} alt={field.name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {field.sport}
                </span>
                <h3 className="font-semibold mt-2">{field.name}</h3>
                <p className="text-gray-600 text-sm">
                    Rp {field.price.roLocaleString("id-ID")} / jam
                </p>
            </div>
        </Link>
    )
}