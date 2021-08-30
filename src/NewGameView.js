import React, { useState, useEffect } from 'react';
import Button from './Button'
import Scenario from './Scenario';
import GameDifficulty from './GameDifficulty';
import HeroClass from './HeroClass';
import Opponents from './Opponents';
import { setScenarios } from './actions';
import { useDispatch } from 'react-redux';

export default function NewGameView({ closeAction }) {
    const [difficulty, setDifficulty] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => { 
        fetch("scenarios.json").then(res => res.json()).then(json => dispatch(setScenarios(json))).catch(console.error);
      }, []);

    return(
        <div className="pane-view" >
            <Scenario />
            <GameDifficulty setDifficulty={setDifficulty}/>
            <Opponents />
            <HeroClass />
            <Button text="OKAY" action = {closeAction} />
            <div>{ 100 + difficulty*20 }%</div>
            <Button text="CANCEL" action = {closeAction} />
        </div>
    );
} 
