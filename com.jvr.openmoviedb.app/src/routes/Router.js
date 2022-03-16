import { Lightning } from '@lightningjs/sdk'
import { ContentDisplay } from '../pages/ContentDisplay'
import { ContentInfoDisplay } from '../pages/ContentInfoDisplay'
import { LoadingScreen } from '../pages/LoadingScreen'

export default {
  routes: [
    {
      path: '$',
      component: LoadingScreen,
      widgets: ['MainMenu'],
    },
    {
      path: 'Movies',
      component: ContentDisplay,
      widgets: ['MainMenu'],
    },
    {
      path: 'ContentInfo', ///:movieTitle/:overview',
      component: ContentInfoDisplay,
    },
  ],
}
