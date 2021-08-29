import { createStore, combineReducers } from 'redux';
import { numberOfClicksReducer } from './reducers';
import { scenarioSettingsReducer } from './reducers';

const rootReducer = combineReducers({
    numberOfClicks: numberOfClicksReducer,
    scenarioSettings: scenarioSettingsReducer,
});

export const store = createStore(rootReducer);