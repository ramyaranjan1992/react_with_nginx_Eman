import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MandateRecordCard from '../MandateRecordCard/MandateRecordCard'

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    // margin:'10%',
  },
});

function MandateRecordDisplay(props) {
  const classes = useStyles();
  const mandateList=useSelector((state)=>state.entities.emandateFilterList.mandateList)
  return (
    <div className={classes.root}>
      {mandateList.map(listItem=>
        <MandateRecordCard listItem={listItem}/>
      )}
    </div>
  );
}

export default MandateRecordDisplay;