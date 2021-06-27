import React, { Fragment, useState } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { Div, Cell, List, Title, Separator, CellButton, Avatar, SimpleCell, Card, Headline, Group } from '@vkontakte/vkui';
import { Icon28ArrowLeftOutline, Icon36UserCircleOutline, Icon36ChevronRightOutline, Icon56MessageOutline, Icon36ChevronLeftOutline } from '@vkontakte/icons';

import '../../Screen4.css';
import './products.css'
import home from '../../../img/home.png';
import product from '../../../img/product.png';
import product2 from '../../../img/product2.png';
import product3 from '../../../img/product3.png';
import product4 from '../../../img/product4.png';
import product5 from '../../../img/product5.png';


const Products = ({ id, go, goBack, fetchedUser, tab }) => {
	const btnsGame = [
		{ id: 1, name: 'DOTA 2', color: 'linear-gradient(274.39deg, #C10101 -6.23%, #4B4B4B 102.09%)' },
		{ id: 2, name: 'CS GO', color: 'linear-gradient(274.39deg, #EFAD04 -6.23%, #585544 102.09%' },
		{ id: 3, name: 'Fortnite', color: 'linear-gradient(276.55deg, #FF00D6 24.42%, #FFFFFF 124.49%)' },
		{ id: 4, name: 'Apex Legends', color: 'linear-gradient(277.09deg, #000000 5.75%, #FFFFFF 125.13%)' }
	]

	const [state, setState] = useState({
		country: '',
		activeView: 'profile'
	})
	return (
		<Panel id={id} centered={true}>
			<Fragment>
				<Div className='User'>
					<div style={{ display: 'flex', width: '100%' }}>
						<Icon28ArrowLeftOutline onClick={goBack} />
						<div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}></div>
					</div>
					<img className="home-img" src={home} alt="home-img" />

					<div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
						<Button onClick={go} data-to="products" className={`tab  ${tab == 'buy' ? 'tab_active' : ''}`} data-page="buy" size="s">Купить</Button>
						<Button onClick={go} data-to="products" className={`tab  ${tab == 'sell' ? 'tab_active' : ''}`} data-page="sell" size="s">Продать</Button>
						<Button onClick={go} data-to="products" className={`tab  ${tab == 'exchange' ? 'tab_active' : ''}`} data-page="exchange" size="s">Обменять</Button>
					</div>

					<Title style={{ marginBottom: 24, marginTop: 20, color: "#FFFFFF" }} level="2">Выберите игру</Title >

					<Separator style={{ margin: '10px -25px', width: '100vw' }} />
					<div style={{ maxWidth: '95vw' }}>
						<div className="scroll-btns">
							{btnsGame.map(item => { return (<Button className="btn" style={{ alignSelf: 'center', minWidth: 120, marginRight: 10, background: item.color, color: '#fff', borderRadius: 40, fontSize: 10 }} size="m" key={item.id}>{item.name}</Button>) })}
						</div>
					</div>
					<Separator style={{ margin: '10px -25px', width: '100vw' }} />
					<Div></Div>
					<Card className="list-products" style={{ width: '95vw', backgroundColor: '#fff', marginBottom: 40 }} >
						<div style={{ display: 'flex', flexDirection: 'column', }}>
							<Div style={{ alignSelf: 'flex-start', width: '90vw' }}>
								<SimpleCell className="product-name" after={<div style={{ fontSize: 11, color: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon56MessageOutline width="32" height="32" fill="#1673DB" /><span style={{ color: '#17AC1D' }}>Безопасная<br></br> сделка</span></div>} before={<img style={{ backgroundColor: '#000000bf', borderRadius: 3, marginRight: 13 }} src={product} alt="product" />} description={<span style={{ color: '#000', textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', fontSize: 13 }}>Возможен обмен<span style={{ color: '#BD00FF', fontSize: 18, fontWeight: 700, paddingTop: 10 }}>4200 рублей</span></span>}>AK-47 | Легион Анубиса</SimpleCell>
								<Separator style={{ margin: '15px -16px 15px -20px' }} />
								<SimpleCell className="product-name" after={<div style={{ fontSize: 11, color: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon56MessageOutline width="32" height="32" fill="#1673DB" /><span style={{ color: '#FD2828' }}>Плохая<br></br> репутация</span></div>} before={<img style={{ backgroundColor: '#000000bf', borderRadius: 3, marginRight: 13 }} src={product2} alt="product2" />} description={<span style={{ color: '#000', textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', fontSize: 13 }}>Возможен обмен<span style={{ color: '#BD00FF', fontSize: 18, fontWeight: 700, paddingTop: 10 }}>4200 рублей</span></span>}>MP7 | Кровавый спорт</SimpleCell>
								<Separator style={{ margin: '15px -16px 15px -20px' }} />
								<SimpleCell className="product-name" after={<div style={{ fontSize: 11, color: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon56MessageOutline width="32" height="32" fill="#1673DB" /><span style={{ color: '#B5B5B5' }}>Без <br></br> репутации</span></div>} before={<img style={{ backgroundColor: '#000000bf', borderRadius: 3, marginRight: 13 }} src={product3} alt="product3" />} description={<span style={{ color: '#000', textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', fontSize: 13 }}>Возможен обмен<span style={{ color: '#BD00FF', fontSize: 18, fontWeight: 700, paddingTop: 10 }}>4200 рублей</span></span>}>Штык-нож | Ночь</SimpleCell>
								<Separator style={{ margin: '15px -16px 15px -20px' }} />
								<SimpleCell className="product-name" after={<div style={{ fontSize: 11, color: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon56MessageOutline width="32" height="32" fill="#1673DB" /><span style={{ color: '#FFA722' }}>Будьте <br></br> осторожны</span></div>} before={<img style={{ backgroundColor: '#000000bf', borderRadius: 3, marginRight: 13 }} src={product4} alt="product4" />} description={<span style={{ color: '#000', textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', fontSize: 13 }}>Возможен обмен<span style={{ color: '#BD00FF', fontSize: 18, fontWeight: 700, paddingTop: 10 }}>3500 рублей</span></span>}>Desert Eagle | Пищаль</SimpleCell>
								<Separator style={{ margin: '15px -16px 15px -20px' }} />
								<SimpleCell className="product-name" after={<div style={{ fontSize: 11, color: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Icon56MessageOutline width="32" height="32" fill="#1673DB" /><span style={{ color: '#17AC1D' }}>Безопасная<br></br> сделка</span></div>} before={<img style={{ backgroundColor: '#000000bf', borderRadius: 3, marginRight: 13 }} src={product5} alt="product5" />} description={<span style={{ color: '#000', textAlign: 'left', width: '100%', display: 'flex', flexDirection: 'column', fontSize: 13 }}>Возможен обмен<span style={{ color: '#BD00FF', fontSize: 18, fontWeight: 700, paddingTop: 10 }}>200 рублей</span></span>}>MP7 | Кровавый спорт</SimpleCell>

							</Div>
						</div>
					</Card>
					<Div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
						<Icon36ChevronLeftOutline fill="#fff" />
						<div style={{ display: 'flex', color: '#fff' }}>
							<span className="page">1</span>
							<span className="page page_active">2</span>
							<span className="page">3</span>
							<span className="page">4</span>
							<span className="page">5</span>
							...
						</div>
						<Icon36ChevronRightOutline fill="#fff" />
					</Div>

				</Div>
			</Fragment>
		</Panel >
	)
};
export default Products;