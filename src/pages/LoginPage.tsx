import { useState } from 'react';
import { useAuthStore } from '../context/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from '../validations/validations';

export default function LoginPage() {

    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        if (data.email) {
            login({ name: 'User Prueba', email });
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 min-h-screen">
            <div className="w-120 p-8 rounded-2xl shadow-lg bg-white">
                <h2 className="text-2xl font-bold mb-6 text-center text-violet-700 text-shadow-sm">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 text-shadow-md">Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            required
                            className={`block mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm
                                ${errors.email
                                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                                    : "border-gray-300"
                                }`}
                            placeholder="correo@email.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <p className="mt-1.5 text-xs font-medium text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 text-shadow-sm">Contraseña</label>
                        <input
                            {...register("password")}
                            type="password"
                            className={`block mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm
                                ${errors.password
                                    ? "border-red-500 focus:ring-2 focus:ring-red-100"
                                    : "border-gray-300"
                                }`}
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="mt-1.5 text-xs font-medium text-red-500">{errors.password.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-violet-700 text-white text-shadow-lg py-2 px-4 rounded-md hover:bg-violet-500 transition"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}