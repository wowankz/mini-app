import React from 'react';


import { Div, Card, CardGrid, Text, Headline, Button } from '@vkontakte/vkui';
import { Icon12Chevron } from '@vkontakte/icons';
import './lottery.css';
import mainNewsImg from '../../../img/news.png'
const Lottery = props => {
    return (
        <CardGrid size="l" >
            <Card className="lottery" size="l" mode="shadow" >
                <Headline weight="semibold" style={{ textAlign: 'center', marginBottom: 30 }} >Розыгрышь дня!</Headline>
                <Div className="lottery-items">
                    <Div className="lottery-item">
                        <img width="45%" height="20%" style={{ borderRadius: 3 }} src={mainNewsImg} alt="lottery-images" />
                        <Div style={{ paddingRight: 0, paddingTop: 0, paddingBottom: 0, overflow: 'hidden' }}>
                            <Headline weight="semibold" style={{ fontSize: 14, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Пройди тест и получи</Headline>
                            <Text style={{ fontSize: 14 }} weight="regular">Ак 47 Вулкан</Text>
                            <Div style={{ fontSize: 14, display: 'flex', alignItems: 'center', padding: 0, marginTop: 10, color: '#2B282D' }} onClick={props.go} data-to="dev" role="link">
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
                            <Div style={{ fontSize: 14, display: 'flex', alignItems: 'center', padding: 0, marginTop: 10, color: '#2B282D' }} onClick={props.go} data-to="dev" role="link">
                                Подробнее
                                <Icon12Chevron />
                            </Div>
                        </Div>
                    </Div>

                    <Button size="m" onClick={props.go} data-to="dev" style={
                        {
                            fontSize: 12, lineHeight: 20, backgroundColor: ' #BD00FF', borderRadius: 50,
                            marginTop: 40, paddingBottom: 5, paddingTop: 5, paddingRight: 17, paddingLeft: 17
                        }}>Больше розыгрышей</Button>
                </Div>
            </Card>
        </CardGrid>
    )

};

export default Lottery;