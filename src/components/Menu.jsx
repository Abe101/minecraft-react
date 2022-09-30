import { useStore } from "../hooks/useStore";

export default function Menu() {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <div className='menu absolute'>
        <div>
            <p>Controls:</p>
            <ul>
                <li>W: Move Forward</li>
                <li>A: Move Left</li>
                <li>S: Move Backward</li>
                <li>D: Move Right</li>
                <li>Space: Jump</li>
                <li>Click: Place a block</li>
                <li>Alt + Click: Remove a block</li>
                <li>Digits 1-5: Select cube</li>
            </ul>
        </div>
      <button onClick={saveWorld}>Save World</button>
      <br />
      <button onClick={resetWorld}>Reset World</button>
    </div>
  );
}
