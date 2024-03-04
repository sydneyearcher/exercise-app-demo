import StopWatch from "./StopWatch";
export default function DurationExercise({exercise, setMenuScreen}) {
    const {name} = exercise; // Destructure name directly from exercise
    return (
      <div>
        <p>{name}</p> {/* Use name directly */}
        <StopWatch />
        <button onClick={setMenuScreen}>Back to Menu</button>
      </div>
    );
  }
  