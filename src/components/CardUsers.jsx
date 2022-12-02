import axios from "axios";
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Swal from "sweetalert2";
import Gravatar from "react-gravatar";

const CardUsers = ({ delivery, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal }) => {

  const url = "http://localhost:3001/";

  const handleDelete = async () => {
    console.log ('Eliminando')

    Swal.fire({
        title: `Do you want to delete ${delivery.nameSet} register ?`,
        text: "You can not turn back",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Delete anyway!'
      }).then((result) => {
        if (result.isConfirmed) {
            
           
            axios.delete(`${url}/${delivery.id}`).then((response) => {
             console.log(response)
              if (response.status === 200) {                  
                 Swal.fire(
                        'Deleted!',
                        `${delivery.nameSet} register deleted!`,
                        'success'
                    )
                    setUpdateList(!updateList)
                }else {
                    Swal.fire(
                        'Error!',
                        'We are in trouble',
                        'error'
                    )
                }
            })
        }
      })
}

const handleEdit = () => {
    handleOpenModal();
    setDataModal(delivery)
}

 
  return (
    <div className="col-4 mb-3">
      <Card>
        <Card.Title className="text-center">
          <strong>{delivery.nameSet}</strong>
        </Card.Title>
        <Card.Body>
          <ListGroup className="mb-3">
          
          <Gravatar emailSet={delivery.emailSet} size={350} rating="pg" default="monsterid" className="CustomAvatar-image"           /> 
            <ListGroupItem>
           
              <strong>Fecha de recogida: </strong>
              {delivery.datePickup}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Peso: </strong>
              {delivery.weigh}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Nombre de quien recibe: </strong>
              {delivery.nameGet}
            </ListGroupItem>
          </ListGroup>
          <button className="btn btn-danger me-2" onClick={handleDelete}>ELIMINAR</button>
          <button className="btn btn-primary me-2"  onClick={handleEdit}>EDITAR</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardUsers;
