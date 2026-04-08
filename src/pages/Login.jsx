import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-col h-full bg-[#f7f8f9] px-6 pt-10 pb-8">
      <div className="flex flex-col gap-1.5 mb-6">
        <h1 className="text-[27px] font-bold text-gray-900 leading-snug">
          Signin to your<br />PopX account
        </h1>
        <p  className="text-gray-500 text-lg leading-relaxed mt-1">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <InputField label="Email Address" name="email" type="email" placeholder="Enter email address" value={form.email} onChange={handleChange} required />
        <InputField label="Password" name="password" type="password" placeholder="Enter password" value={form.password} onChange={handleChange} required />
      </div>

      <div className="mt-6">
        <Button label="Login" variant="disabled" onClick={() => navigate('/account')} />
      </div>
    </div>
  )
}

export default Login