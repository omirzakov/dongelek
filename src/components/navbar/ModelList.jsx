import React, { useEffect, useState } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { getCars } from '../../api/cars';

const ModelList = () => {
    const [models, setModels] = useState([]);

    useEffect(async () => {
        const res = await getCars();
        setModels(res.data);
    }, [])


    console.log(models)
    return (
        <Grid >
            {
                models && models.length > 0 &&
                models.map((model) => (
                    <Grid.Column width="16" style={{marginLeft:20}}>
                        <Header as="h4">{model.name}</Header>
                    </Grid.Column>
                ))
            }
        </Grid>
    )
}


export default ModelList;