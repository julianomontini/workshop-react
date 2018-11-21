import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';

const styles = theme => ({
    input: {
        marginBottom: theme.spacing.unit
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    container: {
        marginTop: 25,
        marginBottom: 25
    }
})

class TodoForm extends Component{

    constructor(props){
        super(props);

        this.renderInput = this.renderInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    renderInput(field){

        const { classes } = this.props;
        const { meta: {touched, error}} = field;

        return(
            <TextField
                fullWidth
                label={field.label}
                placeholder={field.placeholder}
                multiline={field.multiline}
                variant="outlined"
                className={classes.input}
                error={touched && !!error}
                helperText={touched ? error : null}
                {...field.input}
            />
        )
    }

    handleFormSubmit(values){
        const { reset, onAdd } = this.props;
        onAdd(values)
        reset();
    }

    render(){

        const { classes, handleSubmit, reset } = this.props;

        return(
            <form className={classes.container} onSubmit={handleSubmit(this.handleFormSubmit)}>
                <Field
                    name="title"
                    label="Título"
                    placeholder="Hoje eu vou fazer..."
                    component={this.renderInput}
                />
                <Field
                    name="description"
                    multiline
                    label="Descrição"
                    placeholder="Descrição do que vou fazer..."
                    component={this.renderInput}
                />
                <div className={classes.actions}>
                    <Button color="secondary" onClick={reset}>
                        Limpar
                    </Button>
                    <Button 
                        onClick={handleSubmit(this.handleFormSubmit)}
                        variant="contained" 
                        color="primary">
                        Adicionar
                    </Button>
                </div>
            </form>
        )
    }

}

const validate = values => {
    const errors = {};

    if(!values.title)
        errors.title = 'Campo brigatório'
    else if(values.title.length < 10)
        errors.title = 'Mínimo 10'

    if(!values.description)
        errors.description = 'Campo obrigatório'
    else if(values.description.length < 12)
        errors.description = 'Mínimo 12'

    return errors;
}

export default reduxForm({form: 'todo', validate})(withStyles(styles)(TodoForm));