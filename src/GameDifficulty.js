// import { useState } from 'react';

export default function GameDifficulty({ setDifficulty }){
    return(
        <>
        <div>Game Difficulty</div>
        <div>
            <button onClick={() => setDifficulty(0)}>Easy</button>
            <button onClick={() => setDifficulty(1)}>Normal</button>
            <button onClick={() => setDifficulty(2)}>Hard</button>
            <button onClick={() => setDifficulty(3)}>Expert</button>
            <button onClick={() => setDifficulty(4)}>Impossible</button>
        </div>
        </>
    );
}