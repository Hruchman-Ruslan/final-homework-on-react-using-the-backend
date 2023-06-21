import { Form, Label } from './LoginForm.syled';

export const LoginForm = () => {
  const handleSubmit = e => {
    const form = e.currentTarget;
    form.rest();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
