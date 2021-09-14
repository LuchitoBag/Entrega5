
import React from 'react'


const Item = ({producto}) => {
    return (
        <>
            <div key={producto.id} className="card w-50 mt-3">
              <div className="card-header">{producto.name}</div>
              <div className="card-body">
                  <img src={producto.picture}/>
                  </div>  
                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">Detalles</button>
                </div>
                
                
        </div>)

</>
    )
}
export default Item





        



        

          







