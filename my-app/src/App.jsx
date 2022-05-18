import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div class={styles.buttons}>
          <button onClick={() => fetch("http://localhost:8081/StartUwUBot")}>suck peen</button>
          <button onClick={() => fetch("http://localhost:8081/KillUwUBot")}>Catch Ligma</button>
          <button onClick={() => fetch("http://localhost:8081/StartDickJohnson")}>Messure the peen</button>
          <button onClick={() => fetch("http://localhost:8081/KillDickJohnson")}>All Balls no Shaft</button>
          <button onClick={() => fetch("http://localhost:8081/StartPirateBot")}>ARGGGG</button>
          <button onClick={() => fetch("http://localhost:8081/KillPirateBot")}>JoyBoy Awakening</button>
        </div>
      </header>
    </div>
  );
}

export default App;
