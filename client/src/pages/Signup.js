import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
const [addUser, { error }] = useMutation(ADD_USER);

const handleFormSubmit = async event => {
    event.preventDefault();
  
    // TRY/CATCH FOR ERRORS
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (event) {
      console.error(event);
    }
  };
}

export default Signup;