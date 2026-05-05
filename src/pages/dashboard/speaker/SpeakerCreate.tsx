import { useForm } from "react-hook-form";
import InputText from "../../../component/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../component/ui/Button";
import { useState } from "react";

type FormData = {
    nama: string;
    role: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama wajib diisi"),
    role: z.string().min(1, "Role wajib diisi"),
});

export default function SpeakerCreate() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const handleCreateSpeaker = async (data: FormData) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Speaker:", data);
        setLoading(false);
    };

    return (
        <div className="w-full max-w-lg p-6">
            <h1 className="text-2xl font-bold mb-4">
                Add New Speaker
            </h1>

            <form onSubmit={handleSubmit(handleCreateSpeaker)}>
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

                <Button 
                    tittle={loading ? "Menyimpan..." : "Simpan"}
                    variant="primary"
                    type="submit"
                />
            </form>
        </div>
    );
}