import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const handleSubmit = e => {
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        UserName
        <input type="text" name="user" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Email
        <input type="password" name="password" />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};
