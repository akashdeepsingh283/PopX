import { useEffect, useState } from 'react'
import ProfileCard from '../components/ProfileCard'

const Account = () => {
  const [user, setUser] = useState({ fullName: 'Marry Doe', email: 'Marry@Gmail.Com' })

  useEffect(() => {
    try {
      const stored = localStorage.getItem('popx_user')
      if (stored) {
        const parsed = JSON.parse(stored)
        setUser({ fullName: parsed.fullName || 'Marry Doe', email: parsed.email || 'Marry@Gmail.Com' })
      }
    } catch (e) {}
  }, [])

  return (
    <div className="flex flex-col h-full bg-[#ffffff]">
      {/* Header */}
      <div className="px-5 pt-7 pb-4 bg-[#f7f8f9] border-b border-gray-100">
        <h1 className="text-[18px] font-bold text-gray-900">Account Settings</h1>
      </div>

      {/* Profile section */}
      <div className="px-5 py-5 bg-[#f7f8f9]">
        <ProfileCard name={user.fullName} email={user.email} />
        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      {/* Dashed divider */}
      <div style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #d1d5db 0, #d1d5db 6px, transparent 6px, transparent 14px)',
        height: '1px'
      }} />

      {/* Empty lower area */}
      <div className="flex-1 bg-[#ffffff]" />

      {/* Bottom dashed divider */}
      <div style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #d1d5db 0, #d1d5db 6px, transparent 6px, transparent 14px)',
        height: '1px'
      }} />
    </div>
  )
}

export default Account