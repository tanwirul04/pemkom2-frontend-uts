import { useForm } from "react-hook-form";
import InputText from "../../../component/ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../../../component/ui/Button";
import { useState } from "react";

type FormData = {
    category: string;
};

const schema = z.object({
    category: z.string().min(1, "Category Name wajib diisi"),
});

export default function CategoryCreate() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const handleCreateCategory = async (data: FormData) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Category:", data);
        setLoading(false);
    };

    return (
        <div className="w-full max-w-lg p-6">
            <h1 className="text-2xl font-bold mb-4">
                Add New Category
            </h1>

            <form onSubmit={handleSubmit(handleCreateCategory)}>
                <InputText 
                    label="Category Name"
                    nama="category"
                    register={register}
                    error={errors.category?.message}
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