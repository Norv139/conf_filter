import { IFilter} from "../../type/type";
import { FC,} from "react"

import FCParameters from "./parameters";

import "bootstrap-icons/font/bootstrap-icons.css";


export function protect(data: IFilter) {
    var status = true
    data.parameters.forEach(
        (param, i) => {
            if(param.width < 0 || param.width > 12){
                console.error("width not in 0-12", param.width)
                status = false
            }
            if( param.width + param.position > 12 ){
                console.error("width+position > 12", param.width + param.position)
                status = false
            }     
            if( i !== param.row ){
                console.error("row not in index", param.row)
                status = false
            }
        }
    )
    return status
}

// type TParameter = Array<ICheckbox | IRange | ISelect>

// function build(formElements: TParameter) {
//     for (const formElement of formElements) {
//         switch (formElement.type) {
//             case EFormType.checkbox:
//                 const formElementCheckbox = formElement as ICheckbox;
//                 formElementCheckbox.check;
//                 break;
//             case EFormType.range:
//                 const formElementRange = formElement as IRange
//                 formElementRange.start;
//                 formElementRange.and;

//                 break;
//             case EFormType.select:
//                 const formElementSelect = formElement as ISelect
//                 formElementSelect.list;
//                 break;

//             default:

//                 break;
//         }
//     }
// }

export const Filter:FC<{data:IFilter}> = ({data}) =>{
    return (
        <div className="filter container-sm text-bg-light rounded p-2">
            <p className="">{data.title}</p>
            <FCParameters params={data.parameters} />
            <button type="button" className="btn btn-primary mt-2">
                Save
                <i className="bi bi-box-arrow-down px-2"></i>
            </button>
        </div>
    );
}



export default Filter;