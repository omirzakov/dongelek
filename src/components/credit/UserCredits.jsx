import React, { useEffect, useState } from "react";
import { Button, Container, Header, Icon, Segment } from "semantic-ui-react";
import { getCredits } from "../../api/credit";
import { Link } from 'react-router-dom';
import "./style.scss";

const UserCredits = () => {
    const [credits, setCredits] = useState([]);

    useEffect(async () => {
        const token = localStorage.getItem("jwt");
        const res = await getCredits(token);

        setCredits(res.data);
    }, [])



    return (
        <Container>
            <Header as="h1">Все одобреные кредиты</Header>
            {
                credits.length > 0 &&
                credits.map((credit, i) => (
                    <div className="credit-item" key={i}>
                        <Icon name='pdf file outline' />
                        <a href={`http://localhost:8000/download-pdf/${credit.id}`}>Скачать PDF</a>
                        <p>{credit.publication.name}</p>
                    </div>
                ))
            }
        </Container>
    );
}
export default UserCredits;