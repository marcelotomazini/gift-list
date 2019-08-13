import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Gift } from './';
import { Grid } from '@material-ui/core';
import { searchGifts } from '../actions/search';
import Pagination from 'react-mui-pagination';

class GiftList extends Component {

    state = {
        page: 0
    }
   
    setPage = (e, p) => {
        this.setState({page: p});
        this.props.dispatch(searchGifts(this.props.text, p))
    }

    render = () => {
        return <div style={{flexGrow: "1"}} >
            <Grid
                container
                spacing={3}
                direction="row"
                justify="center">
                
                {this.props.search.map((data) => (
                    <Gift data={data} />
                ))}
                
            </Grid>
            
            <Pagination
                page={this.state.page} total={this.props.searchSize} setPage={this.setPage}
        />
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        search: state.search,
        text: state.text,
        searchSize: state.searchSize
    };
} 
export default connect(mapStateToProps)(GiftList);