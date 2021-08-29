import './App.css';
import { useReducer } from 'react' ;
import Button from './Button'
import NewGameView from './NewGameView'


function App() {
  const [showNewGame, toggleShowNewGame] = useReducer(showNewGame => !showNewGame, false);

  return (
    <> 
    <Button text="NewGame" action={toggleShowNewGame} />
    { showNewGame && <NewGameView closeAction={toggleShowNewGame}/> }
    <div>High Scores</div>
    <div>Credits</div>
    <div>Load Game</div>
    <div>Quit</div>
    </>
  );
}

export default App;
