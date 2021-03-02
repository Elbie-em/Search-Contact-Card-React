import { Avatar,Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import useStyles from '../styles/styles'
import GradientProgress from './GradientProgress';

interface SContactProps {
  name: string;
  imgUrl: string;
  score: number;
}

const SearchContactCard = ({name,imgUrl,score}: SContactProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.scContainer}>
      <div className={classes.profileCard}>
        <div className={classes.group622}>
         <Avatar className={classes.scoreNumber}>{score}</Avatar>
          <div className={classes.scoreChart}>
            <GradientProgress value={score} size={80} />
            <Avatar className={classes.profileImage} alt="randomUser" src={imgUrl} />
          </div>
        </div>
      </div>
      <div className={classes.rect174}>
        <Typography className={classes.contactName}>
          {name}
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
