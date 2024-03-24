import { ListEmptyContainer, Message } from './styles';

interface IListEmptyProps {
  message: string;
}

export function ListEmpty({ message }: IListEmptyProps) {
  return (
    <ListEmptyContainer>
      <Message>{message}</Message>
    </ListEmptyContainer>
  );
}
