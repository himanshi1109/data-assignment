import React, { useEffect, useState } from "react";

const Leftform = ({ addTask, clearTasks, dark, edit }) => {
    const [name, setName] = useState("");
    const [tableNo, setTableNo] = useState("");
    const [contact, setContact] = useState("");
    const [items, setItems] = useState("");
    const [price, setPrice] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        addTask({
            id: Date.now(),
            tableNo: tableNo,
            price: price,
            name: name,
            contact: contact,
            items: items
        });

        setName("");
        setTableNo("");
        setContact("");
        setItems("");
        setPrice("");
    };

    useEffect(() => {
        if (edit.isEdit) {
            setPrice(edit.task.price)
            setName(edit.task.name)
            setTableNo(edit.task.tableNo)
            setItems(edit.task.items)
            setContact(edit.task.contact)
        }
    }, [edit])

    return (
        <div className={dark?"border border-black/30 rounded-xl p-4 bg-[#132440]":"border border-black/30 rounded-xl p-4 bg-[#FFE6B3]"}>
            <h2 className={dark?"text-2xl text-white font-bold text-center mb-4":"text-2xl font-bold text-center mb-4"}>DATA</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="NAME"
                    className={dark?"border p-3 text-[#DEDED1] rounded-lg capitalize":"border p-3 placeholder:text-gray-700 rounded-lg capitalize"}
                />


                <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="CONTACT-NO."
                    className={dark?"border p-3 text-[#DEDED1] rounded-lg capitalize":"border p-3 placeholder:text-gray-700 rounded-lg capitalize"}
                />

                <input
                    value={items}
                    onChange={(e) => setItems(e.target.value)}
                    placeholder="ITEMS"
                    className={dark?"border p-3 text-[#DEDED1] rounded-lg capitalize":"border p-3 placeholder:text-gray-700 rounded-lg capitalize"}
                />

                <input
                    required
                    value={tableNo}
                    onChange={(e) => setTableNo(e.target.value)}
                    placeholder="TABLE-NO"
                    className={dark?"border p-3 text-[#DEDED1] rounded-lg capitalize":"border p-3 placeholder:text-gray-700 rounded-lg capitalize"}
                />


                <input
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="PRICE"
                    className={dark?"border p-3 text-[#DEDED1] rounded-lg capitalize":"border p-3 placeholder:text-gray-700 rounded-lg capitalize"}
                />

                <div className="flex gap-4 mt-6">
                    <button type="reset" onClick={clearTasks} className={dark?"w-full py-2 border border-black/40 rounded-lg font-bold bg-[#80A1BA] hover:bg-black hover:text-white transition":"w-full py-2 border border-black/40 rounded-lg font-bold bg-[#F7A9A8] hover:bg-black hover:text-white transition"}>
                        CLEAR
                    </button>
                    <button type='submit' className={dark?"w-full py-2 border border-black/40 rounded-lg font-bold bg-[#80A1BA] hover:bg-black hover:text-white transition":"w-full py-2 border border-black/40 rounded-lg font-bold bg-[#F7A9A8] hover:bg-black hover:text-white transition"}>
                        SUBMIT
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Leftform;

