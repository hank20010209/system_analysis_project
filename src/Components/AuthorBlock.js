import React, { useState } from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { IconButton } from "@material-ui/core";
import './AuthorBlock.css';
import { Link } from 'react-router-dom';


const AuthorBlock = (props) => {
    const [bookmark, setBookmark] = useState(false);
    const data = props.data;

    const handleBookmark = () => {
        setBookmark(!bookmark);
    }

    return (
        <div className='author-block d-flex flex-row'>
            <Link to={{ pathname: `/AuthorBlock/Page/${data.author_block_id}` }}>
                <img src={data.image_link} alt="author block" />
            </Link>
            <div className='w-100 d-flex flex-column'>
                <Link to={{ pathname: `/AuthorBlock/Page/${data.author_block_id}` }}>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <h3 className='author-block-title'>{data.title}</h3>
                        <p className='due-date'>{data.due_date || "~2022/12/31"}</p>
                    </div>
                    {/* <p className='author-block-content'>{data.content}</p> */}
                </Link>
                <div className='d-flex flex-row align-self-end'>
                    <IconButton onClick={handleBookmark}>
                        {
                            bookmark ?
                                <BookmarkAddedIcon /> :
                                <BookmarkAddIcon />
                        }
                    </IconButton>
                </div>
            </div>
        </div>
    )

}

export default AuthorBlock;