import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col h-full bg-[#f7f8f9]">
      {/* Push content to bottom */}
      <div className="flex-1" />

      {/* Bottom content — no scrolling */}
      <div className="px-6 pb-6 flex flex-col gap-2">
        <div className="flex flex-col gap-1.5 mb-2">
          <h1 className="text-[27px] font-semibold text-gray-900 leading-tight">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
        </div>
        <Button label="Create Account" variant="primary" onClick={() => navigate('/signup')} />
        <Button label="Already Registered? Login" variant="secondary" onClick={() => navigate('/login')} />
      </div>
    </div>
  )
}

export default Welcome