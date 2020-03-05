import './Main.css'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ListIcon from '@material-ui/icons/List';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
    },
}));

function Main() {

    const classes = useStyles();

    return (
        <div>
            <p>A <strong>simple</strong> ToDo app</p>
            <p>Create from your own <strong>template</strong></p>
            <p><strong>No Internet</strong> required</p>
            <p>Created by a traveller for travellers</p>
            <div class="buttons">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<AddCircleIcon />}
                >
                    Create New ToDo
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ListIcon />}>
                    My ToDos
                    </Button>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<FileCopyIcon />}
                >
                    Templates
      </Button>
            </div>
        </div>
    );
}

export default Main;