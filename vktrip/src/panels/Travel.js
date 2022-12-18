import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Div, Group, Headline, CardScroll, Card, CardGrid, ContentCard } from '@vkontakte/vkui';

import './Styles.css';
import search_img from '../img/search.png'
import card1 from '../img/Cards/card1.png'
import card2 from '../img/Cards/card2.png'
import card3 from '../img/Cards/card3.png'
import card4 from '../img/Cards/card4.png'
import card5 from '../img/Cards/card5.png'
import card6 from '../img/Cards/card6.png'
import card7 from '../img/Cards/card7.png'
import card8 from '../img/Cards/card8.png'

const Travel = props => {
	return(
	<Panel id={props.id}>
		<PanelHeader>
			VKПутешествия
		</PanelHeader>
		<Group>
			<Div>
				<img className='search' src={search_img}/>
			</Div>
			<Div>
				<Headline level="1" weight="2">
				Лучшие места для начала</Headline>
			</Div>
			<Div>
			<Group>
				<CardScroll size="s">
					<Card>
						<img style={{ width: "100%"}} src={card1}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card2}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card3}/>
					</Card>
				</CardScroll>
			</Group>
			</Div>
			<Div>
				<Headline level="1" weight="2">
				Платные походы в группе</Headline>
			</Div>
			<CardGrid size="l">
				<ContentCard
				src={card4}
				header="Гора Шунут 🍁⛰️"
				text="Павел Колесников - опыт походов 7 лет"
				caption="20 км, небольшие подъёмы"
				/>
			</CardGrid>
			<Div>
				<Headline level="1" weight="2">
				Места для опытных походников</Headline>
			</Div>
			<Group>
			<CardScroll size="s">
					<Card>
						<img style={{ width: "100%"}} src={card6}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card7}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card8}/>
					</Card>
				</CardScroll>
			</Group>
			<Div>
				<Headline level="1" weight="2">
				Бесплатные походы в группе</Headline>
			</Div>
			<CardGrid size="l">
				<ContentCard
				src={card5}
				header="Село Кузино 🚉🌅"
				text="Виктория Корнеплодова"
				caption="Озёра...Луга...Косули и кролики...Очень красивые расветы, оно стоит 3 часов на электричке!!!"
				/>
			</CardGrid>
		</Group>
	</Panel>
)};

Travel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Travel;
