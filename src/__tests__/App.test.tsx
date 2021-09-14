import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {render} from "../test-utils";
import App from "../App";

describe('App', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('ホーム画面の初期表示', async () => {
    mock.onGet('/todos').reply(200, [
      {
        id: 1,
        title: 'title',
        completed: false,
      },
    ])
    const initialState = {todos: []}
    render(<App />, {preloadedState: initialState})

    expect(mock.history.get[0].url).toEqual('/todos')
  })
})