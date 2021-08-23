import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ResultFootball from '../../components/Results';
import { requestGetDataToServer } from '../../actions/index';
import LayoutFootball from '../../components/layout';
import BreadcrumbFootball from '../../components/breadcrumb';

const AppFootball = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetDataToServer());
  }, [dispatch]);

  return (
    <LayoutFootball>
      <BreadcrumbFootball
        item_lv1="Trang chu"
        item_lv2="Bong da"
        item_lv3="Ket qua"
      />
      <div className="site-layout-content">
        <ResultFootball/>
      </div>
    </LayoutFootball>
    
  )
}
export default React.memo(AppFootball);