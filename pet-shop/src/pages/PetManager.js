import React from "react";
import { TextInput, Button, Paper, Box } from "@mantine/core";
import { useForm } from "@mantine/form";



export default function PetManager() {
    const form = useForm({
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (

        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput label='Type of Animal'
                        placeholder='' />
                    <TextInput label='Breed'
                        placeholder='' />
                    <TextInput label='Name'
                        placeholder='' />
                    <TextInput label='Image URL'
                        placeholder='' />
                    <TextInput label='Description'
                        placeholder='' />
                    <TextInput label='Tags'
                        placeholder='' />
                    <Button fullWidth mt="xl" size="md">
                        Submit
                    </Button>
                </Paper>
            </form>
        </Box>
    )
}