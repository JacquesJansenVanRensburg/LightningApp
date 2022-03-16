import { Lightning } from '@lightningjs/sdk'

export class PosterDisplay extends Lightning.Component {
  static _template() {
    return {
      transitions: {
        x: { duration: 0.5, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)' },
      },
      // w: 250,
      // h: 350,

      // flexItem: {
      //   margin: 20,
      // },

      // Background: {
      //   w: 250,
      //   h: 350,
      //   //rect: true,
      //   src: this.bindProp('src'),
      // },

      MovieTitle: {
        y: 400,
        w: 280,
        color: 0xffffffff,
        text: {
          text: this.bindProp('title'),
          fontSize: 45,
        },
      },
    }
  }

  _focus() {
    console.log('This is me... dam die dam')
    this.patch({
      smooth: {
        w: 300,
        h: 420,
      },
    })

    this.patch({
      MovieTitle: {
        color: 0xffffdd00,
        fontSize: 60,
        y: 430,
      },
    })
  }

  _unfocus() {
    this.patch({
      smooth: {
        w: 250,
        h: 350,
      },
    })
    this.patch({
      MovieTitle: {
        color: 0xffffffff,
        fontSize: 45,
        y: 400,
      },
    })
  }
}
