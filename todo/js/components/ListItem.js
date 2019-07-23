// @flow

import React, {useState} from 'react';
import {createFragmentContainer, graphql, type RelayProp} from 'react-relay';
import classnames from 'classnames';
import type {List_item} from 'relay/ListItem_item.graphql';

type Props = {|
  +relay: RelayProp,
  +item: List_item,
|};

const ListItem = ({relay, item}: Props) => {
  if(!item) return "hi"

  return <pre>{JSON.stringify(item, null, 4)}</pre>
};

export default createFragmentContainer(ListItem, {
  item: graphql`
    fragment ListItem_item on ListItem {
      id
      name 
      two
    }
  `,
});