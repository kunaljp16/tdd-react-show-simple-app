import React from "react";
import { shallow, mount } from "enzyme";
import TextComponent from "./TextComponent.js";

test("shouldShowTheTextParagraph", () => {
  const text = "This is some Text";
  const textComponent = shallow(<TextComponent text={text} />);
  expect(textComponent.text()).toEqual(text);
});
