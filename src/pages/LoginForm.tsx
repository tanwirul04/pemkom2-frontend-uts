import { useForm } from "react-hook-form";
import InputText from "../component/ui/InputText";
import InputPassword from "../component/ui/InputPasword";

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import Button from "../component/ui/Button";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

type FormData = {
    nim: string;
    password: string;
};

const schema = z.object({
    nim: z.string().min(1, "NIM harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function LoginForm() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        if (data.nim === "24090023" && data.password === "24090023") {
            alert("Login berhasil!");
            login(data.nim);

            navigate("/dashboard");
        } else {
            alert("NIM atau password salah!");
            return;
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* NIM */}
                <InputText 
                label="NIM" 
                nama="nim" 
                register={register} 
                error={errors.nim?.message} />

                {/* Password */}
                <InputPassword 
                label="Password" 
                nama="password" 
                register={register} 
                error={errors.password?.message} />

                <Button type="submit" tittle="Login" variant="primary" />
            </form>

            <p className="mt-4 text-sm">
                Belum punya akun?
                <Link to="/register"> Daftar sekarang</Link>
            </p>

        </div>
    );
}