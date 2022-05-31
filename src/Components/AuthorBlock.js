import React from 'react';

class AuthorBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            data: this.props.data
        };
    }

    render() {
        const data = this.state.data;
        return (
            <a className='author-block' href={data.link}>
                <img src='link' alt={data.authorBlockPhoto} />
                <h3 className='author-block-title'>{data.title}</h3>
                <p className='author-block-content'>{data.content}</p>
            </a>
        )
    }

}

export default AuthorBlock;