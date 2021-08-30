export const scenarioSettingsReducer = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case 'SET_SCENARIO_SETTINGS':
            return action.payload.scenarioSettings;
        default: 
            return state;
    }
}

export const scenariosReducer = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case 'SET_SCENARIOS':
            return action.payload.scenarios;
        default: 
            return state;
    }
}