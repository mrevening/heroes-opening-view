import './App.css';
import { useReducer } from 'react' ;
import Button from './Button'
import NewGameView from './NewGameView';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const [showNewGame, toggleShowNewGame] = useReducer(showNewGame => !showNewGame, false);
  const [showHighScores, toggleShowHighScores] = useReducer(showHighScores => !showHighScores, false);
  const [showCredits, toggleShowCredits] = useReducer(showCredits => !showCredits, false);
  const [showLoadGame, toggleShowLoadGame] = useReducer(showLoadGame => !showLoadGame, false);
  const [showQuit, toggleQuit] = useReducer(showQuit => !showQuit, false);

  return (
    <Provider store = {store}> 
      <Button text="NewGame" action={toggleShowNewGame} className="new-game" />
      { showNewGame && <NewGameView closeAction={toggleShowNewGame} /> }
      <Button text="High Scores" action={toggleShowHighScores} className="high-scores" />
      <Button text="Credits" action={toggleShowCredits} className="credits" />
      <Button text="Load Game" action={toggleShowLoadGame} className="load-game" />
      <Button text="Quit" action={toggleQuit} className="quit"/>
    </Provider>
  );
}

export default App;
