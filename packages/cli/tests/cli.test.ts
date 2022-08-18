import { normalTask } from '../src'
describe('normal task resolves', () => {
  it('fetchData Case', async () => {
    const data = await normalTask()
    expect(data.user).toBe('ffm')
  })
})
