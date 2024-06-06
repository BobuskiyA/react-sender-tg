import { useState } from "react";
import { useForm } from "@mantine/form";
import { Box, Button, Flex, Group, Select, TextInput } from "@mantine/core";
import { sendMessage } from "../api/telegram";
import "./Form.scss";

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      select: "",
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      select: (value) => (value ? null : "Please select a value"),
    },
  });

  const handleSubmit = async ({ email, name, select }) => {
    try {
      setIsLoading(true);

      const message = `Пошта: ${email}, Імʼя: ${name}, Вибір: ${select}`;
      await sendMessage(message);
    } catch (e) {
      form.setFieldError("email", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Select
          placeholder="Pick value"
          //variant="unstyled"
          data={["React", "Angular", "Vue", "Svelte"]}
          {...form.getInputProps("select")}
        />
        <TextInput
          //variant="unstyled"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          //variant="unstyled"
          withAsterisk
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <Group justify="flex-end" mt="md">
          <Button loading={isLoading} type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};
