import React, { useState } from 'react'
import  { SidebarData } from '../../Data/Data'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import {UilSignOutAlt ,UilBars}from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

function Sidebar() {
    const [selected , setSelected] = useState(0)
    const [expanded,setExpanded] = useState(true)


    const sidebarVariants = {
        true:{
            left:'0'
        },
        false:{
            left:'-60%'
        }
    }
  return (
    <>
    <motion.div className="Sidebar" 
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`: ''}
    >
        <div onClick={()=>setExpanded(!expanded)} className='bars' style={expanded?{left:'60%'}:{left:'5%'}}>
            <UilBars style={{cursor:'pointer'}}/>
        </div>
        {/* logo*/}
    <div className="logo">
        <img src={Logo} alt="" />
        <span>
            Sh<span>o</span>ps
        </span>
    </div>
    {/*menu  */}
    <div className='menu'>
        
        {SidebarData.map((item,idx)=>{
            return(
                <div className={selected ===idx?'menuItem active' : 'menuItem'}
                key={idx}
                onClick={()=>setSelected(idx)}

                >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
        })}
        <div className="menuItem">
        <UilSignOutAlt/>
        </div>
    </div>
    </motion.div>
    </>
  )
}

export default Sidebar