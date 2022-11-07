import { myFunction } from "./newFunction";

describe("myFunction", () => {
  it("returns the word 'true' if I pass the function the number 5", () => {
    expect(myFunction(5)).toBe("true");
  });
  it("returns the word 'false' if I pass in a number less than 5", () => {
    expect(myFunction(1)).toBe("false");
  });
  //**hello this is practice test comments and notes for what i beilve is wrong */

  it("returns the word 'big' if I pass in a number greater than 5", () => {
    expect(myFunction(100)).toBe("big");
  });
  // this is to be comments this is practice
  it("returns the word 'negative' if a negative number is passed in", () => {
    expect(myFunction(-1)).toBe("negative");
  });
});