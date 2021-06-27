import React from 'react';


import Dev from '../img/dev.png';
import { Panel, PanelHeader, PanelHeaderBack, Placeholder, Button, Group, Card, Div, CardGrid } from '@vkontakte/vkui';
import { Icon28ArrowLeftOutline } from '@vkontakte/icons';

import './home.css';
const Development = ({ id, goBack }) => (
    <Panel id={id}>
        <PanelHeader separator={false} left={<Icon28ArrowLeftOutline fill="#BD00FF" onClick={goBack} />}></PanelHeader>

        <img className="img-home" src={Dev} alt="home-img" />

        <Placeholder
            header="This section is under development"
            action={<Button size="m" onClick={goBack} style={
                {
                    fontSize: 21, lineHeight: 20, backgroundColor: ' #BD00FF',
                    marginTop: 60, paddingBottom: 10, paddingTop: 10, paddingRight: 101, paddingLeft: 101
                }}>Back</Button>}
        >
        </Placeholder>

    </Panel>
);

export default Development;