import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function TodoListEntry() {
  return (
    <div>
      <h1 className="text-center mt-3">TO DO LIST</h1>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Enter New Task" />
            </Form.Group>
            <Button type="submit">
              <FontAwesomeIcon icon={faUpload} />
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mt-3">
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            consequatur voluptates id magni corrupti quaerat. Voluptatibus odio
            nostrum consequatur est eius totam labore laboriosam voluptatum quod
            quia itaque ut ipsam, tenetur ab saepe ullam vel perspiciatis!
            Quaerat sit voluptate sed veniam rem harum cum numquam error saepe.
            Aspernatur laboriosam veritatis in corrupti voluptate quod vero
            praesentium minima consectetur, qui, libero ex et, vitae odit
            recusandae eaque consequatur!
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TodoListEntry;
