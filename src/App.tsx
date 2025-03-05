import { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form"

import "./index.css"
import './App.css'

function App() {

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<any>()

  /* const focusName = useRef(null)

  useEffect(() => {
    if (focusName.current) {
      focusName.current.focus();
    }
  }, []); */


  const regExp = {
    name: /^[A-Za-zА-Яа-я\s'-]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,

  };
  const password = watch("password")


  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }
  return (

    <div className='flex justify-center  items-center h-screen '>

      <form onSubmit={handleSubmit(onSubmit)} className="w-96 pt-6 pb-6 pl-5 pr-5 text-center shadow-[1px_4px_8px_0px_rgba(34,60,80,0.2)] rounded-xl ">
        <h1 className='text-3xl font-semibold mb-5'>Регистрация</h1>


        <input
          {...register("name", { required: true, pattern: regExp.name })}
          name='name'
          placeholder='Name'
          autoFocus
          className={`w-full border-1 border-gray-400 p-3 rounded-[6px] mb-2.5
            border ${errors.name ? "border-red-500" : "border-gray-300"}`}
/*             ref={focusName}
 */        /> <br />


        <input
          {...register("email", { required: true, pattern: regExp.email })}
          type="email"
          name='email'
          placeholder='Email'
          className={`w-full border-1 border-gray-400 p-3 rounded-[6px] mb-2.5
 border-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}

        /> <br />


        <input
          {...register("password", { required: true, pattern: regExp.password })}
          type="password"
          name='password'
          placeholder='Password'
          className={`w-full border-1 border-gray-400 p-3 rounded-[6px] mb-2.5
 border-2 ${errors.password ? "border-red-500" : "border-gray-300"}`}
        /><br />


        <input
          {...register("repeatPassword", { required: "Повторите пароль", validate: value => value === password || "Пароли не совподают" })}
          type="password"
          name='repeatPassword'
          placeholder='Repeat password'
          className={`w-full border-1 border-gray-400 p-3 rounded-[6px] mb-2.5
 border-2 ${errors.repeatPassword ? "border-red-500" : "border-gray-300"}`}
        />
        {errors.repeatPassword && (
          <p className="text-red-500">{errors.repeatPassword.message}</p>
        )}

        <label htmlFor="agreement" className="cursor-pointer flex items-center">
          <input
            {...register("agreementCheckbox", { required: true })}
            type="checkbox"
            name='agreementCheckbox'
            id="agreement" className={`w-5 h-5 mr-2 cursor-pointer ${errors.agreementCheckbox ? "border-red-500" : ""}`} />
          {errors.agreementCheckbox && <p className='text-red-500 text-[12px] mr-1.5'>Необходимо согласие !</p>}

          Принимаете Условие?
        </label>


        <button className='w-full p-4 bg-emerald-400 rounded-xl text-xl font-[600] text-white cursor-pointer mt-6 hover:bg-emerald-600 transition duration-300' >Отправить</button>

      </form>

    </div>)
}

export default App
