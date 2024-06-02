import React from 'react'

const Navbar = () => {
  return (
  
    <div style={{ display: "flex", height: "60px", justifyContent: "space-between", alignItems: "center", columnGap: "30px" , paddingRight:"10%" }}>
      <h1 style={{paddingLeft:"70px"}}>Aryan</h1>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', columnGap: '30px' , fontSize: '20px', color: 'black' , fontWeight:"bold",}}>
        <li style={{}}>Home</li>
        <li style={{}}>About</li>
        <li style={{}}>Service</li>
        <li style={{}}>Project</li>
        <li style={{}}>Stack</li>
        <li style={{}}>Resume</li>
    </ul>
</div>
  )
}

export default Navbar