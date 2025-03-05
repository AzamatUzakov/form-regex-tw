import { useState } from 'react'
import "./index.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='flex justify-center  items-center h-screen '>

      <form className="w-96 h-1/2 pt-4 pl-5 pr-5 text-center shadow-[1px_4px_8px_0px_rgba(34,60,80,0.2)] rounded-xl">
        <h1 className='text-3xl font-semibold mb-5'>Регистрация</h1>
        <input type="text" placeholder='Name' className='input-custom' /> <br />
        <input type="email" placeholder='Email' className='input-custom' /> <br />
        <input type="password" placeholder='Password' className='input-custom' /><br />
        <input type="password" placeholder='Repeat password' className='input-custom' />
        <label htmlFor="agreement" className="cursor-pointer">
          <input type="checkbox" id="agreement" className="mr-2" />
          Принимаете соглашение?
        </label>
        <button className='w-full' >Отправить</button>

      </form>

    </div>)
}

export default App
