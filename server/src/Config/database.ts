const mongoose = require('mongoose');

export const dbConnect = () => {
  main()
    .then(() => console.log('Connection Successfully.'))
    .catch((err) => {
      console.log(err);
      throw err;
    });

  async function main() {
    await mongoose.connect('mongodb://localhost:27017/mern-app');
  }
};
