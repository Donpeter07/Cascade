import { Fab, Link } from '@mui/material'
import React, { useState } from 'react'
import '../components/Sample.css'
import ReplyIcon from '@mui/icons-material/Reply';

function Search({ userData, searchStringMinLength }) {

    const [data, setData] = useState('')


    return (

        <div className='main'>
            <div className='don'>
                <h2>Search User!</h2>
                <input type="text" className='input-field' placeholder='Search here....' value={data} onChange={e => setData(e.target.value)} />
                {userData.filter(item => {
                    if (data === '') {
                        return item
                    } else if (searchStringMinLength ? searchStringMinLength < data.length   : true) {
                        if (item.name.toLowerCase().includes(data.toLowerCase())) { return item }
                    }
                })
                    .map(d => (
                            <p>{d.name} </p>
                    ))
                }
                <Link href='/homelink'><Fab variant='outlined' ><ReplyIcon /></Fab></Link>

            </div>
        </div>
    )
}

export default Search