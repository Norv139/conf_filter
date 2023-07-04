import { IFilter, EFormType } from "./type";


export const correctStruct:IFilter = {

    title: "TestTitle",

    parameters: [
        {
            name: "test parap 0", 
            type: EFormType.checkbox,
            
            width: 10,
            row: 0,
            position: 0,
            
            check: false
        },
        {
            name: "test parap 1", 
            type: EFormType.checkbox,
            
            width: 10,
            row: 1,
            position: 1,
            
            check: false
        },
        {
            name: "test range", 
            type: EFormType.range,
            
            width: 12,
            row: 2,
            position: 0,
            
            start: 0,
            and: 12
        },
        {
            name: "test List", 
            type: EFormType.select,
            
            width: 10,
            row: 3,
            position: 2,
            
            selected: [],
            list: [
                {
                    type: EFormType.selectItem,
                    name: 'item 0'
                },
                {
                    type: EFormType.selectItem,
                    name: 'item 1'
                },
                {
                    type: EFormType.selectItem,
                    name: 'item 2'
                }
            ]
        },
        
    ]
}

export const notCorrectStructOne:IFilter = {

    title: "TestTitle",

    parameters: [
        {
            name: "test parap 0", 
            type: EFormType.checkbox,
            
            width: 13,
            row: 1,
            position: 0,
            
            check: false
        },
        {
            name: "test parap 1", 
            type: EFormType.checkbox,
            
            width: 10,
            row: -1,
            position: 1,
            
            check: false
        },
        {
            name: "test range", 
            type: EFormType.range,
            
            width: 10,
            row: 1,
            position: 2,
            
            start: 0,
            and: 50
        },
        {
            name: "test List", 
            type: EFormType.select,
            
            width: 10,
            row: 3,
            position: 3,
            
            selected: [
                {
                    type: EFormType.selectItem,
                    name: 'item 0'
                }
            ],
            list: [
                {
                    type: EFormType.selectItem,
                    name: 'item 0'
                },
                {
                    type: EFormType.selectItem,
                    name: 'item 1'
                },
                {
                    type: EFormType.selectItem,
                    name: 'item 2'
                }
            ]
        },
        
    ]
}

export const notCorrectStructTwo:IFilter = {

    title: "TestTitle",

    parameters: [
        {
            name: "test parap 0", 
            type: EFormType.checkbox,
            
            width: 0,
            row: 0,
            position: 0,
            
            check: false
        },
        {
            name: "test parap 1", 
            type: EFormType.checkbox,
            
            width: 12,
            row: 1,
            position: 1,
            
            check: false
        },
        {
            name: "test range", 
            type: EFormType.range,
            
            width: 10,
            row: 2,
            position: 2,
            
            start: 0,
            and: 12
        },
        {
            name: "test List", 
            type: EFormType.select,
            
            width: 10,
            row: 3,
            position: 3,
            
            selected: [],
            list: [
                {
                    type: EFormType.selectItem,
                    name: 'item 0'
                },
                {
                    type: EFormType.selectItem,
                    name: 'item 1'
                },
                {
                    type: EFormType.selectItem,
                    name: 'item 2'
                }
            ]
        },
        
    ]
}
