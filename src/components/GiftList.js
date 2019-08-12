import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Gift } from './';
import { Grid } from "@material-ui/core";

class GiftList extends Component {

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
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        search: state.search
    };
} 
export default connect(mapStateToProps)(GiftList);