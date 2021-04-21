import React, { useEffect, useState } from 'react';

import { Button, Label, Menu, Table } from 'semantic-ui-react';
import DeleteItem from '../../general/DeleteItem';
import { Link } from 'react-router-dom';
import { deleteCarMod, getCarMods } from '../../../api/carmods';
import CarModModalAdd from './CarModModalAdd';

const btnWrapper = {
    display: "flex",
    justifyContent: "center"
}

const linkColor = {
    color: "white"
}


const CarModsTable = () => {
    const [carMods, setCarMods] = useState([])

    async function loadData() {
        const res = await getCarMods();
        setCarMods(res.data)  
    }
    

    useEffect(async () => {
        loadData();
    }, [])

    return (
        <>
            <Table celled style={{ width: 800 }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>№</Table.HeaderCell>
                        <Table.HeaderCell>Название</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Управление</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        carMods.map((carmod, i) => (
                            <Table.Row key={carmod.id}>
                                <Table.Cell>{carmod.id}</Table.Cell>
                                <Table.Cell>{carmod.modification}</Table.Cell>
                                <Table.Cell width='5'>
                                    <div style={btnWrapper}>
                                        <Link to={`/admin/carmods/${carmod.id}/`} className={linkColor}>
                                            Редактировать
                                    </Link>
                                        <DeleteItem fetch={deleteCarMod} refetch={getCarMods} id={carmod.id} />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <CarModModalAdd refetch={loadData} />
        </>
    );
}

export default CarModsTable;