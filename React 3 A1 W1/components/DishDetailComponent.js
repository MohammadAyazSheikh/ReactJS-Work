import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component
{
    constructor(props)
    {
        super(props);
    }


  

    renderDish(dish){
        if(dish != null)
        {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            return(<div>sdgfgdf</div>); 
        }
    }


    render()
    {
        
        return(
          
                <div className="row">
                    {this.renderDish(this.props.DishDetail)}
                </div>
            
        );
    }
}


export default DishDetail;