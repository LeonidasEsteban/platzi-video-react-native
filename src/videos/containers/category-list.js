import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Suggestion from '../components/suggestion';
import Layout from '../components/category-list-layout';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
      <Suggestion {...item}/>
    )
  }
  render() {
    return (
      <Layout
        title="Categorias"
        >
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default CategoryList;
