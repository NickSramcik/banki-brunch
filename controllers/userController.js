//import User from "../models/userModel";

class UserController {
  static add = async (req, res) => {
    const { title } = req.body;
    const task = new Task({ title, completed: false });
    await task.save();
    res.status(201).send(task);
  };

  static complete = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    task.completed = true;
    await task.save();
    res.send(task);
  };
}

export default UserController;

// exports.getUser = async (req, res) => {
//   try {
//     const user = await User.findOne();
//     if (!user) {
//       return res.status(404).send("No user found");
//     }
//     res.render("userView", {
//       user: user,
//     });
//   } catch (error) {
//     res.status(500).send("Server Error");
//   }
// };
