import React, { useState } from 'react';
import Button from './Button'
import Scenario from './Scenario';
import GameDifficulty from './GameDifficulty';
import HeroClass from './HeroClass';
import Opponents from './Opponents';

export default function NewGameView({ closeAction }) {
    const [difficulty, setDifficulty] = useState(0);
    return(
        <>
        <Scenario />
        <GameDifficulty setDifficulty={setDifficulty}/>
        <Opponents />
        <HeroClass />
        <Button text="OKAY" action = {closeAction} />
        <div>{ 100 + difficulty*20 }%</div>
        <Button text="CANCEL" action = {closeAction} />
        </>
    );
} 
