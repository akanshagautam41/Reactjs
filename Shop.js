
import { NavLink } from "react-router-dom";
function Shop(){
    return(
<div className="shop">
<img src="./image/breadcrumb1.png" alt="" />
   <div className="text-shop">
    <h1>Shop List</h1>
    
    <NavLink className="sh" to="/"><i class="fa-solid fa-house"></i></NavLink>
    <NavLink className="sh" to="/">Home</NavLink>
    <NavLink className="sh" to="/about">About</NavLink>
        <NavLink className="sh" to="/contact">Contact</NavLink>
   </div>
   <div className="product">
    <div className="prd">
        <img src="./image/product1.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
   
    <div className="prd">
        <img src="./image/product2.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
   
   
    <div className="prd">
        <img src="./image/product3.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
   
   
    <div className="prd">
        <img src="./image/product4.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
   
   
    <div className="prd">
        <img src="./image/product5.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
  
   
    <div className="prd">
        <img src="./image/product6.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
  
   
    <div className="prd">
        <img src="./image/product7.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
    <div className="prd">
        <img src="./image/product1.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
    <div className="prd">
        <img src="./image/product3.png" alt="" />
        <p>Organic Cabbage</p>
        <h5>$50.00</h5>
        
    </div>
   </div>
   <div className="cus">
    <h1>What Our Customers Saying</h1></div>

    <div className="re">
        <div className="re-lf">
        <i class="fa-solid fa-quote-left"></i>
        <p>”Quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit sed quia non numqua eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem repudia sint et molestiae”</p>
        <div className="st">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <div className="nm">
           <p>Alina Parker <span>Ceo, GTD</span></p>
        </div>
        </div>
        <div className="re-rt">
        <i class="fa-solid fa-quote-left"></i>
        <p>”Quisquam est, qui dolorem ipsum quia dolor sit consectetur adipisci velit sed quia non numqua eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem repudia sint et molestiae”</p>
        <div className="st">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <div className="nm">
           <p>Kevin Andrew <span>Manager, Rex</span></p>
        </div>
        </div>
    </div>
</div>
    );
}
export default Shop;