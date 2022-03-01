import { shallow } from "enzyme";
import App from "./App";
import ListComponent from "./components/listComponent/listComponent";

test("shouldShowAppComponentWithListComponent", () => {
  const wrapper = shallow(<App />);
  const listWrapper = wrapper.find(ListComponent);
  expect(listWrapper.exists()).toBe(true);
});
