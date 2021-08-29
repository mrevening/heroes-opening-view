export const counterButtonClicked = {
    type: 'COUNTER_BUTTON_CLICKED',
    payload: { amount: 1},
}

export const scenarioSettings = scenarioSettings => ({
    type: 'SET_SCENARIO_SETTINGS',
    payload: { scenarioSettings },
});