import { questions } from "../data/questions.js";

class HomeController {
  static home = (req, res) => {
    const message = "Welcome to BANKI BRUNCH!";
    console.log("Home");
    res.send(message);
  };

  static questionsView = (req, res) => {
    console.log("QuestionsView");
    let allQuestions = questions.map((questions) => questions.question);
    res.send(allQuestions);
  };

  static typesView = (req, res) => {
    console.log("TypesView");
    let types = questions.map((questions) => questions.type);
    const uniqueTypes = Array.from(new Set(types));
    res.send(uniqueTypes);
  };
}

export default HomeController;
