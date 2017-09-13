import React from 'react';
import { ListView as _ListView} from 'antd-mobile';
import MListView from 'rmc-list-view';
import tsPropsType from './PropsType';
import IndexedList from './Indexed';

export default class ListView extends React.Component<tsPropsType, any> {

  static defaultProps = {
    prefixCls: 'yy-list-view',
    listPrefixCls: 'yy-list',
  };
  static DataSource = MListView.DataSource;
  static IndexedList = IndexedList;

  render() {
    return <_ListView {...this.props} />;
  }
}
