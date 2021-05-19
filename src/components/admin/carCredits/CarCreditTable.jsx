import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Dimmer, Icon, Label, Loader, Segment, Table } from 'semantic-ui-react';
import { getAllCredits } from '../../../api/credit';
import { API_URL } from '../../../defroutes/api';

const CarCreditTable = () => {
    const [credits, setCredits] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        const res = await getAllCredits();

        setCredits(res.data);
        setLoading(false)
    }, [])


    if(loading) {
        return (
            <Segment>
                <Dimmer active>
                    <Loader />
                </Dimmer>
            </Segment>
        )
    }

    console.log(credits)
 
    return (
        <>
            <Table celled  style={{minWidth:"800px"}}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            Кредиты на авто
                            </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        credits && credits.map((citem, i) => (
                        <Table.Row key={i} style={{fontSize:15}}>
                            <Table.Cell>
                                <Label ribbon>ID: {citem.id}</Label>
                            </Table.Cell>   
                            <Table.Cell>
                            <Label pointing="right" color='black'>Авто</Label> {citem.publication.name}
                            </Table.Cell>
                            <Table.Cell>
                                <Label pointing="right" color='black'>Банк</Label> {citem.bank.name}
                            </Table.Cell>
                            <Table.Cell>
                                <Label pointing="right" color='black'>ИИН</Label> {citem.iin}
                            </Table.Cell>
                            <Table.Cell>
                                <a href={`${API_URL}/download-pdf/${citem.id}`} download>
                                    <Icon name='file outline' />
                                    Печать
                                    </a>
                            </Table.Cell>
                        </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    )
}
export default CarCreditTable