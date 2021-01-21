import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { PostList, PostCreate, PostEdit } from './components/Post';
import { UserList, UserCreate, UserEdit } from './components/User';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name='posts'
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />

    <Resource name='users'
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
  </Admin>
}

export default App;
