import React, { useState } from 'react'

export default function FriendList() {
const [activity, setActivity]= useState("");
const [listData, setlistData]= useState([]);

function addActivity(){
if(activity != [])
 setlistData((listData)=>{
    const updatedList =[...listData, activity];
   
    setActivity("");
    return updatedList;
 });

}

function removeBtn(i){
 const updalistData = listData.filter((ele, id)=>{
  return (i != id);
 });
 setlistData(updalistData)
}

function editBtn(i){
  const editdata = listData.filter((ele, id)=>{
    return (i === id);
    
   });
  
    setActivity(editdata);
}

function removeAll(){
  setlistData([])
}

  return (
    <>
    <div className='header'>
    <h1 >Todo List</h1>
   <input className='ipt' type='text' placeholder='Write Here..' value={activity} onChange={(e)=> setActivity(e.target.value)} />
   <button className='btn' onClick={addActivity} >Add</button>

   </div>
   
<div className='contanier'>
   <h2 >Here is list (:</h2>

   { listData.length !=[] && listData.map((data, i)=>{

    return (<> <p key={i}><div><h3>{data}</h3>
    
    <button  onClick={()=>removeBtn(i)}>remove</button></div>

    </p>
    
    </>)
     

   })}
   
   { listData.length ==[] || <button  onClick={removeAll}>Remove All</button>}
   </div>
   
   </>
  );
}
