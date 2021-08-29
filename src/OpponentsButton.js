import React from 'react';

export default function OpponentsButton({color, onlyComputer = false}) {
    const blocked = onlyComputer ? " blocked-button" : " unblocked-button";
    return (
        <div className={"scenario-opponents-button " + color + blocked}></div>
    )
}
