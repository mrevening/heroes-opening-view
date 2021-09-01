import { useSelector } from 'react-redux';
import { ButtonGroup } from 'reactstrap';
import { getScenarioOpponents } from './selectors';
import OpponentsButton from './OpponentsButton';

export default function Opponents(){
    const opponents = useSelector(getScenarioOpponents);
    return(
        <>
        <ButtonGroup>
            { opponents?.map((op, i) => <OpponentsButton color={op.color} onlyComputer={op.onlyComputer} key={i}/> ) }
        </ButtonGroup>
        </>
    );
}