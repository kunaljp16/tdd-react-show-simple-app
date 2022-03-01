import React from "react";
import { shallow, mount } from "enzyme";
import TextComponent from "./TextComponent.js";

test("shouldShowTheTextParagraph", () => {
  const textMessage = "This is some Text";
  const textComponent = shallow(<TextComponent textMessage={textMessage} />);
  expect(textComponent.text()).toEqual(textMessage);
});
