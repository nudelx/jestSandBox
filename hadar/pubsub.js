import uniqueId from 'lodash/uniqueId'
let eventsQueue = {}

class EventSystem {
  subscribe(component, event) {
    if (typeof component === 'undefined') {
      return
    }

    if (!component.id) {
      component.id = uniqueId()
    }

    if (typeof eventsQueue[event] === 'undefined') {
      eventsQueue[event] = []
      eventsQueue[event].push(component)
    } else {
      let alreadySubcribed = false
      eventsQueue[event].forEach(queue => {
        if (!component.id) {
          console.warn(
            'EventSystem: please specify component.id for ' +
              component.constructor.name
          )
        }
        if (queue.id === component.id) {
          alreadySubcribed = true
        }
      })

      if (!alreadySubcribed) {
        eventsQueue[event].push(component)
      }
    }
  }

  unsubscribe(component, event) {
    let queue = eventsQueue[event]

    if (typeof queue === 'undefined') {
      return false
    }

    for (let i = 0; i < queue.length; i++) {
      if (queue[i].id === component.id) {
        eventsQueue[event].splice(i, 1)
      }
    }
  }

  publish(event, data) {
    let queue = eventsQueue[event]

    if (typeof queue === 'undefined') {
      return false
    }

    for (let i = 0; i < queue.length; ++i) {
      if (typeof queue[i][`on${event}`] === 'function') {
        queue[i][`on${event}`](data)
      }
    }

    return true
  }
}

export let eventSystem = new EventSystem()
