import React from 'react';


import { Panel, PanelHeader, PanelHeaderBack, Avatar, Div, Card, CardGrid, Title, Headline, Group } from '@vkontakte/vkui';


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
		<Headline weight="semibold" className="title">Новости недели</Headline>
		<Group onClick={() => { console.log('Open News'); }} className="card" role="link">
			<img src={mainNewsImg} alt="news-images" />
			<Div className="card-title">
				Расспросили <span className="card-title_rose">Perfecto</span> о том, как он тренируется.
			</Div>
		</Group>

		<CardGrid size="l">
			<Card size="l" mode="shadow" style={{ paddingLeft: 30, paddingRight: 25, paddingTop: 25, paddingBottom: 16, marginTop: 56 }}>
				<Title level="3" style={{ textAlign: 'center' }} >Розыгрышь дня!</Title>
			</Card>
		</CardGrid>
	</Panel >
);

export default Catalog;
