import Users from "./../controllers/user";
export default app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the BookStore API!"
    })
  );

  app.post("/api/users", Users.signUp); // API route for user to signup
};
