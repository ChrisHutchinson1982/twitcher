const AnimalsController = {
  GetAnimal: (req, res) => {
    const animal = req.query.name;
    const url = "https://api.api-ninjas.com/v1/animals?name=" + animal;

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": `${process.env.API_NINJAS_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        res.status(200).json(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

module.exports = AnimalsController;
