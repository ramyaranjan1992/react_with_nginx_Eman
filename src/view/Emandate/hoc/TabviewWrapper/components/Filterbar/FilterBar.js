import React from 'react';
import Searchbar from '../Searchbar/Searchbar'
import './FilterBar.css'
import Dropdown  from '../Dropdown/Dropdown'
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';

const organisationLists = [
    { key: "0", value: "Select an Organisation" },
    { key: "1", value: "Sabpaisa" },
    { key: "2", value: "YoYoPay" },
    { key: "3", value: "SRS Live Tech" },
  ];

function FilterBar(props) {
    const numberOfRecords=10
    return (
        <div>
            <div className='filterbar__container'>
                <Grid container justify="center" alignItems="center" spacing={4}>
                    <Grid item container xs={12} md={5} alignItems="center" spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div>Mandates ({numberOfRecords} Records)</div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div><Searchbar /></div>
                        </Grid>                        
                    </Grid>
                    <Grid item container xs={12} md={4} justify='space-between' alignItems='center'>
                        <Grid item xs={12} sm={5} >
                            <Dropdown label='Organisation' options={organisationLists}/>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Dropdown label='Organisation' options={organisationLists}/>
                        </Grid>                        
                    </Grid>
                    <Grid item container xs={12} md={3} justify='space-evenly' alignItems='center' spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" color="primary">
                                e-Mandate Request
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <ButtonBase>
                                <div style={{backgroundColor:'white', borderRadius:'50%'}}>
                                    <GetAppIcon />
                                </div>
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default FilterBar;