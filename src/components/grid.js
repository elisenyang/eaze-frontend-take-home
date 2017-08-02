import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending', {
      params: {
        api_key: process.env.REACT_APP_GIPHY_KEY
      }
    })
    .then(response => {
      const dataArray = response.data.data
      this.props.renderGifs(dataArray)
      console.log(this.state)
    })
    .catch(function(err) {
      console.log("ERROR", err.message)
    })
  }

  renderGrid() {
    const gifs = this.props.gifsArray
    return gifs.map((gif) => {
      return <embed src={gif.embed_url}/>
    })
  }


  render() {
    console.log('HELLO',this.props.gifsArray)
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems:'space-around'}}>
          <GridList cols="5" cellHeight={200} style={{margin:'0,auto', width: '70vw',  height: '40vh'}}>
            {this.props.gifsArray.map((gif) => (
              <GridTile>
                <img src={gif.images.original.url}/>
              </GridTile>
            ))}
          </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gifsArray: state.gifsArray
});

const mapDispatchToProps = (dispatch) => ({
  renderGifs: (dataArray)=> {dispatch({type:'RENDER_GIFS', array: dataArray})}
})

Grid = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default Grid;
