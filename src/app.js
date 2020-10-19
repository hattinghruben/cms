import React from "react";
import AppBreadcrumbs from "./views/components/appBreadcrumbs";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import SentItems from "./views/pages/sentItems";
import Stats from "./views/stats";
import EmailItem from "./views/emailItem";
import EmailGroup from "./views/emailGroup";
import EmailDashboard from "./views/emailDashboard";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AppBreadcrumbs/>
                <Router>
                    <Switch>
                        <Route path="/emaildashboard/sentitems" component={SentItems}/>
                        <Route path="/emaildashboard/sentitems/emailitem" component={EmailItem} />
                        <Route path="/emaildashboard/sentitems/emailgroup" component={EmailGroup} />
                        <Route path="/emaildashboard/sentitems/emailgroup/stats:emailid" component={Stats} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
