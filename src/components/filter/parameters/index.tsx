import { FC } from "react";
import { EFormType, ICheckbox, IRange, ISelect } from "../../../type/type";

import FCCheckbox from "./сheckbox";
import FCRange from "./range";
import FCSelect from "./select";

const FCParameters:FC<{params: Array<ICheckbox | IRange | ISelect> }> = ({params}) =>{
    return (
        <div className="d-flex m-2 row">
            {params.map(
                (param, i) => {
                    switch (param.type) {
                        case EFormType.checkbox:
                            return <FCCheckbox key={i} className="border rounded" data={param}/>
                        case EFormType.range:
                            return <FCRange key={i} className="border rounded" data={param} />
                        case EFormType.select:
                            return <FCSelect key={i} className="" data={param} />
                        default:
                            return <div className="text-bg-danger p-3">ERORR</div>
                    }
                } 
            )}
        </div>
    );
}

export default FCParameters