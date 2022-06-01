import React from 'react';
import SearchBar from '../components/SearchBar';
import AuthorBlock from '../components/AuthorBlock';
import { Container, Row, Col } from 'react-bootstrap';
import './AuthorBlockListPage.css';
import authorBlockData from '../authorBlockData.json';
const Data = [];

class AuthorBlockListPage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: authorBlockData || [],
            searchState: false,
        };
    }

    handleSearch(keyword) {
        this.setState({
            searchState: true,
            data: Data.filter((product) => {
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
            })
        })
    }

    render() {
        return (
            <div className='author-block-page'>
                <Container>
                    <Row className='justify-content-center' sm={1} md={1} lg={1}>
                        <Col sm={12} md={9} lg={9}>
                            <SearchBar onSearch={() => this.handleSearch()} placeholder="請輸入作者或主題名稱" searchState={this.state.searchState} />
                        </Col>
                    </Row>
                    {
                        this.state.data.map((data, index) => {
                            return (
                                <Row key={index} className='justify-content-center' sm={1} md={1} lg={1}>
                                    <Col sm={8} md={8} lg={8}>
                                        <AuthorBlock blockData={data} />
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </Container>
            </div>
        )
    };
}

export default AuthorBlockListPage;