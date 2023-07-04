import { FC, useState } from "react";
import { ISelect } from "../../../type/type";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.css';


const FCSelect:FC<{data: ISelect, className?: string}> = ({data, className})=>{

    const [selected, setSelected] = useState('');
    const {width, row, position} = data

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(event.target.value);
      setSelected(event.target.value);
    };

    return(
        <Row>
            {position > 0 && (<Col xs={12} md={position}></Col>)}
            <Col xs={12} md={width} className="p-0">
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
            </Col>
        </Row>
    )
}

export default FCSelect