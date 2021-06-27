import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Catalog from './panels/catalog/Catalog';
import ScreenBuy from './panels/ScreenBuy'
import Development from './panels/development';
const history = []
const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		console.log(history);
		history.push(activePanel)
		setActivePanel(e.currentTarget.dataset.to);

	};

	const goBack = e => {
		const panel = history.pop();
		setActivePanel(panel);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Catalog id='catalog' goBack={goBack} fetchedUser={fetchedUser} go={go} />
					<ScreenBuy id="screen-buy" goBack={goBack} go={go} />
					<Development id="dev" goBack={goBack} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}


export default App;
