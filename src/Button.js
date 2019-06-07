import React from 'react';

const Button = (props) => {
    return (
        <div onClick={props.onClick} className="Button" data-size={props.size} data-value={props.value} >
            {props.value}
        </div>
    )
}

export default Button;