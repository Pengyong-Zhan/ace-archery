app.component('review-list', {
  props: {
    reviews: Array
  },
  template:
  /*html*/
  `
    <div class='row justify-content-center my-5'>
      <div class='col-md-4'>
        <h3>Reviews:</h3>
        <ul>
          <li v-for='review in reviews' class='mb-3'> 
            {{review.name}} gave this {{review.rating}} stars <br> 
            {{ review.review }} 
          </li>
        </ul>
      </div>
    </div>
  `,
})