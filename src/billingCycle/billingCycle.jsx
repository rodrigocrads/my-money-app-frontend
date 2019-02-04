import React, { Component } from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de pagamento' small='Cadastro' />
                <Content>
                    Ciclos de Pagamento
                </Content>
            </div>
        );
    }
}

export default BillingCycle