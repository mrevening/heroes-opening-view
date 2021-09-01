import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getScenarios } from './selectors';
import { setScenarioSettings } from './actions';

export default function ShowScenarios({ isOpen, toggle }){
    const buttons = ["S", "M", "L", "X-L", "ALL" ];
    const dispatch = useDispatch();
    const scenarios = useSelector(getScenarios);
    const [ scenarioSize, setScenarioSize] = useState("ALL" );
    function sizeFilter(scenario) { return scenarioSize === "ALL" || scenario.size === scenarioSize}; 
        
    return (
        <>
        <Modal isOpen={isOpen} toggle={toggle} fade={false} backdrop={false}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
                <div className="horizontalBlocks">
                    { buttons.map((button, i) =><button key={i} onClick={() =>setScenarioSize(button)} >{button}</button>)}
                </div>

                <div>Scenario List:</div>
                <ul>
                    {scenarios?.filter(sizeFilter).map((scenario, i) => <li key={i}><button  onClick={() => dispatch(setScenarioSettings(scenario))}>{scenario.name} {scenario.size}</button></li>)}
                </ul>
            </ModalBody>
            <ModalFooter>
                <Button onClick={toggle} >OKAY</Button>
            </ModalFooter>
        </Modal>
        </>
    );
}