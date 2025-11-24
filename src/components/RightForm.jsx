import React from "react";

const RightForm = ({ tasks, removeTask, dark, editTask }) => {
    return (
        <div className={dark ? "border border-black/30 rounded-xl p-4 bg-[#132440] flex flex-col gap-4" : "border border-black/30 rounded-xl p-4 bg-[#FFFCCF] flex flex-col gap-4"}>

            {tasks.length === 0 && (
                <p className={dark ? "text-center text-white font-semibold" : "text-center font-semibold"}>No Orders Added</p>
            )}

            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={dark ? "border border-black/30 rounded-xl p-4 flex justify-between items-center bg-[#80A1BA]" : "border border-black/30 rounded-xl p-4 flex justify-between items-center bg-[#FFF8B5]"}>
                    <div className="flex flex-col font-bold">

                        <p>
                            <span className="label">Customer Name : </span>
                            <span className="value"> {task.name} </span>
                        </p>
                        <p>
                            <span className="label">Contact : </span>
                            <span className="value"> {task.contact} </span>
                        </p>
                        <p>
                            <span className="label">Items : </span>
                            <span className="value"> {task.items}</span>
                        </p>
                        <p>
                            <span className="label">Table No : </span>
                            <span className="value"> {task.tableNo}</span>
                        </p>
                        <p>
                            <span className="label">Price : </span>
                            <span className="value"> ₹{task.price}</span>
                        </p>

                    </div>

                    <div className="flex gap-3">
                        <button onClick={() => editTask(task)} className="px-3 py-2 border rounded-full text-sm font-semibold hover:bg-black hover:text-white transition">
                            EDIT
                        </button>

                        <button
                            onClick={() => removeTask(task.id)}
                            className="px-3 py-2 border rounded-full hover:bg-red-600 hover:text-white">
                            DELETE
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RightForm;

