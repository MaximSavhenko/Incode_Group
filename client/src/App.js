import './style/main.scss';
import Homepage from './component/Homepage/Homepage'
import {io} from "socket.io-client";

const socket = io("http://localhost:4000/");

function App() {

  return (
    <Homepage socket={socket}/>
  );
}

export default App;
