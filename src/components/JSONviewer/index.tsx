import { FC, useState } from "react";
import { JSONTree } from 'react-json-tree';


import "bootstrap-icons/font/bootstrap-icons.css";


const JSONviewer:FC<{json:any, title:string, className?:string}> = ({json, title, className}) =>{
    const [show, setShow] = useState(false)
    return(

        <div className={`accordion ${className}`} id="accordionExample">

        <div className="accordion-item open">
            <h2 className="accordion-header">
                <button 
                    className={`accordion-button ${show?(""):("collapsed")}`} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    onClick={()=>{setShow(!show)}}
                >
                    {title}
                </button>
            </h2>

            <div id="collapseTwo" className={`accordion-collapse collapse ${show?("show"):("")}`} data-bs-parent="#accordionExample">
            
                <JSONTree data={json} />
            
            </div>
        </div>

        </div>
    )
}   

export default JSONviewer