
	import React,{useState, useRef, useEffect, useCallback} from 'react';
	import FiatList from '../functional/FiatList';
	
		
		 const SearchFiat=({searchF})=>{
			const [selectedFiat, setSelectedFiat] = useState('');
			const [fiatInputValue, setFiatInputValue] = useState('');
			const [selectedFiatRate, setSelectedFiatRate] = useState('');
			
			return(			
				<div className='w-50 pa3 mr2 flex'>

				<input 
				className='blue input-reset ba b--black-30 pa2 mb2 db w-50'
				type='search'
				placeholder='Search Fiat'
				value={selectedFiat}
				onInput={(event)=>setSelectedFiat(event.target.value)}
				onChange={()=>setSelectedFiatRate(<FiatList
					rate = {selectedFiatRate}
				/>)}
				onInput={(event) =>searchF(event)}>
				</input>

				<input 
				className='blue input-reset ba b--black-30 pa2 mb2 db w-50'
				type='number'
				placeholder='Fiat Amount'
				value={fiatInputValue} 
				onChange={(event)=> setFiatInputValue(event.target.value )}
				></input>

			</div>
		)
	}			
	       
	export default SearchFiat;


// class SearchFiat extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			fiatInputValue:"",
// 			selectedFiat:"",
	
// 		};
// 	}
	

// 	getFiatInputValue(event) {
// 		    this.setState({
// 			fiatInputValue: event.target.value
// 		    });
// 		  }

// 	getSelectedFiat(event) {
// 		    this.setState({
// 			selectedFiat: event.target.value
// 		    });
// 		  }

// // destructure 'searchF' from props - instead of props.searchF

// render(){
// 	const {searchF}=this.props;
// 	const{fiatInputValue}=this.state;
// 	const SearchFiat = ({searchF}) => {
// 		return(
// 		<div className='w-50 pa3 mr2 flex'>
		
// 		<input
// 			className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
// 			type='search'
// 			placeholder='Search Fiat'
// 			 onChange={event => this.getSelectedFiat(event)}
// 			onChange={(event) =>searchF(event)} // set proper handling of onChange function
// 			/></div>
// 			)
		
// 		}
// 	return (
// 		<div className='flex w-50 pa3 mr2'>
		
// 		<input
// 			className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
// 			type='search'
// 			placeholder='Search Fiat'
// 			 onChange={event => this.getSelectedFiat(event)}
// 			onChange={(event) =>searchF(event)} // set proper handling of onChange function
// 			/>
// 		<input 
// 			className='input-reset ba b--black-30 pa2 mb2 db w-50 tc'
// 			type='text' placeholder='Enter fiat amount'
// 			value={fiatInputValue} onChange={event => this.getFiatInputValue(event)}>
// 			</input>
// 		</div>
// 	);

//    }

// }   


// export default SearchFiat;
