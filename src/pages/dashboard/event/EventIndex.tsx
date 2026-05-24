import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

// Interface mencocokkan skema relasi dari backend
interface Event {
    id: number;
    name: string;
    location: string;
    dateEvent: string; 
    description: string;
    category: {
        id: number;
        name: string;
    };
    pembicara: {
        id: number;
        name: string;
        role: string;
    };
}

export default function EventIndex() {
    const [events, setEvents] = useState<Event[]>([]);
    
    // State untuk status aplikasi & notifikasi
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    // Fungsi GET untuk mengambil semua data event
    const fetchEvents = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/events`);
            
            if (!response.ok) {
                throw new Error("Gagal mengambil data event dari server");
            }
            
            const data = await response.json();
            setEvents(data.data || data);
        } catch (err) {
            console.error("Gagal ambil data event:", err);
            setError("Gagal memuat data event. Periksa koneksi backend kamu.");
        } finally {
            setLoading(false); 
        }
    };

    // Fungsi DELETE untuk menghapus event berdasarkan ID
    const handleDelete = async (id: number) => {
        const konfirmasi = window.confirm("Apakah kamu yakin ingin menghapus event ini?");
        if (!konfirmasi) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || "Gagal menghapus event.");
            }

            setSuccess("Event berhasil dihapus!");
            setTimeout(() => setSuccess(null), 3000);
            
            fetchEvents();
        } catch (err: any) {
            console.error("Error saat menghapus event:", err);
            setError(err.message || "Terjadi kesalahan saat menghapus data.");
            setTimeout(() => setError(null), 3000);
        }
    };

    // Fungsi pembantu untuk merapikan tampilan tanggal di tabel
    const formatTanggal = (dateString: string) => {
        try {
            const opsi: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('id-ID', opsi);
        } catch (e) {
            return dateString;
        }
    };

    return (
        <div className="p-6">
            {/* pesan berhasil dan error */}
            {success && (
                <div className="fixed top-5 right-5 z-50 flex items-center gap-2 p-4 bg-green-600 text-white shadow-xl rounded-lg font-medium text-sm border border-green-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{success}</span>
                </div>
            )}

            {error && (
                <div className="fixed top-5 right-5 z-50 flex items-center gap-2 p-4 bg-red-600 text-white shadow-xl rounded-lg font-medium text-sm border border-red-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>{error}</span>
                </div>
            )}

            <h1 className="text-2xl font-bold text-gray-800">Halaman Event</h1>

            <Link to="/dashboard/event/create" 
                className="p-2 bg-blue-900 text-white rounded mt-3 inline-block hover:bg-slate-800 transition">
                Add New Event
            </Link>

            {/* Tampilan Tabel Event */}
            <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-12">ID</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nama Event</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Lokasi</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Kategori</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Pembicara</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tanggal</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Deskripsi</th>
                            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan={7} className="px-4 py-8 text-center text-sm text-gray-500 font-medium">
                                    Sedang memuat data event...
                                </td>
                            </tr>
                        ) : events.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-4 py-4 text-center text-sm text-gray-500">
                                    Belum ada data event.
                                </td>
                            </tr>
                        ) : (
                            events.map((event) => (
                                <tr key={event.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 text-sm text-gray-900 font-medium">{event.id}</td>
                                    <td className="px-4 py-4 text-sm text-gray-700 font-semibold">{event.name}</td>
                                    <td className="px-4 py-4 text-sm text-gray-600">{event.location}</td>

                                    <td className="px-4 py-4 text-sm text-gray-700 font-medium text-left whitespace-nowrap">
                                        {event.category?.name || "Tanpa Kategori"}
                                    </td>
                                
                                    <td className="px-4 py-4 text-sm text-gray-600 font-medium">
                                        {event.pembicara?.name || "Tanpa Pembicara"}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-600 whitespace-nowrap">
                                        {formatTanggal(event.dateEvent)}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 max-w-xs whitespace-normal wrap-break-word">
                                        {event.description || "-"}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-center space-x-2 whitespace-nowrap">
                                        <Link 
                                            to={`/dashboard/event/edit/${event.id}`}
                                            className="px-3 py-1 bg-amber-500 text-white rounded text-xs hover:bg-amber-600 transition inline-block"
                                        >
                                            Edit
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(event.id)}
                                            className="px-3 py-1 bg-rose-600 text-white rounded text-xs hover:bg-rose-700 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}