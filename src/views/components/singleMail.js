import React from "react";
import ChevronRight from 'react-bootstrap-icons/dist/icons/chevron-right';
import {CircleFill} from "react-bootstrap-icons";
import CaretDownFill from 'react-bootstrap-icons/dist/icons/caret-down-fill';
import {Col, Row, Container} from "react-bootstrap";

const email = {
    subject: '',
    sender: 'Brad Harris',
    sentTo: 'Freddy Flintof',
    events: {
        opens: 3,
        clicks: 5
    },
    emailBody: `Dear so and so
    
    I regret to inform you that this email is of no consequence what so ever and has no meaning other than to test the structure of data with this page in developement.
    
    We will be using these meaningless words to simply forecast the structure by which data will sit on this page when in use.
    
    please Ignore anything I have just said.
    
    Sincerely
    Noone`
};

export default class SingleMail extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="pt-2 pl-2"><Col sm={4}><b>{email.sender}</b></Col><Col sm={{ span: 2, offset: 6}}><a href="/" className="gold-text">Resend</a></Col></Row>
                    <Row className="pb-2 pl-2"><Col sm={true}>to&nbsp;{email.sentTo}&nbsp;&nbsp;<a href="/" className="gold-text"><CaretDownFill/></a></Col></Row>
                    <Row className="p-2"><Col><ChevronRight className="dark-green"/>&nbsp;&nbsp;<CircleFill className="dark-green"/>&nbsp;&nbsp;Opens: {email.events.opens} &nbsp;Clicks: {email.events.clicks}</Col></Row>
                </Container>
                <Container fluid>
                    <Row className="p-2">{email.emailBody}</Row>
                </Container>
            </React.Fragment>
        )
    }
}
