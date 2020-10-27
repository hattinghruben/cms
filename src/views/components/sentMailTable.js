import React from 'react';
import {Table} from 'react-bootstrap'
import {CircleFill} from "react-bootstrap-icons";

export default class SentMailTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                props
            ]
        }
    }

    renderTableData() {
        return this.state.data.map((item, index) => {
            const key = index;
            const subject = item.email.subject;
            const receivers = item.email.numberOfRecievers;
            const numberOfRecievers = receivers > 1 ? `- (${receivers} emails)` : `- (${receivers} email)`;
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
                                    <a className="gold-text" href={receivers > 1 ? '/emaildashboard/sentitems/groupemail/view' : '/emaildashboard/sentitems/email/view'}>{subject}</a> {numberOfRecievers}
                                </div>
                            </div>
                            <div className="">
                                <div className="col-12 p-0">
                                    <p><CircleFill className="small-circle"></CircleFill><small><b className="small-email-text p-2">Sent to - </b>{to}</small> <small><b className="small-email-text"> from</b> {from}</small></p>
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
                    <thead className="thead-light">
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
