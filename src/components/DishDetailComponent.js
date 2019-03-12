import React,{ Component } from 'react';
import { Card,CardTitle,CardImgOverlay,CardImg,CardText,CardBody } from 'reactstrap';

class DishDetail extends Component{
    render(){
        return(
            this.renderSelectedDish(this.props.dishes)
        );
    }
    renderSelectedDish(dish){
        if(dish!=null){
            return(
                <div className="row mt-5">
                    <div className="col-12 col-md-5">
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
                    {this.renderComments(dish.comments)}
            </div>
                
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    renderComments(comments){
        if(comments!=null){
            const dishComments=comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                        <ul id="comment-list">
                        <li>{comment.comment}</li>
                        <li>--{comment.author},{this.renderDate(new Date(comment.date))}</li>
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
                <div></div>
            )
        }
    }
    renderDate(date){
        const dateArray=date.toUTCString().split(' ');
        return <span> {dateArray[2]} {dateArray[1]}, {dateArray[3]} </span>
    }

}
export default DishDetail;