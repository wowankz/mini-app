import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import View from '@vkontakte/vkui/dist/components/View/View';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28DeleteOutline from '@vkontakte/icons/dist/28/delete_outline';

import { PanelHeader, CellButton, Header, Avatar, Group } from '@vkontakte/vkui';

import './Screen4.css';

import home from '../img/home.png';

const Screen4 = ({ id }) => (
  <Panel className="screen" id={id} >
    <Div className='User' >

      <img className="home-img" src={home} alt="home-img" />

      <Group >
        <CellButton style={{ color: "#FFFFFF" }} centered={true}  >Рейтинг</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Новости</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Магазин</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Плейлист</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Розыгрыши</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Менторство</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Голосовой чат</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Статьи и гайды</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Поиск команды</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Расписание стримов</CellButton>
        <CellButton style={{ color: "#FFFFFF" }} centered={true}>Расписание турниров</CellButton>
      </Group>
    </Div>
  </Panel>
);
export default Screen4;