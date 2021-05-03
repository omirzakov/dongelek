import React, { useEffect, useState } from "react";
import { Button, Container, Form, Grid, Header, Input, Loader, Progress, Segment } from "semantic-ui-react";
import { getBanks } from "../../api/bank";
import './style.scss';
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router";
import { validateToken } from "../../api/login";
import { getProfile } from "../../api/user";
import { getPublication } from "../../api/publications";
import { addCredit } from "../../api/credit";

const years = [
    {
        year: 3,
        percent: 0
    },
    {
        year: 6,
        percent: 2
    },
    {
        year: 12,
        percent: 5,
    },
    {
        year: 24,
        percent: 10,
    },
    {
        year: 48,
        percent: 12,
    },
    {
        year: 60,
        percent: 16,
    }
];

const initState = {
    month: null,
    totalSum: null,
    bank: null,
    iin: "",
    totalSum: null,
    user: null,
    publication: null,
}

const CreditPage = () => {
    const { id } = useParams();
    const [banks, setBanks] = useState([]);
    const [progress, setProgress] = useState(0);
    const [credit, setCredit] = useState(initState);
    const [publication, setPublication] = useState({});
    const [user, setUser] = useState({});

    const getPublicationInfo = async () => {
        const res = await getPublication(id);
        console.log(res)
        setPublication(res.data);
    }


    const getCurrentUser = async () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            const res = await validateToken(token);

            if (res.data) {
                const data = await getProfile(token);
                console.log(data)
                setUser(data);
            }
        }
    }

    useEffect(async () => {
        getCurrentUser();
        getPublicationInfo();

        const res = await getBanks();
        const { data } = res;
        setBanks(data);
    }, []);

    useEffect(() => {
        if (credit.iin.length > 11) {
            setCredit({ ...credit, iin: credit.iin.slice(0, 11) })
        }

        if (credit.bank || credit.month) {
            setProgress(20);
        }


        if (credit.bank && credit.month) {
            setProgress(60);
        }

        if (credit.iin.length === 11 && credit.bank && credit.month) {
            setProgress(100);
        }


    }, [credit]);

    const selectOption = (value, name) => {
        setCredit({ ...credit, [name]: value });
    }

    const activeBank = (bank) => {
        return bank === credit.bank ? "active-item" : "";
    }

    const activeYear = (year) => {
        // return year === credit.month.year ? "active-item" : "";
        return ""
    }



    const lastDebYear = (month) => {
        const today = new Date();
        let year = today.getFullYear();
        const debtYears = month / 12;
        year = year + debtYears;
        return Math.floor(year);
    }

    const getTotalSum = () => {
        const carPrice = publication.price;

        if (credit.month.year === 0) {
            return carPrice;
        }
        let percent = credit.month.percent / 10;
        let total = carPrice * (10 + percent);

        // setCredit({...credit, totalSum: total})
        return Math.floor(total);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            id: null,
            month: credit.month.year,
            totalSum: getTotalSum(),
            iin: credit.iin,
            bank: credit.bank,
            user: user,
            publication: publication
        }

        const res = await addCredit(data);

        if(res.status === 200) {
            toast.success("Ваш кредит успешно одобрен");
            window.location.replace("/user/credits/")
        }
        else {
            toast.error("Пожалуйста, сделайте авторизацию чтобы узнать результат");
            setTimeout(() => {
                window.location.replace("/login/");
            }, 3000);
        }
    }


    return (
        <Container>
            <Progress percent={progress} indicating />
            <Header as="h1" color="orange">Оформление кредита</Header>
            <br />
            <Form onSubmit={handleSubmit}>
                <Header as="h2">Выберите банк</Header>
                <Grid>
                    {
                        banks.length > 0 && banks.map(bank => (
                            <Grid.Column style={{ margin: "10px 30px 15px 0" }}>
                                <img onClick={() => selectOption(bank, "bank")} className={`bank-item ${activeBank(bank)}`} src={bank.picture} width="90px" height="90px" />
                            </Grid.Column>
                        ))
                    }
                </Grid>
                {
                    credit.bank && <Header as="h2">Вы выбрали: {credit.bank.name}</Header>
                }
                <Header as="h2">Время</Header>
                <div style={{ display: "flex" }}>
                    {
                        years && years.length > 0 && years.map((data, i) => (
                            <Grid.Column key={i} style={{ margin: "10px 20px 15px 0" }}>
                                <div onClick={() => selectOption(data, "month")} className={`year-item ${activeYear(data.year)}`} >
                                    {data.year}
                                </div>
                            </Grid.Column>
                        ))
                    }
                </div>
                {
                    credit.month && credit.bank &&
                    <Header as="h2" color="orange">Ставка {credit.month.percent}%</Header>
                }
                {
                    credit.month &&
                    <div className="year-info">
                        <p className="month-text">Вы выбрали {credit.month.year} месяцев</p>
                        <p className="last-year">Погашение долга закончится в <span className="debt-year">{lastDebYear(credit.month.year)}</span></p>
                    </div>

                }
                {
                    credit.month && publication && 
                    <Header as="h2" style={{ margin: "0 0 10px 0" }}>
                        Общая сумма кредитования: {getTotalSum()} тг
                    </Header>
                }
                <Form.Group>
                    <Input onChange={(e) => setCredit({ ...credit, iin: e.target.value })} name="iin" value={credit.iin} type="number"  placeholder='Введите ИИН' style={{ width: "100%", minHeight: 60, fontSize: 20 }} />
                </Form.Group>
                {
                    progress === 100 &&
                    <Header as="h2" color="green">Все поля успешно заполнены</Header>
                }
                <Form.Group>
                    <Button color="red" onClick={() => { setCredit(initState); setProgress(0)}}>Очистить результат</Button>
                    <Button color="green" type="submit">Узнать результат</Button>
                </Form.Group>
            </Form>
            <ToastContainer autoClose={8000} 
                            position="top-center" />
        </Container>

    );
}
export default CreditPage;