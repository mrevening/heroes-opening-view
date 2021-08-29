export const numberOfClicksReducer = (state = 0, action) => {
    const { type } = action;

    switch(type) {
        case 'COUNTER_BUTTON_CLICKED':
            return state + action.payload.amount;
        default: 
            return state;
    }
}

export const scenarioSettingsReducer = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case 'SET_SCENARIO_SETTINGS':
            return action.payload.scenarioSettings;
        default: 
            return state;
    }
}