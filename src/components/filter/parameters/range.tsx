import { FC, useState } from "react";
import { IRange } from "../../../type/type";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.css';

const FCRange:FC<{data: IRange, className?: string}> = ({data, className})=>{

    const {start, and} = data
    const {width, row, position} = data
    
    const [value, setValue] = useState(start);

    const handleRange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setValue(Number(event.target.value));
    };

    return(
        <Row>
            { position > 0 && (<Col xs={12} md={position}></Col>)}
            <Col xs={12} md={width} className=" border rounded">
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
            </Col>
        </Row>
    )
}

export default FCRange