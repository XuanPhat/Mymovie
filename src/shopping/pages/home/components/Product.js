import React from 'react';
import { Row, Col, Image, Skeleton } from 'antd';
import '../../../styles/product.css';
import { Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDataProductLatest } from '../../../reselect/reselect';
import { helpers } from '../../../helpers/common';
import ProductCart from './Card';
import logo_header from '../../../img/hinhnenpet.jpg';
const Product = () => {
  const { latest } = useSelector(
    createStructuredSelector({
      latest: getDataProductLatest
    })
  );
  if (helpers.isEmptyObject(latest)) {
    return <Skeleton active />;
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <div className="container_image_header">
            <img
              src={logo_header}
              alt="Error_image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </Col>
        <Col span={24}>
          <div className="heading_text_center">
            <h4>NEW ARRIVAL</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus maximus vehicula. Sed feugiat, tellus vel tristique
              posuere, diam
            </span>
          </div>
        </Col>
        <Col span={24}>
          <Row>
            {latest.map((item, index) => (
              <Col
                sm={12}
                md={12}
                xs={24}
                lg={6}
                // span={6}
              >
                <ProductCart data={item} key={index} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Product;
