import { Avatar,Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import useStyles from '../styles/styles'
import GradientProgress from './GradientProgress';

const SearchContactCard = () => {
  const classes = useStyles({});
  return (
    <div className={classes.scContainer}>
      <div className={classes.profileCard}>
        <div className={classes.group622}>
         <Avatar className={classes.scoreNumber}>{75}</Avatar>
          <div className={classes.scoreChart}>
            <GradientProgress value={75} size={80} />
            <Avatar className={classes.profileImage} alt="randomUser" src="https://randomuser.me/api/portraits/women/56.jpg" />
          </div>
        </div>
      </div>
      <div className={classes.rect174}>
        <Typography className={classes.contactName}>
          Gina Snelly
        </Typography>
        <Typography className={classes.connectionStatus}>
          nessuna connessione
        </Typography>
        <AddIcon className={classes.btnAdd}/>
      </div>
      <div className={classes.rect175}>
        <Typography className={classes.exLink}>
          Sta già condividendo <u><b>Disney Plus</b></u>
        </Typography>
      </div>
    </div>
  )
}

export default SearchContactCard
