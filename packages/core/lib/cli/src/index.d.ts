declare type DemoData = {
  userId: number
  user: string
  error: null | Error
}
declare const normalTask: () => Promise<DemoData>
export { normalTask }
