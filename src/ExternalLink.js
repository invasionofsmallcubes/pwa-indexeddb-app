import React from 'react';

import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';


const useStyles = makeStyles(theme => ({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      marginBottom: -2
    },
  }));
  

function ExternalLink(props) {
    const classes = useStyles();

    return (
    <Link className={classes.Link} target="_blank" 
    rel="noopener" href={props.link} 
    underline="hover" >{props.name} <LaunchIcon className={classes.icon} /> </Link>);
}

export default ExternalLink