import React from 'react';

const Header = (props) =>{
    console.log(props)
    return (
        <div>
            <h1 className="font-black text-5xl text-center mt-10 mx-3">
                Seguimiento Pacientes {""}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </div>
    )
}

export default Header;