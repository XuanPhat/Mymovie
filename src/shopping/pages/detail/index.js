import React from 'react';
import { Row, Col, Image, Skeleton, Button, notification } from 'antd';
import LayoutShopping from '../../components/Layout';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import * as actions from '../../actions';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDataProductDetail } from '../../reselect/reselect';
import { getLoadingProductById } from '../../reselect/reselect';
import { incrementCartAction } from '../../actions/';
import { helpers } from '../../helpers/common';

import NumberFormat from 'react-number-format';
// import '../home/style.css';
import '../../../shopping/styles/product.css';
const DetailShopping = () => {
  const { slug, id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.getDataProductById(id));
  }, [dispatch, id]);

  const { dataDetail, loading } = useSelector(
    createStructuredSelector({
      dataDetail: getDataProductDetail,
      loading: getLoadingProductById
    })
  );

  if (helpers.isEmptyObject(dataDetail)) {
    return <Skeleton />;
  }
  const openNotificationAddTocart = type => {
    notification[type]({
      message: 'Thêm vào giỏ hàng thành công',
      description: 'Bạn vào giỏ hàng để kiểm tra.'
    });
  };
  if (!dataDetail?.hasOwnProperty('id')) {
    return <LayoutShopping>Không có dữ liệu</LayoutShopping>;
  }
  return (
    <LayoutShopping sub_1="Detail" sub_2="Product" sub_3={slug}>
      {!loading ? (
        <>
          <div className="image_header_shoppingcart"></div>
          <div className="container_product_detail">
            <Row>
              <Col offset={4}>
                <Row>
                  <Col>
                    <div className="image_detail">
                      <Image
                        width={500}
                        src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg"
                        alt="Error"
                        preview={false}
                      />
                    </div>
                  </Col>
                  <Col style={{ width: 473, padding: '15px 33px' }}>
                    <h4>IPHONE X</h4>
                    <span className="price">
                      <small>$</small>299
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum finibus ligula a scelerisque gravida. Nullam
                      laoreet tortor ac maximus alique met, consectetur
                      adipiscing elit. Vestibulum finibus ligula a scelerisque
                      gravida. Nullam
                    </p>
                    <button>ADD TO CART</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </>
      ) : (
        // <Row>
        //   <Col span={24} offset={6}>
        //     <Row>
        //       <Col>
        //         <Image src={dataDetail ? dataDetail.image : ''} width={300} />
        //       </Col>
        //       <Col sm={6} md={5}>
        //         <h3 style={{ color: 'black', fontWeight: 'bold' }}>
        //           {dataDetail ? dataDetail.name : null}
        //         </h3>

        //         <p>
        //           <NumberFormat
        //             value={dataDetail?.price}
        //             displayType={'text'}
        //             style={{ color: 'black' }}
        //             thousandSeparator={true}
        //             suffix=" ₫"
        //           />
        //         </p>

        //         <Button
        //           type="primary"
        //           ghost
        //           onClick={() => {
        //             dispatch(incrementCartAction(1, dataDetail));
        //             openNotificationAddTocart('success');
        //           }}
        //         >
        //           Add To Cart
        //         </Button>
        //       </Col>
        //     </Row>
        //   </Col>
        // </Row>

        <Skeleton />
      )}
    </LayoutShopping>
  );
};
export default React.memo(DetailShopping);
