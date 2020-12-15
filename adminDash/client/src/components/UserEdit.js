import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit;