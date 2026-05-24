import { useForm } from "react-hook-form";
import InputText from "../../../component/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../component/ui/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type FormData = {
    nama: string;
    location: string;
    category: string;
    pembicara: string;
    tanggal: string;
    deskripsi: string;
};

interface Category {
    id: number;
    name: string;
}

interface Speaker {
    id: number;
    name: string;
    role: string;
}

const schema = z.object({
    nama: z.string().min(1, "Event Name wajib diisi"),
    location: z.string().min(1, "Location wajib diisi"),
    category: z.string().min(1, "Kategori wajib dipilih"),
    pembicara: z.string().min(1, "Pembicara wajib dipilih"),
    tanggal: z.string().min(1, "Tanggal wajib diisi"),
    deskripsi: z.string().min(1, "Deskripsi wajib diisi"),
});

export default function EventEdit() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>(); // Ambil ID Event dari URL rute
    const [loading, setLoading] = useState(false);
    
    // State untuk data dropdown
    const [categories, setCategories] = useState<Category[]>([]);
    const [speakers, setSpeakers] = useState<Speaker[]>([]);
    
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { 
        register, 
        handleSubmit, 
        setValue,
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    // Ambil data Kategori dan Pembicara terlebih dahulu, kemudian ambil detail Event
    useEffect(() => {
        const loadAllData = async () => {
            try {
                // Fetch data untuk dropdown kategori dan pembicara
                const [resCat, resSpeaker] = await Promise.all([
                    fetch(`${import.meta.env.VITE_API_URL}/categories`),
                    fetch(`${import.meta.env.VITE_API_URL}/speakers`)
                ]);

                if (resCat.ok) setCategories(await resCat.json());
                if (resSpeaker.ok) setSpeakers(await resSpeaker.json());

                // Fetch data detail event yang mau diedit
                const resEvent = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`);
                if (!resEvent.ok) throw new Error("Gagal mengambil detail data event");
                
                const result = await resEvent.json();
                const eventData = result.data || result;

                if (eventData) {
                    setValue("nama", eventData.name || "");
                    setValue("location", eventData.location || "");
                    setValue("category", String(eventData.categoryId));
                    setValue("pembicara", String(eventData.pembicaraId));
                    setValue("deskripsi", eventData.description || "");

                    if (eventData.dateEvent) {
                        const formattedDate = eventData.dateEvent.split("T")[0];
                        setValue("tanggal", formattedDate);
                    }
                }
            } catch (err: any) {
                console.error("Gagal memuat data edit event:", err);
                setError("Gagal memuat data dari server.");
            }
        };

        if (id) loadAllData();
    }, [id, setValue]);

    // 2. Fungsi PUT untuk mengirim pembaruan data ke backend 
    const handleUpdateEvent = async (data: FormData) => {
        setLoading(true);
        setError(null);

        try {
            const isoDate = new Date(data.tanggal).toISOString();

            const response = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.nama,
                    location: data.location,
                    categoryId: Number(data.category),
                    pembicaraId: Number(data.pembicara),
                    dateEvent: isoDate, 
                    description: data.deskripsi
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Gagal memperbarui data event.");
            }

            setSuccess("Data event berhasil diperbarui!");
            
            setTimeout(() => {
                setSuccess(null);
                navigate("/dashboard/event");
            }, 2000);

        } catch (err: any) {
            console.warn("Log Update Event Gagal:", err);
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
                Edit Event
            </h1>

            <form onSubmit={handleSubmit(handleUpdateEvent)} className="space-y-4">
                {/* Nama Event */}
                <InputText 
                    label="Event Name"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                />

                {/* Lokasi */}
                <InputText 
                    label="Location"
                    nama="location"
                    register={register}
                    error={errors.location?.message}
                />

                {/* Dropdown Kategori */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Category</label>
                    <select
                        {...register("category")}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-900"
                    >
                        <option value="">-- Pilih Kategori --</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    {errors.category && <p className="text-xs text-red-600 mt-1">{errors.category.message}</p>}
                </div>

                {/* Dropdown Pembicara */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Speaker / Pembicara</label>
                    <select
                        {...register("pembicara")}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-900"
                    >
                        <option value="">-- Pilih Pembicara --</option>
                        {speakers.map((spk) => (
                            <option key={spk.id} value={spk.id}>{spk.name}</option>
                        ))}
                    </select>
                    {errors.pembicara && <p className="text-xs text-red-600 mt-1">{errors.pembicara.message}</p>}
                </div>

                {/* Tanggal Event */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Tanggal Event</label>
                    <input
                        type="date"
                        {...register("tanggal")}
                        className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-900"
                    />
                    {errors.tanggal && (
                        <p className="text-xs text-red-600 mt-1">{errors.tanggal.message}</p>
                    )}
                </div>
                
                {/* Deskripsi Event */}
                <InputText 
                    label="Deskripsi"
                    nama="deskripsi"
                    register={register}
                    error={errors.deskripsi?.message}
                />

                <div className="flex gap-2">
                    <Button 
                        tittle={loading ? "Memperbarui..." : "Simpan Perubahan"}
                        variant="primary"
                        type="submit"
                    />
                    <button
                        type="button"
                        onClick={() => navigate("/dashboard/event")}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded text-sm font-medium hover:bg-gray-50 transition"
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
}