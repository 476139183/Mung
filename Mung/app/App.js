import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator'
import Movie from './pages/movie/Movie'
import MovieDetail from './pages/movie/MovieDetail'
import MovieList from './pages/movie/MovieList'
import ImageDetailBrower from './pages/image/ImageDetailBrower'
import Search from './pages/search/Search'
import {MainBg,MainColor,GrayColor} from './pages/basestyle/BaseStyle'

/*
* 实现底部Tab
* */
const MainTabPage = TabNavigator({
    Movie:{screen: Movie},
},{
    animationEnabled: true,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: MainColor,
        inactiveTintColor: GrayColor,
        showIcon: true,
        upperCaseLabel: false,
        indicatorStyle: {
            height: 0,
        },
        style: {
            backgroundColor: MainBg,
            height:54,
        },
        labelStyle: {
            padding:0,
            margin:0,
        },
        iconStyle: {
            padding:0,
            margin:0,
        }
    }
})

/*
* 实现跳转的栈
* */
const App = StackNavigator({
    //MainTabPage: {screen:MainTabPage},
    Movie: {screen:Movie},
    MovieDetail:{screen:MovieDetail},
    MovieList:{screen:MovieList},
    ImageDetailBrower:{screen:ImageDetailBrower},
    Search:{screen:Search},
},{
    navigationOptions: {
        gesturesEnabled: true,
    },
    headerMode: 'screen',
    transitionConfig:(()=>({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
    }))
})



export default App