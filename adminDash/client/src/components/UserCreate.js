import { Create, SimpleForm, TextInput } from 'react-admin';

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <TextInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate;