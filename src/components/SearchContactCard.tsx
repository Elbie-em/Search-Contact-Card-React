import React from 'react'
import useStyles from '../styles/styles'
import GradientProgress from './GradientProgress';

const SearchContactCard = () => {
  const classes = useStyles({});
  return (
    <div className={classes.scContainer}>
      <div className={classes.profileCard}>
        <div className={classes.group622}>
          <div className={classes.scoreChart}>
            <GradientProgress />
          </div>
        </div>
      </div>
      <div className={classes.rect174}>

      </div>
      <div className={classes.rect175}>

      </div>
    </div>
  )
}

export default SearchContactCard
