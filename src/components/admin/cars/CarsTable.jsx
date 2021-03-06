import React, { useEffect, useState } from 'react';

import { Button, Label, Menu, Table } from 'semantic-ui-react';
import { getCars, deleteCar } from '../../../api/cars';
import DeleteItem from '../../general/DeleteItem';
import { Link } from 'react-router-dom';
import CarModalAdd from './CarModalAdd';

const btnWrapper = {
    display: "flex",
    justifyContent: "center"
}

const linkColor = {
    color: "white"
}


const CarsTable = () => {
    const [cars, setCars] = useState([])

    async function loadData() {
        const res = await getCars();
        setCars(res.data)  
    }

    useEffect(async () => {
        loadData();
    }, [])

    return (
        <>
            <Table celled style={{ width: 800 }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Название</Table.HeaderCell>
                        <Table.HeaderCell>Описание</Table.HeaderCell>
                        <Table.HeaderCell>Логотип</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Управление</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        cars.map((car, i) => (
                            <Table.Row key={car.id}>
                                <Table.Cell>{car.name}</Table.Cell>
                                <Table.Cell>{car.description}</Table.Cell>
                                <Table.Cell style={{display:"flex", justifyContent:"center"}}>
                                    <img src={car.picture} alt={car.name} width="50px" />
                                </Table.Cell>
                                <Table.Cell width='5'>
                                    <div style={btnWrapper}>
                                        <Link to={`/admin/cars/${car.id}/`} className={linkColor}>
                                            Редактировать
                                    </Link>
                                        <DeleteItem fetch={deleteCar} refetch={getCars} id={car.id} />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <CarModalAdd loadData={loadData} />
        </>
    );
}

export default CarsTable;