import React, { useContext, useState } from 'react';
import { socketContext } from '../../context/SocketContextProvider';

const initForm = {
  email: '',
};

const LoginForm = () => {
  const { changeEmail } = useContext(socketContext);
  const [form, setForm] = useState(initForm);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeEmail(form.email);
  };

  return (
    <form>
      <input onChange={handleInput} type='text' name='email' value={form.email} />
      <button onClick={handleSubmit}>Change Email</button>
    </form>
  );
};

export default LoginForm;
