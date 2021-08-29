import React from 'react';

export default function Button({text, action, className}) {
    return (
        <button className={className} onClick={() => action()}>{text}</button>
    )
}
