import React, {Component} from 'react';
import { GiftCard } from './';
import { Typography, Checkbox } from "@material-ui/core";

class Gift extends Component {

    render = () => {
        const item = this.props.data;

        return <GiftCard image={item.image ? item.image.url : ''}>
            <Typography gutterBottom variant="h5" component="h2">
                {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {item.text}
            </Typography>
            <Checkbox />
        </GiftCard>
    }
}

export default Gift;