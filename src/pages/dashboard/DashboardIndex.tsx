import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Folder, Calendar, Mic } from "lucide-react"; 

export default function DashboardIndex() {
    // Buat state untuk menampung jumlah data dari backend
    const [counts, setCounts] = useState({
        categories: 0,
        events: 0,
        speakers: 0
    });
    const [loading, setLoading] = useState(true);

    // Ambil data jumlah dari API saat halaman pertama kali dibuka
    useEffect(() => {
        const fetchDashboardData = async () => {
            setLoading(true);
            try {
                const [resCat, resEv, resSpeak] = await Promise.all([
                    fetch(`${import.meta.env.VITE_API_URL}/categories`),
                    fetch(`${import.meta.env.VITE_API_URL}/events`),
                    fetch(`${import.meta.env.VITE_API_URL}/speakers`)
                ]);

                const dataCat = await resCat.json();
                const dataEv = await resEv.json();
                const dataSpeak = await resSpeak.json();

                // Hitung jumlah panjang array datanya 
                const totalCategories = (dataCat.data || dataCat).length || 0;
                const totalEvents = (dataEv.data || dataEv).length || 0;
                const totalSpeakers = (dataSpeak.data || dataSpeak).length || 0;

                setCounts({
                    categories: totalCategories,
                    events: totalEvents,
                    speakers: totalSpeakers
                });
            } catch (err) {
                console.error("Gagal memuat statistik dashboard:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const stats = [
        { name: "Total Kategori", count: counts.categories, icon: <Folder size={18} />, color: "bg-blue-500 ", link: "/dashboard/category" },
        { name: "Total Event", count: counts.events, icon: <Calendar size={18} />, color: "bg-blue-500", link: "/dashboard/event" },
        { name: "Total Pembicara", count: counts.speakers, icon: <Mic size={18} />, color: "bg-blue-500", link: "/dashboard/speaker" },
    ];

    return (
        <div className="p-6">
            {/* banner */}
            <div className="bg-linear-to-r from-slate-800 to-blue-900 rounded-lg p-6 text-white shadow mb-8">
                <h1 className="text-2xl font-bold">Selamat Datang di Invofest Dashboard!</h1>
                <p className="text-red-100 mt-2 text-sm max-w-2xl">
                    Sistem manajemen acara untuk festival teknologi tahunan. 
                    Di sini kamu bisa mengelola kategori, jadwal event, hingga data pembicara dengan mudah.
                </p>
            </div>

            {/* card data) */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Data Konten</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow border border-gray-200 p-5 flex items-center justify-between hover:shadow-md transition">
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.name}</p>
                            
                            <p className="text-3xl font-bold text-gray-800 mt-2">
                                {loading ? "..." : stat.count}
                            </p>
                            
                            <Link to={stat.link} className="text-xs text-red-900 font-semibold hover:underline mt-3 inline-block">
                                Lihat Detail →
                            </Link>
                        </div>
                        <div className={`w-12 h-12 rounded-full ${stat.color} bg-opacity-10 flex items-center justify-center text-2xl`}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* card 2 */}
            <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-800 mb-3"></h3>
            </div>
        </div>
    );
}