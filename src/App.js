import './App.css';
import { useReducer } from 'react' ;
import Button from './Button'
import NewGameView from './NewGameView';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const [showNewGame, toggleShowNewGame] = useReducer(showNewGame => !showNewGame, false);

  return (
    <Provider store = {store}> 
      <Button text="NewGame" action={toggleShowNewGame} />
      { showNewGame && <NewGameView closeAction={toggleShowNewGame}/> }
      <div>High Scores</div>
      <div>Credits</div>
      <div>Load Game</div>
      <div>Quit</div>
    </Provider>
  );
}

export default App;
