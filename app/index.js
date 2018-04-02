/*
* @Author: wangjing
* @Date:   2018-04-02 10:23:50
* @Last Modified by:   wangjing
* @Last Modified time: 2018-04-02 15:06:48
*/

// var react = require('react');
// ES6语法导入react
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './components/hello'

// console.log(react.version);
render(
	<AppContainer>
		<Hello />
	</AppContainer>,
	document.getElementById('root')
);


if (module.hot) {
	module.hot.accept('./components/hello', () => {
		const NewHello = require('./components/hello').default;
		render(
			<AppContainer>
				<NewHello />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}