import React from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'

function Selection() {

    const Countries = [
        {
            label: "India",
            value: 150
        },
        {
            label: "America",
            value: 250
        },
        {
            label: "Australia",
            value: 200
        },
        {
            label: "Canada",
            value: 200
        }
    ]

    return (
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-sm-12 col-md-6 '>
                    <Select options={Countries}  styles={{textColor: 'green'}}/>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
    )
}

export default Selection