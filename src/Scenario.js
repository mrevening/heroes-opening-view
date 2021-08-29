import { useReducer, useEffect, useState } from 'react';
import ShowScenarios from './ShowScenarios';
import Button from './Button';
import { getScenarioName } from './selectors'
import { useSelector } from 'react-redux';

export default function Scenario(){
    const scenariosPath = "scenarios.json"
    const [showScenarios, toggleShowScenarios] = useReducer(showScenarios => !showScenarios, false);
    const scenarioName = useSelector(getScenarioName);
    const [scenarios, setScenarios] = useState(null);

    useEffect(() => { 
        fetch(scenariosPath).then(res => res.json()).then(setScenarios).catch(console.error)
      }, []);

    return (
        <>
        <div>Scenario:</div>
        <div>{scenarioName}</div>
        <Button text="SELECT" action={toggleShowScenarios} />
        { showScenarios && <ShowScenarios closeAction={toggleShowScenarios} scenarios={scenarios} /> }
        </>
    );
}