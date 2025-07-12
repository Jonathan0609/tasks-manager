import { Group } from '@mantine/core';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout(props: PublicLayoutProps) {
  return (
    <Group justify="center" align="center" h="100vh" bg="gray.0">
      {props.children}
    </Group>
  );
}
