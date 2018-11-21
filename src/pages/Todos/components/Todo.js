import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = theme =>({
    title: {
        fontSize: 16
    },
    description: {
        fontSize: 12
    },
    card: {
        width: '100%'
    }
})

class Todo extends Component{
    render(){

        const { classes, onRemove } = this.props;
        const { title, description, completed } = this.props;

        return(
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>
                    {
                        description ? (
                            <Typography className={classes.description}>
                                {description}
                            </Typography>
                        ) : null
                    }
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary" onClick={onRemove}>Apagar</Button>
                    <Button size="small" color="primary" disabled={completed}>
                        {completed ? 'Concluído' : 'Concluir'}
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(Todo);