import StateManager from './state/stateManager'

class GlobalApplication {
  constructor () {
    this.stateManager = null
  }
  initManager () {
    this.stateManager = new StateManager()
  }
}

const app = new GlobalApplication()
export default app
