import React from 'react';
import HeaderFootball from './partials/Header';
import FooterFootball from './partials/Footer';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import './football.css';

const { Content } = Layout;

const LayoutFootball = (props) => {
  return (
    <Layout className="layout">
      <HeaderFootball/>
      <Content style={{ padding: '0 50px' }}>
        {props.children}
      </Content>
      <FooterFootball/>
    </Layout>
  )
}

LayoutFootball.propTypes = {
  children: PropTypes.node.isRequired
}
export default React.memo(LayoutFootball);