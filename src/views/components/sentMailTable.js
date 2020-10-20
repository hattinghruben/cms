import React from 'react';
import {Table} from 'react-bootstrap'
import {CircleFill} from "react-bootstrap-icons";

export default class SentMailTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    email: {
                        subject: 'Beqachwood',
                        numberOfRecievers: 11,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                            'wood@gmail.com',
                            'wood@gmail.com',
                            'wood@gmail.com',
                            'wood@gmail.com',
                            'wood@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '14/06/2019', openRate: '43%'
                },
                {
                    email: {
                        subject: 'testies',
                        numberOfRecievers: 1,
                        to: [
                            'music@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '22/12/2020', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
                {
                    email: {
                        subject: 'mt poes CC',
                        numberOfRecievers: 5,
                        to: [
                            'music@gmail.com',
                            'glad@gmail.com',
                            'knob@gmail.com',
                            'poes@gmail.com',
                            'wood@gmail.com',
                        ],
                        from: 'sender@golfplayed.com'
                    },
                    dateSent: '01/02/2018', openRate: '43%'
                },
            ]
        }
    }

    renderTableData() {
        return this.state.data.map((item, index) => {
            const key = index;
            const subject = item.email.subject;
            const numberOfRecievers = item.email.numberOfRecievers > 1 ? `- (${item.email.numberOfRecievers} emails)` : `- (${item.email.numberOfRecievers} email)`;
            const toArray = item.email.to;
            const to = toArray.length > 1 ? `${toArray[0]} and ${toArray.length - 1} others...` : toArray[0];
            const from = item.email.from;
            const date = item.dateSent;
            const openRate = item.openRate;

            return (
                <tr key={key}>
                    <td className="p-0">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 gold-text">
                                    {subject} {numberOfRecievers}
                                </div>
                            </div>
                            <div className="">
                                <div className="col-12 p-0">
                                    <p><CircleFill class="small-circle"></CircleFill><small><b class="small-email-text p-2">Sent to - </b>{to}</small> <small><b class="small-email-text"> from</b> {from}</small></p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>{date}</td>
                    <td>{openRate}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <Table>
                    <thead className="thead-dark">
                    <tr>
                        <th>EMAILS</th>
                        <th>SENT DATE</th>
                        <th>OPEN RATE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </Table>
            </div>
        )
    }
}
