import React, { useState } from 'react';
import '../../../shopping/styles/product.css';
import { Row, Col, Form, Input, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Checkoutloading, Checkout } from '../../actions/index';
import { ClearCart } from '../../actions';
const CheckoutShopping = () => {
  // const { Checkout } = useSelector(
  //   createStructuredSelector({
  //     Checkout: CheckoutProduct
  //   })
  // );

  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [companyname, setCompanyname] = useState('');
  // const [address, setAddress] = useState('');
  // const [country, setCountry] = useState('');
  // const [towncity, setTowncity] = useState('');
  // const [phone, setPhone] = useState('');
  // const [emailaddress, setEmailaddress] = useState('');
  const productCarts = useSelector(state => state.reducerCart.shoppingCart);
  const getTotal = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      let result = productCarts.reduce(
        (total, item) =>
          total +
          (item.shoppingCart.price * item.shoppingCart.quantity * 100) / 100,
        0
      );

      return result;
    }
  };
  console.log(new Date().toUTCString());
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    );
  }

  const onFinish = values => {
    console.log('Success:', values);
    dispatch(Checkoutloading(true));
    dispatch(
      Checkout(
        guidGenerator(),
        values.Firstname,
        values.address,
        values.companyname,
        values.country,
        values.email,
        values.lastname,
        values.phone,
        values.towncity,
        productCarts,
        new Date().toLocaleString()
      )
    );
    dispatch(Checkoutloading(false));
    form.resetFields();
    dispatch(ClearCart());
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row style={{ marginTop: 100 }}>
        <Col offset={3} span={24}>
          <Row>
            <Col style={{ position: 'relative' }}>
              <Row>
                <h3>BILLING DETAILS</h3>
              </Row>
              <Row style={{ marginTop: 54 }}>
                <Col
                  md={10}
                  sm={20}
                  lg={10}
                  xl={10}
                  style={{ paddingRight: 20 }}
                >
                  <Row style={{ position: 'relative' }}>
                    {/* <div className="Validate">
                      <h6>You missing firstname</h6>
                    </div> */}
                    <label>FIRST NAME</label>
                    <Form.Item
                      name="Firstname"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your first name!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input
                      // onChange={e => {
                      //   setFirstname(e.target.value);
                      // }}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>COMPANY NAME</label>
                    <Form.Item
                      name="companyname"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Company Name!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input
                      // onChange={e => {
                      //   setCompanyname(e.target.value);
                      // }}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>TOWN CITY</label>
                    <Form.Item
                      name="towncity"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your town city!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input
                      // onChange={e => {
                      //   setTowncity(e.target.value);
                      // }}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>EMAIL ADDRESS</label>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          type: 'email',
                          message: 'The input is not valid E-mail!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input
                      // onChange={e => {
                      //   setEmailaddress(e.target.value);
                      // }}
                      />
                    </Form.Item>
                  </Row>
                </Col>
                <Col md={10} sm={20} lg={10} xl={10}>
                  <Row>
                    <label>LAST NAME</label>
                    <Form.Item
                      name="lastname"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your last name!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input
                      // onChange={e => {
                      //   setLastname(e.target.value);
                      // }}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>ADDRESS</label>
                    <Form.Item
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your address!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input
                      // onChange={e => {
                      //   setAddress(e.target.value);
                      // }}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>COUNTRY</label>
                    <Form.Item
                      name="country"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your country!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <Input
                      // onChange={e => {
                      //   setCountry(e.target.value);
                      // }}
                      />
                    </Form.Item>
                  </Row>

                  <Row>
                    <label>PHONE</label>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your phone!'
                        }
                      ]}
                      style={{ width: 310 }}
                    >
                      <InputNumber width={200} min={1} max={10} />
                    </Form.Item>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <h3>YOUR ORDER</h3>
              </Row>
              <Row style={{ marginTop: 54 }}>
                <div className="border_checkout">
                  {productCarts.map((item, index) => (
                    <div className="order_detail" key={index}>
                      <span>{item.shoppingCart.name}</span>
                      <span>
                        {item.shoppingCart.price * item.shoppingCart.quantity}
                      </span>
                    </div>
                  ))}

                  <div className="order_detail">
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                      }}
                    >
                      TOTAL COST
                    </span>
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                      }}
                    >
                      {getTotal()}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: 10,
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                    className="container_button"
                  >
                    <button
                      // htmlType="submit"
                      className="button_order"
                      style={{
                        width: 175,
                        height: 44
                      }}
                    >
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
export default React.memo(CheckoutShopping);
