import React from 'react';
import AppBreadcrumbs from './views/components/appBreadcrumbs';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SentItems from './views/pages/sentItems';
import GroupEmailEvents from './views/pages/groupEmailEvents';
import Email from './views/pages/email';
import GroupEmail from './views/pages/groupEmail';
import EmailDashboard from './views/pages/emailDashboard';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AppBreadcrumbs/>
                <Router>
                    <Switch>
                        <Route path="/emaildashboard/sentitems/view" component={SentItems}/>
                        <Route path="/emaildashboard/sentitems/email/view" component={Email} />
                        <Route path="/emaildashboard/sentitems/groupemail/view" component={GroupEmail} />
                        <Route path="/emaildashboard/sentitems/groupemail/events" component={GroupEmailEvents} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
