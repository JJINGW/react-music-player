/*
* @Author: wangjing
* @Date:   2018-04-02 10:41:33s
* @Last Modified by:   wangjing
* @Last Modified time: 2018-04-02 15:07:12
*/
import React from 'react'
import './hello.less'


let Hello = React.createClass({
	render() {
		return (
			<div className="hello-component">
				Hello world, React and Webpack!
			</div>
		);
	}
});

export default Hello;