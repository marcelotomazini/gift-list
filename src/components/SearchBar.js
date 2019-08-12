import React, {Component} from 'react';
import {connect} from 'react-redux'
import { search } from '../actions/search';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Button, 
    Input, 
    FormControl, 
    FormControlLabel, 
    Radio,
    RadioGroup,
    FormGroup,
} from "@material-ui/core";

class SearchBar extends Component {

    state = {
        type: 'artist',
        text: ''
    }

    handleChange = event => {
        this.setState({ ...this.state, type: event.target.value});
    }

    searchMusic = () => {
        this.props.dispatch(search(this.state.type, this.state.text))
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

            <RadioGroup aria-label="position" name="position" value={this.state.type} onChange={this.handleChange} row>
              <FormControlLabel
                value="artist"
                control={<Radio color="primary" />}
                label="Artist"
                labelPlacement="start"
              />
              <FormControlLabel
                value="album"
                control={<Radio color="primary" />}
                label="Album"
                labelPlacement="start"
              />
              <FormControlLabel
                value="track"
                control={<Radio color="primary" />}
                label="Track"
                labelPlacement="start"
              />
            </RadioGroup>
            <FormControlLabel
              control={
                <Input id={'txtSearch'} placeholder="Your search" onChange={event => this.setState({ ...this.state, text: event.target.value})} />
              }
              style={{"padding-left": "30px"}}
            />
            <Button id={'btnSearch'} onClick={this.searchMusic} variant="contained" color="primary" className={classes.button}>
              Search
            </Button>
          </FormGroup>
        </FormControl>
    }
}

export default connect()(SearchBar);