import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";


const ScreenLoader = () => {
    return (
        <Segment>
            <Dimmer active>
                <Loader size='mini'>Загрузка...</Loader>
            </Dimmer>
        </Segment>
    );
}
export default ScreenLoader;