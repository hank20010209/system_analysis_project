import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/FavoriteSharp";
import Rating from "@mui/material/Rating";
import { IconButton } from "@material-ui/core";
import React, { useState } from "react";

function ProductBlock(props) {
  const [value, setValue] = useState(2);
  const [heartState, setHeartState] = useState("default");

  function changeLableStyle(){ 
      if(heartState === "default"){
          setHeartState("secondary")
      }else{
          setHeartState("default");
      }
  }


  return (
    <div className="col-3 mb-3 mx-5 justify-content-center container">
      <div class="row">
        <div className="card p-2 overflow-hidden h-100 shadow">
          <img src={props.item.imageLink} className="card-img-top" alt="not find" />
          <div className="card-body">
            <h5 className="card-title">
              商品名稱 : {props.item.title}
              <label htmlFor="icon-button-file">
                <IconButton aria-label="upload picture" onClick={changeLableStyle} color={heartState}>
                  <FavoriteIcon/>
                </IconButton>
              </label>
            </h5>
            <p className="card-text">作者 : {props.item.author}</p>
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
            >
              <AddShoppingCartIcon />
              加入到購物車
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductBlock;
