import { useReducer} from 'react';
import ShowScenarios from './ShowScenarios';
import Button from './Button';

export default function Scenario(){
    const [showScenarios, toggleShowScenarios] = useReducer(showScenarios => !showScenarios, false);

    return (
        <>
        <div>Scenario:</div>
        <Button text="SELECT" action={toggleShowScenarios} />
        { showScenarios && <ShowScenarios closeAction={toggleShowScenarios}/> }
        </>
    );
}