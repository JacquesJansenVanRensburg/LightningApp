import { Lightning, Router, Utils } from '@lightningjs/sdk'
import { getMovies } from '../api/endpoints'
import { PosterDisplay } from '../Components/PosterDisplay'
import { ContentInfoDisplay } from './ContentInfoDisplay'
export class ContentDisplay extends Lightning.Component {
  static _template() {
    return {
      transitions: {
        x: { duration: 0.5, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)' },
      },
      Background: {
        color: 0xff111111,
        x: 1185,
        w: 1470,
        h: 1080,
        mountX: 0.5,
        rect: true,
      },

      PosterArt: {
        x: 500,
        y: 270,
        // mountX: -1,
        //w: 1200,
        //mountY: 0.5,
        //h: 400,

        flex: {
          //padding: 10,
          direction: 'row',
          //justifyContent: 'flex-start',
        },

        //PosterCollection: [],
      },
    }
  }

  async _init() {
    // this._myNonEasingAnimation = this.tag('PosterArt').animation({
    //   duration: 3,
    //   repeat: 0,
    //   stopMethod: 'immediate',
    //   actions: [
    //     //{ p: 'x', v: { 0: { v: 400, sm: 0 }, 0.5: { v: 50, sm: 0 }, 1: { v: 400, sm: 0 } } },
    //     { p: 'x', v: { 0: { v: 1000, sm: 0 }, 0.5: { v: 0, sm: 0 } } },
    //   ],
    // })

    console.log('Loading content' + this.screenName)
    const apiKey = '62c3d2f511ca70a33ec034735f97f86b'
    let data = await getMovies()
    let movieData = []
    data.results.map(contentItem => {
      movieData.push({
        //Test 1
        //Title: {
        //   text: contentItem.title,
        // },
        // Overview: {
        //   text: contentItem.overview,
        // },
        //Test2
        // Background: {
        //   w: 300,
        //   h: 500,
        //   src: 'https://image.tmdb.org/t/p/w500' + contentItem.poster_path + '?api_key=' + apiKey,
        // },
        //Test3
        // TextTest: {
        //   rect: true,
        // w: 300,
        // h: 500,
        //   text: { text: 'Text' },
        // },

        w: 250,
        h: 350,

        flexItem: {
          margin: 25,
        },

        title: contentItem.title,
        overview: contentItem.overview,
        releaseDate: contentItem.release_date,
        movieID: contentItem.id,

        type: PosterDisplay,
        src: 'https://image.tmdb.org/t/p/w500' + contentItem.poster_path + '?api_key=' + apiKey,

        // Image: {
        //   flexItem: {
        //     margin: 20,
        //   },
        //   alpha: 1,
        //   mount: 0.5,
        //   y: w => w / 2,
        //   x: h => h / 2,
        //   w: w => w,
        //   h: h => h,
        //   src: 'https://image.tmdb.org/t/p/w500' + contentItem.poster_path + '?api_key=' + apiKey,
        // },

        //Test4
        // src: 'https://image.tmdb.org/t/p/w500' + contentItem.poster_path + '?api_key=' + apiKey,
      })
    })
    //test1

    this.tag('PosterArt').children = movieData
    //this.tag('PosterArt').patch({ PosterCollection: movieData })

    console.log(this.tag('PosterArt'))
    for (let j = 0; j < movieData.length; j++) {
      console.log(movieData[j])
      console.log(movieData[j].movieID)
    }
    console.log('Creating menu with index 0')
    this.index = 0
  }

  // _focus() {
  //   this._refocus()
  // }

  _handleLeft() {
    console.log('Content Display: Left pressed')
    //if (this.index % 5 == 0) {
    //console.log('Content Display: Move Menu')
    //this.tag('PosterArt').patch({ x: +((this.index / 5) * 1000) })
    //console.log('Content Display: Move Menu Movieng ' + (this.index / 5) * 1000)
    // }

    if (this.index > 0) {
      console.log('index bigger than 0, decreasing')
      this.index--
      //this.tag('PosterArt').patch({ smooth: { x: -300 } })
    } else {
      console.log('Nowhere to go, going back to menu')
      Router.focusWidget('MainMenu')
    }
    console.log('Content Display: New Index ' + this.index)
    if (this.index > 1) this.tag('PosterArt').patch({ smooth: { x: 500 - (this.index - 1) * 270 } })
    else {
      this.tag('PosterArt').patch({ smooth: { x: 500 } })
    }
  }

  _handleRight() {
    console.log('Content Display: Right Pressed')
    //if (this.index % 4 == 0) {
    //console.log('Content Display: Move Menu Movieng ' + (this.index / 4) * 1000)
    //this._myNonEasingAnimation.start()
    // this.tag('PosterArt').patch({ x: -((this.index / 4) * 1000) })
    // }

    if (this.index < this.tag('PosterArt').children.length - 1) {
      console.log('index smaller than menu limit, increasing')
      this.index++
    }
    if (this.index > 1) this.tag('PosterArt').patch({ smooth: { x: 500 - (this.index - 1) * 270 } })
  }

  getActiveItem() {
    return this.tag('PosterArt').children[this.index]
  }

  _getFocused() {
    console.log('Content Display: Asking for active item: ' + this.getActiveItem())
    return this.getActiveItem()
  }

  _handleEnter() {
    console.log('Content Display: Enter Pressed')
    let asset = this.getActiveItem()
    //Router.navigate(`ContentInfo/${asset.src}`)
    Router.navigate('ContentInfo', {
      src: asset.src,
      title: asset.title,
      overview: asset.overview,
      releaseDate: asset.releaseDate,
      id: asset.movieID,
    })

    console.log('Sending movie with  to info page ' + asset.movieID)
  }
}
