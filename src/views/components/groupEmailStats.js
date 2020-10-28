import React from 'react';
import {Container, Row, Col, Card, ProgressBar, Jumbotron} from "react-bootstrap";
import InfoCircleFill from 'react-bootstrap-icons/dist/icons/info-circle-fill'


export default class GroupEmailStats extends React.Component {
    constructor(props) {
        super(props);

        this.groupMailData = {
            stats: {
                openRate: {
                    percentage: 13,
                    uniqueOpens: 170,
                    totalOpens: 630,
                    deviceUsage: {
                        desktop: 70,
                        mobile: 30
                    },
                },
                clickRate: {
                    percentage: 3.3,
                    uniqueClicks: 43,
                    totalClicks: 82,
                    diviceUsage: {
                        desktop: 86,
                        mobile: 14
                    },
                },
                successfullDeliveries: {
                    total: 1307,
                    percentage: 88.49
                },
                bounces: {
                    total: 170,
                    percentage: 11.51
                },
                unsubscribers: {
                    total: 4,
                    percentage: 0.31
                },
                spamReports: {
                    total: 0,
                    percentage: 0
                },
                links: {
                   url: "https://devsens.com",
                   totalClicks: 28
                }
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                            <Card>
                                <Row>
                                    <Col sm={2}>THIS IS AN IMAGE</Col>
                                    <Col sm={{ offset: 4, span: 4 }}>
                                            <h5>Subject</h5>
                                            <pre>WhatsApp Giving finally in South Africa</pre>
                                        <hr/>
                                            <h5>Sent Date</h5>
                                            <pre>August 5, 2020 3:00 AM from Andrew Georgiou</pre>
                                    </Col>
                                </Row>
                            </Card>
                    <Row className="pt-2">
                        <Col sm={true}>
                            <Card>
                                <Container>
                                    <Row className="p-2 ml-3"><h5>Open rate</h5>&nbsp;<InfoCircleFill className="gold-text"/></Row>
                                    <Row className="p-1 ml-1 mr-1">
                                        <Col><ProgressBar now={this.groupMailData.stats.openRate.percentage} label={`${this.groupMailData.stats.openRate.percentage}%`}/></Col>
                                    </Row>
                                    <Row className="m-2">
                                        <Col sm={4} className="pl-3">Unique&nbsp;Opens</Col><Col
                                        sm={{offset: 6, span: 2}}><pre className="gold-text">{this.groupMailData.stats.openRate.uniqueOpens}</pre></Col>
                                        <Col sm={12}>
                                            <hr/>
                                        </Col>
                                        <Col sm={4} className="pl-3">Total&nbsp;Opens</Col><Col
                                        sm={{offset: 6, span: 2}}>{this.groupMailData.stats.openRate.totalOpens}</Col>
                                        <Col sm={12}>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{offset: 8, span: 4}}>
                                            <pre><InfoCircleFill className="gold-text"/>&nbsp;<b>DESKTOP {this.groupMailData.stats.openRate.deviceUsage.desktop}%</b>&nbsp;&nbsp;<b>MOBILE {this.groupMailData.stats.openRate.deviceUsage.mobile}%</b></pre>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                        <Col sm={true}>
                            <Card>
                                <Container>
                                    <Row className="p-2 ml-3"><h5>Click rate</h5>&nbsp;<InfoCircleFill className="gold-text"/></Row>
                                    <Row className="p-1 ml-1 mr-1">
                                        <Col><ProgressBar now={this.groupMailData.stats.clickRate.percentage} label={`${this.groupMailData.stats.clickRate.percentage}%`}/></Col>
                                    </Row>
                                    <Row className="m-2">
                                        <Col sm={4} className="pl-3">Unique&nbsp;Clicks</Col><Col
                                        sm={{offset: 6, span: 2}}><pre className="gold-text">{this.groupMailData.stats.clickRate.uniqueClicks}</pre></Col>
                                        <Col sm={12}>
                                            <hr/>
                                        </Col>
                                        <Col sm={4} className="pl-3">Total&nbsp;Clicks</Col><Col
                                        sm={{offset: 6, span: 2}}>{this.groupMailData.stats.clickRate.totalClicks}</Col>
                                        <Col sm={12}>
                                            <hr/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{offset: 8, span: 4}}>
                                            <pre><InfoCircleFill className="gold-text"/>&nbsp;<b>DESKTOP {this.groupMailData.stats.clickRate.diviceUsage.desktop}%</b>&nbsp;&nbsp;<b>MOBILE {this.groupMailData.stats.clickRate.diviceUsage.mobile}%</b></pre>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="pt-2 pb-2">
                        <Col>
                            <Card>
                                <Row className="m-1">
                                    <Col>
                                        <h5>Delivery</h5>
                                    </Col>
                                </Row>
                                <Row className="p-3">
                                    <Container fluid>
                                        <Row className="p-2 m-2">
                                            <Col className="p-1 m-1">
                                                <Container className="ml-2 mr-2">
                                                    <Row className="pt-2"><b>SUCCESSFUL DELIVERIES</b></Row>
                                                    <Row className="pt-2 gold-text">{this.groupMailData.stats.successfullDeliveries.total}</Row>
                                                    <Row className="pt-2">{this.groupMailData.stats.successfullDeliveries.percentage}%</Row>
                                                </Container>
                                            </Col>
                                            <Col className="p-1 m-1 ">
                                                <Container className="ml-2 mr-2">
                                                    <Row className="pt-2"><b>BOUNCES</b></Row>
                                                    <Row className="pt-2 gold-text">{this.groupMailData.stats.bounces.total}</Row>
                                                    <Row className="pt-2">{this.groupMailData.stats.bounces.percentage}%</Row>
                                                </Container>
                                            </Col>
                                            <Col className="p-1 m-1">
                                                <Container className="ml-2 mr-2">
                                                    <Row className="pt-2"><b>UNSUBSCRIBES</b></Row>
                                                    <Row className="pt-2 gold-text">{this.groupMailData.stats.unsubscribers.total}</Row>
                                                    <Row className="pt-2">{this.groupMailData.stats.unsubscribers.percentage}%</Row>
                                                </Container>
                                            </Col>
                                            <Col className="p-1 m-1">
                                                <Container className="ml-2 mr-2">
                                                    <Row className="pt-2"><b>SPAM REPORTS</b></Row>
                                                    <Row className="pt-2 gold-text">{this.groupMailData.stats.spamReports.total}</Row>
                                                    <Row className="pt-2">{this.groupMailData.stats.spamReports.percentage}%</Row>
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                              <Container>
                                  <Row className="p-1 ml-1"><h5>EMail Sample</h5>&nbsp;<InfoCircleFill className="gold-text"/></Row>
                                  <Jumbotron/>
                              </Container>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Container>
                                    <Row className="p-1 ml-1"><h5>Top clicked links</h5>&nbsp;<InfoCircleFill className="gold-text"/></Row>
                                    <Row className="p-2 m-2">
                                        <Col sm={2}>
                                            <b>LINK</b>
                                        </Col>
                                        <Col sm={{ offset: 6, span: 4 }}>
                                            <b>CLICKS</b>
                                        </Col>
                                        <Col sm={12}>
                                            <hr/>
                                        </Col>
                                        <Col sm={8}>
                                            <a className="gold-text" href={this.groupMailData.stats.links.url}>{this.groupMailData.stats.links.url}</a>
                                        </Col>
                                        <Col sm={4}>
                                            {this.groupMailData.stats.links.totalClicks}
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
