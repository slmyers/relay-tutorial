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

import {GraphQLObjectType, GraphQLSchema, parse} from 'graphql';
import { extendSchema } from 'graphql/utilities';

import {nodeField} from './nodes.js';
import {ListItemsQuery} from './queries/ListItemsQuery';
import {ListItemQuery} from './queries/ListItemQuery';
import {UserQuery} from './queries/UserQuery';
import {AddTodoMutation} from './mutations/AddTodoMutation';
import {ChangeTodoStatusMutation} from './mutations/ChangeTodoStatusMutation';
import {MarkAllTodosMutation} from './mutations/MarkAllTodosMutation';
import {RemoveCompletedTodosMutation} from './mutations/RemoveCompletedTodosMutation';
import {RemoveTodoMutation} from './mutations/RemoveTodoMutation';
import {RenameTodoMutation} from './mutations/RenameTodoMutation';

const ListItemQueries = new GraphQLObjectType({
  name: 'ListItemQueries',
  fields: {
    listItems: ListItemsQuery,
  },
}); 

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    node: nodeField,
    ListItem: ListItemsQuery,
    listItems: ListItemsQuery,
    ListItemQuery,
  },
});



const extension = `
type ListItemQueries {
  listItems(id: String!): [ListItem]
}
extend type Query {
  ListItemQueries: ListItemQueries
}`;


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: AddTodoMutation,
    changeTodoStatus: ChangeTodoStatusMutation,
    markAllTodos: MarkAllTodosMutation,
    removeCompletedTodos: RemoveCompletedTodosMutation,
    removeTodo: RemoveTodoMutation,
    renameTodo: RenameTodoMutation,
  },
});

export const _schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
export const schema = extendSchema(_schema, parse(extension));
//require("fs").writeFileSync("./schema.json", JSON.stringify(schema, null,))
// export const schema = extendSchema(_schema, parse(extension));
// console.log(schema)
