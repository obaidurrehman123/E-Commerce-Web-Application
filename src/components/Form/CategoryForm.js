import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Category"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
