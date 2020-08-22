import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container, Header } from './styles';
import DadosPessoais from '../DadosPessoais';
import Tecnologias from '../Tecnologias';
import '../button.css';

function CreateUser({ setUsers, users, handleClose }) {
  const formik = useFormik({
    initialValues: {
      nome: '',
      sobrenome: '',
      idade: '',
      tecnologias: 0,
      escolaridade: '',
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('Nome Obrigatório'),
      sobrenome: Yup.string().required('Sobrenome Obrigatório'),
      idade: Yup.number().required('Idade Obrigatória'),
      tecnologias: Yup.number().required('Required'),
      escolaridade: Yup.string().required('Escolaridade Obrigatória'),
    }),
    onSubmit: (values) => {
      try {
        setUsers([...users, values]);
        handleClose();
        toast.success('Usuário Cadastrado com sucesso!!');
      } catch (error) {
        toast.error(`Falha no cadastro de usuário!\nerror: ${error}`);
      }
    },
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Header>
          <h3>Cadastro de usuários</h3>
          <Button
            type="submit"
            variant="cadastro"
            onclick={formik.handleSubmit}
          >
            Cadastrar
          </Button>
        </Header>

        <Row style={{ marginTop: 50 }}>
          <Col>
            <DadosPessoais formik={formik} />
          </Col>
          <Col xs={1} />
          <Col>
            <Tecnologias formik={formik} />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default CreateUser;
