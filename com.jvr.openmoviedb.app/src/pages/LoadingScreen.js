import { Lightning, Router } from '@lightningjs/sdk'

export class LoadingScreen extends Lightning.Component {
  static _template() {
    return {
      Background: {
        color: 0xff000000,
        w: 1920,
        h: 1080,
        rect: true,
      },

      LoadingText: {
        x: 810,
        y: 540,
        mount: 0.5,
        text: {
          text: 'Press Enter to Start',
          fontSize: 70,
        },
      },
    }
  }

  _init() {
    console.log('Opening loading screen')
  }

  _handleEnter() {
    console.log('Enter pressed, starting app')
    Router.navigate('Movies')
    Router.focusWidget('MainMenu')
  }
}
