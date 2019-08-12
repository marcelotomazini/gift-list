import React, {Component} from 'react';
import { 
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid
} from "@material-ui/core";

class GiftCard extends Component {

    render = () => {
        return <Grid item xs style={{"max-width": "350px", width: "350px"}}>
            <Card style={{margin: "10px"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={this.props.image}
                        style={{height: "140px", width: "350px"}}
                    />
                    <CardContent style={{"text-align": "left"}}>
                        {this.props.children}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    }
}

export default GiftCard;