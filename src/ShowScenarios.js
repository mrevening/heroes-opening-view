import Button from './Button';
import { useDispatch } from 'react-redux';
import { scenarioSettings } from './actions'

export default function Scenario({ closeAction }){
    const dispatch = useDispatch();

    return (
        <>
        <div>Scenario List:</div>
        
        <button onClick={() => dispatch(scenarioSettings(
            {
                name: "Grim Reaper",
                opponents: 
                [
                    { "human": false, "computer": true },
                    { "human": true, "computer": true },
                    { "human": true, "computer": true },
                    { "human": true, "computer": true },
                    { "human": true, "computer": true },
                    { "human": true, "computer": true },
                ]
            }
        ))}>
            Grim Reaper</button>

        <Button text="OKAY" action={closeAction} />
        </>
    );
}