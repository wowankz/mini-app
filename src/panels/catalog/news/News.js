import React from 'react';


import { Div, Headline, Group } from '@vkontakte/vkui';

import './news.css';
import mainNewsImg from '../../../img/news.png'
const News = props => {
    return (
        <Group>
            <Headline weight="semibold" className="title">Новости недели</Headline>
            <Div onClick={props.go} data-to="dev" className="card" role="link">
                <img src={mainNewsImg} alt="news-images" />
                <Div className="card-title">
                    Расспросили <span className="card-title_rose">Perfecto</span> о том, как он тренируется.
                </Div>
            </Div>
        </Group>
    )

};

export default News;
