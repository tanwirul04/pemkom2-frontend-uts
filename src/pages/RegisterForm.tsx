import { useForm } from "react-hook-form";
import InputText from "../component/ui/InputText";
import InputPassword from "../component/ui/InputPasword";

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import Button from "../component/Button";

type FormData = {
    nama: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    password_confirmation: z.string().min(8, "Password minimal 8 karakter"),
});

export default function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                {/* Password Confirmation */}
                <InputPassword 
                label="Password Confirmation" 
                nama="password_confirmation" 
                register={register} 
                error={errors.password_confirmation?.message} />

                <Button tittle="Register" variant="primary" />
            </form>
        </div>
    );
}