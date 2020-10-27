import React from 'react';
import AppBreadcrumbs from './views/components/appBreadcrumbs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SentItems from './views/pages/sentItems';
import GroupEmailEvents from './views/pages/groupEmailEvents';
import Email from './views/pages/email';
import GroupEmail from './views/pages/groupEmail';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppBreadcrumbs/>
                <Router>
                    <Switch>
                        <Route path="/emaildashboard/sentitems/view" component={SentItems}/>
                        <Route path="/emaildashboard/sentitems/email/view" component={Email} />
                        <Route path="/emaildashboard/sentitems/groupemail/view" component={GroupEmail} />
                        <Route path="/emaildashboard/sentitems/groupemail/events" component={GroupEmailEvents} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}
