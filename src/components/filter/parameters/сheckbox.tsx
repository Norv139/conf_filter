import { FC } from "react"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ICheckbox } from "../../../type/type";

export const FCCheckbox:FC<{data: ICheckbox, className?: string}> = ({data, className})=>{

    const {width, row, position} = data

    return(
        <Row>
            {position > 0 && (<Col xs={12} md={position}></Col>)}
            <Col xs={12} md={width} className="border rounded">
                <div className="form-check">
                    <input className="form-check-input p-2" type="checkbox"/>
                    <label className="form-check-label px-2">
                        {data.name}
                    </label>
                </div>
            </Col>
        </Row>
    )
}

export default FCCheckbox