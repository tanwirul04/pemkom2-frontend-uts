import { useForm } from "react-hook-form";
import InputText from "../component/ui/InputText";
import InputPassword from "../component/ui/InputPasword";

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import Button from "../component/ui/Button";
import TextArea from "../component/ui/TextArea";
import SelectInput from "../component/ui/SelectInput";
import { useState } from "react";

type FormData = {
    nama: string;
    email: string;
    password: string;
    kategori: string;
    bio: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    kategori: z.string().min(1, "Pilih salah satu"),
    bio: z.string().min(1, "Bio harus diisi"),
});

export default function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setLoading(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <h1 className="text-2xl font-bold text-center">
                    Registrasi Event
                </h1>
                {/* Nama */}
                <InputText 
                label="Nama" 
                nama="nama" 
                register={register} 
                error={errors.nama?.message} />

                {/* Email */}
                <InputText 
                label="Email" 
                nama="email" 
                register={register} 
                error={errors.email?.message} />

                {/* Password */}
                <InputPassword 
                label="Password" 
                nama="password" 
                register={register} 
                error={errors.password?.message} />

                {/* Kategori */}
                <SelectInput
                label="Kategori Event"
                nama="kategori"
                register={register}
                error={errors.kategori?.message}
                options={[
                    { value: "IT Workshop", label: "IT Workshop" },
                    { value: "IT Seminar", label: "IT Seminar" },
                    { value: "IT Talkshow", label: "IT Talkshow" },
                    { value: "IT Competition", label: "IT Competition" }
                ]}
                />

                {/* Bio */}
                <TextArea
                label="Bio"
                nama="bio"
                register={register}
                error={errors.bio?.message}
                placeholder="Tentang Anda..."
                />

                <Button 
                tittle={loading ? "Loading..." : "Daftar"}
                variant="primary" 
                type="submit"/>
            </form>
        </div>
    );
}

