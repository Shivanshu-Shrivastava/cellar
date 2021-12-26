import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Modal() {
    function getloca(){
        let list =localStorage.getItem('parlist')
        if (list){
            return JSON.parse(list)
        }
        return []
    }
   

    const [parcelinfo, setParcelinfo] = useState('')
    const [parcelcost, setParcelcost] = useState('')
    const [parcelstloca, setParcelstloca] = useState('')
    const [parcelenloca, setParcelenloca] = useState('')
    const [senderna, setSenderna] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [recena, setRecena] = useState('')

    const [parlist, setParlist] = useState(getloca())
    useEffect(() => {
        if(parlist){
       localStorage.setItem('parlist',JSON.stringify(parlist))

        }
    }, [parlist])
   
    function submit(e) {
        e.preventDefault()
        setParlist([...parlist,{"painfo":parcelinfo,"pacost":parcelcost,"pastloc":parcelstloca,"paendlo":parcelenloca,"sennam":senderna,"address":address,"phone":phone,"recena":recena}])
        alert('Parcel Added')



     
    }
    return (
        <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={submit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Parcel Info</label>
                                <input required onChange={e => setParcelinfo(e.target.value)} name="coustomer_name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Parcel Cost</label>
                                <input required onChange={e => setParcelcost(e.target.value)} name='mobile' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Parcel Starting location</label>
                                <input required onChange={e => setParcelstloca(e.target.value)} name='text' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Parcel Ending location</label>
                                <input onChange={e => setParcelenloca(e.target.value)} name='address' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Sender Name</label>
                                <input required onChange={e => setSenderna(e.target.value)} name='product_id' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Address</label>
                                <input required onChange={e => setAddress(e.target.value)} name='product_name' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Phone</label>
                                <input required onChange={e => setPhone(e.target.value)} name='price' type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Receiver Name</label>
                                <input required onChange={e => setRecena(e.target.value)} name='dele_date' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-dark">Create</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
