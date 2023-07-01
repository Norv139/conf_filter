import { correctStruct,  notCorrectStructOne, notCorrectStructTwo} from "../../type/hardcode";
import { protect } from ".";

describe('Checking the data for the correct structure', ()=>{

    it('verification of correct information', ()=>{
        expect(protect(correctStruct)).toBe(true)
    });

    it('verification of incorrect information No.1', ()=>{
        expect(protect(notCorrectStructOne)).toBe(false)
    });

    it('verification of incorrect information No.2', ()=>{
        expect(protect(notCorrectStructTwo)).toBe(false)
    });
} )