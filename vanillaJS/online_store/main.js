let collection = document.getElementById('cont_coll')

//fetching data here
fetch("https://fakestoreapi.com/products")
.then((res)=> res.json())
.then((data)=>{
    let len = data.length;
    for(let x = 0; x < len; x++){
    let result = `<div class="cloths">
                    <div>
                        <h3 class="product_title">${data[x].title}</h3>
                        <div class="img">
                            <img src="${data[x].image}" alt="image" width="150px">
                        </div>
                        <div class="description">
                            <p>${data[x].description}</p>
                        </div>
                        <div class="price">$${data[x].price}</div>
                        <button type="submit"class="cart btn_c">Buy Now</button>
                    </div>
                </div>`
    collection.innerHTML += result;}
})