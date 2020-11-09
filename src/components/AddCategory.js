import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export const AddCategory = ({setCategories}) => {
    
    const classes = useStyles();
    
    const [inputValue, setinputValue] = useState('');
    
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <Paper className={classes.root} elevation={1}>
            <InputBase 
                className={classes.input}
                placeholder="Search Gifs"
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleSubmit}
            />
            <IconButton 
                className={classes.iconButton}
                aria-label="Search"
                onClick={handleSubmit}
            >
            <SearchIcon/>
            </IconButton>
            </Paper>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}