import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const [addUser, { error }] = useMutation(ADD_USER);

const handleFormSubmit = async event => {
    event.preventDefault();
  
    // TRY/CATCH FOR ERRORS
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);
    } catch (event) {
      console.error(event);
    }
  };