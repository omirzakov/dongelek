import React from "react";
import { Table } from "semantic-ui-react";



const UsersTable = () => {


    return (
        <div>


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
                    {/* <Table.Row style={{ padding: 30 }}>
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
                    } */}
                </Table.Body>
            </Table>
        </div>
    );
}
export default UsersTable;