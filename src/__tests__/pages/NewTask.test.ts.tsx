import {cleanup, screen} from '@testing-library/react'
import {render} from '../../test-utils'
import NewTask from '../../pages/NewTask'

describe('タスク作成画面', () => {
  afterEach(() => {
    cleanup()
  })

  it('画面構成', async () => {
    render(<NewTask />)

    expect(screen.queryByTestId('Header')).toBeTruthy()
    expect(screen.queryByTestId('NewTaskForm')).toBeInTheDocument()
  })
})
