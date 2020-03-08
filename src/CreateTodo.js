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

const useFormWidthStyle = makeStyles(theme => ({
    root: {
        width: "90%"
    }
}))

const useStylesForLabel = makeStyles(theme => ({
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

function CreateTodo(props) {
    const classes = useStyles();
    const classesLabel = useStylesForLabel();
    const classesForm = useFormWidthStyle();

    const [values, setValues] = React.useState({
        title: undefined,
    });

    async function createTodo(e) {
        e.preventDefault();
        try {
            const note = await props.noteRepository.create(values.title);
            props.history.push({
                pathname: '/notes/' + note.id,
                state: { note: note }
            });
        } catch (e) {
            console.log(e);
        }
    }

    function updateTitle(e) {
        e.preventDefault();
        setValues({ ...values, title: e.target.value })
    }

    return (
        <form className={classes.maxWidthStyle} noValidate autoComplete="off">
            <div >
                <TextField
                    id="title"
                    label="Title"
                    onChange={updateTitle}
                    className={classesForm.root}
                    InputLabelProps={{ classes: classesLabel }}
                    InputProps={{ classes }} />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={createTodo}
                    startIcon={<AddCircleIcon />}
                >
                    Create New ToDo
                </Button>
            </div>
        </form>
    );
}

export default CreateTodo;