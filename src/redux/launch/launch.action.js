import { FETCH_LAUNCH_REQUEST, FETCH_LAUNCH_SUCCESS, FETCH_LAUNCH_FAIL } from "./launch.type"

// will make loading to true
const fetchRequest = ()=>({type: FETCH_LAUNCH_REQUEST});

//will make loading to false and store all launch data
const fetchSuccess = (data)=> ({type: FETCH_LAUNCH_SUCCESS, payload: data})

//if failure occured frontend error message will be shown
const fetchFail = (err)=> ({type: FETCH_LAUNCH_FAIL, payload: err});

export function fetchLaunch(land_success="", launch_success="", launch_year=""){
    return async function(dispatch){
        dispatch(fetchRequest());
        try{
            const url = `https://api.spaceXdata.com/v3/launches?limit=100${launch_success ? `&launch_success=${launch_success}`: ""}${land_success ? `&land_success=${land_success}`: ""}${launch_year ? `&launch_year=${launch_year}`: ""}`;
            const res = await fetch(url);
            const data = await res.json();

            //storing only required data into redux as api is very large and we don't need all the data in frontend
            const payload = data.map( item => ({
                flight_number: item.flight_number,
                mission_name : item.mission_name,
                mission_id : item.mission_id,
                launch_year : item.launch_year,
                launch_success: item.launch_success,
                land_success: item.rocket.first_stage.cores[0].land_success,
                mission_patch_small : item.links.mission_patch_small
            }) )

            //storing only required data into redux;
            dispatch(fetchSuccess(payload));
        }catch(err){
            console.log("err occured",err);
            dispatch(fetchFail(err));
        }
    }
}