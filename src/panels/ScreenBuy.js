import React, { Fragment } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { Div, Group, Text, Title, PanelHeaderBack } from '@vkontakte/vkui';
import { Icon28ArrowLeftOutline } from '@vkontakte/icons';
import './Screen4.css';
import home from '../img/home.png';
import Money from '../img/money-big.png'

const ScreenBuy = ({ id, go, goBack, fetchedUser }) => (
	<Panel id={id} centered={true}>
		<Fragment>
			<Div className='User'>
				<div style={{ display: 'flex', width: '100%' }}>
					<Icon28ArrowLeftOutline onClick={goBack} />
					<div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}></div>
				</div>
				<img className="home-img" src={home} alt="home-img" />
				<img className="home2-img" src={Money} alt="home-img" />


				<Div >
					<Title style={{ marginBottom: 24, color: "#FFFFFF" }} level="2">Покупай и продавай<br></br> cкины</Title >
					<Text style={{ marginBottom: 24, color: "#FFFFFF", padding: '0 20px' }} >Гарантируем безопасные сделки и получение преобретенного товара или заработанных средств</Text>
				</Div>


				<Div className="button-style">
					<Button onClick={go} data-to="products" data-page="buy" style={{ backgroundColor: '#fff', color: '#BD00FF', borderRadius: 43, padding: '12px 90px', border: '2px solid #ffffff' }} size="m">Купить</Button>
				</Div>
				<Div className="button-style">
					<Button onClick={go} data-to="products" data-page="sell" style={{ backgroundColor: 'transparent', color: '#fff', borderRadius: 43, padding: '12px 90px', border: '2px solid #ffffff' }} size="m">Продать</Button>
				</Div>
				<Div className="button-style">
					<Button onClick={go} data-to="products" data-page="exchange" style={{ backgroundColor: '#33373C', color: '#fff', borderRadius: 43, padding: '12px 90px', border: '2px solid #33373C' }} size="m" >Обменять</Button>
				</Div>
			</Div>
		</Fragment>
	</Panel>
);
export default ScreenBuy;
