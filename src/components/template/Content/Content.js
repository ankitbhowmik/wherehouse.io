import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {fetchLaunch} from '../../../redux/launch/launch.action';
import Filter from '../../organism/Filters/Filter';
import Launch from '../../organism/Launch/Launch';
import {ResponsiveCard, MainContent} from './Content.style';

const Content = () => {
    const dispatch = useDispatch();

    const {loading, error, launches} = useSelector(state=> state.launch);

    useEffect(()=>{
        dispatch(fetchLaunch());
    }, [dispatch])

    return (
        <MainContent>
            <div>
                <Filter/>
            </div>
            <div>
                {
                    loading 
                    ? <h1>loading...</h1> 
                    : launches.length === 0 && <h1>No Launches found according to your filter</h1>
                }
                {error && <h1>Some error occured</h1>}
                <ResponsiveCard>
                    {
                        launches.map(item=> <Launch 
                            key = {item.flight_number}
                            flight_number = {item.flight_number}
                            mission_name = {item.mission_name}
                            mission_id = {item.mission_id}
                            launch_year = {item.launch_year}
                            launch_success = {item.launch_success}
                            land_success = {item.land_success}
                            mission_patch_small = {item.mission_patch_small}
                        />)
                    }
                </ResponsiveCard>
            </div>
        </MainContent>
    )
}

export default Content
