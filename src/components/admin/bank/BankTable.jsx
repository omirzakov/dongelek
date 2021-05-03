import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { deleteBank, getBanks } from "../../../api/bank";
import DeleteItem from "../../general/DeleteItem";
import BankAdd from "./BankAdd";



const BankTable = () => {
    const [banks, setBanks] = useState([]);

    useEffect(async () => {
        const res = await getBanks();
        setBanks(res.data);
    }, [])



    return (
        <div>


            <Table celled style={{ width: 800 }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>№</Table.HeaderCell>
                        <Table.HeaderCell>Название</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Действия</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {
                        banks && 
                        banks.map(bank => (
                            <Table.Row key={bank.id}>
                                <Table.Cell>{bank.name}</Table.Cell>
                                <Table.Cell>
                                    <img src={bank.picture} width="50px" alt={bank.name} />
                                </Table.Cell>
                                <Table.Cell>
                                    <DeleteItem fetch={deleteBank} id={bank.id} />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <BankAdd />
        </div>
    );
}
export default BankTable;