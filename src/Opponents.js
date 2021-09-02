import { useSelector } from 'react-redux';
import { Container, List, ListInlineItem } from 'reactstrap';
import { getScenarioOpponents } from './selectors';
import OpponentsButton from './OpponentsButton';

export default function Opponents(){
    const opponents = useSelector(getScenarioOpponents);
    return(
        <>
        <Container className="text-center">
            <div>Opponents:</div>
            <div>
                <List type="inline">
                { opponents.map((op, i) => { return(
                    <ListInlineItem key={i}>
                        <OpponentsButton color={op.color} castle={op.castle} blocked={op.blocked} human={op.human}/>
                    </ListInlineItem>
                )})}
                </List>
            </div>
        </Container>
        </>
    );
}