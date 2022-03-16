import { Lightning, Router } from '@lightningjs/sdk'

export class MainMenuItems extends Lightning.Component {
  static _template() {
    return {
      h: 100,
      color: 0xffffffff,
      alpha: 0.5,
      text: {
        text: 'MenuItem',
        fontSize: 70,
      },
      // flexItem: {
      //   // margin: 10,
      // },
    }
  }

  _init() {
    this.patch({ text: { text: this.screenName } })
  }

  _focus() {
    console.log('focus: MainMenuItem ' + this.screenName)
    this.patch({ alpha: 1, text: { fontSize: 80 } })

    //Router.navigate('Movies')
  }

  _unfocus() {
    console.log('unfocused: MainMenuItem ' + this.screenName)
    this.patch({ alpha: 0.5, text: { fontSize: 70 } })
  }
}
