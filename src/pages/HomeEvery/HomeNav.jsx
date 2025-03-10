


import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeNav = () => {
    const navigate = useNavigate()
    const handleOnPost = ()=>{
        alert("Please log in to post")
    }
    const handleOnLogIn = ()=>{
        navigate('/login')

    }
    const handleOnSignUp = () =>{
        navigate('/signUp')
    }
    return (
        <div className='nav-home'>
            <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Blog App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a onClick={handleOnPost} class="nav-link active" aria-current="page" href="#">Post</a>
                            </li>
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <button onClick={handleOnSignUp} class="btn btn-success mx-1" type="submit">SignUp</button>
                            <button onClick={handleOnLogIn} class="btn btn-success mx-1" type="submit">LogIn</button>

                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default HomeNav
