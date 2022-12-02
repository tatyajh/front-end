import React, { useState, useEffect } from "react";
import { Container, Row, Modal, Form } from "react-bootstrap";
import CardUsers from "./CardUsers";
import axios from "axios";
import Swal from "sweetalert2";

const ListCustomers = () => {
  const url = "http://localhost:3001/delivery";

  const getData = async () => {
    const response = axios.get(url);
    return response;
  };

  const [list, setUsers] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({
    nameSet: "",
    identSet: "",
    emailSet: "",
    phoneSet: "",
    addressStreetSet: "",
    addressNumberSet: "",
    addressCitySet:"",
    datePickup:"",
    hourPickup:"",
    width:"",
    hight:"",
    weigh:"",
    nameGet:"",
    identGet:"",
    phoneGet:"",
    addresstreetGet:"",
    addressnumberGet:"",
    addressCityGet:"",
    status:"",
  });

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };

  
   const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${url}/${dataModal.id}`, dataModal);
    if (response.status === 200) {
      Swal.fire("Saved", "User updated succesfully.", "success");
      handleCloseModal();
      setUpdateList(!updateList);
    } else {
      Swal.fire("Error", "User no updated", "error");
    }
  };

  useEffect(() => {
    getData().then((response) => {
      setUsers(response.data);
    });
  }, [updateList]);

  console.log(dataModal);

  return (
    <Container className="mb-5">
      <Row>
        {!list
          ? "Cargando..."
          : list.map((delivery, index) => (
              <CardUsers
                key={index}
                delivery={delivery}
                setUpdateList={setUpdateList}
                updateList={updateList}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                setDataModal={setDataModal}
              />
            ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title> Update </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="nameSet"
                placeholder="Nombre"
                value={dataModal.nameSet}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="identSet"
                placeholder="Identificacón de usuario"
                value={dataModal.identSet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="emailSet"
                placeholder="Email"
                value={dataModal.emailSet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="phoneSet"
                placeholder="Telefono"
                value={dataModal.phoneSet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressStreetSet"
                placeholder="Calle/Carrera"
                value={dataModal.addressStreetSet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressNumberSet"
                placeholder="Numero"
                value={dataModal.addressNumberSet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressCitySete"
                placeholder="Ciudad"
                value={dataModal.addressCitySet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                name="datePickup"
                placeholder="Fecha de recogida"
                value={dataModal.datePickup}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="time"
                name="hourPickup"
                placeholder="Hore de recogida"
                value={dataModal.hourPickup}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="width"
                placeholder="Anacho"
                value={dataModal.width}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="hight"
                placeholder="Altura"
                value={dataModal.hight}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="weigh"
                placeholder="Peso"
                value={dataModal.weigh}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="nameGet"
                placeholder="Nombre de quien recibe"
                value={dataModal.nameGet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="identGet"
                placeholder="identificacion de quien recibe"
                value={dataModal.identGet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="phoneGet"
                placeholder="Telefono de quien recibe"
                value={dataModal.phoneGet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="addresstreetGet"
                placeholder="Calle/Carrera de quien recibe"
                value={dataModal.addresstreetGet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="addressnumberGet"
                placeholder="Numero (direccion) de quien recibe"
                value={dataModal.addressnumberGet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressCityGet"
                placeholder="Ciudad de quien recibe"
                value={dataModal.addressCityGet}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="status"
                placeholder="Estado del paquete"
                value={dataModal.status}
                onChange={handleChangeModal}
              />
            </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              type="reset"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
            <button className="btn btn-success" type="submit">
              Guardar cambios
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ListCustomers;
