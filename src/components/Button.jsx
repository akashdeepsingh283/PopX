const Button = ({ label, onClick, variant = 'primary' }) => {
  const classes = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    disabled: 'btn-disabled',
  }
  return (
    <button onClick={onClick} className={classes[variant] || classes.primary}>
      {label}
    </button>
  )
}

export default Button