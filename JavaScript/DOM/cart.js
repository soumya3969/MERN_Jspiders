let product1 = {
  id: "AA101",
  img: "./assets/watch1.jpg",
  name: "Apple Watch",
  price: 41900.0,
  qty: 1
};
let product2 = {
  id: "AA102",
  img: "./assets/airpods.jpg",
  name: "Apple Airpods Pro",
  price: 24900.0,
  qty: 1
};
let product3 = {
  id: "AA103",
  img: "./assets/macmini.jpg",
  name: "Apple Mac Mini",
  price: 59900.0,
  qty: 1
};

// !display Product
let ProductList = [];
ProductList.push(product1, product2, product3);

function displayProduct(data) {
  let item = `
          <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 text-center">
          <div class="card">
            <div class="card-body d-flex justify-content-evenly">
              <div class="b-left col-6">
                <img
                  style="
                    border-radius: 1.5rem;
                    box-shadow: 5px 5px 10px #ffffff;
                  "
                  src="${data.img}"
                  alt="Akatsuki"
                  class="img-fluid"
                />
              </div>
              <div class="b-right col-6">
                <table class="table text-center text-dark">
                  <tr>
                    <th>Id:</th>
                    <td>${data.id}</td>
                  </tr>
                  <tr>
                    <th>Name:</th>
                    <td>${data.name}</td>
                  </tr>
                  <tr>
                      <th colspan="2" id="stocks">In stocks</th>
                  </tr>
                  <tr>
                      <th id='price'>Price </th>
                      <td id='price'>${data.price}</td>
                  </tr>
                  <tr>
                      <th >Qty </th>
                      <td><span>
                      <button  onclick="incQty('${data.id}')" class="btn btn-link" id><i class="fa-solid fa-circle-plus"></i></button>
                      </span><span id="qty-${data.id}">${data.qty}</span> <span>
                      <button onclick="decQty('${data.id}')" class="btn btn-link"><i class="fa-solid fa-circle-minus"></i></button>
                      </span></td>
                  </tr>
                  <tr>
                      <th>Total </th>
                      <td id="total-${data.id}"></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
          `;
  document.getElementById("display").innerHTML += item;
}

function incQty(productId) {
  let product = ProductList.find((item) => item.id === productId);
  if (product) {
    product.qty++;
    updateQuantity(productId, product.qty);
    updateTotal(productId);
  }
}

function decQty(productId) {
  let product = ProductList.find((item) => item.id === productId);
  if (product && product.qty > 1) {
    product.qty--;
    updateQuantity(productId, product.qty);
    updateTotal(productId);
  }
}

function updateQuantity(productId, quantity) {
  document.getElementById("qty-" + productId).textContent = quantity;
}
function updateTotal(productId) {
  let product = ProductList.find((item) => item.id === productId);
  if (product) {
    let totalValue = Math.trunc(product.qty * product.price);
    document.getElementById("total-" + productId).textContent =
      totalValue;
  }
}

for (let data of ProductList) {
  displayProduct(data);
  updateTotal(data.id);
}
