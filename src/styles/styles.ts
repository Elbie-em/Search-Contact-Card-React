import { makeStyles } from '@material-ui/core/styles'
import { group } from 'console';

const useStyles = makeStyles(() => ({
  scContainer: {
    position: 'relative',
    width: '366.17px',
    height: '145px',
  },
  rect174: {
    position: 'absolute',
    left: '1.13%',
    right: '0%',
    top: '15.86%',
    bottom: '28.28%',
    background: '#f9f9fC',
    borderRadius: '8px 8px 0px 0px',
  },
  rect175: {
    position: 'absolute',
    left: '1.13%',
    right: '0%',
    top: '71.72%',
    bottom: '0%',
    background: '#eae8fe',
    borderRadius: '0px 0px 8px 8px',
  },
  profileCard: {
    position: 'absolute',
    left: '0%',
    right: '72.8%',
    top: '0%',
    bottom: '33.79%',
    zIndex: 1,
  },
  group622: {
    position: 'absolute',
    width: '88.75px',
    height: '98px',
    left: '6px',
    top: '-6px',
  },
  scoreChart: {
    position: 'absolute',
    width: '88.75px',
    height: '88.75px',
    left: 'calc(50% - 88.75px/2 + 0.59px)',
    top: 'calc(50% - 88.75px/2 - 0.38px)',
  },
  profileImage: {
    position: 'absolute',
    left: '6.7%',
    right: '-7.63%',
    top: '4%',
    bottom: '-8.65%',
    height: '70px',
    width: '70px'
  },
  contactName: {
    position: 'absolute',
    left: '28.61%',
    right: '25.5%',
    top: '24.83%',
    bottom: '61.38%',
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '10px'
  },
  connectionStatus: {
    position: 'absolute',
    left: '28.61%',
    right: '21.94%',
    top: '42.07%',
    bottom: '46.9%',
    fontFamily: 'Poppins, sans-serif',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '30px',
    color: '#818181',
    mixBlendMode: 'normal',
  }
}));

export default useStyles;