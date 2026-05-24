import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

// Interface untuk mencocokkan tipe data pembicara dari backend
interface Speaker {
    id: number;
    name: string; 
    role: string;
}

export default function SpeakerIndex() {
    const [speakers, setSpeakers] = useState<Speaker[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        fetchSpeakers();
    }, []);

    // Fungsi GET untuk mengambil semua data pembicara
    const fetchSpeakers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/speakers`);
            
            if (!response.ok) {
                throw new Error("Gagal mengambil data pembicara dari server");
            }
            
            const data = await response.json();
            setSpeakers(data);
        } catch (err) {
            console.error("Gagal ambil data pembicara:", err);
            setError("Gagal memuat data pembicara. Silakan periksa koneksi backend kamu.");
        } finally {
            setLoading(false); 
        }
    };

    // Fungsi DELETE untuk menghapus pembicara berdasarkan ID
    const handleDelete = async (id: number) => {
        const konfirmasi = window.confirm("Apakah kamu yakin ingin menghapus pembicara ini?");
        if (!konfirmasi) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/speakers/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || "Gagal menghapus pembicara.");
            }

            setSuccess("Data pembicara berhasil dihapus!");
            
            setTimeout(() => setSuccess(null), 3000);
            
            fetchSpeakers();
        } catch (err: any) {
            console.error("Error saat menghapus pembicara:", err);
            setError(err.message || "Terjadi kesalahan saat menghapus data.");
            
            setTimeout(() => setError(null), 3000);
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

            <h1 className="text-2xl font-bold text-gray-800">Halaman Speaker</h1>

            <Link to="/dashboard/speaker/create" 
                className="p-2 bg-blue-900 text-white rounded mt-3 inline-block hover:bg-slate-800 transition">
                Add New Speaker
            </Link>

            {/* Tampilan Tabel Pembicara */}
            <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow max-w-4xl border border-gray-200">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nama Pembicara</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role </th>
                            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500 font-medium">
                                    Sedang memuat data pembicara...
                                </td>
                            </tr>
                        ) : speakers.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                                    Belum ada data pembicara.
                                </td>
                            </tr>
                        ) : (
                            speakers.map((speaker) => (
                                <tr key={speaker.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{speaker.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{speaker.name || (speaker as any).nama}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{speaker.role}</td>
                                    <td className="px-6 py-4 text-sm text-center space-x-2">
                                        <Link 
                                            to={`/dashboard/speaker/edit/${speaker.id}`}
                                            className="px-3 py-1 bg-amber-500 text-white rounded text-xs hover:bg-amber-600 transition inline-block"
                                        >
                                            Edit
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(speaker.id)}
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