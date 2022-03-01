import React from "react";
import axios from "axios";
import { useState } from "react";
import { takeScreenShotApi } from "../apis";

// function dataFetch() {
//   // var temp = [];
//   axios
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then((responseDataFromFakeApi) => {
//       responseDataFromFakeApi.data.map((item) => {
//         console.log(item.id, item.title);
//         return <li key={item.id}>{item.title}</li>;

//         // temp.push(<h1>nikesh</h1>);
//       });
//     });
//   // return temp;
// }



export default function Main() {
  const [currentUrl,setCurrentUrl]=useState("");
  const handleClick=async(e)=>{
    console.log(e);
    try{
      await (takeScreenShotApi({
        currentUrl
      }));
  
    }catch(err){
      console.log(err);
    }

    //
    // console.log(e);
    // try{
    //   await axios.post("http://localhost:4000/screen-shot",{
    //     currentUrl
    //   })
  
    // }catch(err){
    //   console.log(err);
    // }
  
  }
  return (
    <div className="maincomponents">
      <h1 className="main-title">Screen-shot using pupeeter</h1>
      <h3>please input url</h3>
      <div input-section>
        <input type="text" value={currentUrl} onChange={e=>setCurrentUrl(e.target.value)} placeholder="Enter URL"></input>
        <button onClick={handleClick}>Take screenshot</button>
      </div>
      
    
      
    </div>
  );
}


