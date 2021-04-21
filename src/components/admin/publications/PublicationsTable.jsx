import React, { useEffect, useState } from 'react';

import { Table } from 'semantic-ui-react';
import DeleteItem from '../../general/DeleteItem';
import { Link } from 'react-router-dom';
import { deleteCarMod } from '../../../api/carmods';
import { deletePublication, getPublications } from '../../../api/publications';
import PublicationModalAdd from './PublicationModalAdd';

const btnWrapper = {
    display: "flex",
    justifyContent: "center"
}

const linkColor = {
    color: "white"
}


const PublicationsTable = () => {
    const [publications, setPublications] = useState([]);

    async function loadData() {
        const res = await getPublications();
        setPublications(res.data)
    }
    useEffect(async () => {
        loadData();
    }, [])

    console.log(publications)


    return (
        <>
            <Table celled style={{ width: 800 }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>№</Table.HeaderCell>
                        <Table.HeaderCell>Заголовок</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Пользователь</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Модель</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Действия</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row style={{ padding: 30 }}>
                        {
                            publications.length <= 0 && <span style={{ margin: 30 }}>Данных нет</span>
                        }
                    </Table.Row>
                    {
                        publications.length > 0 && publications.map((publication, i) => (
                            <Table.Row key={publication.id}>
                                <Table.Cell>{publication.id}</Table.Cell>
                                <Table.Cell>{publication.name}</Table.Cell>
                                <Table.Cell>{publication.user.email}</Table.Cell>
                                <Table.Cell textAlign="center"> <img src={publication.car.picture} width="25px" style={{ marginRight: 20 }} />
                                    {publication.car.name}
                                </Table.Cell>
                                <Table.Cell width='5'>
                                    <div style={btnWrapper}>
                                        <Link to={`/admin/publications/${publication.id}/`} className={linkColor}>
                                            Редактировать
                                        </Link>
                                        <DeleteItem fetch={deletePublication} refetch={getPublications} id={publication.id} />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <PublicationModalAdd loadData={loadData} />
        </>
    );
}

export default PublicationsTable;