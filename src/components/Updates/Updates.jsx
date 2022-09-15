import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './Updates.css'
const Updates = () => {
  return (
    <div className="Updates">
        {UpdatesData.map((update,idx)=>{
            return(
                <div key={idx} className="update">
    {console.log(update)}

                    <img src={update.img} alt="" />
                    <div className="noti">
                        <div style={{marginbottom:'0.5rem'}}>
                            <span>{update.name}</span>
                            <span>{update.noti}</span>

                    </div>
                       <span>{update.time}</span>
                    </div>
                 
                </div>
            )
        })}
    </div>
  )
}

export default Updates