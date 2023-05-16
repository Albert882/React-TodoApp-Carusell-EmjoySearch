import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClear } from "react-icons/all";
import { MdDeleteOutline } from "react-icons/all";
import { addToTodo, removeToTodo, todoChecked, clearTodos, compleatedItems,clearCompleteds } from "../redux/features/todo-slice";

export default function TodoList() {
  const [inpValue, setInpValue] = useState("");
  const handleChange = (e) => {
    setInpValue(e.target.value);
  };

  const { todoItems, compleatedCount } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(compleatedItems())
  })

  return (
    <section className="flex items-center justify-center py-10 px-40">
      <div className="w-[500px] shadow-black shadow-md">
        <form
          action=""
          className="w-full h-10 border-b border-black"
          onSubmit={(e) => {
            handleChange, e.preventDefault();
            dispatch(addToTodo(inpValue)), setInpValue("");
          }}
        >
          <input
            type="text"
            name="text"
            value={inpValue}
            onChange={handleChange}
            className="w-[90%] text-[#34406c] px-4 h-full"
            id="text"
            placeholder="Enter String"
          />
          <input
            type="submit"
            name="sub"
            id="sub"
            className="w-[10%] h-full bg-black rounded-lg text-white"
            value="Add"
          />
        </form>
        <div>
          {todoItems?.length > 0 ? (
            todoItems?.map((item) => {
              return (
                <div className="flex justify-between px-5 h-12 items-center border-b border-[#34406c]" key={item?.id}>
                  <div className="flex gap-4">
                    <input type="checkbox"
                        onChange={(e) =>
                          dispatch(todoChecked([item?.id, e.target.checked]))
                        }
                        checked={item?.isCompleated}
                        name=""
                        id={item?.text}  />
                    <label htmlFor={item?.id}>{item?.text}</label>
                  </div>
                  <button onClick={() => dispatch(removeToTodo(item?.id))}>
                    <AiOutlineClear className="w-6 h-6 text-red-700" />{" "}
                  </button>
                </div>
              );
            })
          ) : (
            <div className="flex items-center h-[200px] justify-center">
              <p className="text-[#34406c]">Todo is Empty</p>
            </div>
          )}
        </div>
        {todoItems.length ? (
          <div className="flex justify-between mt-5">
            <div>
              <p className="text-[#34406c] font-medium">
                {compleatedCount}/{todoItems?.length} Is Completed
              </p>
              {compleatedCount > 0 ? (
                <div
                  className="flex cursor-pointer text-base font-medium"
                  onClick={() => dispatch(clearCompleteds())}
                >
                  <p>Clear Completed</p>
                  <MdDeleteOutline className="w-6 h-6 text-red-700" />
                </div>
              ) : null}
            </div>
            <div
              className="flex items-center justify-center text-lg cursor-pointer"
              onClick={() => dispatch(clearTodos())}
            >
              <AiOutlineClear className="w-6 h-6 text-red-700" />
              <p className="font-medium">Clear Items</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
