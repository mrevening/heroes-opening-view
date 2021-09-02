import React from 'react';
import { useSelector } from 'react-redux';
import { getHero } from './selectors'

export default function OpponentsButton({color, blocked = false, human = false}) {
     const computerIcon = blocked ? "laptop-fill.svg" : "laptop.svg";
     const humanIcon = "person-circle.svg";
     const icon = human ? humanIcon : computerIcon;

    //  const hero = useSelector(getScenarioName);

    return (
        <div  className={"d-flex justify-content-center align-items-center scenario-opponents-button " + color}>
            { <img src={icon} alt="icon" width="32" height="32" /> }
        </div>
        // <div onClick={() => setDifficulty(button.level)} className={button.level === difficulty ? "active": "not-active"}><img src={button.img} alt={button.text} /></div>
    )
}
// onClick={() => dispatch(setScenarioSettings(scenario))}