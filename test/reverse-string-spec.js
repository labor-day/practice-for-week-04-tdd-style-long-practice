// Your code here
const chai = require("chai");
const expect = chai.expect;
const reverseString = require("../problems/reverse-string");

describe("reverseString function", function () {

  it("should correctly reverse the input string", function() {
     expect(reverseString("fun")).to.equal("nuf");
  });

  it("should throw an error when given inappropriate input", function() {
    expect( () => reverseString(5) ).throw();
  })

});
