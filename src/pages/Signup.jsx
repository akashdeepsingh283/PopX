import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import RadioGroup from '../components/RadioGroup'
import Button from '../components/Button'

const Signup = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '',
    password: '', company: '', isAgency: 'yes',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.password.trim()) e.password = 'Required'
    return e
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    localStorage.setItem('popx_user', JSON.stringify(form))
    navigate('/account')
  }

  return (
    <div className="flex flex-col h-full bg-[#f7f8f9] px-6 pt-8 pb-6">
      <h1 className="text-[27px] font-bold text-gray-900 leading-snug mb-5">
        Create your<br />PopX account
      </h1>

      <div className="flex flex-col gap-4 flex-1">
        <div>
          <InputField label="Full Name" name="fullName" placeholder="Marry Doe" value={form.fullName} onChange={handleChange} required />
          {errors.fullName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
        </div>
        <div>
          <InputField label="Phone number" name="phone" type="tel" placeholder="Marry Doe" value={form.phone} onChange={handleChange} required />
          {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
        </div>
        <div>
          <InputField label="Email address" name="email" type="email" placeholder="Marry Doe" value={form.email} onChange={handleChange} required />
          {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
        </div>
        <div>
          <InputField label="Password" name="password" type="password" placeholder="Marry Doe" value={form.password} onChange={handleChange} required />
          {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password}</p>}
        </div>
        <InputField label="Company name" name="company" placeholder="Marry Doe" value={form.company} onChange={handleChange} required={false} />
        <RadioGroup
          label="Are you an Agency?" required
          options={[{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }]}
          value={form.isAgency}
          onChange={(val) => setForm(prev => ({ ...prev, isAgency: val }))}
        />
      </div>

      <div className="mt-5">
        <Button label="Create Account" variant="primary" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default Signup