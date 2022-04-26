import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon sx={{ fontSize: 80 }} className="header__icon" />
            </IconButton>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="header" className='header__logo' />
                <IconButton>
                    <ForumIcon sx={{ fontSize: 80 }} className="header__icon" />
                </IconButton>
        </div>
    )
}

export default Header