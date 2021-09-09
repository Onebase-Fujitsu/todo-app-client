import {shallow} from 'enzyme'
import Home from "../../pages/Home";
import Header from "../../components/Header";

describe("Home画面", () => {
  it("ホーム画面の初期表示", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Header).exists()).toEqual(true)
  })
})