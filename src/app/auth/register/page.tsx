'use client'

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

function RegisterPage() {

  const router = useRouter()

  const { register, handleSubmit, formState: {errors} } = useForm()

  const OnSubmit = handleSubmit(async (data) => {
    
    if(data.password != data.confirmPasword){return alert("Las contraseñas no son iguales")}
    
    const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(res.ok){
        router.push('/auth/login')
    }
  })

  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form action="" onSubmit={OnSubmit} className="w-1/4">

            <h1 className="text-slate-200 font-bold text-4xl mb-4">
                Registrarse
            </h1>

            <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
                Usuario:
            </label>
            <input type="text" 
            {...register("username", {required: {value: true, message: 'Usuario requerido'}})}
            className="p-3 rounded mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="UsuarioEjemplo"
            />
            {errors.username && (
                    <span className="text-red-500 text-xs">{errors.username.message}</span>
            )}

            <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
                Email:
            </label>
            <input type="email"
            {...register("email", {required: {value: true, message: 'Email requerido'}})}
            className="p-3 rounded mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="ejemplo@ejemplo.com"
            />
            {errors.username && (
                    <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}            

            <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
                Contraseña:
            </label>
            <input type="password" 
            {...register("password", {required: {value: true, message: 'Contraseña requerida'}})}
            className="p-3 rounded mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="******"
            />
            {errors.username && (
                    <span className="text-red-500 text-xs">{errors.password.message}</span>
            )}            

            <label htmlFor="confirmPasword" className="text-slate-500 mb-2 block text-sm">
                Confirmar contraseña:
            </label>
            <input type="password" 
            {...register("confirmPasword", {required: {value: true, message: 'Confirma la contraseña'}})}
            className="p-3 rounded mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="******"
            />
            {errors.username && (
                    <span className="text-red-500 text-xs">{errors.confirmPasword.message}</span>
            )}            

            <button
            className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2"
            >Register</button>

        </form>
    </section>
  )
}

export default RegisterPage