import React, { useState } from 'react';
import LayoutShopping from '../../components/Layout';
import { Button, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image } from 'antd';
import { removetCartAction } from '../../actions';
import { changeQuantityCartAction } from '../../actions';
import NumberFormat from 'react-number-format';
// import '../home/style.css';
import '../../../shopping/styles/product.css';
import { CloseCircleOutlined } from '@ant-design/icons';
const CartShopping = () => {
  const productCarts = useSelector(state => state.reducerCart.shoppingCart);
  console.log(productCarts.map(item => console.log(item)));
  const dispatch = useDispatch();
  const [qty, setNumberQty] = useState([]);
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

  const handlechangeQty = e => {
    console.log(e.target.value);
  };
  return (
    <LayoutShopping>
      <div className="image_header_shoppingcart"></div>
      <div className="Shopping_cart">
        <Row>
          <Col span={24} offset={6} style={{ width: 1137 }}>
            <Row>
              <Col style={{ width: 197 }}>
                <h6>PRODUCTS</h6>{' '}
              </Col>
              <Col style={{ width: 415 }}>
                <h6>NAME</h6>{' '}
              </Col>
              <Col style={{ width: 154 }}>
                <h6>PRICE</h6>
              </Col>
              <Col style={{ width: 139 }}>
                <h6>QTY</h6>
              </Col>
              <Col style={{ width: 117 }}>
                <h6>TOTAL</h6>{' '}
              </Col>
              <Col></Col>
            </Row>
            {/* <Row>
              <div className="border_bottom"></div>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col style={{ width: 197 }}>
                <img
                  src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg"
                  alt="error"
                  style={{
                    width: 172,
                    height: 168,
                    objectFit: 'cover'
                  }}
                />
              </Col>
              <Col
                style={{ width: 415, display: 'flex', alignItems: 'center' }}
              >
                <h5>Iphone X</h5>
              </Col>
              <Col
                style={{ width: 154, display: 'flex', alignItems: 'center' }}
              >
                <span className="price">
                  <small>$</small>299
                </span>
              </Col>
              <Col
                style={{ width: 139, display: 'flex', alignItems: 'center' }}
              >
                <select
                  id="mySelect"
                  onChange={handlechangeQty}
                  style={{
                    height: 30,
                    width: 68,
                    outline: 'none',
                    padding: 5,
                    fontSize: 12,
                    color: '#2d3a4b',
                    fontWeight: 'bold'
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </Col>
              <Col style={{ display: 'flex', alignItems: 'center' }}>
                <h6>TOTAL</h6>{' '}
              </Col>
            </Row> */}
            {productCarts.length === 0 && (
              <h3 style={{ marginTop: 20 }}>No product in cart</h3>
            )}
            {productCarts.map((item, index) => (
              <div key={index}>
                <Row>
                  <div className="border_bottom"></div>
                </Row>
                <Row style={{ marginTop: 30 }}>
                  <Col style={{ width: 197 }}>
                    <img
                      src={item.shoppingCart.image}
                      alt="error"
                      style={{
                        width: 172,
                        height: 168,
                        objectFit: 'cover'
                      }}
                    />
                  </Col>
                  <Col
                    style={{
                      width: 415,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <h5>{item.shoppingCart.name}</h5>
                  </Col>
                  <Col
                    style={{
                      width: 154,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span className="price">
                      <small>$</small>
                      {item.shoppingCart.price}
                    </span>
                  </Col>
                  <Col
                    style={{
                      width: 139,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <select
                      id="mySelect"
                      onChange={e =>
                        dispatch(
                          changeQuantityCartAction(
                            e.target.value,
                            item.shoppingCart.id
                          )
                        )
                      }
                      style={{
                        height: 30,
                        width: 68,
                        outline: 'none',
                        padding: 5,
                        fontSize: 12,
                        color: '#2d3a4b',
                        fontWeight: 'bold'
                      }}
                    >
                      {/* {arrQty.forEach(index => {
                         <option value={index}>{index}</option>;
                       
                        })} */}

                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </Col>
                  <Col
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 156
                    }}
                  >
                    <span className="price">
                      <small>$</small>
                      {item.shoppingCart.price * item.shoppingCart.quantity}
                    </span>
                  </Col>
                  <Col style={{ display: 'flex', alignItems: 'center' }}>
                    <CloseCircleOutlined
                      onClick={e => {
                        dispatch(removetCartAction(item.shoppingCart.id, 1));
                      }}
                    />
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      {/* <Row>
        <Col span={24}>
          {productCarts.length === 0 && (
            <h1> Bạn chưa có sản phẩm trong giỏ hàng</h1>
          )}

          {productCarts.map((item, index) => (
            <Row
              key={index}
              style={{
                margin: '15px 0px',
                border: '1px solid #ccc',
                padding: '10px'
              }}
            >
              <Col sm={12} xs={12} md={4}>
                <Image src={item.shoppingCart.image} />
              </Col>
              <Col span={10} offset={1}>
                <h4> {item.shoppingCart.name}</h4>
                <NumberFormat
                  value={item.shoppingCart.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  suffix=" ₫"
                  prefix="Price: "
                />
                <p>
                  <NumberFormat
                    value={item.shoppingCart.price * item.shoppingCart.quantity}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix=" ₫"
                    style={{ fontWeight: 'bold' }}
                    prefix="Money: "
                  />
                </p>
                <br />
                <InputNumber
                  min={1}
                  max={30}
                  value={item.shoppingCart.quantity}
                  onChange={value => {
                    dispatch(
                      changeQuantityCartAction(value, item.shoppingCart.id)
                    );
                  }}
                />
                <Button
                  type="dashed"
                  onClick={() =>
                    dispatch(removetCartAction(item.shoppingCart.id, 1))
                  }
                >
                  Xóa{' '}
                </Button>
              </Col>
            </Row>
          ))}
          <div style={{ clear: 'both' }}></div>
          {getTotal() > 0 && (
            <h3 style={{ float: 'right' }}>
              <NumberFormat
                value={getTotal()}
                displayType={'text'}
                style={{ color: 'red', fontWeight: 'bold' }}
                thousandSeparator={true}
                suffix=" ₫"
                prefix="Tổng Cộng: "
              />
            </h3>
          )}
          <div style={{ clear: 'both' }}></div>
        </Col>
      </Row> */}
      {/* <p>HEHEE</p> */}
    </LayoutShopping>
  );
};
export default React.memo(CartShopping);
