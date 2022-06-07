import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import AuthorBlock from '../components/AuthorBlock';
import { Container, Row, Col } from 'react-bootstrap';
import './AuthorBlockListPage.css';


const AuthorBlockListPage = (props) => {
    const [data, setData] = useState([]);
    const [searchState, setSearchState] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promise = await fetch('http://localhost:3030/api/authorblock/list');
                const json = await promise.json();
                setData(await json);
            } catch (err) {
                console.error('error:', err.message);
            }
        }
        fetchData();
    }, [])

    const handleSearch = (keyword) => {
        setSearchState(true);
        setData(data.filter((product) => {
            return Object.keys(product).some((key) => {
                return product[key]
                    .toString()
                    .toLowerCase()
                    .includes(
                        keyword
                            .toString()
                            .toLowerCase()
                    )
            });
        }));
    }

    return (
        <div className='author-block-page'>
            <Container>
                <Row className='justify-content-center' sm={1} md={1} lg={1}>
                    <Col sm={12} md={9} lg={9}>
                        <SearchBar onSearch={handleSearch} placeholder="請輸入作者或主題名稱" searchState={searchState} />
                    </Col>
                </Row>
                {
                    data.map((data, index) => {
                        return (
                            <Row key={index} className='justify-content-center' sm={1} md={1} lg={1}>
                                <Col sm={8} md={8} lg={8}>
                                    <AuthorBlock data={data} />
                                </Col>
                            </Row>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default AuthorBlockListPage;