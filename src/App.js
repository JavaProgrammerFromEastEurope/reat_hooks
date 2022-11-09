import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <Routes>
        <Route path={"/users"} element=<UsersPage /> exact />
        <Route path={"/todos"} element=<TodosPage /> exact />
        <Route path={"/users/:id"} element=<UserItemPage /> />
        <Route path={"/todos/:id"} element=<TodoItemPage /> />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
