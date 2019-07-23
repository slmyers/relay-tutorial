// @flow
/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import 'todomvc-common';

import * as React from 'react';
import ReactDOM from 'react-dom';

import {QueryRenderer, graphql} from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  type RequestNode,
  type Variables,
} from 'relay-runtime';

import TodoApp from './components/TodoApp';
import List from './components/List';
import ListItem from './components/ListItem';
import type {appQueryResponse} from 'relay/appQuery.graphql';

async function fetchQuery(
  operation: RequestNode,
  variables: Variables,
): Promise<{}> {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  return response.json();
}

const modernEnvironment: Environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export const appQuery = graphql`
  query appQuery($userId: String) {
    user(id: $userId) {
      ...TodoApp_user
    }

    listItems(id: "TEST") @relay(plural: true) {
      id
      name
      one 
      two

      ...ListItem_item
    }

    ListItemQuery {
      listItems(id: "TEST") @relay(plural: true) {
        id
        name
      }

      ...List_list
    }
    
  }
` 

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <QueryRenderer
      environment={modernEnvironment}
      query={appQuery}
      variables={{
        // Mock authenticated ID that matches database
        userId: 'me',
      }}
      render={({error, props}: {error: ?Error, props: ?appQueryResponse}) => {
        if (props && props.user && props.listItems && props.ListItemQuery) {
          const user = props.user
          const item = props.listItems[0]
          const list = props.ListItemQuery
          console.log(props)
          // const list = {
          //   __id: props.__id,
          //   __fragments: props.__fragments,
          //   __fragmentOwner: props.__fragmentOwner
          // };
          //const list = props.list
          console.log(props)
          return (
            <>
              <ListItem item={item} />
              <List list={list}/>
              <TodoApp user={user} />
            </>
            
          );
        } else if (error) {
          return <div>{error.message}</div>;
        }

        return <div>Loading</div>;
      }}
    />,
    rootElement,
  );
}
