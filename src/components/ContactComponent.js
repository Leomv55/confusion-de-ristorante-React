import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Form,FormGroup,Button,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state={
            firstname:"",
            lastname:"",
            email:"",
            telnum:"",
            agree:false,
            contactType:"Tel.",
            message:""
        }
    }
    handleUpdate(event){
        const target=event.target;
        // if checkbox use checked else use value
        const value=target.type==="checkbox" ? target.checked :target.value
        const name=target.name;
        this.setState(
            {
                [name]:value
            }
        );
    }
    handleSubmit(event){
        console.log("Current state:"+JSON.stringify(this.state));
        alert("Current state:"+JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone fa-lg"></i> +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i> +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i> <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 mb-2">
                        <h2>Send Your Feedback</h2>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="fistname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname"
                                           name="firstname"
                                           placeholder="First Name"
                                           value={this.state.firstname}
                                           onChange={this.handleUpdate}
                                           />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname"
                                           name="lastname"
                                           placeholder="Last Name"
                                           value={this.state.lastname}
                                           onChange={this.handleUpdate}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" id="email"
                                           name="email"
                                           placeholder="Email"
                                           value={this.state.email}
                                           onChange={this.handleUpdate}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="text" id="telnum"
                                           name="telnum"
                                           placeholder="Tel. Number"
                                           value={this.state.telnum}
                                           onChange={this.handleUpdate}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:8,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                    value={this.state.agree}
                                                   onChange={this.handleUpdate}
                                                    /> {' '}
                                                <strong>I agree to all guidelines.</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                < Col md={{size:2}}>
                                    <select type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleUpdate}
                                    >
                                        <option value="Tel.">Tel.</option>
                                        <option value="Email">Email</option>
                                    </select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:2}}>
                                    <Label htmlFor="message">
                                        Your response
                                    </Label>
                                </Col>
                                <Col md={{size:10}}>
                                    <Input type="textarea" name="message" id="message"
                                           onChange={this.handleUpdate}
                                           row={10}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <Button type="submit" color="primary">Send response</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}