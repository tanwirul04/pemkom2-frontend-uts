import { useForm } from "react-hook-form";
import InputText from "../component/ui/InputText";
import InputPassword from "../component/ui/InputPasword";

import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import Button from "../component/ui/Button";

type FormData = {
    email: string;
    password: string;
};

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <Button tittle="Login" variant="primary" />
            </form>
        </div>
    );
}