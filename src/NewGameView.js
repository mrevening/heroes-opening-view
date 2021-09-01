import 'bootstrap/dist/css/bootstrap.css';import React, { useState, useEffect } from 'react';
import { setScenarios, setScenarioSettings } from './actions';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import ScenarioPicker from './ScenarioPicker';
import GameDifficulty from './GameDifficulty';
import HeroClass from './HeroClass';
import Opponents from './Opponents';

function NewGameView({ isOpen, toggle }) {
    const [difficulty, setDifficulty] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => { 
        fetch("scenarios.json").then(res => res.json()).then(json => { dispatch(setScenarios(json)); dispatch(setScenarioSettings(json[0])); }).catch(console.error);
    }, []);

    return(
        <>
        <Modal isOpen={isOpen} toggle={toggle} fade={false} backdrop={false} returnFocusAfterClose={false}>
            <ModalBody>
                <ScenarioPicker />
                <GameDifficulty setDifficulty={setDifficulty}/>
                <Opponents />
                <HeroClass />
            </ModalBody>
            <ModalFooter>
                <div>{ 100 + difficulty*20 }%</div>
                <Button color="primary" onClick={toggle}>OKAY</Button>{' '}
                <Button color="secondary" onClick={toggle}>CANCEL</Button>
            </ModalFooter>
        </Modal>
        </>
    );
} 

export default NewGameView;