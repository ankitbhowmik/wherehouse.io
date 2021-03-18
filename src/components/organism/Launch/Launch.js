import React from 'react'
import { Card } from '../../atom/Card/Card'
import {Image} from '../../atom/Image/Image';
import { LaunchName, LaunchDetail, Text } from './Launch.style';
import Set from '../../molecule/Set/Set';

const Launch = (props) => {
    const {mission_name,
        mission_id,
        launch_year,
        launch_success,
        land_success,
        mission_patch_small} = props;
    return (
        <Card>
            <Image src={mission_patch_small}/>
            <LaunchDetail>
                <LaunchName>{mission_name} #{mission_id}</LaunchName>
                <div>
                    <Text size="1.2em">Mission Id : </Text>
                    <ul>
                        <li className="blue">{"{ list Missions Ids }"}</li>
                    </ul>
                </div>
                <Set field="Launch Year" value={launch_year.toString()}/>
                <Set field="Successful launch" value={launch_success ? "true" : "false"}/>
                <Set field="Successfull landing" value={land_success ? "true" : "false"}/>

            </LaunchDetail>
        </Card>
    )
}

export default Launch
