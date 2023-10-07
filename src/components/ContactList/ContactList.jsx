export const ContactList = ({ listContacts }) => {
  return (
    <ul>
      {listContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
        </li>
      ))}
    </ul>
  );
};

// list-style: square;
