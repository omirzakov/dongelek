import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import { Button, Label, Menu, Table } from 'semantic-ui-react';
import { deleteCategory, getCategories } from '../../../api/categories';
import DeleteItem from '../../general/DeleteItem';
import CategoryModalAdd from './CategoryModalAdd';


const btnWrapper = {
    display: "flex",
    justifyContent: "center"
}

const linkColor = {
    color: "white"
}

const CategoriesTable = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
    }, []);

    return (
        <>
            <div>
                <Table celled style={{ width: 800, fontSize: "15px" }}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Название</Table.HeaderCell>
                            <Table.HeaderCell>Описание</Table.HeaderCell>
                            <Table.HeaderCell>Фото</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Управление</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            categories.map((category, i) => (
                                <Table.Row key={category.id}>
                                    <Table.Cell>{category.name}</Table.Cell>
                                    <Table.Cell>{category.description}</Table.Cell>
                                    <Table.Cell>{category.picture}</Table.Cell>
                                    <Table.Cell width='5'>
                                        <div style={btnWrapper}>
                                            <Link to={`/admin/category/${category.id}/`} className={linkColor}>
                                                Редактировать
                                                </Link>
                                            <DeleteItem fetch={deleteCategory} refetch={getCategories} id={category.id} />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                    {/* <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer> */}
                </Table>
            </div>
            <CategoryModalAdd />
        </>
    );
}
export default CategoriesTable;
