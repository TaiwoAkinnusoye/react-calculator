import React from 'react';

const Display = (props) => {
    var string = '';
    var value = props.data.map((operation, i) => {
        string += operation;
    });
    if(props.result) {
        string = props.result;
    }
    return (
        <div className="Display">
            {string}
        </div>
    )
}

export default Display;