
export enum EFormType {
    checkbox = 'checkbox',
    range = 'range',
    select = 'select',
    selectItem = 'selectItem'
}

interface IFormElement {

    name: string,
    type: EFormType,

    width: number,
    row: number,
    position: number
}

export interface IFilter {
    title: string,
    parameters: Array<ICheckbox | IRange | ISelect>
}


export interface ICheckbox extends IFormElement {
    type: EFormType.checkbox,
    check: boolean | null,
}

export interface IRange extends IFormElement {
    type: EFormType.range,
    start: number,
    and: number
}

export interface ISelect extends IFormElement {
    type: EFormType.select,
    selected:  Array<ISelectItem | null>,
    list: Array<ISelectItem>
}

export interface ISelectItem {
    type: EFormType.selectItem,
    name: string,
    description?: null | string
}