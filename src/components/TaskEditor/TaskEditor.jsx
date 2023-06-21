import { Button, Form, Input } from './TaskEditor.styled';

export const TaskEditor = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="text" />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};
