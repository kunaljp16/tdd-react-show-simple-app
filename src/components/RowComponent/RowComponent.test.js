import React from "react";
import { shallow } from "enzyme";
import RowComponent from "./RowComponent";
import PrimaryButton from "../button/PrimaryButton/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton/SecondaryButton";
import TextComponent from "../TextComponent/TextComponent";

test("shouldShowTextAndPrimaryButtonWhenButtonTypeIsPrimary", () => {
  // TODO can we do the same thing with shallow
  const wrapper = shallow(
    <RowComponent feesPaid={true} textMessage="Student" />
  );
  const primaryChildButton = wrapper.find(PrimaryButton);

  expect(primaryChildButton.exists()).toBe(true);
  expect(wrapper.find(SecondaryButton).exists()).toBe(false);
  const textWrapper = wrapper.find(TextComponent);
  expect(textWrapper.exists()).toBe(true);
});

test("shouldShowTextAndSecondaryButtonWhenButtonTypeIsSecondary", () => {
  const wrapper = shallow(
    <RowComponent feesPaid={false} textMessage="Student" />
  );
  const secondaryChildButton = wrapper.find(SecondaryButton);

  expect(secondaryChildButton.exists()).toBe(true);
  expect(wrapper.find(PrimaryButton).exists()).toBe(false);
  const textWrapper = wrapper.find(TextComponent);
  expect(textWrapper.exists()).toBe(true);
});
