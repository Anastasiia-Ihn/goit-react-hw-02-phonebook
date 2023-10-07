import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ listContacts }) => {
  return (
    <List>
      {listContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
        </ListItem>
      ))}
    </List>
  );
};

//
