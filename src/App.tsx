import React , { useRef, useState } from 'react';
import logo from './logo.svg';
import joy from './joy.png';
import twt from './tw.png';
import twt1 from './tw1.png';
import sultana from './sultana.png';
import './App.css';
import Snowfall from 'react-snowfall';
import HoverImage from "react-hover-image";
import {Animated} from "react-animated-css";

var mess:any=[];

const generateMessage = (my:any) => {
  let indx:number=0;
  const special=["কেনো বিয়ে করবে না,কখনো?","আমার তো সবসময়ই তোমায় মনে পড়ে","আগের মতো নামাজ-কালাম পড়ো ?","হুম তা ঠিক","আগের মতোই রাগ দেখছি এখনো !","এভাবে কথা বলছো কেনো ?","এমনিতেই ইচ্ছে হলো তাই ","হুম","এখনি যাবা?","আচ্ছা ঠিকাছে ভালো থেকো"];
  const words = ["এখনো আগের মতোই আছো?", "বহুদিন পর,তাই না?", "বিয়ে করেছো ?", "এখনো রাত জাগো ?", "আমার কথা এখনো ভাবো ?", "রাত জেগে কোড করার অভ্যাস এখনো আছে ?", "আমি তোমাকে খুব মিস করি ", "পুরোনো কথা খুবই মনে পড়ে ", "আবার কি কখনো দেখা হবে?", "নিজেকে খুব অপরাধি মনে হয় ", "ভাগ্য আমাদের আলাদা করে দিলো", "দায় সারা ভাবে কথা বলছো কেন ?", "বহুদিন ধরে দেখিই না তোমায়", "তোমার হাসিমুখ টা খুব মনে পড়ে ", "অনেক বদলে গেছো মনে হচ্ছে ", "তোমার মা এর শরীর এখন কেমন ?", "দেখতে দেখতে সময়গুলি চলে গেলো ", "সেইদিনও কিশোরী ছিলাম ,আজ কত বড় হয়ে গেছি !", "ঘন ঘন চা খাওয়ার অভ্যাস তো মনে হয় এখনো ছাড়ো নি,তাই না?", "একেবারে হারিয়ে যেও না,যোগাযোগ রেখো", "তোমার বন্ধুদের থেকে তোমার আইডি নিলাম", "অনেকের সাথেই নাকি যোগাযোগ রাখছো না","আগের মতোই রাগী আছো,নাকি রাগ কমেছে?"];
  //while (--x)
  let text:any=[];

  if(my.includes("majhe majhe")) text.push(special[1]);
  else if (my.includes("Allah")) text.push(special[3]);
  else if (my.includes("namaj")) text.push(special[2]);
  else if (my.includes("biye")) text.push(special[0]);
  else if (my.includes("ajaira")) text.push(special[5]);
  else if (my.includes("bad")) text.push(special[4]);
  else if (my.includes("bochor por")) text.push(special[6]);
  else if (my.includes("tai naki")) text.push(special[7]);
  else if (my.includes("pore kotha")) text.push(special[8]);
  else if (my.includes("jete")) text.push(special[9]);

  else
  {
   while(mess.includes(indx)) {indx=Math.floor(Math.random() * words.length);}
   text.push(words[indx]);
   mess.push(indx);
   }

return text;
}

const Snowflake = (props:any) =>{
  return(
    <p className='Snowflake' id={`item${props.id}`} style={props.style}>
      *
    </p>
  )
}


const correction  =(nw:any)=>
{
      let nww:any=[];
      for(var ii=0;ii<nw.length;ii=ii+4)
      {
         nww.push(nw[ii]);
         nww.push(nw[ii+1]);
      }
    
      return nww;
}

let user:any,comput:any,comput1:any;
let mixer:any=[];
let mess_u="",mess_c="";

let username:any;

function App() {

  const[name,setname]=useState("");
  let ev:any;

 const changename=(e:any)=>
 {
    username=e.target.value;
    ev=e;
 }

 const clicked=()=>
 {
   
   setname(username);
 }

 let log_in= <div className="App-header" ><img src={logo} className="App-logo" alt="logo" /><div className="container">

<label htmlFor="uname"><b>Username</b></label>
<input type="text" placeholder="Enter Username" name="uname" required onChange={changename}/>

<label htmlFor="psw"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="psw" required/>

<div>
<button type="submit" onClick={clicked} >Login</button>
</div>

</div>

</div>;

let ans:any;

 ans=log_in;

  return (
   
    <div>
     {ans}
    </div>
    
  );
}

