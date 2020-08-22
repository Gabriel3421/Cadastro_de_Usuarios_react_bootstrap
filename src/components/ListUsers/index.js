import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CreateUser from '../CreateUser';
import { Container, Header } from './styles';
import '../button.css';

function ListUsers() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
      <Header>
        <h3>Listagem de usuários</h3>
        <Button variant="cadastro" onClick={handleShow}>
          Cadastrar usuário
        </Button>
      </Header>

      {users.length !== 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Idade</th>
              <th>Escolaridade</th>
              <th>Qtd skills</th>
            </tr>
          </thead>
          <tbody>
            {users.map((p) => (
              <tr>
                <td>{p.nome}</td>
                <td>{p.sobrenome}</td>
                <td>{p.range}</td>
                <td>{p.escolaridade}</td>
                <td>{p.tecnologias}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h5>Nenhum item cadastrado</h5>
      )}
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <CreateUser
            setUsers={setUsers}
            users={users}
            handleClose={handleClose}
          />
        </Modal.Header>
      </Modal>
    </Container>
  );
}

export default ListUsers;
