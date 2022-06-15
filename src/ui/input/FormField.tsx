import { FormFieldWrap } from './styles'

import type { FormFieldProps } from "./types";

const FormField = ({ label, error, size, width, icon, disabled = false, errorText, ...props } : FormFieldProps) => {
  const handleKeyPress = e => {
    const invalidChars = ['-', '+', 'e', 'E']
    if(invalidChars.indexOf(e.key) !== -1){
      e.preventDefault()
    }
  }

  const FormFieldContainer = (
    <div className='__form-field-container'>
      <div className='__form-field-icon'>
        {icon}
      </div>
      <input
        {...props}
        disabled={disabled}
        className='__form-field-input'
        type='number'
        onKeyPress={handleKeyPress}
      />
    </div>
  )

  return (
    <FormFieldWrap
      size={size}
      width={width}
      error={error}
      value={props.value}
    >
      <label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <p className='__form-field-text'>
            {label}
          </p>
          {error && <p className='__form-field-error-text'>{errorText}</p>}
        </div>
        {FormFieldContainer}
      </label>
    </FormFieldWrap>
  )
}

FormField.defaultProps = {
  size: 'default',
}

export { FormField }

