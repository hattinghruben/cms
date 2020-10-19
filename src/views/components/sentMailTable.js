import React from 'react';
import {Table} from 'react-bootstrap'

const data = [
    {emails: 'Bla bla bla bla bla', dateSent: '22/03/1990', openRate: '22%'},
    {emails: 'Bla bla poes kak', dateSent: '22/03/1990', openRate: '92%'},
    {emails: 'I need a beer', dateSent: '22/03/1990', openRate: '62%'}

];

export default class SentMailTable extends React.Component {
    static renderEmail(email, date, stats) {
        return (
            <tr>
                <td>{data.emails}</td>
                <td>{data.dateSent}</td>
                <td>{data.openRate}</td>
            </tr>
        )
    };

    render() {
        return (
            <div>
                return (
                <Table>
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Emails</th>
                        <th>Date sent</th>
                        <th>Open rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
