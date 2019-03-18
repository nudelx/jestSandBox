class EventSystem {
  subscribe = jest.fn()

  unsubscribe = jest.fn()

  publish = jest.fn()
}

export default new EventSystem()
