import React, { useState, useEffect } from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import ScreenOverlay from '../ScreenOverlay/ScreenOverlay';
import PlayerImage from '../../Assets/Images/Player.png';
import ComputerImage from '../../Assets/Images/Computer.png';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  paper: {
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  boardGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '400px',
    width: '400px',
    backgroundColor: 'rgba(61,61,68,1)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
    paddingLeft: '55px',
    textAlign: 'left',
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 'auto',
    width: 'auto',
    marginBottom: '50px',
  },
}));

const useStylesCustomInput = makeStyles(theme => ({
  root: {
    border: '2px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    color: 'rgba(255,255,255,0.6)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {},
    '&$focused': {
      color: 'rgba(255,255,255,1)',
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

function CustomTextField(props) {
  const classes = useStylesCustomInput();
  return (
    <TextField
      InputProps={{ classes, disableUnderline: true }}
      inputProps={{
        maxLength: 22,
      }}
      {...props}
    />
  );
}

const SelectionMain = props => {
  const classes = useStyles();
  const { tempPlayers, setTempPlayers } = props;

  const handleChange = e => {
    let id = -1;
    if (e.currentTarget.id === 'player-name-input') {
      id = 0;
    } else {
      id = 1;
    }
    const updatedPlayers = [...tempPlayers];
    updatedPlayers[id].name = e.currentTarget.value;
    setTempPlayers(updatedPlayers);
  };

  return (
    <div>
      <Paper>
        <div className={classes.boardGrid}>
          <div className={classes.container}>
            <form noValidate>
              <div className={classes.userContainer}>
                <div>
                  <img src={PlayerImage} alt="Player" />
                </div>
                <CustomTextField
                  label="Name"
                  className={classes.margin}
                  value={tempPlayers[0].name}
                  onChange={handleChange}
                  variant="filled"
                  id="player-name-input"
                />
              </div>
              <div className={classes.userContainer}>
                <div>
                  <img src={ComputerImage} alt="Computer" />
                </div>
                <CustomTextField
                  label="Name"
                  className={classes.margin}
                  value={tempPlayers[1].name}
                  onChange={handleChange}
                  variant="filled"
                  id="computer-name-input"
                />
              </div>
            </form>
          </div>
          <ScreenOverlay />
        </div>
      </Paper>
    </div>
  );
};

export default SelectionMain;
