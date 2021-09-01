import './App.css';
import { useReducer } from 'react' ;
import { Button, ButtonGroup } from 'reactstrap';
import NewGameView from './NewGameView';
import { Container, Row, Col } from 'reactstrap';

function IntroScreen() {
  const [showNewGame, toggleShowNewGame] = useReducer(showNewGame => !showNewGame, false);
  const [showHighScores, toggleShowHighScores] = useReducer(showHighScores => !showHighScores, false);
  const [showCredits, toggleShowCredits] = useReducer(showCredits => !showCredits, false);
  const [showLoadGame, toggleShowLoadGame] = useReducer(showLoadGame => !showLoadGame, false);
  const [showQuit, toggleQuit] = useReducer(showQuit => !showQuit, false);

  return (
    <Container>

        {/* <Row>
            <Col> */}
                <div className="center">
                    <ButtonGroup vertical>
                    <Button onClick={toggleShowNewGame}>New Game</Button>
                    <NewGameView isOpen={showNewGame} toggle={toggleShowNewGame} />
                    <Button onClick={toggleShowHighScores}>High Scores</Button>
                    <Button onClick={toggleShowCredits}>Credits</Button>
                    <Button onClick={toggleShowLoadGame}>Load Game</Button>
                    <Button onClick={toggleQuit}>Quit</Button>
                    </ButtonGroup>
                </div>
            {/* </Col>
        </Row> */}

    </Container>
  );
}

export default IntroScreen;
