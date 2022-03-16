import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { MainMenuItems } from '../Components/MainMenuItems'

export class MainMenu extends Lightning.Component {
  static _template() {
    return {
      x: -450,

      Background: {
        color: 0xff00508f,
        w: 450,
        h: 1080,
        //mountX: 0.5,
        rect: true,
      },

      DStvLogo: {
        x: 50,
        y: 50,
        w: 300,
        h: 65,
        //mountX: 0.5,
        src: Utils.asset('images/DStv_White.png'),
      },

      MenuLabels: {
        y: 540,
        x: 50,
        mountY: 0.5,
        flex: {
          //padding: 20,
          direction: 'column',
        },

        MoviesLabel: {
          type: MainMenuItems,
          screenName: 'Movies',
        },

        TVLabel: {
          type: MainMenuItems,
          screenName: 'TV',
        },

        // OtherLabel: {
        //   type: MainMenuItems,
        //   screenName: 'Other',
        // },
      },
    }
  }

  _focus() {
    this.patch({ x: 0 })
  }

  _unfocus() {
    //this.patch({ x: -450 })
  }

  _init() {
    console.log('Creating Main Menu')
    this.index = 0
  }

  _handleDown() {
    console.log('Go to TV')
    this.index = 1
    // Router.navigate('TV')
  }

  _handleUp() {
    console.log('Go to Movies')
    this.index = 0
    Router.navigate('Movies')
  }

  _handleEnter() {
    Router.navigate(this.getActiveItem().screenName)
  }

  _handleRight() {
    console.log('Requesting focus')
    Router.focusPage()
  }

  getActiveItem() {
    console.log(
      'Request made to get active menu item ' + this.tag('MenuLabels').children[this.index]
    )
    return this.tag('MenuLabels').children[this.index]
  }

  _getFocused() {
    console.log('getFocused: MainMenu')
    return this.getActiveItem()
  }

  _handleLeft() {
    console.log('Do nothing')
  }
}
