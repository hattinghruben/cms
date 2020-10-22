import React from "react";
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';
import {BrowserRouter as Router} from 'react-router-dom';
import {routes} from '../../router/routes';

export default class AppBreadcrumbs extends React.Component {
    render() {
        console.log(JSON.stringify(routes));
        return (
            <Router>
                <Breadcrumbs mappedRoutes={routes}
                             WrapperComponent={(props) =>
                                 <ol className="breadcrumb">{props.children}</ol>}
                             ActiveLinkComponent={(props) =>
                                 <li className="breadcrumb-item active">{props.children}</li>}
                             LinkComponent={(props) =>
                                 <li className="breadcrumb-item gold-text">{props.children}</li>
                             }/>
            </Router>
        );
    }
}



