import one from "../assest/images/shoe (1).png"
import two from "../assest/images/shoe (2).png"
import three from "../assest/images/shoe (3).png"
import four from "../assest/images/shoe (4).png"

function Products(){
    return(
      <div class="Product-container">
          <h2>Shoes</h2>
          <div class="product-bar">
              <div class="product-bar-1">
                  <img src={one} alt="One"></img>
                  <p> Green Layered shoe
                  </p>
              </div>
              <div class="product-bar-1">
                  <img src={two} alt="two"></img>
                  <p>Adidas Shoe
                  </p>
              </div>
              <div class="product-bar-1">
                  <img src={three} alt="three"></img>
                  <p>Adidas Orange layered Shoe</p>
              </div>
              <div class="product-bar-1">
                  <img src={four} alt="four"></img>
                  <p> adidas White Shoes
                  </p>
              </div>
          </div>
      </div>
    )
  }

  export default Products