import React, { useEffect, useState } from 'react'
import './../css/Home.css'
function CreateAccou() {
    function getloca(){
        let list =localStorage.getItem('list')
        if (list){
            return JSON.parse(list)
        }
        return []
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [list, setList] = useState(getloca())

    useEffect(() => {
        if(list){
       localStorage.setItem('list',JSON.stringify(list))

        }
    }, [list])

    
    function submit(e){
        e.preventDefault()
        var passlist =false
        if (username!='' && password!='' ){
            if (list){
                list.map(num=>{
                    if(num.pass==password){
                        passlist = true
                        return alert('Credentials already been registered Please try again')
                    }
                })
            }
            if (!passlist){
                setList([...list,{"user":username,"pass":password}])
                alert('Account has been created')
                window.location='/'

            }
            
        }else{
            alert('Please fill the credentials')
        }
    }
    console.log(list);


    return (
        <div className='bgImg'>
            <div className='card shadow-lg'>
                <div className="header">
                    <h2 className='bg-dark text-center rounded text-light py-3 '>Create Account</h2>
                </div>
                <form onSubmit={submit} className='px-sm-0 px-md-4'>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Username</label>
                        <input required onChange={e=>setUsername(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Password</label>
                        <input required onChange={e=>setPassword(e.target.value)}  type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                    </div>
                    <button type='submit' className='btn btn-dark d-block w-75 mx-auto'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccou
