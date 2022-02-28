import React from "react";
import { shallow, mount } from "enzyme";
import PrimaryButton from "./PrimaryButton";


test("shouldShowPrimaryButtonWithGivenTextValue", () => {
  // given
  const buttonValue = "Submit";
  const button = shallow(<PrimaryButton text={buttonValue}></PrimaryButton>);
  //when

  //then
  expect(button.type()).toBe("button");
  expect(button.text()).toEqual(buttonValue);
  expect(button.find('.btn-primary').hasClass('btn-primary')).toEqual(true);
});
