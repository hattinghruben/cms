import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const NavBar = () => {
    return (
            <Breadcrumb>
                <Breadcrumb.Item href="/home">Home/</Breadcrumb.Item>
                <Breadcrumb.Item href="home/reports">
                    Reports/
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/home/emails">Emails</Breadcrumb.Item>
            </Breadcrumb>
    )
};
export default NavBar
