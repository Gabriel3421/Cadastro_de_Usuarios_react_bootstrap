import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../button.css';
import { TechGroup } from './styles';

function Tecnologias({ formik }) {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  useEffect(() => {
    formik.setFieldValue('tecnologias', techs.length);
  }, [techs]);

  function handleAddTech() {
    if (newTech !== '') {
      setTechs([...techs, newTech]);
      setNewTech('');
    }
  }
  return (
    <>
      <Row>
        <h6>Tecnologias com conhecimento</h6>
      </Row>
      <Row>
        <Form.Group controlId="formBasicTech">
          <Form.Label style={{ height: 17 }} />
          <TechGroup>
            <Form.Control
              type="text"
              placeholder="EX: javascript"
              value={newTech}
              onChange={(text) => setNewTech(text.target.value)}
            />
            <Button variant="outline-cadastro" onClick={handleAddTech}>
              Adicionar
            </Button>
          </TechGroup>
          {formik.touched.tecnologias && techs.length === 0 ? (
            <span style={{ color: 'red' }}>
              Digite pelo menos uma tecnologia
            </span>
          ) : null}
        </Form.Group>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th style={{ textAlign: 'center' }}>Tecnologia</th>
            </tr>
          </thead>
          <tbody>
            {techs.map((tech) => (
              <tr key={tech}>
                <td>{tech}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
}

export default Tecnologias;
