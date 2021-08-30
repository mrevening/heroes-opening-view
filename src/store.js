import { createStore, combineReducers } from 'redux';
import { scenarioSettingsReducer } from './reducers';
import { scenariosReducer } from './reducers';

const rootReducer = combineReducers({
    scenarioSettings: scenarioSettingsReducer,
    scenarios: scenariosReducer
});

export const store = createStore(rootReducer);