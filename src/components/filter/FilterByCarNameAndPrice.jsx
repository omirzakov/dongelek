import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Grid, Header, Input } from 'semantic-ui-react';
import { getCars } from '../../api/cars';
import { getPublicationsByModelAndPrice } from '../../api/publications';
import './style.scss';



const FilterByCarNameAndPrice = ({ setPublications }) => {
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState({ from: 0, to: 10000000, name: "" });
    const [result, setResult] = useState([]);

    useEffect(async () => {
        const res = await getCars();
        const optionGenerate = res.data.map((option) => ({
            key: option.id,
            text: option.name,
            value: option.name,
            image: {
                src: option.picture
            }
        }))
        setOptions(optionGenerate)
    }, []);

    const handleChangeSelect = (e, { value }) => {
        setSearch({ ...search, name: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPublications(result);
    }

    const handleChangePrice = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    }

    useEffect(async () => {
        let { name, from, to } = search;

        if (name.length > 0) {
            const res = await getPublicationsByModelAndPrice(name, from, to);
            setResult(res.data);
        }
    }, [search])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Dropdown
                    placeholder='Выберите марку'
                    fluid
                    selection
                    onChange={handleChangeSelect}
                    options={options}
                />
                <Grid style={{ marginTop: 5 }}>
                    <Grid.Column width="8">
                        <Input name="from" value={search.from} onChange={handleChangePrice} style={{ width: "100%" }} label='От' placeholder='тг' />
                    </Grid.Column>
                    <Grid.Column width="8">
                        <Input name="to" value={search.to} onChange={handleChangePrice} style={{ width: "100%" }} label='До' placeholder='тг' />
                    </Grid.Column>
                </Grid>
                {
                    search.name.length > 0 &&
                    <Header as="h3">Найденные объявления {result.length}</Header>
                }
                <Button color="green" type="submit" style={{ marginTop: 10 }}>
                    Поиск
                </Button>
            </form>

        </div>
    )
}
export default FilterByCarNameAndPrice;