import React from 'react'
import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  progress: {
    stroke: "url(#linearColors)"
  },
}));

interface GradProps {
  value: number;
  size: number;
}

const GradientProgress = ({value,size}: GradProps) => {
  const classes = useStyles({});
  return (
    <>
      <svg width="1" height="1">
        <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
          <stop offset="10%" stopColor="#FA5D75" />
          <stop offset="40%" stopColor="#7864F6" />
        </linearGradient>
      </svg>
      <CircularProgress variant="determinate" value={value} size={size} classes={{ circle: classes.progress }} />
    </>
  )
}

export default GradientProgress
