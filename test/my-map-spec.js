// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap function", function() {

  let input;
  let callback = (el) => el * 2;
  beforeEach(() => {
    input = [1, 2, 3];
  })

  it("should correctly apply the callback to each element of the input array", function() {
    expect(myMap(input, callback)).to.deep.equal([2, 4, 6]);
  });

  it("should not use native Array.map", function() {
    let spy = chai.spy.on(input, 'map');
    expect(myMap(input, callback)).to.deep.equal([2, 4, 6]);
    expect(spy).to.not.have.been.called();

  })

  it("should invoke the callback once for each element", function() {
    let spy = chai.spy(callback);
    expect(myMap(input, spy)).to.deep.equal([2, 4, 6]);
    expect(spy).to.have.been.called(3);
  })

});
