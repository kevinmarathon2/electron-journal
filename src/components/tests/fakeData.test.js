const fakeData = require("../fakeData.js");

test("fake data is not empty", () => {
  expect(fakeData).toMatchSnapshot();
});

test("Fake data is an object", () => {
  expect(typeof fakeData).toBe("object");
});
