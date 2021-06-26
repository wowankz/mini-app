import React from 'react';


import { Panel, PanelHeader, PanelHeaderBack, Avatar, Div } from '@vkontakte/vkui';


import './catalog.css';

const Catalog = props => (
	<Panel id={props.id}>
		<PanelHeader
			separator={false}
			left={<PanelHeaderBack className="back" onClick={props.goBack} data-to="home" />}
		>
			<Div className="header">
				<Avatar src={props.fetchedUser.photo_200} />
			</Div>

		</PanelHeader>

	</Panel>
);

export default Catalog;
