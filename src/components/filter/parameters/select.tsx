import { FC, useState } from "react";
import { ISelect } from "../../../type/type";

import 'bootstrap/dist/css/bootstrap.css';


const FCSelect:FC<{data: ISelect, className: string}> = ({data, className})=>{

    const [selected, setSelected] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(event.target.value);
      setSelected(event.target.value);
    };

    return(
        <div className={`p-0 m-0 col-sm-${data.width} ${className}`}>
            <select 
                className="form-select " 
                aria-label="Default select example" 
                onChange={handleChange} 
                defaultValue={selected}
            >
                <option value={selected}>{data.name}</option>
                {data.list.map(
                    (value, i)=>{
                        return <option value={value.name}  key={i}>{value.name}</option>
                    }
                )}
            </select>
        </div>
    )
}

export default FCSelect