import data from '@mina/core'

console.log('data22233', data)

type DemoData = {
  userId: number
  user: string
  error: null | Error
}

const normalTask = () => {
  return new Promise<DemoData>((resove, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resove({
          userId: Math.random(),
          user: 'ffm',
          error: null,
        })
      } else {
        reject({
          userId: 0,
          user: '',
          error: new Error('测试'),
        })
      }
    }, 3000)
  })
}

export { normalTask }
