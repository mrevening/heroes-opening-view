import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { scenarioSettings } from './actions';
import FilterScenarioSize from './FilterScenarioSize';
import { getScenarios } from './selectors';

export default function ShowScenarios({ closeAction }){
    const dispatch = useDispatch();

    const scenarios = useSelector(getScenarios);

    return (
        <>
        <FilterScenarioSize />
        <div>Scenario List:</div>
        <ul>
            {scenarios?.map((scenario, i) => <li key={i}><button  onClick={() => dispatch(scenarioSettings(scenario))}>{scenario.name}</button></li>)}
        </ul>
        <Button text="OKAY" action={closeAction} />
        </>
    );
}