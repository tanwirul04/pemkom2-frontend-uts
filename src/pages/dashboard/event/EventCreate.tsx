import { useForm } from "react-hook-form";
import InputText from "../../../component/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../component/ui/Button";
import { useState } from "react";

type FormData = {
    nama: string;
    category: string;
    tanggal: string;
    deskripsi: string;
};

const schema = z.object({
    nama: z.string().min(1, "Event Name wajib diisi"),
    category: z.string().min(1, "Category Name wajib diisi"),
    tanggal: z.string().min(1, "Tanggal wajib diisi"),
    deskripsi: z.string().min(1, "Deskripsi wajib diisi"),

});

export default function EventCreate() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const handleCreateEvent = async (data: FormData) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Event:", data);
        setLoading(false);
    };

    return (
        <div className="w-full max-w-lg p-6">
            <h1 className="text-2xl font-bold mb-4">
                Add New Event
            </h1>

            <form onSubmit={handleSubmit(handleCreateEvent)}>
                <InputText 
                    label="Event Name"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                />
                <InputText 
                    label="Category"
                    nama="category"
                    register={register}
                    error={errors.category?.message}
                />
                <InputText 
                    label="Tanggal"
                    nama="tanggal"
                    register={register}
                    error={errors.tanggal?.message}
                />
                <InputText 
                    label="Deskripsi"
                    nama="deskripsi"
                    register={register}
                    error={errors.deskripsi?.message}
                />

                <Button 
                    tittle={loading ? "Menyimpan..." : "Simpan"}
                    variant="primary"
                    type="submit"
                />
            </form>
        </div>
    );
}