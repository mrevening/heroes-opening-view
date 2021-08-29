import Button from './Button';
import { useDispatch } from 'react-redux';
import { scenarioSettings } from './actions';
import FilterScenarioSize from './FilterScenarioSize'

export default function ShowScenarios({ closeAction, scenarios }){
    const dispatch = useDispatch();

    return (
        <>
        <FilterScenarioSize />
        <div>Scenario List:</div>
        <ul>
            {scenarios.map((scenario, i) => <li key={i}><button  onClick={() => dispatch(scenarioSettings(scenario))}>{scenario.name}</button></li>)}
        </ul>
        <Button text="OKAY" action={closeAction} />
        </>
    );
}