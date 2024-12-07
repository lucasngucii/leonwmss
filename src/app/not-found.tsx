'use client';

import { Button, Container, Text, Title } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  return (
    <Container>
      <Title>Page Not Found</Title>
      <Text>
        The page you are looking for cannot be found. Please try again.
      </Text>
      <Button onClick={() => router.back()} leftSection={<IconChevronLeft />}>
        Go back
      </Button>
    </Container>
  );
};

export default NotFound;
