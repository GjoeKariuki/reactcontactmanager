import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';


const TextInputGroup = ({name,type,onChange,placeholder,value,label,error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                className={classnames("form-control form-control-lg", {"is-invalid": error})}
                value={value}
                onChange={onChange}/>
                {error && <div className="invalid-feedback">{error}</div>}
                
        </div>
    )
}
TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
}

TextInputGroup.defaultProps = {
    type: 'text',
}


export default TextInputGroup;