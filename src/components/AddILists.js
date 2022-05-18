import React from 'react';

const AddILists = () => {

    const handleAddList = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        const list = { name, description };

        fetch('https://mysterious-peak-29904.herokuapp.com/list', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(list)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert("List added Successfully");
                event.target.reset();
            })

    }
    return (
        <div className='mb-5'>
            <div className="card m-auto mt-5" style={{ width: "25rem" }}>
                <div className="card-header"><h1 className='text-info text-center'>REACT TODO APP</h1></div>
                <div className="card-body">
                    <form onSubmit={handleAddList}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" name='name' placeholder="Enter name" required />
                        </div>
                        <div className="form-group mt-3">
                            <label>Description</label>
                            <textarea className="form-control" name='description' placeholder="Description"></textarea>
                        </div>
                        <button type="submit" className="btn btn-info w-100 mt-3 fw-bold">Add task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddILists;