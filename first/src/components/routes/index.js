import React from 'react'
import { Link } from 'react-router-dom'

function index() {
    return (
        <div style={{border:"2px solid black",width:"350px",margin:"auto",marginTop:"100px",padding:"20px",textAlign:"center",borderRadius:"14px",backgroundColor:'Scrollbar'}}>
            <h2>Routing here</h2>
            <p><Link to='/twowordsearch'>Search with First Two  Alphabet</Link></p>
            <p><Link to='/onewordsearch'>Search with First Alphabet</Link></p>
        </div>
    )
}

export default index