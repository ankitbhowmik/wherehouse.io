import React, { useState } from 'react'
import Button from '../../atom/Button/Button'
import {Card} from '../../atom/Card/Card'
import {FilterList, FilterText} from './Filter.style';
import { fetchLaunch } from '../../../redux/launch/launch.action';
import { useDispatch } from 'react-redux';

const AllButton = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

const Filter = () => {
    const [land_success, setLand_success] = useState("");
    const [launch_success, setLaunch_success] = useState("");
    const [launch_year, setLaunch_year] = useState("");
    const dispatch = useDispatch();
    
    const filterYear = (year)=>{
        setLaunch_year(year);
        dispatch(fetchLaunch(land_success, launch_success, year));
    }
    //land and launch parameter must be string either "true" or "false"
    const filterLand = (land)=>{
        setLand_success(land);
        dispatch(fetchLaunch(land, launch_success, launch_year));
    }
    const filterLaunch = (launch)=>{
        setLaunch_success(launch);
        dispatch(fetchLaunch(land_success, launch, launch_year));
    }

    return (
        <Card>
            <h2 style={{margin:"0 0 -15px"}}>Filters</h2>
            <FilterText>Launch Year</FilterText>
            <FilterList>
                {
                    AllButton.map(year => <Button active={year===launch_year} onClick={()=>filterYear(year)} key={year}>{year}</Button>)
                }
            </FilterList>
            <FilterText>SuccessFul Launch</FilterText>
            <FilterList>
                <Button active={launch_success === "true"} onClick={()=>filterLaunch("true")}>True</Button>
                <Button active={launch_success === "false"} onClick={()=>filterLaunch("false")}>False</Button>
            </FilterList>
            <FilterText>SuccessFul Landing</FilterText>
            <FilterList>
                <Button active={land_success === "true"} onClick={()=> filterLand("true")}>True</Button>
                <Button active={land_success === "false"} onClick={()=> filterLand("false")}>False</Button>
            </FilterList>
            <br/>
            <br/>
        </Card>
    )
}

export default Filter
