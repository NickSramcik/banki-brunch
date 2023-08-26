import { questions } from "../data/questions.js";

class HomeController {
  static home = (req, res) => {
    const message = "Welcome to BANKI BRUNCH!";
    console.log("Home");
    res.render("home", { message });
  };

  static questionsView = (req, res) => {
    console.log("QuestionsView");
    let allQuestions = questions.map((questions) => questions.question);
    res.render("questions", { allQuestions });
  };

  static typesView = (req, res) => {
    console.log("TypesView");
    let types = questions.map((questions) => questions.type);
    const uniqueTypes = Array.from(new Set(types));
    res.render("types", { uniqueTypes });
  };
}

export default HomeController;
