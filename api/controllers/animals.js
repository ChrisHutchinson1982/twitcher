const AnimalsController = {
  GetAnimal: (req, res) => {
    res.status(200).json({ message: "ok" });
  },
};

module.exports = AnimalsController;
