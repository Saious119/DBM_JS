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
          <button onClick={() => fetch("https://www.fortrash.com:4000/StartUwUBot")}>suck peen</button>
          <button onClick={() => fetch("https://www.fortrash.com:4000/KillUwUBot")}>Catch Ligma</button>
          <button onClick={() => fetch("https://www.fortrash.com:4000/StartDickJohnson")}>Messure the peen</button>
          <button onClick={() => fetch("https://www.fortrash.com:4000/KillDickJohnson")}>All Balls no Shaft</button>
          <button onClick={() => fetch("https://www.fortrash.com:4000/StartPirateBot")}>ARGGGG</button>
          <button onClick={() => fetch("https://www.fortrash.com:4000/KillPirateBot")}>JoyBoy Awakening</button>
          <button onClick={() => fetch("https://www.fortrash.com:4000/StartWSB")}>gamer</button>
          <button onClick={() => fetch("https://www.fortrash.com:4000/KillWSB")}>no more xbox</button>
        </div>
      </header>
    </div>
  );
}

export default App;
