import React from 'react'


const avatar = "https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg";
const name = "Dwayne Johnson";
const date = new Date(2020,10,10);
const substyle = {
    borderRadius:"50%"
}
export default function Profile() {
  return (
    <div>
      <section style={{
        width:"250px",
        height:"250px",
        margin:'auto',
        border:"5px solid springgreen",
        marginTop:"80px",
        padding:"43px",
        boxSizing:"border-box",
      }}>

        <img src={avatar}  style={ {
        width:"150px",
        height:"150px",
        margin:'auto',
        }}  alt='profile'></img>

        <h3 style={{
            marginTop:"-5%",
            textAlign:"center",
            color:"black"
        }}>{name}</h3>

      </section>
    </div>
  )
}
