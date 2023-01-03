import Home from '~/pages/Home/main'
import Following from '~/pages/Following/main'
import Profile from '~/pages/Profile/main'
import Upload from '~/pages/Upload/main'
import Search from '~/pages/Search/main'
import Live from '~/pages/Live/main'
import { OnlyHeader } from '~/components/Layout'
import config from '~/config/config'
const publicRoutes = [
    { path: config.routers.home, component: Home },
    { path: config.routers.following, component: Following },
    { path: config.routers.profile, component: Profile },
    { path: config.routers.upload, component: Upload, layout: OnlyHeader },
    { path: config.routers.search, component: Search, layout: null },
    { path: config.routers.live, component: Live},
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
