import { Route, Switch } from 'react-router-dom'
import Login from '../page/login'
import Register from '../page/register'
import GeneralMember from '../page/generalMember'
import CulturalBase from '../page/culturalBase'
import MusicCulture from '../page/musicCulture'
import MainMCC from '../page/mainMCC'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Register' component={Register} />
            <Route exact path='/GeneralMember' component={GeneralMember} />
            <Route exact path='/CulturalBase' component={CulturalBase} />
            <Route exact path='/MusicCulture' component={MusicCulture} />
            <Route exact path='/MainMCC' component={MainMCC} />
            <Route render={function() {
                return (
                    <div>
                        <h1>Not Found</h1>
                    </div>
                )
            }} />
        </Switch>
    )
}

export default Routes