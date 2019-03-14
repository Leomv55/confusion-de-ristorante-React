import React from 'react';
import {Card,CardImg,CardTitle,CardImgOverlay} from  'reactstrap';
import {Link} from "react-router-dom";
import Breadcrumb from "reactstrap/es/Breadcrumb";
import BreadcrumbItem from "reactstrap/es/BreadcrumbItem";

function RenderMenuItem({dish}) {
    return(
        <Card key={dish.id} className="card-home">
           <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
           </Link>
        </Card>
    );
}
export default function Menu(props) {
    const  menu=props.dishes.map((dish)=>{
        return(
            <div className="col-12 col-md-5 mt-4">
                <RenderMenuItem dish={dish} />
            </div>

        );
    });
    return(
        <div className="container">
            <div className="row mt-1">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr/>
                    </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );

}
