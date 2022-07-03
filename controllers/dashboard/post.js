const moment = require("moment");
// Nantinya akan diganti dengan model
const posts = [
  {
    id: 1,
    title: "Lorem Ipsum",
    body: "Dolor sit amet",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    body: "Dolor sit amet",
    createdAt: new Date("2022-06-22"),
  },
];
module.exports = {
  index: (req, res) => {
    const locals = {
      data: {
        posts: posts.map((i) => {
          i.fromNow = moment(i.createdAt).fromNow();
          return i;
        }),
      },
      contentName: "Post",
    };
    res.render("pages/dashboard/post", locals);
  },
};
