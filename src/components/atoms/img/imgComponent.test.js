import { shallow } from "enzyme";
import Image from "./img";
import logoImage from '.'
test("renders learn react link", () => {
  const wrapper = shallow(<Image />);
  console.log(wrapper.debug());
  expect(wrapper.find("img").prop("src")).toEqual(logoImage);
});
