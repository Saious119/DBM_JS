import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload. v1.0.1
        </p>
        <div class={styles.buttons}>
          <button onClick={() => fetch("http://cringebots.dev:8081/StartUwUBot")}>suck peen</button>
          <button onClick={() => fetch("http://0.0.0.0:4000/KillUwUBot")}>Catch Ligma</button>
          <button onClick={() => fetch("https://0.0.0.0:4000/StartDickJohnson")}>Messure the peen</button>
          <button onClick={() => fetch("https://localhost:8081/KillDickJohnson")}>All Balls no Shaft</button>
          <button onClick={() => fetch("http://localhost:4000/StartPirateBot")}>ARGGGG</button>
          <button onClick={() => fetch("http://localhost:8081/KillPirateBot")}>JoyBoy Awakening</button>
        </div>
      </header>
    </div>
  );
}

export default App;
