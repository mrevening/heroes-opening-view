import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { scenarioSettings } from './actions';
// import FilterScenarioSize from './FilterScenarioSize';
import { getScenarios } from './selectors';
import { useState } from 'react';

export default function ShowScenarios({ closeAction }){
    const buttons = ["S", "M", "L", "X-L", ];
    const dispatch = useDispatch();
    const scenarios = useSelector(getScenarios);
    const [ scenarioSize, setScenarioSize] = useState("ALL" );
    function sizeFilter(scenario) { return scenarioSize === "ALL" || scenario.size === scenarioSize}; 
    
    
    return (
        <>
        <div className="horizontalBlocks">
            { buttons.map((button, i) =><button key={i} onClick={() =>setScenarioSize(button)} >{button}</button>)}
        </div>

        <div>Scenario List:</div>
        <ul>
            {scenarios?.filter(sizeFilter).map((scenario, i) => <li key={i}><button  onClick={() => dispatch(scenarioSettings(scenario))}>{scenario.name} {scenario.size}</button></li>)}
        </ul>
        <Button text="OKAY" action={closeAction} />
        </>
    );
}