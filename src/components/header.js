import React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import axios from 'axios';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  onSearchClick() {
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_KEY,
        q: this.props.searchText
      }
    })
    .then(response => {
      console.log(response)
      const dataArray = response.data.data
      this.props.renderGifs(dataArray)
    })
    .catch(function(err) {
      console.log("ERROR", err.message)
    });
  }

  render() {
    return (
      <div className="header" style={{width: '80vw', margin:'0 auto'}}>
        <div className="searchBar" style={{ width: '25vw', margin: '0 auto' }}>
          <TextField hintText="Search" onChange={event => this.props.setSearch(event.target.value)}/>
          <IconButton tooltip="Font Icon" onClick={() => this.onSearchClick()}>
            <FontIcon className="material-icons">search</FontIcon>
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchText: state.searchText
});

const mapDispatchToProps = (dispatch) => ({
  setSearch: (searchText) => { dispatch ({ type:'SET_SEARCH', search: searchText })},
  renderGifs: (dataArray)=> {dispatch({type:'RENDER_GIFS', array: dataArray})}
})

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
