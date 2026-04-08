const InputField = ({ label, type = 'text', placeholder, value, onChange, required = false, name }) => {
  return (
    <div className="input-field-wrapper">
      <span className={required ? 'input-label' : 'input-label-optional'}>
        {label}{required ? '*' : ''}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
        className="input-inner"
        autoComplete="off"
      />
    </div>
  )
}

export default InputField