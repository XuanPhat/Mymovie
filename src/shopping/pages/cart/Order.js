import React from 'react';
import { Row, Col, Tag } from 'antd';
import { createStructuredSelector } from 'reselect';
import { CheckoutProduct, LoadingCheckout } from '../../reselect/reselect';
import { useSelector } from 'react-redux';
import { Table, Skeleton } from 'antd';

const Order = () => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'Firstname',
      key: 'Firstname'
    },
    {
      title: 'lastname',
      dataIndex: 'lastname',
      key: 'lastname'
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'companyname',
      dataIndex: 'companyname',
      key: 'companyname'
    },
    {
      title: 'country',
      dataIndex: 'country',
      key: 'country'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email'
    },

    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'towncity',
      dataIndex: 'towncity',
      key: 'towncity'
    },
    {
      title: 'cart',
      dataIndex: 'cart',
      key: 'cart',
      render: tags =>
        tags.map((item, index) => {
          return <h3 key={index}>{item.shoppingCart.name}</h3>;
        })
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date'
    }
  ];

  const { Checkout, loading } = useSelector(
    createStructuredSelector({
      Checkout: CheckoutProduct,
      loading: LoadingCheckout
    })
  );
  if (loading) {
    <Skeleton />;
  }
  console.log(Checkout);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Order</h1>
      </div>
      <Table
        columns={columns}
        dataSource={Checkout}
        rowKey="ID"
        hideSelectAll={true}
      />
    </>
  );
};

export default Order;
