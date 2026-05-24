import { useForm } from "react-hook-form";
import InputText from "../../../component/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../component/ui/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 

type FormData = {
    category: string;
};

const schema = z.object({
    category: z.string().min(1, "Category Name wajib diisi"),
});

export default function CategoryEdit() {
    const navigate = useNavigate(); 
    const { id } = useParams<{ id: string }>(); // Mengambil ID kategori dari URL
    const [loading, setLoading] = useState(false);
    
    // untuk notifikasi
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { 
        register, 
        handleSubmit, 
        setValue, // Digunakan untuk mengisi data lama ke dalam form
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    // Logika untuk mengambil data kategori lama berdasarkan ID saat komponen dimuat
    useEffect(() => {
        const getDetailCategory = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`);
                if (!response.ok) throw new Error("Gagal mengambil data");
                
                const result = await response.json();
                const categoryData = result.data || result; 
                
                if (categoryData && categoryData.name) {
                    setValue("category", categoryData.name);
                }
            } catch (err: any) {
                console.warn("Log Ambil Detail Gagal:", err);
                setError("Gagal memuat data kategori dari server.");
            }
        };

        if (id) getDetailCategory();
    }, [id, setValue]);

    // Logika PUT untuk mengirim data perubahan ke backend
    const handleUpdateCategory = async (data: FormData) => {
        setLoading(true);
        setError(null); 

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: data.category }), 
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Gagal memperbarui data.");
            }

            setSuccess("Kategori berhasil diperbarui!");
            
            // waktu 2 detik untuk redirect otomatis ke halaman tabel utama
            setTimeout(() => {
                setSuccess(null);
                navigate("/dashboard/category");
            }, 2000);

        } catch (err: any) {
            console.warn("Log Update Gagal:", err);
            setError(err.message || "Terjadi kesalahan pada server saat memperbarui data.");
            setTimeout(() => setError(null), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg p-6">
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

            <h1 className="text-2xl font-bold mb-4">
                Edit Category
            </h1>

            <form onSubmit={handleSubmit(handleUpdateCategory)} className="space-y-4">
                <InputText 
                    label="Category Name"
                    nama="category"
                    register={register}
                    error={errors.category?.message}
                />

                <div className="flex gap-2">
                    <Button 
                        tittle={loading ? "Memperbarui..." : "Simpan Perubahan"}
                        variant="primary"
                        type="submit"
                    />
                    <button
                        type="button"
                        onClick={() => navigate("/dashboard/category")}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50 transition"
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
}