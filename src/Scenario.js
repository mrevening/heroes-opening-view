import { useReducer } from 'react';
import ShowScenarios from './ShowScenarios';
import Button from './Button';
import { getScenarioName } from './selectors'
import { useSelector } from 'react-redux';

export default function Scenario(){
    const [showScenarios, toggleShowScenarios] = useReducer(showScenarios => !showScenarios, false);
    const scenarioName = useSelector(getScenarioName);   

    return (
        <>
        <div>Scenario:</div>
        <div>{scenarioName}</div>
        <Button text="SELECT" action={toggleShowScenarios} />
        { showScenarios && <ShowScenarios closeAction={toggleShowScenarios} /> }
        </>
    );
}