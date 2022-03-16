import { Lightning } from '@lightningjs/sdk'
import { getSimilarMovies } from '../api/endpoints'

export class ContentInfoDisplay extends Lightning.Component {
  static _template() {
    return {
      Backround: {
        x: 0,
        y: 0,
        w: 1920,
        h: 1080,
        color: 0xff000000,
        rect: true,
      },

      Poster: {
        Backround: {
          //color: 0xff875644,
          w: 400,
          h: 600,
          x: 1200,
          y: 150,

          rect: true,
        },
      },

      MovieName: {
        x: 200,
        y: 200,
        color: 0xffffffff,
        text: {
          text: 'No Movie Name',
          fontSize: 70,
        },
      },

      MovieDetails: {
        x: 200,
        y: 300,
        w: 900,
        color: 0xffffffff,
        text: {
          text: 'No Moview Overview',
          fontSize: 40,
        },
      },

      ReleaseDate: {
        x: 200,
        y: 100,
        w: 900,
        color: 0xffffffff,
        text: {
          text: 'No Release Date',
          fontSize: 40,
        },
      },

      SimilarMovies: {
        x: 200,
        y: 700,

        text: {
          text: 'Similar Movies',
          fontSize: 50,
        },

        flex: {
          direction: 'row',
        },

        //similarMovies: [],
      },
    }
  }

  async _init() {}

  set params(args) {
    console.log('got params' + args.src)
    this.tag('Poster').patch({ Backround: { src: args.src } })
    this.tag('MovieName').patch({ text: { text: args.title } })
    this.tag('MovieDetails').patch({ text: { text: args.overview } })
    this.tag('ReleaseDate').patch({ text: { text: 'Release Date:' + args.releaseDate } })

    this.movieID = args.id
    this.getSimilar()
    console.log('This getting similar for movie with ID ' + this.movieID)
  }

  async getSimilar() {
    console.log('getSimilar in info display')
    console.log('Loading content' + this.movieID)
    const apiKey = '62c3d2f511ca70a33ec034735f97f86b'
    let data = await getSimilarMovies(this.movieID)
    let movieData = []
    data.results.map(contentItem => {
      movieData.push({
        y: 50,
        flexItem: {
          margin: 20,
        },
        w: 140,
        h: 200,
        src: 'https://image.tmdb.org/t/p/w500' + contentItem.poster_path + '?api_key=' + apiKey,
      })
    })

    this.tag('SimilarMovies').children = movieData.slice(0, 8)

    console.log(this.tag('PosterArt'))
    for (let j = 0; j < movieData.length; j++) {
      console.log(movieData[j])
    }
  }
}
