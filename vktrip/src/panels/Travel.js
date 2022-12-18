import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Search, Div } from '@vkontakte/vkui';

import './Onboarding.css';

const Travel = props => (
	<Panel id={props.id}>
		<PanelHeader>
			Путешествия
		</PanelHeader>
		<Div>
		</Div>
	</Panel>
);

Travel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Travel;
