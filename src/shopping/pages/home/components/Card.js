import React from "react";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import NumberFormat from "react-number-format";
import { Image } from "antd";
import "../../../styles/product.css";
// import { getDataProductDetail } from '../../../reselect/reselect';
// const { Meta } = Card;
const CardProduct = ({ data }) => {
  return (
    // <Row>
    //   <Col span={20} offset={2}>
    //     {/* <Link to={`/product/${slugify(data.name)}/${data.id}`}>
    //       <Card
    //         hoverable
    //         style={{ marginTop: '15px' }}
    //         cover={
    //           <img alt={data.name} src={data.image} style={{ marginTop: 20 }} />
    //         }
    //       >
    //         <Meta title={data.name} />
    //         <NumberFormat
    //           value={data.price}
    //           displayType={'text'}
    //           thousandSeparator={true}
    //           suffix=" ₫"
    //         />
    //       </Card>
    //     </Link> */}
    //     <Card
    //         hoverable
    //         style={{ marginTop: '15px' }}
    //         cover={
    //           <img alt={data.name} src={data.image} style={{ marginTop: 20 }} />
    //         }
    //       >
    //         <Meta title={data.name} />
    //         <NumberFormat
    //           value={data.price}
    //           displayType={'text'}
    //           thousandSeparator={true}
    //           suffix=" ₫"
    //         />
    //       </Card>
    //   </Col>
    // </Row>
    <Row>
      <Col
        span={24}
        style={{
          border: "1px solid #d1d5db",
          overflow: "hidden",
        }}
      >
        <Link to={`/product/${slugify(data.name)}/${data.id}`}>
          <div className="container_product">
            <Image src={data.image} preview={false} className="Image" />
            <div className="backgroud_hidden"></div>
            <span className="Price">
              <NumberFormat
                value={data.price}
                displayType={"text"}
                thousandSeparator={true}
                suffix=" ₫"
              />
            </span>
          </div>
        </Link>
        <div className="description_product">
          <h3>{data.name}</h3>
          {/* <p>Lorem ipsum dolor sit amet</p> */}
        </div>
      </Col>
    </Row>
  );
};
export default React.memo(CardProduct);
