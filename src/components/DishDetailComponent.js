import React from 'react';
import { Card,CardTitle,CardImgOverlay,CardImg,CardText,CardBody,BreadcrumbItem,Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';



export default function DishDetail(props) {
    return renderSelectedDish(props.dish,props.comments);

}



function renderSelectedDish(dish,comment){
        if(dish!=null){
            return(
                <div className="container mb-2">
                    <div className="row">
                        <Breadcrumb className="mt-2">
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row mt-4 mb-2">
                        <div className="col-12 col-md-5 mr-2 ">
                            <Card>
                                <CardImg width='100%' src={dish.image} alt={dish.name}/>
                                <CardImgOverlay>
                                    <CardTitle>{dish.name}</CardTitle>
                                </CardImgOverlay>
                                <CardBody>
                                    <CardTitle>
                                        {dish.name}
                                    </CardTitle>
                                    <CardText>
                                        <p>{dish.description}</p>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        {RenderComments(comment)}
                    </div>
                </div>

            );
        }
        else{
            return(
                <></>
            );
        }
    }
    function RenderComments(comments){
        if(comments!=null){
            const dishComments=comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                        <ul id="comment-list">
                        <li>{comment.comment}</li>
                        <li>--{comment.author},{renderDate(new Date(comment.date))}</li>
                        </ul> 
                        <br/>
                    </div>
                );
            });
        return(
            <div className="col-12 col-md-5">
                    <h1>Comments</h1>
                    <hr/>
                    {dishComments}
                </div>
            );    
        }
        else{
            return(
                <></>
            )
        }
    }
    function renderDate(date){
        const dateArray=date.toUTCString().split(' ');
        return <span> {dateArray[2]} {dateArray[1]}, {dateArray[3]} </span>
    }
