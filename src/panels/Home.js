import React from 'react';
import PropTypes from 'prop-types';

import home from '../img/home.png';
import { Panel, PanelHeader, PanelHeaderBack, Placeholder, Button, Group, Card, Div, CardGrid } from '@vkontakte/vkui';

import './home.css';
const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader separator={false} left={<PanelHeaderBack onClick={() => { }} />}></PanelHeader>

		<img className="home-img" src={home} alt="home-img" />

		<Placeholder
			header="Играй и зарабатывай"
			action={<Button size="m" onClick={go} data-to="catalog" style={
				{
					fontSize: 21, lineHeight: 20, backgroundColor: ' #BD00FF',
					marginTop: 60, paddingBottom: 10, paddingTop: 10, paddingRight: 101, paddingLeft: 101
				}}>Начать</Button>}
		>
			Приложение поможет игрокам общаться, зарабатывать и повышать свои навыки в играх
		</Placeholder>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
