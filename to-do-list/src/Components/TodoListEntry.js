import React, { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} from "../api/ToDoApi";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

function TodoListEntry() {
  const [newTodo, setNewTodo] = useState("");

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery();
  console.log("todos", todos);
  const [addTodo] = useAddTodosMutation();
  const [updateTodo] = useUpdateTodosMutation();
  const [deleteTodo] = useDeleteTodosMutation();
  const handleSubmit = (e) => {
    if(!newTodo){
      return alert('Please enter a Task')
    }
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
    setNewTodo("");
  };
  let content;
  if(isLoading)
  {
    return <h1>LOADING...</h1>
  }
  else if(isSuccess){
    content=
      todos.map((todo)=>{
        return(
          <div key={todo.id}>
            <Row>
              <Col sm={2}>
              <input
               type="checkbox" 
               className="form-check mt-3" 
               checked={todo.completed}  
               id={todo.id}
               onChange={()=>updateTodo({...todo,completed:!todo.completed})}
               />
              </Col>
              <Col sm={8}>
              <label className="mt-3" htmlFor={todo.id}>{todo.title}</label>
              </Col>
              <Col sm={2}>
              <Button type="submit" className="mt-3" onClick={()=>deleteTodo({id:todo.id})}>
                <FontAwesomeIcon icon={faTrash}/>
              </Button>
              </Col>
            </Row>
            <hr className='my-2'/>
          </div>
        )
      })
    }else if (isError)
  {
    return <h1>{error}</h1>
  }
 
  return (
    <div className="Container">
      <h1 className="text-start text mt-2">TO DO APP</h1>
      <Card className="card1">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col sm={10}>
                <Form.Group>
                  <Form.Control 
                  type="text" 
                  placeholder="Enter New Task"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                   />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Button type="submit">
                  <FontAwesomeIcon icon={faUpload} />
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mt-3 card1">
        <Card.Body>
          {content}
        </Card.Body>
      </Card>
    </div>
  );
  }

export default TodoListEntry;
