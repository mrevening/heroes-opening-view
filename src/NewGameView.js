import 'bootstrap/dist/css/bootstrap.css';import React, { useState, useEffect } from 'react';
import { setScenarios, setScenarioSettings } from './actions';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import ScenarioPicker from './ScenarioPicker';
import GameDifficulty from './GameDifficulty';
import HeroClass from './HeroClass';
import Opponents from './Opponents';

function NewGameView({ isOpen, toggle }) {
    const [difficulty, setDifficulty] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => { 
        fetch("scenarios.json").then(res => res.json()).then(json => { dispatch(setScenarios(json)); dispatch(setScenarioSettings(json[0])); }).catch(console.error);
    }, []);

    return(
        <>
        <Modal isOpen={isOpen} toggle={toggle} fade={false} backdrop={false} returnFocusAfterClose={false} size={"lg"}>
            <ModalBody>
                <ScenarioPicker />
                <GameDifficulty difficulty={difficulty} setDifficulty={setDifficulty}/>
                <Opponents />
                <HeroClass />
                <Row className="d-flex justify-content-center align-items-center text-center">
                    <Col><Button color="primary" onClick={toggle}>OKAY</Button></Col>
                    <Col><div>{ 100 + difficulty*20 }%</div></Col>
                    <Col><Button color="secondary" onClick={toggle}>CANCEL</Button></Col>
                </Row>   
            </ModalBody>
        </Modal>
        </>
    );
} 

export default NewGameView;