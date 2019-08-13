import React, {Component} from 'react';
import {connect} from 'react-redux'
import { searchGifts } from '../actions/search';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Button, 
    Input, 
    FormControl, 
    FormControlLabel, 
    FormGroup,
} from "@material-ui/core";

class SearchBar extends Component {

    state = {
        text: ''
    }

    handleChange = event => {
        this.setState({ ...this.state, type: event.target.value});
    }

    search = () => {
        this.props.dispatch(searchGifts(this.state.text))
    }

    render = () => {

        const classes = makeStyles(theme => ({
            root: {
                display: 'flex',
            },
            formControl: {
                margin: theme.spacing(3),
            },
        }));

        return <FormControl className={classes.formControl}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Input id={'txtSearch'} placeholder="Search your gifts" onChange={event => this.setState({ ...this.state, text: event.target.value})} />
              }
              style={{"padding-left": "30px"}}
            />
            <Button id={'btnSearch'} onClick={this.search} variant="contained" color="primary" className={classes.button}>
              Search
            </Button>
          </FormGroup>
        </FormControl>
    }
}

export default connect()(SearchBar);