import React, { useEffect, useState } from 'react'
import './../css/Home.css'
import Modal from './Modal'

function Table() {
    const [data, setData] = useState([])
    useEffect(() => {
    //    setData(localStorage.getItem(JSON.parse('parlist')))
    const list = JSON.parse(localStorage.getItem('parlist'))
    setData(list)
    }, [data])
    // console.log(data)
    
    return (
        <div className='bgt p-33'>
            <div style={{width:'unset!important'}} className='carde shadow-lg   mx-auto '>
                <h1 className='text-center'>Add Parcel</h1>
                <button type="button" class="btn mr-auto mb-4 btn-outline-dark" data-toggle="modal" data-target="#exampleModal">
                    Create
                </button>
                <table class="table table-responsive ">
                    <thead>
                        <tr>
                            <th scope="col">Parcel Info</th>
                            <th scope="col">Parcel Cost</th>
                            <th scope="col">Parcel Starting Location</th>
                            <th scope="col">Parcel Ending Location</th>
                            <th scope="col">Sender Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Reciever Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(num =>
                            <tr>
                                <td>{num.painfo}</td>
                                <td>{num.pacost}</td>
                                <td>{num.pastloc}</td>
                                <td>{num.paendlo}</td>
                                <td>{num.sennam}</td>
                                <td>{num.address}</td>
                                <td>{num.phone}</td>
                                <td>{num.recena}</td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
            <Modal />
        </div>
    )
}

export default Table
