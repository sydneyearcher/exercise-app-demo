import './App.css';
import { useCallback, useState } from 'react';
import DurationExercise from './DurationExercise';

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition"; // Corrected constant name

function RepetitionExercise({exercise,setMenuScreen}){
  let [count, setCount] = useState (0)
  return <div> 
    <p>{exercise.name}</p>
    <p style={{fontSize:"5em"}}>{count}</p>
    <button style={{fontSize: "2em"}} onClick={() => setCount(count=>count+1)}>Increment</button><button style={{fontSize: "2em"}} onClick={() => setCount(0)}>Reset</button>
    <button style={{fontSize:"1em" }} onClick={setMenuScreen}>Return To Menu</button>
  </div>
}


const exerciseList = [
  {type: DURATION_EXERCISE, name: "Running"},
  {type: DURATION_EXERCISE, name: "Rowing"},
  {type: DURATION_EXERCISE, name: "Swimming"},
  {type: REPETITION_EXERCISE, name: "Push Ups"} // Corrected type value
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(EXERCISE_SCREEN);
  const [currentExercise, setCurrentExercise] = useState(exerciseList[3]);
  let screenComponent;

  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []);

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <p>Exercise Menu</p>
        <ul>
          {exerciseList.map(({type, name}) => (
            <li key={name}>
              <button onClick={() => buttonClick({type, name})}>{name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise 
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            exercise={currentExercise}
            setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
          />
        );
        break;
      default:
        screenComponent = null; // Set to null instead of undefined
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent}
      </header>
    </div>
  );
}

export default App;
