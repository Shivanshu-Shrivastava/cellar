import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function Login() {
    const [data, setData] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('list'))
        
        setData(list)

        


    }, [])
    function submit(e){
        e.preventDefault()
        setUsername('')
        setPassword('')
        if(data){

            const usepass = data.find(num=>num.user==username && num.pass==password)
    
            if (usepass){
                alert("You'll redirect soon !Press ok")

                
                setTimeout(() => {
                    window.location='/table_section'
                }, 2000);
               
                console.log(usepass)
    
            }
            else{
    
                alert('Please fill correct credentials')
            }
            console.log(usepass)
         
        }
        else{
    
            alert('Please fill correct credentials')
          
        }
        
    }
    return (
        <div className='card shadow-lg'>
            <div className="header">
                <h2 className='bg-dark text-center rounded text-light py-3 '>Login</h2>
            </div>
            <form onSubmit={submit}  className='px-sm-0 px-md-4'>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Username</label>
                    <input value={username} required onChange={e=>setUsername(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Password</label>
                    <input value={password} required onChange={e=>setPassword(e.target.value)} type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <button type='submit' className='btn btn-dark d-block w-75 mx-auto'>Submit</button>
            </form>
            <Link to='/create_account' className=' mt-2 text-center  text-muted'>Create Account</Link>
        </div>
    )
}

export default Login
