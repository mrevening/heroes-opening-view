export const setScenarioSettings = scenarioSettings => ({
    type: 'SET_SCENARIO_SETTINGS',
    payload: { scenarioSettings },
});

export const setScenarios = scenarios => ({
    type: 'SET_SCENARIOS',
    payload: { scenarios },
});