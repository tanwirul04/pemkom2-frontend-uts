import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

interface Category {
    id: number;
    name: string;
}

export default function CategoryIndex() {
    const [categories, setCategories] = useState<Category[]>([]);
    
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
            
            if (!response.ok) {
                throw new Error("Gagal mengambil data dari server");
            }
            
            const data = await response.json();
            setCategories(data);
        } catch (err) {
            console.error("Gagal ambil kategori:", err);
            setError("Waduh, gagal memuat data kategori. Coba cek koneksi backend kamu.");
        } finally {
            setLoading(false); 
        }
    };

    const handleDelete = async (id: number) => {
        const konfirmasi = window.confirm("Apakah kamu yakin ingin menghapus kategori ini?");
        if (!konfirmasi) return;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || "Gagal menghapus kategori.");
            }

            setSuccess("Kategori berhasil dihapus!");
            
            setTimeout(() => setSuccess(null), 3000);
            
            fetchCategories();
        } catch (err: any) {
            console.error("Error saat menghapus:", err);
            setError(err.message || "Terjadi kesalahan saat menghapus data.");
            
            setTimeout(() => setError(null), 3000);
        }
    };

    return (
        <div className="p-6">
            {/* pesan berhasil & error */}
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

            <h1 className="text-2xl font-bold text-gray-800">Halaman Category</h1>

            <Link to="/dashboard/category/create" 
                className="p-2 bg-blue-900 text-white rounded mt-3 inline-block hover:bg-slate-800 transition">
                Add New Category
            </Link>

            {/* Tampilan Tabel CRUD */}
            <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow max-w-2xl border border-gray-200">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-20">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nama Kategori</th>
                            <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider w-40">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {loading ? (
                            <tr>
                                <td colSpan={3} className="px-6 py-8 text-center text-sm text-gray-500 font-medium">
                                    Sedang memuat data kategori...
                                </td>
                            </tr>
                        ) : categories.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="px-6 py-4 text-center text-sm text-gray-500">
                                    Belum ada data kategori.
                                </td>
                            </tr>
                        ) : (
                            categories.map((category) => (
                                <tr key={category.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{category.id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{category.name}</td>
                                    <td className="px-6 py-4 text-sm text-center space-x-2">
                                        <Link 
                                            to={`/dashboard/category/edit/${category.id}`}
                                            className="px-3 py-1 bg-amber-500 text-white rounded text-xs hover:bg-amber-600 transition inline-block"
                                        >
                                            Edit
                                        </Link>
                                        <button 
                                            onClick={() => handleDelete(category.id)}
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