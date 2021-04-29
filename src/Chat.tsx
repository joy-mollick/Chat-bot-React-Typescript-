import React , {useEffect, useRef, useState} from 'react';
import joy from './joy.png';
import './style.css';


const generateMessage = () => {
    const words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
    const text = [];
    let x = 7;
    while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
    return text.join(" ");
  }

function App() {
 
    const messageEl:any = useRef(null);
    const [messages, setMessages] = useState([]);
   /// let prevMsg:any=[];

    function es(event:any) {
        const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
    }
   
    useEffect(() => {
      if (messageEl) {
        messageEl.current.addEventListener('DOMNodeInserted', es);
      }
    }, [])
   
   
    return (
      <div className="App">
        <h3>Auto scroll to bottom in react chat app - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
        <div className="chat">
          <div className="head">ChatBot</div>
          <div className="messages" ref={messageEl}>
            {messages.map((m, i) => <div key={i} className={`msg${i % 2 !== 0 ? ' dark' : ''}`}>{m}</div>)}
          </div>
          <div className="footer">
            <input type="text" placeholder="Type here..." />
            <img src={joy} alt="logo">Send</img>
          </div>
        </div>
      </div>
    );
  }
   
  export default App;