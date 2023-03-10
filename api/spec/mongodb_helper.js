var mongoose = require("mongoose");

// beforeAll(function (done) {
//   mongoose.connect("mongodb://0.0.0.0/twitcher", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   var db = mongoose.connection;
//   db.on("error", console.error.bind(console, "MongoDB connection error:"));
//   db.on("open", function () {
//     done();
//   });
// });

// afterAll(function (done) {
//   mongoose.connection.close(true, function () {
//     done();
//   });
// });

beforeAll(async () => {
  await mongoose.disconnect();
  await mongoose.connect("mongodb://0.0.0.0/twitcher", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
