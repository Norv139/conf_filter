import { FC } from "react";
import { EFormType, ICheckbox, IRange, ISelect } from "../../../type/type";

import Container from 'react-bootstrap/Container';

import FCCheckbox from "./сheckbox";
import FCRange from "./range";
import FCSelect from "./select";

const FCParameters:FC<{params: Array<ICheckbox | IRange | ISelect> }> = ({params}) =>{
    return (
        
        <Container className="p-2">
            {params.map(
                (param, i) => {
                    switch (param.type) {
                        case EFormType.checkbox:
                            return <FCCheckbox key={i} data={param}/>
                        case EFormType.range:
                            return <FCRange key={i} data={param} />
                        case EFormType.select:
                            return <FCSelect key={i} data={param} />
                        default:
                            return <div className="text-bg-danger p-3">ERORR</div>
                    }
                } 
            )}
        </Container>
        
    );
}

export default FCParameters