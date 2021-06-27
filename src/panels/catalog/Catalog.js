import React from 'react';


import { Panel, PanelHeader, PanelHeaderBack, Avatar, Div, Card, CardScroll, Headline, Separator, Group, SimpleCell, CellButton } from '@vkontakte/vkui';
import { Icon36UserCircleOutline } from '@vkontakte/icons';
import { Icon28ArrowDownOutline } from '@vkontakte/icons';
import { Icon28ArrowLeftOutline } from '@vkontakte/icons';

import './catalog.css';
import Money from '../../img/money.png'
import GroupImg from '../../img/group.png'
import Voice from '../../img/voice.png'
import Articl from '../../img/article.png'
import Mouse from '../../img/mouse.png'

import News from './news/News';
import Lottery from './lottery/Lottery';
const Catalog = props => {


	return (
		<Panel id={props.id} className="catalog">
			<PanelHeader

				separator={false}
				left={<Icon28ArrowLeftOutline fill="#BD00FF" className="back" onClick={props.goBack} data-to="home" />}
			>
				<Div className="header">
					<Avatar width="48" className="header-avatar" src={props.fetchedUser.photo_200} />
				</Div>

			</PanelHeader>
			<News go={props.go} />
			<Lottery go={props.go} />
			<CardScroll className="scroll" size="m" style={{ paddingBottom: 20, paddingTop: 56 }}>
				<Card className="scroll-item scroll-item__first" >
					<div style={{ display: 'flex', flexDirection: 'column', }}>
						<Headline weight="semibold" style={{ color: '#fff', fontSize: 18, lineHeight: '20px', textAlign: 'center', alignSelf: 'center', marginBottom: 20 }}>Рейтинг<br></br> среди друзей</Headline>
						<Group style={{ alignSelf: 'flex-start' }}>
							<SimpleCell className="user-name" style={{ padding: 0, width: 237 }} after={<span style={{ fontSize: 11, color: '#fff' }}>250 px</span>} before={<Avatar size={36} ><Icon36UserCircleOutline /></Avatar>} description={<span style={{ color: '#000' }}>Dota 2</span>}>Анна Викторовна</SimpleCell>
							<Separator style={{ margin: '0px -25px' }} />
							<SimpleCell className="user-name" style={{ padding: 0, width: 237 }} after={<span style={{ fontSize: 11, color: '#fff' }}>120 px</span>} before={<Avatar size={36} ><Icon36UserCircleOutline /></Avatar>} description={<span style={{ color: '#000' }}>CS GO</span>}>Мария Петровна</SimpleCell>
							<Separator style={{ margin: '0px -25px' }} />
							<SimpleCell className="user-name" style={{ padding: 0, width: 237 }} after={<span style={{ fontSize: 11, color: '#fff' }}>60 px</span>} before={<Avatar size={36} ><Icon36UserCircleOutline /></Avatar>} description={<span style={{ color: '#000' }}>CS GO</span>}>Виктор Викторович</SimpleCell>
							<Separator style={{ margin: '0px -25px' }} />
							<SimpleCell className="user-name" style={{ padding: 0, width: 237 }} after={<span style={{ fontSize: 11, color: '#fff' }}>50 px</span>} before={<Avatar size={36} ><Icon36UserCircleOutline /></Avatar>} description={<span style={{ color: '#000' }}>Fortnite</span>}>Данил Даньшин</SimpleCell>
							<CellButton onClick={props.go} data-to="dev" className="button-show" centered style={{ color: '#fff', fontSize: 12 }} after={<Icon28ArrowDownOutline fill="#fff" />}>Показать всех</CellButton>
						</Group>
					</div>
				</Card>
				<Card className="scroll-item scroll-item__center">
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between' }} >
						<Card className="card-buy" style={{ width: 295, padding: '26px 25px' }}>
							<SimpleCell onClick={props.go} data-to="screen-buy" className="card-buy__text" style={{ padding: 0, color: '#fff' }} after={<img width="75" src={Money} alt="money" />} >
								Покупай и продавай<br></br> скины
							</SimpleCell>
						</Card>

						<div style={{ width: 345, display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
							<Card onClick={props.go} data-to="dev" className="card-group" style={{ width: 165, height: 260 }}>
								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<Headline style={{ textAlign: 'center', padding: '22px 18px', fontSize: 18, color: '#fff' }}>Найди напарника или команду</Headline>
									<img style={{ marginTop: 24 }} src={GroupImg} alt="group" />
								</div>
							</Card>
							<Card onClick={props.go} data-to="dev" className="card-voice" style={{ width: 165, height: 260 }}>
								<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
									<Headline style={{ textAlign: 'center', padding: '22px 10px', fontSize: 18 }}>Создай канал и общайся</Headline>
									<img style={{ marginTop: 40 }} src={Voice} alt="group" />
								</div>
							</Card>
						</div>
					</div>
				</Card>
				<Card className="scroll-item scroll-item__last">
					<div >

						<Card onClick={props.go} data-to="dev" className="card-voice" style={{ width: 196, height: 190 }}>
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
								<Headline style={{ textAlign: 'center', padding: '22px 10px', fontSize: 18 }}>Полезные статьи по играм</Headline>
								<img style={{ marginTop: 20 }} src={Articl} alt="group" />
							</div>
						</Card>
						<Card onClick={props.go} data-to="dev" className="card-voice" style={{ width: 196, height: 190, marginTop: 20 }}>
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
								<Headline style={{ textAlign: 'center', padding: '22px 10px', fontSize: 18 }}>Гайды и хитрости</Headline>
								<img style={{ marginTop: 30 }} src={Mouse} alt="group" />
							</div>
						</Card>
					</div>
				</Card>
			</CardScroll>
		</Panel >
	);
}

export default Catalog;
