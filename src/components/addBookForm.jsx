import React from "react";

const AddBook = ()=>{
    return (
    <div className="form-card">
        <h2>ADD NEW BOOK</h2>
        <form>
            <input type="text" name="title" placeholder="Title" required />
            <input type="text" name="author" id="author" placeholder="Author" required />
            <button type="button" className="add-butn">ADD BOOK</button>
        </form>
    </div>
    )
};

export default AddBook;
