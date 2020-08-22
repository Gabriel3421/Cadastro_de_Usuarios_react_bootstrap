import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DadosPessoais({ formik }) {
  return (
    <>
      <Row style={{ margin: 0 }}>
        <h6>Dados Pessoais</h6>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome"
              onChange={formik.handleChange}
              name="nome"
              value={formik.values.Nome}
            />
            {formik.touched.nome && formik.errors.nome ? (
              <span style={{ color: 'red' }}>{formik.errors.nome}</span>
            ) : null}
          </Form.Group>
        </Col>
        <Col xs={1} />
        <Col>
          <Form.Group controlId="formBasicName2">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o sobrenome"
              onChange={formik.handleChange}
              name="sobrenome"
              value={formik.values.sobrenome}
            />
            {formik.touched.sobrenome && formik.errors.sobrenome ? (
              <span style={{ color: 'red' }}>{formik.errors.sobrenome}</span>
            ) : null}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formBasicIdade">
            <Form.Label>Idade</Form.Label>
            <Form.Control
              type="range"
              min="1"
              max="100"
              onChange={formik.handleChange}
              name="idade"
              value={formik.values.idade}
            />
            {formik.touched.idade && formik.errors.idade ? (
              <span style={{ color: 'red' }}>{formik.errors.idade}</span>
            ) : null}
          </Form.Group>
        </Col>
        <Col xs={1} />
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Escolaridade</Form.Label>
            <Form.Control
              as="select"
              custom
              onChange={formik.handleChange}
              name="escolaridade"
              value={formik.values.escolaridade}
            >
              <option>Selecione</option>
              <option>Ensino Médio</option>
              <option>Superior Completo</option>
              <option>Superior Incompleto</option>
              <option>Pós-graduação</option>
              <option>Mestrado</option>
              <option>Doutorado</option>
            </Form.Control>
            {formik.touched.escolaridade && formik.errors.escolaridade ? (
              <span style={{ color: 'red' }}>{formik.errors.escolaridade}</span>
            ) : null}
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}

export default DadosPessoais;
