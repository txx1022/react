import React from 'react';
class Jingqu extends React.Component{
	 constructor() {
    super();
    this.state = {
      value: 'http://pic3.qyer.com/lastminute/library/2014/12/26/1419561733/640x360',
    };
  }
	render(){
		return(
			<div className='jingqu'>
              <img className='logo' src={this.state.value}/>
              <h3>城市名片</h3>
			</div>
		)
	}
}
export default Jingqu