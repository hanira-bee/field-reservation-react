import futsalIndoor1 from "../assets/futsal_indoor1.jpg";
import futsalOutdoor from "../assets/futsal_outdoor.jpg";
import badminIndoor1 from "../assets/badminton_indoor.jpg";
import badminOutdoor from "../assets/badminton_outdoor1.jpg";

export const fields = [
    {
        id: 1, name: "Lapangan Futsal A", sport: "Futsal", price: 150000,
        facilities: ["Parkir", "Toilet", "Kantin"],
        image: futsalIndoor1,
    },
    {
        id: 2, name: "Lapangan Futsal B", sport: "Futsal", price: 120000,
        facilities: ["Parkir", "Toilet"],
        image: futsalOutdoor,
    },
    {
        id: 3, name: "GOR Badminton 1", sport: "Badminton", price: 60000,
        facilities: ["AC", "Toilet", "Musholla"],
        image: badminIndoor1,
    },
    {
        id: 4, name: "Lapangan Badminton Outdoor", sport: "Badminton", price: 80000,
        facilities: ["Parkir", "Tribun"],
        image: badminOutdoor,
    },
    // bisa tambahkan jenis sport --> Basket
];

// jam operasional 08:00 - 21:00
export const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const h = String(i + 8).padStart(2, "0");
    return `${h}:00`;
});