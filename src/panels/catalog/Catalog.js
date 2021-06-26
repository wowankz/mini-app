import React from 'react';


import { Panel, PanelHeader, PanelHeaderBack, Avatar, Div, Card, CardGrid, Title, Text, Headline, Group, CellButton } from '@vkontakte/vkui';
import { Icon12Chevron } from '@vkontakte/icons';

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

		<CardGrid size="l" >
			<Card className="lottery" size="l" mode="shadow" style={{ paddingLeft: 25, paddingRight: 10, paddingTop: 25, paddingBottom: 16, marginTop: 56 }}>
				<Headline weight="semibold" style={{ textAlign: 'center', marginBottom: 30 }} >Розыгрышь дня!</Headline>
				<Group onClick={() => { console.log('Open News'); }} role="link">
					<Div className="lottery-item">
						<img width="150" height="69" style={{ borderRadius: 3 }} src={mainNewsImg} alt="lottery-images" />
						<Div style={{ paddingRight: 0, paddingTop: 0 }}>
							<Headline weight="semibold" style={{ fontSize: 14 }}>Пройди тест и получи</Headline>
							<Text style={{ fontSize: 14 }} weight="regular">Ак 47 Вулкан</Text>
							<Div style={{ fontSize: 14, display: 'flex', alignItems: 'center', padding: 0, marginTop: 10 }}>
								Подробнее
								<Icon12Chevron />
							</Div>
						</Div>
					</Div>

					<Div className="lottery-item">
						<img width="150" height="69" style={{ borderRadius: 3 }} src={mainNewsImg} alt="lottery-images" />
						<Div style={{ paddingRight: 0, paddingTop: 0 }}>
							<Headline weight="semibold" style={{ fontSize: 14 }}>Пройди тест и получи</Headline>
							<Text style={{ fontSize: 14 }} weight="regular">Ак 47 Вулкан</Text>
							<Div style={{ fontSize: 14, display: 'flex', alignItems: 'center', padding: 0, marginTop: 10 }}>
								Подробнее
								<Icon12Chevron />
							</Div>
						</Div>
					</Div>
				</Group>
			</Card>
		</CardGrid>
	</Panel >
);

export default Catalog;
