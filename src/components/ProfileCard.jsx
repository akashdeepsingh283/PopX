const ProfileCard = ({ name, email }) => {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase()
    : 'MD'

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-shrink-0">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md"
          style={{ background: 'linear-gradient(135deg, #6C25FF 0%, #8A4DFF 100%)' }}
        >
          {initials}
        </div>
        <button
          className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center shadow-md border-2 border-white"
          style={{ background: 'linear-gradient(135deg, #6C25FF 0%, #8A4DFF 100%)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/>
            <path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
          </svg>
        </button>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900 text-base">{name || 'Marry Doe'}</span>
        <span className="text-sm text-gray-500 mt-0.5">{email || 'Marry@Gmail.Com'}</span>
      </div>
    </div>
  )
}

export default ProfileCard