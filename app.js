const app = Vue.createApp({
  // data, functions
  // template: `<h2> I am template</h2>`,
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      // title: "The Final Empire",
      // author: "Brandon Sanderson",
      // age: 45,
      // x: 0,
      // y: 0,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    // changeTitle(title) {
    //   console.log("you clicked me!");
    //   this.title = title;
    // },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },

    handleEvent(e, data) {
      console.log("event triggered", e, e.type);
      if (data) {
        console.log("Event has a data", data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
