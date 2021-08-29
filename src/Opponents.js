import { useSelector } from 'react-redux';
import { getScenarioOpponents } from './selectors';
import OpponentsButton from './OpponentsButton';

export default function Opponents(){
    const opponents = useSelector(getScenarioOpponents);
    return(
        <>
        {
            opponents?.map((op, i) => <OpponentsButton color={op.color} onlyComputer={op.onlyComputer} key={i}/> )
        }
        </>
    );
}