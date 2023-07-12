app.component('review-form', {
  template:
  /*html*/
  `
  <div class="row justify-content-center my-5">
    <div class='col-lg-4'>
      <form @submit.prevent='onSubmit'>
        <label for='name' class="form-label">Name: </label>
        <div class="mb-4 input-group">
          <span class="input-group-text">
            <i class="bi bi-person-fill"></i>
          </span>
          <input type='text' id='name' v-model='name' class="form-control" >
        </div>

        

        <div class="form-floating mb-4 mt-5">
          <textarea id='review' v-model='review' class="form-control" style="height: 140px"></textarea>
          <label for='review'>Review: </label>
        </div>

        <label for='rating' class="form-label">Rating: </label>
        <div class="input-group mb-4">
          <span class="input-group-text">
            <i class="bi bi-star-fill"></i>
          </span>

          <select id='rating' v-model.number='rating' class="form-select">              
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </div>  
        
        <div class='text-center'>
          <button class="btn btn-primary" type='submit'>Submit Review</button>
        <div>
      </form>
    </div>    
  </div>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: 0
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.reviw === '' || this.rating === null) {
        alert('Review is in complete, please fill out every field.')
        return
      }

      let productReview = {
        name : this.name,
        review : this.review,
        rating : this.rating
      }

      this.$emit('submit-review', productReview)

      this.name = ''
      this.review = ''
      this.rating = null
    }
  }
})