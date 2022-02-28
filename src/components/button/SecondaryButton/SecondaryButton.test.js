import React from "react";
import { shallow, mount } from "enzyme";
import SecondaryButton from "./SecondaryButton";


test("shouldShowSecondaryButtonWithGivenTextValue", () => {
  // given
  const buttonValue = "Submit";
  const className = "btn btn-secondary"
  const button = shallow(<SecondaryButton className={className} text={buttonValue}></SecondaryButton>);
  //when

  //then
  expect(button.type()).toBe("button");
  expect(button.text()).toEqual(buttonValue);
  expect(button.find('.btn-secondary').hasClass('btn-secondary')).toEqual(true);
});
