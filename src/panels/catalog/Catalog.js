import React from 'react';


import { Panel, PanelHeader, PanelHeaderBack, Avatar, Div, ContentCard, CardGrid } from '@vkontakte/vkui';


import './catalog.css';
import mainNewsImg from '../../img/news.png'
const Catalog = props => (
	<Panel id={props.id} className="catalog">
		<PanelHeader
			className="header"
			separator={false}
			left={<PanelHeaderBack className="back" onClick={props.goBack} data-to="home" />}
		>

			<Avatar width="48" className="header-avatar" src={props.fetchedUser.photo_200} />

		</PanelHeader>
		<CardGrid size="l">
			<ContentCard
				image={mainNewsImg}
				subtitle="unsplash"
				header="persons left hand with pink paint"
				text="Five hours of makeup and paint to achieve the human anatomy photoshoot. Thank you Steph and Shay. See more and official credit on @jawfox.photography."
				caption="Photo by Alexander Jawfox on Unsplash"
				maxHeight={423}
			/>
		</CardGrid>
	</Panel >
);

export default Catalog;
