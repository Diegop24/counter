

import React, {useState} from 'react'
const Cards = () => {
    const [celebridades, setcelebridades] = useState(null)
    const [error, seterror] = useState(false)
        const getUsuarios = async() =>{
            try {
                const res = await fetch("https://randomuser.me/api/?results=1")
                const data = await res.json()
                setcelebridades(data.results[0])
                seterror(false)
            } catch (error) {
                console.log(error)
                seterror(true)
            }
            
        }
    
    if (error){
        return <div class="alert alert-danger" role="alert">
                    Error a cargar el api Users! <a href='https://randomuser.me'>Revisar link</a>
               </div>
    }
    return ( 
                   
        <div className='col-md-4'>
            <div className = "Card">
        <img src={ celebridades?.picture?.large } className="Card-Img-Top"/>
        <div className="Card-Body Text-Center">
            <h1 className="Card-Title">{ celebridades?.name?.last }</h1>
            <button className='btn btn-secondary fs-6'
            onClick={getUsuarios}>
                💕🌹💞
            </button>
        </div>        
        </div>
        </div>
        
    
)
    
}

export default Cards;