const scrollToRef = (ref:any) => ref.current.scrollIntoView()   ;


function Ap() {

  var chatContainer:any = useRef(null);
  var r:any;

  var today = new Date();
  var times:string = today.getHours() + ':' + today.getMinutes() ;

 

  const snow=()=>{
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
        return arr.map((el, i)=>{
      animationDelay = `${(Math.random()*16).toFixed(2)}s`;
      fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
      let style = {
        animationDelay,
        fontSize
    }
    return (<Snowflake key={i} id={i} style={style}/>)
    })
  }

  const[send,set]=useState(0);
  let prev:any;
  

  const assign =(e:any) =>
  {
    mess_u=e.target.value;
  }

  mess_c=generateMessage(mess_u);

  r= <input   className="inp" type="text" onChange={assign} />;

  const done=(event:any)=>
  {
     prev=send;
     set(send+1);
     scrollToRef(chatContainer);
     
  }

   if(prev!=send){
    r= <input   className="inp" type="text" onChange={assign} placeholder="Say something nice !" />;
    var items:any=[];
    var element:any=null;
  

    for(var i=0;i<mixer.length;i=i+1) items.push(mixer[i]);

    let animat:any=[];

    user= <Animated animationIn="bounce" animationOut="fadeOut" isVisible={true}>
    <div className="message">
    <img className="profilePic" src={joy}/>
    <p>{mess_u}</p>
    <span className="timeStampLeft">{times}</span>
    </div> </Animated>;

    animat.push(user);

    animat.push(<Animated animationIn="flash" animationOut="fadeOut" isVisible={true}><div className="message"><img className="profilePic" src={joy}/><p>{mess_u}</p> <span className="timeStampLeft">{times}</span></div> </Animated>);

    animat.push(<Animated animationIn="rubberBand" animationOut="fadeOut" isVisible={true}><div className="message"><img className="profilePic" src={joy}/><p>{mess_u}</p> <span className="timeStampLeft">{times}</span></div> </Animated>);
    animat.push(<Animated animationIn="swing" animationOut="fadeOut" isVisible={true}><div className="message"><img className="profilePic" src={joy}/><p>{mess_u}</p> <span className="timeStampLeft">{times}</span></div> </Animated>);
    animat.push(<Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}><div className="message"><img className="profilePic" src={joy}/><p>{mess_u}</p> <span className="timeStampLeft">{times}</span></div> </Animated>);
    animat.push(<Animated animationIn="zoomInUp" animationOut="zoomInUp" isVisible={true}><div className="message"><img className="profilePic" src={joy}/><p>{mess_u}</p> <span className="timeStampLeft">{times}</span></div> </Animated>);

    let ind:number=Math.floor(Math.random() * animat.length);
    user=animat[ind];

    items.push(user);

  comput1=<div className="message1 darker typewriter" >
 <img className="profilePic" src={sultana}/>
 <p>{mess_c}</p>
 <span className="timeStampRight">{times}</span>
 </div>  ;

    items.push(comput1);
    mixer=items;
    element=correction(items);

    let amar:any= <div className="do" ref={chatContainer}>
    <input   className="inp" type="text" onChange={assign} placeholder="Say something nice !" />
     <HoverImage src={twt} hoverSrc={twt1}  className="but" onClick={done}/>
     </div>;

     element.push(amar);
 ///let okkkk:any={resultant} {res};
    ///element.push(comput1);
   }

  

    ///console.log(mixer.length);

  return (
    <div className="in" >
<div className="body" >
      <div >
      <Snowfall/>

      <div className="do">
    <h1>বার্তা</h1>
    <img src={twt} className="but"/>
    </div>

    <div >
    {element}
    </div>
  
    <div>
    <button style={{borderRadius: '20px'}}>  Sing Out </button>
    </div>

 <button className="zoom"  style={{borderRadius: '30px'}}>  Block </button>


 </div>
   
  </div>
  </div>
  );

  }




export default Ap;
