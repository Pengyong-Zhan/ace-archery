app.component('product', {
  props: {
    premium: Boolean
  },
  template:
  /*html*/
  `
    <div class='container-lg'>
      <div class='row justify-content-center g-5'>
        <div class='col-md-5 mx-3'>
          <img class="img-fluid" :src='image'>
        </div>
    
        <div class='col-md-5 lead'>
          <h1 class='text-primary'>{{ title }}</h1>
          
          <p v-if='inStock'>In Stock</p>
          <p v-else>Out of Stock</p>

          <p v-if='premium'>Shipping: Free</p>
          <p v-else>Shipping: 2.99</p>

          <ul>
            <li v-for='detail in details'>{{ detail }}</li>
          </ul>

          <div class='d-flex'>            
            <div
              class='color-circle'
              :style='{backgroundColor: item.color}'
              v-for='(item, index) in items'
              :key=item.id
              @mouseover='updateItem(index)'>
            </div>
          </div>



          <button class='btn btn-primary mt-5' @click='addToCart'>Add to Cart</button>
        </div>

      </div>

      <review-list v-if='reviews.length > 0' :reviews='reviews'></review-list>
      <review-form @submit-review='addReview'></review-form>
    </div>
  `,
  data() {
    return {
      product: 'Archery Recurve Bow and Arrows Set',
      brand: 'Vogbel',
      selectedItem: 0, //index
      details: ['paper', 'nylon', 'steel'],
      items: [
        { id: 1827, color: 'green', image: './assets/images/green.jpg', quantity: 39 },
        { id: 1829, color: 'red', image: './assets/images/red.jpg', quantity: 0 },
      ],
      reviews: []
    }
  },
  computed: {
    title() {
      return `${this.brand} - ${this.product}`
    },
    image() {
      return this.items[this.selectedItem].image
    },
    inStock() {
      return this.items[this.selectedItem].quantity
    }
  },
  methods: {
    updateItem(index) {
      this.selectedItem = index
    },
    addToCart() {
      this.$emit('add-to-cart', this.items[this.selectedItem].id)
    },
    addReview(review) {
      console.log(this.reviews)
      this.reviews.push(review)
    }
  }
})