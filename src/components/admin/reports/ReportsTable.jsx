import React, { useEffect, useState } from 'react';

import { Table } from 'semantic-ui-react';
import DeleteItem from '../../general/DeleteItem';
import { deleteReport, getReports } from '../../../api/reports';
import { Link } from 'react-router-dom';

const btnWrapper = {
    display: "flex",
    justifyContent: "center"
}

const linkColor = {
    color: "white"
}


const ReportsTable = () => {
    const [reports, setReports] = useState([]);

    async function loadData() {
        const res = await getReports();
        setReports(res.data)
    }
    useEffect(async () => {
        loadData();
    }, [])

    const handleChange = () => {
        
    }



    return (
        <>
            <Table celled style={{ width: 800 }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>№</Table.HeaderCell>
                        <Table.HeaderCell>Причина</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Пользователь</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Объявление</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Действия</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row style={{ padding: 30 }}>
                        {
                            reports.length <= 0 && <span style={{ margin: 30 }}>Данных нет</span>
                        }
                    </Table.Row>
                    {
                        reports.length > 0 && reports.map((report, i) => (
                            <Table.Row key={report.id}>
                                <Table.Cell>{report.id}</Table.Cell>
                                <Table.Cell>{report.info}</Table.Cell>
                                <Table.Cell>{report.user.email}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/publication/${report.publication.id}/`}>Перейти</Link>
                                </Table.Cell>
                                <Table.Cell width='5'>
                                    <div style={btnWrapper}>
                                        <DeleteItem fetch={deleteReport} refetch={getReports} id={report.id} />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    );
}

export default ReportsTable;