export default () => {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('../mocks/browser')
    console.log('msw')
    worker.start()
  }
}
