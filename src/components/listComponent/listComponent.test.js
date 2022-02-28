import React from "react";
import { mount, shallow } from "enzyme";
import ListComponent from "./listComponent";
import StudentDetailsData from "./../../MockData/StudentsDetails";

test("shouldShowListOfTextWithButton", () => {
  const listComponent = shallow(
    <ListComponent StudentDetailsData={StudentDetailsData} />
  );
});

// test('shouldShowListOfTextWithSecondaryButton',()=>{
//     const listComponent = mount(<ListComponent />);
// })
