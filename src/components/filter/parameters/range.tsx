import { FC, useState } from "react";
import { IRange } from "../../../type/type";

import 'bootstrap/dist/css/bootstrap.css';

const FCRange:FC<{data: IRange, className: string}> = ({data, className})=>{

    const {start, and} = data
    
    const [value, setValue] = useState(start);

    const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValue(Number(event.target.value));
    };

    return(
        <div className={`col-sm-${data.width} ${className}`}>
            <label className="form-label">{data.name} {value}</label>
            <input 
                className="form-range" 
                type="range" 

                min={start} 
                max={and}
                value={value}

                step="1" 
                onChange={handleRange} 
            />
        </div>
    )
}

export default FCRange