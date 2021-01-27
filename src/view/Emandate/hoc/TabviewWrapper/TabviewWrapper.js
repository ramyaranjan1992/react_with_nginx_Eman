import React, { useEffect } from 'react';
import Filterbar from '../../hoc/TabviewWrapper/components/Filterbar/FilterBar'
import { useDispatch } from "react-redux";

//Reducers---
import {fetchEmandateList} from '../../../../store/emandateList'


function TabviewWrapper(props) {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchEmandateList())
        return () => {};
        }, []);
    
    return (
        <div>
            {/* <h3>Tab View Wrapper</h3> */}
            <Filterbar />
            {props.children}
        </div>
    );
}

export default TabviewWrapper;