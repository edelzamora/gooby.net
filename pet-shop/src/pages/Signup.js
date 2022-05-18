import React from 'react';
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';
export default function Signup() {
  return (
    <div>
        <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Create an Account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Have an account already?{' '}
        <Anchor component={Link} to ='/login' size="sm" >
          Log In
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <TextInput label="First Name" placeholder="John" required />
      <TextInput label="Last Name" placeholder="Doe" required />
        <TextInput label="Email" placeholder="john@email.com" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          Sign Up
        </Button>
      </Paper>
    </Container>
    </div>
  );
}