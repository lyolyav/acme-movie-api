
const { expect } = require('chai');

describe ('sample test', ()=>{
   describe ('1+1', () => {
    it ('equals 2', ()=> {
        expect(1+1).to.equal(2);
    });
   });
});
