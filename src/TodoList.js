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

    <div className="container mt-4">
    <h1 >Todo List</h1>
    <input className="form-control" type="text"  placeholder="Write Here.. "  value={activity} onChange={(e)=> setActivity(e.target.value)} />
   
   <button type="button" className="btn btn-primary mt-2" onClick={addActivity} >Add</button>

   </div>

   
   
<div className='container mb-2' >
   
   <ul class="list-group">
  <li class="list-group-item active mt-4" aria-current="true"><h2 >Here is list (:</h2></li>
  { listData.length !=[] && listData.map((data, i)=>{
    return (<>
  <li class="list-group-item mt-2" key={i}>{data}</li>
  <button type="button" className="btn btn-danger mt-1" onClick={()=>removeBtn(i)}>remove</button>
  </>)
})}
</ul>
{listData.length ==[] ||<button className="btn btn-danger mt-2" onClick={removeAll}>RemoveAll</button>}
   
 
   </div>
   
   </>
  );
}
