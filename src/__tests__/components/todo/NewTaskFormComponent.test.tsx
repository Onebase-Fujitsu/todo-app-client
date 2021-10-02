import {cleanup, fireEvent, screen} from '@testing-library/react'
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import NewTaskFormComponent from '../../../components/todo/NewTaskFormComponent'
import {render} from '../../../test-utils'

describe('NewEntryFormコンポーネント', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
    cleanup()
  })

  it('初期表示', () => {
    render(<NewTaskFormComponent />)
    expect(screen.queryByLabelText('Title')).toBeTruthy()
    expect(screen.getByTestId('TitleInput')).toHaveValue('')
    expect(screen.queryByText('Send')).toBeTruthy()
  })

  it('タスク名を編集できる', () => {
    render(<NewTaskFormComponent />)
    fireEvent.change(screen.getByTestId('TitleInput'), {
      target: {value: 'title text'},
    })
    expect(screen.getByTestId('TitleInput')).toHaveValue('title text')
  })

  it("作成ボタンを押したら、作成がリクエストされる", async () => {
    render(<NewTaskFormComponent />)
    fireEvent.change(screen.getByTestId('TitleInput'), {
      target: {value: 'title text'},
    })
    fireEvent.click(screen.getByText('Send'))
    expect(mock.history.post[0].url).toEqual('/todos')
    expect(mock.history.post[0].data).toEqual(JSON.stringify({title: 'title text'}))
  })
})
