import React from 'react'

const Navbar = () => {
    return (
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#home">Think Code Sleep</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" href="#home">Home</a>
                            <a class="nav-link" href="#home">Services</a>
                            <a class="nav-link" href="#home">Portfolio</a>
                            <a class="nav-link" href="#home">Skills</a>
                            <a class="nav-link" href="#home">About</a>
                            <a class="nav-link" href="#home">Blog</a>
                        </div>
                        <div class="navbar-nav ms-auto">
                            <button type="button" class="btn btn-primary">Primary</button>
                            
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
