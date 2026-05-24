import { useForm } from "react-hook-form";
import InputText from "../../../component/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../component/ui/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; 

type FormData = {
    nama: string;
    role: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama wajib diisi"),
    role: z.string().min(1, "Role wajib diisi"),
});

export default function SpeakerEdit() {
    const navigate = useNavigate(); 
    const { id } = useParams<{ id: string }>(); 
    const [loading, setLoading] = useState(false);
    
    // State untuk notifikasi
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { 
        register, 
        handleSubmit, 
        setValue, // digunakan untuk mengisi value lama ke dalam form inputan
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    // Ambil data detail pembicara yang lama berdasarkan ID saat halaman dimuat
    useEffect(() => {
        const getDetailSpeaker = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/speakers/${id}`);
                if (!response.ok) throw new Error("Gagal mengambil data pembicara");
                
                const result = await response.json();
                const speakerData = result.data || result; 
                
                if (speakerData) {
                    setValue("nama", speakerData.name || speakerData.nama || "");
                    setValue("role", speakerData.role || "");
                }
            } catch (err: any) {
                console.warn("Log Detail Speaker Gagal:", err);
                setError("Gagal memuat data pembicara dari server.");
            }
        };

        if (id) getDetailSpeaker();
    }, [id, setValue]);

    // Fungsi PUT untuk mengirim data perubahan baru ke Backend
    const handleUpdateSpeaker = async (data: FormData) => {
        setLoading(true);
        setError(null); 

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/speakers/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    name: data.nama, 
                    role: data.role 
                }), 
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Gagal memperbarui data pembicara.");
            }

            setSuccess("Data pembicara berhasil diperbarui!");
            
            setTimeout(() => {
                setSuccess(null);
                navigate("/dashboard/speaker");
            }, 2000);

        } catch (err: any) {
            console.warn("Log Update Speaker Gagal:", err);
            setError(err.message || "Terjadi kesalahan pada server saat memperbarui data.");
            setTimeout(() => setError(null), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-lg p-6">
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

            <h1 className="text-2xl font-bold mb-4">
                Edit Speaker
            </h1>

            <form onSubmit={handleSubmit(handleUpdateSpeaker)} className="space-y-4">
                <InputText 
                    label="Nama"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                />
                <InputText 
                    label="Role"
                    nama="role"
                    register={register}
                    error={errors.role?.message}
                />

                <div className="flex gap-2">
                    <Button 
                        tittle={loading ? "Memperbarui..." : "Simpan Perubahan"}
                        variant="primary"
                        type="submit"
                    />
                    <button
                        type="button"
                        onClick={() => navigate("/dashboard/speaker")}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50 transition"
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
}