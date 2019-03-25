import React, {Component} from 'react'
import { Form,Button,Container,Row,Col,Nav,Navbar } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import AppCss from './App.css'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      elements: [],
      val: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  handleChange =  (txt) => {
      this.setState({
        val: txt.target.value
      })
  }

  handleClick = async (e) => {
    await this.setState({
        elements: [...this.state.elements,this.state.val]
    })
    console.log(this.state.elements)
}
  render(){
    return(
      <Container className="wrapper">
        <Container className="title">
          <h2>React Todo List</h2>
        </Container>
        <Form className="wrapperMainContainer" onSubmit={this.handleSubmit}>
          <h4>Enter you're tasks</h4>
          <Row>
            <Col xs={9}>
              <Form.Control onChange={this.handleChange} className="inp_Field" value={this.state.val}/>
            </Col>
            <Col xs={3}>
              <Button variant="success" onClick={this.handleClick}>add</Button>
            </Col>
          </Row>
        </Form>
        <Container className="createElements">
        <Row>
         <Col>
          <ul className="newBlock">
          {
            this.state.elements.map( (el,i) => {
              if (this.state.val !== "") {
                return(
                  <Row  className="newElement">
                    <Col xs={10}>
                      <li key={i}>
                        {el} {/*text value*/}
                      </li>
                    </Col>
                    <Col xs={2}>
                      <i class="fas fa-trash" onClick={ async () => {
                        this.state.elements.splice(i,1);
                        {/*delete button*/}
                        await this.setState({
                          elements: [...this.state.elements]
                        })
                      }}>
                      </i>
                    </Col>
                  </Row>
                )
              }else if (this.state.val === " " || this.state.val === ""){
                alert("please enter text in input field");
                var del = this.state.elements = [];
                return(<div>{del}</div>)
              }
            }
            )}
          </ul>
        </Col>
      </Row>
        </Container>
        <Container className="deleteList">
          <Button variant="danger" size="lg" block onClick={()=>{
            this.setState({
              elements: []
            })
          }}>Delete all list</Button>
        </Container>
      </Container>
    )
  }
}
