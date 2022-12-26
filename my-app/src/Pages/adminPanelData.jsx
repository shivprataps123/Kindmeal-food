import React from 'react';
//import {Box, Heading} from '@chakra-ui/react'
function AdminPanelData() {
  return (
     <>
       {/* <div class="navbar" id="navbar"></div> */}

<div id="up"
style={{
        display: 'flex',
        marginTop: '80px',
        justifyContent: 'space-around',
        alignItems: 'center',
}}>
    <div
    style={{
      height:'200px',
        border:'px solid red',
        width:'25%',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }}>
    <h2 id="post"
    style={{
      textAlign: 'center',
      fontSize:"30px"
    }}
    
    >Add Post</h2>
    <input
    style={{
      marginLeft:"44px",
      height:"30px",
      width:"70%",
      marginTop:"10px",
      borderRadius:"5px",
      fontSize:"17px"
    }} type="text" placeholder="Put Your Id" id="id"/><br/>
    <input
    style={{
      marginLeft:"44px",
      height:"30px",
      width:"70%",
      marginTop:"10px",
      borderRadius:"5px",
      fontSize:"17px"
    }} type="text" placeholder="Caption" id="caption"/><br/>
    <input
    style={{
      marginLeft:"44px",
      height:"30px",
      width:"70%",
      marginTop:"13px",
      borderRadius:"5px",
      fontSize:"17px"
    }} type="file" id="image" accept="image/*"/><br/>
  <button
  style={{
    marginLeft:"44px",
    height:"30px",
    fontSize:"16px",
    width:"70%",
    backgroundColor:"rgb(255, 0, 128)",
    borderRadius:"5px",
    color:"white"
    // border:"none"
  }} id="submit_btn">Create Post</button>
</div>
<div
style={{
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}}>
    <h2
    style={{
      textAlign:"center",
      fontSize:"25px"
    }} id="upd">Update Caption</h2>
    <input
    style={{
      borderRadius:"5px",
      fontSize:"17px",
      marginLeft:"45px",
      height:"30px",
      width:"70%",
      marginTop:"10px"
    }} type="text" id="update_id" placeholder="Enter post id for update"/>
      <br/>
    <input
    style={{
      borderRadius:"5px",
      fontSize:"17px",
      marginLeft:"45px",
      height:"30px",
      width:"70%",
      marginTop:"10px"
    }} type="text" id="new_caption" placeholder="new caption"/>
      <br/>
    <button
    style={{
      borderRadius:"5px",
      fontSize:"17px",
      marginLeft:"45px",
      height:"30px",
      width:"70%",
      marginTop:"10px",
      backgroundColor:"red",
      color:"white",
      border:"none"

    }} id="update_btn">Update Post</button>
  </div>
<div
style={{
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}}>
  <h2
  style={{
    textAlign:"center",
    fontSize:'25px'
  }} id="del">Delete Post</h2>
  <input
  style={{
    borderRadius:"5px",
    fontSize:"17px",
    marginLeft:"45px",
    height:"30px",
    width:"70%",
    marginTop:"10px"
  }} type="text" id="delete_id" placeholder="Enter post id for delete"/><br/>
  <button
  style={{
    borderRadius:"5px",
    fontSize:"17px",
    marginLeft:"45px",
    height:"30px",
    width:"70%",
    marginTop:"10px",
    backgroundColor:"black",
    color:"white"
  }} id="delete_btn">Delete Post</button>
</div>

</div> 
    </>
    )
  
}

export default AdminPanelData