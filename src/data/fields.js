export const fields = [
    {
        id: 1, name: "Lapangan Futsal A", sport: "Futsal", price: 150000, facilities: ["Parkir", "Toilet", "Kantin"], image: "https://picsum.photos/seed/futsal1/600/400"
    },
    {
        id: 2, name: "Lapangan Futsal B", sport: "Futsal", price: 120000,
        facilities: ["Parkir", "Toilet"],
        image: "https://picsum.photos/seed/futsal2/600/400"
    },
    {
        id: 3, name: "GOR Badminton 1", sport: "Badminton", price: 60000,
        facilities: ["AC", "Toilet", "Musholla"],
        image: "https://picsum.photos/seed/badminton1/600/400"
    },
    {
        id: 4, name: "Lapangan Basket Outdoor", sport: "Basket", price: 80000,
        facilities: ["Parkir", "Tribun"],
        image: "https://picsum.photos/seed/basket1/600/400"
    },
];

// jam operasional 08:00 - 21:00
export const timeSlots = Array.from({ length: 13 }, (_, i) => {
    const h = String(i + 8).padStart(2, "0");
    return `${h}:00`;
})