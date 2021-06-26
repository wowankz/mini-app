import React from 'react';


import { Panel, PanelHeader, PanelHeaderBack, Avatar, Div, Card, CardGrid, Title, Text, Headline, Group, Button } from '@vkontakte/vkui';
import { Icon12Chevron } from '@vkontakte/icons';

import './catalog.css';
import mainNewsImg from '../../img/news.png'
const Catalog = props => (
	<Panel id={props.id} className="catalog">
		<PanelHeader

			separator={false}
			left={<PanelHeaderBack className="back" onClick={props.goBack} data-to="home" />}
		>
			<Div className="header">
				<Avatar width="48" className="header-avatar" src={props.fetchedUser.photo_200} />
			</Div>


		</PanelHeader>
		<Headline weight="semibold" className="title">Новости недели</Headline>
		<Group onClick={() => { console.log('Open News'); }} className="card" role="link">
			<img src={mainNewsImg} alt="news-images" />
			<Div className="card-title">
				Расспросили <span className="card-title_rose">Perfecto</span> о том, как он тренируется.
			</Div>
		</Group>

		<CardGrid size="l" >
			<Card className="lottery" size="l" mode="shadow" >
				<Headline weight="semibold" style={{ textAlign: 'center', marginBottom: 30 }} >Розыгрышь дня!</Headline>
				<Div className="lottery-items">
					<Div className="lottery-item">
						<img width="45%" height="20%" style={{ borderRadius: 3 }} src={mainNewsImg} alt="lottery-images" />
						<Div style={{ paddingRight: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }}>
							<Headline weight="semibold" style={{ fontSize: 14, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Пройди тест и получи</Headline>
							<Text style={{ fontSize: 14 }} weight="regular">Ак 47 Вулкан</Text>
							<Div style={{ fontSize: 14, display: 'flex', alignItems: 'center', padding: 0, marginTop: 10, color: '#2B282D' }} onClick={() => { console.log('Open lottery'); }} role="link">
								Подробнее
								<Icon12Chevron />
							</Div>
						</Div>
					</Div>

					<Div className="lottery-item">
						<img width="45%" height="20%" style={{ borderRadius: 3 }} src={mainNewsImg} alt="lottery-images" />
						<Div style={{ paddingRight: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }}>
							<Headline weight="semibold" style={{ fontSize: 14, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Пройди тест и получи</Headline>
							<Text style={{ fontSize: 14 }} weight="regular">Ак 47 Вулкан</Text>
							<Div style={{ fontSize: 14, display: 'flex', alignItems: 'center', padding: 0, marginTop: 10, color: '#2B282D' }} onClick={() => { console.log('Open lottery'); }} role="link">
								Подробнее
								<Icon12Chevron />
							</Div>
						</Div>
					</Div>

					<Button size="m" onClick={props.go} data-to="catalog" style={
						{
							fontSize: 12, lineHeight: 20, backgroundColor: ' #BD00FF', borderRadius: 50,
							marginTop: 40, paddingBottom: 5, paddingTop: 5, paddingRight: 17, paddingLeft: 17
						}}>Больше розыгрышей</Button>
				</Div>
			</Card>
		</CardGrid>
	</Panel >
);

export default Catalog;
