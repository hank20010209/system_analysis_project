import React from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { IconButton } from "@material-ui/core";
import './AuthorBlock.css';
class AuthorBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.blockData,
            bookmark: false,
        };
    }

    handleBookmark() {
        this.setState({ bookmark: !this.state.bookmark });
    }

    render() {
        const data = this.state.data;
        return (
            <div className='author-block flex-direction-row'>
                <a href={data.link}>
                    <img src={data.imageLink} alt={data.authorBlockPhoto} />
                </a>
                <div className='flex-direction-column'>
                    <a href={data.link}>
                        <div className='flex-direction-row flex-justify-content-between flex-align-items-center'>
                            <h3 className='author-block-title'>{data.title}</h3>
                            <p className='due-date'>{data.due_date || "~2022/12/31"}</p>
                        </div>
                        <p className='author-block-content'>{data.content}</p>
                    </a>
                    <div className='flex-direction-row flex-align-self-end'>
                        <IconButton onClick={() => this.handleBookmark()}>
                            {
                                this.state.bookmark ?
                                    <BookmarkAddedIcon /> :
                                    <BookmarkAddIcon />
                            }
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }

}

export default AuthorBlock;