import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from './billingCycleActions';
import LabelAndInput from '../common/form/labelAndInput';
import ItemList from './itemList';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props;
        return (
            <form role='form' onSubmit={ handleSubmit }>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe o mês. Ex: 2' />
                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe o ano. Ex:2019' />

                    <ItemList cols='12 6' 
                        list={credits} 
                        readOnly={this.props.readOnly}
                        itemType='credits'
                        legend='Créditos'
                    />

                    <ItemList cols='12 6'
                        list={debts} 
                        readOnly={this.props.readOnly}
                        itemType='debts'
                        legend='Débitos'
                        showStatusField={true}
                    />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitButtonClass}`} >
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' 
                            onClick={this.props.init} >
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({
    form: 'billingCycleForm', destroyOnUnmount: false
})(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({
    credits: selector(state, 'credits'), 
    debts: selector(state, 'debts')
});
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);