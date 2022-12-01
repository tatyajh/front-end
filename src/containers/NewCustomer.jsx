import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const NewCustomer = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
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

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

   const URL = "http://localhost:3001/delivery";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL, data);
    if (response.status === 200) {
      Swal.fire("Saved", "User registered succesfully.", "success");
      navigate("/", { replace: true });
    } else {
      Swal.fire("Error", "User no registered", "error");
    }
    console.log(response);
  };

  return (
    <div>
      <Container>
        <h1 className="text-center">NUEVO PEDIDO</h1>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="nameSet"
                placeholder="Nombre"
                value={data.nameSet}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="identSet"
                placeholder="Identificacón de usuario"
                value={data.identSet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="emailSet"
                placeholder="Email"
                value={data.emailSet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="phoneSet"
                placeholder="Telefono"
                value={data.phoneSet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressStreetSet"
                placeholder="Calle/Carrera"
                value={data.addressStreetSet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressNumberSet"
                placeholder="Numero"
                value={data.addressNumberSet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressCitySete"
                placeholder="Ciudad"
                value={data.addressCitySet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                name="datePickup"
                placeholder="Fecha de recogida"
                value={data.datePickup}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="time"
                name="hourPickup"
                placeholder="Hore de recogida"
                value={data.hourPickup}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="width"
                placeholder="Anacho"
                value={data.width}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="hight"
                placeholder="Altura"
                value={data.hight}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="weigh"
                placeholder="Peso"
                value={data.weigh}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="nameGet"
                placeholder="Nombre de quien recibe"
                value={data.nameGet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="identGet"
                placeholder="identificacion de quien recibe"
                value={data.identGet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="phoneGet"
                placeholder="Telefono de quien recibe"
                value={data.phoneGet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="addresstreetGet"
                placeholder="Calle/Carrera de quien recibe"
                value={data.addresstreetGet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="addressnumberGet"
                placeholder="Numero (direccion) de quien recibe"
                value={data.addressnumberGet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="addressCityGet"
                placeholder="Ciudad de quien recibe"
                value={data.addressCityGet}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="status"
                placeholder="Estado del paquete"
                value={data.status}
                onChange={handleChange}
              />
            </Form.Group>

          <button className="btn btn-success">GUARDAR</button>
        </Form>
      </Container>
    </div>
  );
};

export default NewCustomer;
