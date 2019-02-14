import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getList } from './billingCycleActions';

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list;
        return list.map(billingCycle => (
            <tr key={ billingCycle._id }>
                <td>{ billingCycle.name }</td>
                <td>{ billingCycle.month }</td>
                <td>{ billingCycle.year }</td>
            </tr>
        ));
    }

    render() {
        return (    
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
