import React from 'react';
import { Card,CardTitle,CardImgOverlay,CardImg,CardText,CardBody } from 'reactstrap';




export default function DishDetail(props) {
    return renderSelectedDish(props.dish);

}



function renderSelectedDish(dish){
        if(dish!=null){
            return(
                <div className="row mt-5">
                    <div className="col-12 col-md-5 ">
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
                        {renderComments(dish.comments)}
                </div>
            );
        }
        else{
            return(
                <></>
            );
        }
    }
    function renderComments(comments){
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
                    <h1>Comment</h1>
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
