import {shallow} from 'enzyme'
import Header from "../../components/Header";

describe("Header", () => {
  it("ヘッダーの初期表示", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').text()).toEqual("Todo App")
  })
})