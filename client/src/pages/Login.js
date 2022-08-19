import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const [login, { error }] = useMutation(LOGIN_USER);

// SUBMIT FORM
const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      const { data } = await login({
        variables: { ...formState }
      });
  
      console.log(data);
      Auth.login(data.login.token);
    } catch (event) {
      console.error(event);
    }
  };