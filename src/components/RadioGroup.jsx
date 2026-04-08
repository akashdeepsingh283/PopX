const RadioGroup = ({ label, options, value, onChange, required = false }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-gray-700 font-medium">
        {label}{required ? '*' : ''}
      </p>
      <div className="flex items-center gap-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer select-none">
            <div
              className={`radio-circle ${value === option.value ? 'selected' : ''}`}
              onClick={() => onChange(option.value)}
            >
              {value === option.value && <span className="radio-dot" />}
            </div>
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup