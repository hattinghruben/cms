import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table, Row} from 'react-bootstrap'
import {CircleFill} from 'react-bootstrap-icons';
import {getOutboundMails} from "../../store/actions/getOutboundMails";
export default function SentMailTable() {

    const dispatch = useDispatch();
    const {mails, isLoading, error} = useSelector((state) => {
        return state.outboundMails;
    });

    useEffect(() => {
        dispatch(getOutboundMails());
    });

    return (
        <Table>
                <thead className="thead-light">
                <tr>
                    <th>EMAILS</th>
                    <th>SENT DATE</th>
                    <th>OPEN RATE</th>
                </tr>
                </thead>
                <tbody>
                {!isLoading ? !error ? (
                        mails.map((item, index) => {
                            const subject = item.email.subject;
                            const receivers = item.email.numberOfRecievers;
                            const numberOfRecievers = receivers > 1 ? `- (${receivers} emails)` : `- (${receivers} email)`;
                            const toArray = item.email.to;
                            const to = toArray.length > 1 ? `${toArray[0]} and ${toArray.length - 1} others...` : toArray[0];
                            const from = item.email.from;
                            const date = item.dateSent;
                            const openRate = item.openRate;

                            return (
                                <tr key={index}>
                                    <td className="p-0">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12 gold-text">
                                                    <a className="gold-text"
                                                       href={receivers > 1 ? '/emaildashboard/sentitems/groupemail/view' : '/emaildashboard/sentitems/email/view'}>{subject}</a> {numberOfRecievers}
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="col-12 p-0">
                                                    <p><CircleFill className="small-circle"></CircleFill><small><b
                                                        className="small-email-text p-2">Sent to - </b>{to}</small>
                                                        <small><b className="small-email-text"> from</b> {from}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{date}</td>
                                    <td>{openRate}</td>
                                </tr>
                            )
                        })
                    ) : (<Row className="text-center">Error retrieving data: {{error}}</Row>)
                    : (<Row className="text-center">Loading...</Row>)
                }
                </tbody>
            </Table>
    )
}
