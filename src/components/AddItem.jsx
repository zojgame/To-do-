import { React, useState } from "react";

const AddItem = ({ handleClickAdd, isNight }) => {
  const [value, setValue] = useState("");

  // Устанавливает текущее значение input в переменную value при любом изменении в input
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Обработчик нажатия клавиши Enter в input при добавлении задачи

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setValue("");
    const task = {
      status: false,
      text: value,
      // ID генерируется через дату (используется время создания задачи). Это обеспечивает уникальность id
      id: Number(new Date().getTime()),
    };
    handleClickAdd(task);
  };

  return (
    <form className="new-task" name="addTask" onSubmit={handleOnSubmit}>
      <input
        className={`new-task__input ${
          isNight && "new-task__input_night-theme_active"
        }`}
        placeholder="Добавить новую задачу"
        name="addNewTask"
        id="addNewTask"
        defaultValue={value}
        onChange={handleChange}
        // onKeyDown={handleKey}
        type="text"
        minLength={1}
        maxLength={30}
        autoFocus
      ></input>
    </form>
  );
};
export default AddItem;
