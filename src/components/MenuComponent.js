import React,{Component} from 'react';
import {Card,CardText,CardImg,CardBody,CardTitle,CardImgOverlay} from  'reactstrap'
import DishDetail from './DishDetailComponent';
export default class Menu extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectedDish:null
        }
    }
    onSelectedDish(dish){
        this.setState({selectedDish:dish});
        }
    
    render() {
        const  menu=this.props.dishes.map((dish)=>{
            return(
                <div className="col-12 col-md-5 mt-5">
                    <Card key={dish.id} onClick={()=>{this.onSelectedDish(dish)}}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row ml-2">
                    <DishDetail dishes={this.state.selectedDish}/>
                </div>
            </div>
        )
    }


}