import React, { useMemo } from 'react'
import { getClassNameBasedOnClass } from './helper';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BUTTON_TYPES } from './constant';
import './button.scss';

const Button = (props) => {
    const {type, label, icon, btnClassNames} = props;

    const btnClass = useMemo(() => {
        return getClassNameBasedOnClass(type);
    }, [type])
    
  return (
    <button className={classNames(btnClass, {[btnClassNames]: btnClassNames?.length})}>
        <span className='btn-label'>
            {label}
        </span>
        {
            icon ?
            <span className='btn-icon'>{
                <icon />
            }</span>
            : null
        }
    </button>
  )
}

Button.propTypes = {
    type: PropTypes.oneOf([BUTTON_TYPES.PRIMARY, BUTTON_TYPES.SECONDARY, BUTTON_TYPES.TERTIARY]),
    label: PropTypes.string.isRequired,
    icon: PropTypes.object,
    btnClassNames: PropTypes.string,

}

Button.defaultProps = {
    type: 'primary',
    label: '',
    icon: null,
    btnClassNames: '',
}

export default Button