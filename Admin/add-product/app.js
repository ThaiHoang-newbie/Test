let btnAddProduct = document.querySelector(".add")

btnAddProduct.addEventListener('click', function(){
  addProduct()
  btnAddProduct.classList.add('hide')
})
function addProduct() {
  let a = document.createElement("div")
  let b = document.body.appendChild(a)
  b.setAttribute('class','add-product')
  let add_product = `
  <form action="" method="post">
    <div class="post-infor">
      <input type="text" name="name" placeholder="Product Name" />
      <input type="number" name="quantity" placeholder="Quantity" />
      <select name="" id="">
        <option value="TS">T-shirt</option>
        <option value="PS">Pants</option>
        <option value="SN">Sneakers</option>
        <option value="AC">Accessory</option>
      </select>
      <input type="text" name="promo" placeholder="Input promotion" />
      <input type="number" name="price" placeholder="Price" />
      <input type="text" name="description" placeholder="Description" />
    </div>
    <div class="post-image">
      <label for="mypicture" class="preview">
        <span>Upload to review image</span>
      </label>
      <input id="mypicture" type="file" name="image" hidden />
    </div>
    <div class="button-row">
      <button class="close" onclick="removeProduct(event)">
      <i class="fa-solid fa-xmark"></i>
      </button>
      <i class="fa-solid fa-check"></i>
      <button class="accept-input">
    </div>
  </form>
  `
  b.innerHTML = add_product
  
}
function removeProduct(event) {
  event.preventDefault(); // prevent form submission
  let divToRemove = document.querySelector(".add-product");
  divToRemove.remove();
  btnAddProduct.classList.remove('hide')
}