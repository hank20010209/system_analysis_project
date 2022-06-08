import React, {useState} from 'react';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteIcon from "@material-ui/icons/FavoriteSharp";
import { IconButton,Typography, Button} from "@material-ui/core";
import Rating from "@mui/material/Rating";
import { Card } from 'react-bootstrap';
import './ProductBlock.css';
import Badge from 'react-bootstrap/Badge';
import {useStateValue} from "../components/StateProvider";

function CheckoutProduct(props) {
    const [value, setValue] = useState(2);
    const [heartState, setHeartState] = useState("default");
    // const {state: {cart}, dispatch,} = CartState();
    const [{basket}, dispatch] = useStateValue();
  
    console.log("this is the basket >>>", basket);
    const addToBasket = () =>{
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          title: props.item.title,
          author: props.item.author,
          type: props.item.type,
          categories: props.item.categories ,
          price: props.item.price,
          imageLink:props.item.imageLink,
        },
      });
    };
  
    function changeLableStyle() {
      if (heartState === "default") {
        setHeartState("secondary")
      } else {
        setHeartState("default");
      }
    }

    return (
        <div className="checkoutProduct">
            <Card className='product-card'> 
            <Card.Img variant="top" src={props.item.imageLink} alt="not find" />
            <Card.Body>
                <Card.Title>
                商品名稱 : {props.item.title}
                <label htmlFor="icon-button-file">
                    <IconButton aria-label="upload picture" onClick={changeLableStyle} color={heartState}>
                    <FavoriteIcon />
                    </IconButton>
                </label>
                </Card.Title>
                <Card.Text>作者 : {props.item.author}</Card.Text>
                <p><Badge bg="secondary">{props.item.type}</Badge> <Badge bg="secondary">{props.item.categories}</Badge></p><br></br>
                <Typography component="legend">商品評級</Typography>

                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
                <br></br>
                
                
                <Button
                color="secondary"
                variant="contained"
                aria-label="add to shopping cart"
                onClick={addToBasket}
                >
                <AddShoppingCartIcon />
                加入到購物車
                </Button>
            </Card.Body>
    </Card>
        </div>
    )
}


export default CheckoutProduct;