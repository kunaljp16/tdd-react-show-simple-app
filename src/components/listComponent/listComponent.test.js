import React from "react";
import { mount, shallow } from "enzyme";
import ListComponent from "./listComponent";
import StudentDetailsData from "./../../MockData/StudentsDetailsData";
import RowComponent from "../RowComponent/RowComponent";

test("shouldShowListOfTextWithButton", () => {
  const wrapper = shallow(<ListComponent />);
  const RowComponentWrapper = wrapper.find(RowComponent);
  expect(RowComponentWrapper.exists()).toBe(true);
});

test("shouldGetListOfStudentDetails", () => {
  expect(StudentDetailsData).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1 }),
      expect.objectContaining({ id: 2 }),
    ])
  );
});
