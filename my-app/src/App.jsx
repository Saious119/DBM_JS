import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Welcome To DBM! (Discord Bot Manager) v1.0.1
        </p>
        <div class={styles.buttons}>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartUwUBot")}>suck peen</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillUwUBot")}>Catch Ligma</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartDickJohnson")}>Messure the peen</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillDickJohnson")}>All Balls no Shaft</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartPirateBot")}>ARGGGG</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillPirateBot")}>JoyBoy Awakening</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartWSB")}>gamer</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillWSB")}>no more xbox</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartJonTronBot")}>Bubsy</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillJonTronBot")}>Stair Fax Temperatures</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartOwOBot")}>Wikipedia</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillOwOBot")}>religion</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartOyVeyBot")}>Dradle time</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillOyVeyBot")}>Egypt</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartTarotBot")}>fortune time</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillTarotBot")}>basic psychology</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartTerryDavisBot")}>Holy C</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillTerryDavisBot")}>CIA</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartBrainCellBot")}>Where is the brain cell?</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillBrainCellBot")}>No Brain Cells</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/StartAndyBot")}>Wise Andy Sayings</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/KillAndyBot")}>STFU Andy</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/GitUpdateDBM")}>This Website is Old</button>
          <button onClick={() => fetch("http://192.168.1.121:4000/GitUpdateDiscordBots")}>Fresh Bot Delivery</button>
        </div>
      </header>
    </div>
  );
}

export default App;
