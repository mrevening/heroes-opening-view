import React from 'react';
import Button from './Button'
import Scenario from './Scenario';

export default function NewGameView({ closeAction }) {
    return(
        <>
        <Scenario />
        <div>Game Difficulty</div>
        <div>Opponents</div>
        <div>Class</div>
        <Button text="OKAY" action = {closeAction} />
        <Button text="CANCEL" action = {closeAction} />
        </>
    );
} 
