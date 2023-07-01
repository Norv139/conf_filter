import { FC } from "react"

import 'bootstrap/dist/css/bootstrap.css';
import { ICheckbox } from "../../../type/type";

export const FCCheckbox:FC<{data: ICheckbox, className: string}> = ({data, className})=>{
    return(
        <div className={`col-sm-${data.width} ${className}`}>
            <div className="form-check d-flex bd-highlight">
                <input className="form-check-input p-2" type="checkbox"/>
                <label className="form-check-label px-2">
                    {data.name}
                </label>
            </div>
        </div>
    )
}

export default FCCheckbox