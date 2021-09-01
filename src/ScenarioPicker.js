import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { getScenarioName } from './selectors'
import { Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import ShowScenarios from './ShowScenarios';

export default function Scenario(){
    const [showScenarios, toggleShowScenarios] = useReducer(showScenarios => !showScenarios, false);
    const scenarioName = useSelector(getScenarioName);   

    return (
        <>
        <div className="text-center">Scenario:</div>
        <Row>
            <Col></Col>
            <Col className="text-center">{scenarioName}</Col>
            <Col className="float-right"><Button onClick={toggleShowScenarios}>SELECT</Button></Col>
        </Row>         
        <ShowScenarios isOpen={showScenarios} toggle={toggleShowScenarios} />
        </>
    );
}