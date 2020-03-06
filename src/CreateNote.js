import { fade, makeStyles } from '@material-ui/core/styles';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import React from 'react';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        padding: 5,
        borderRadius: 4,
        marginBottom: 10,
        color: '#e2e2e1',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
        },
        '&$focused': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));

const useStyles1 = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        padding: 5,
        borderRadius: 4,
        marginBottom: 10,
        color: '#e2e2e1',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
        },
        '&$focused': {
            borderColor: theme.palette.primary.main,
            marginBottom: 5
        },
    },
    focused: {},
}));

function CreateNote() {
    const classes = useStyles();
    const classesLabel = useStyles1();

    function createNote() {

    }

    return (
        <form noValidate autoComplete="off">
            <div>
                <TextField
                    id="title"
                    label="Title"
                    InputLabelProps={{ classes: classesLabel, disableUnderline: true }}
                    InputProps={{ classes, disableUnderline: true }} />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={createNote}
                    startIcon={<AddCircleIcon />}
                >
                    Create New ToDo
                </Button>
            </div>
        </form>
    );
}

export default CreateNote;