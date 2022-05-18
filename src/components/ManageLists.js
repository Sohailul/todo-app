import React, { useEffect, useState } from 'react';

const ManageLists = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-peak-29904.herokuapp.com/list')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://mysterious-peak-29904.herokuapp.com/list/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = lists.filter(list => list._id !== id)
                    setLists(remaining);
                })
        }
    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map(list =>
                            <>
                                <tr key={list._id}>
                                    <th scope="row">1</th>
                                    <td>{list.name}</td>
                                    <td>{list.description}</td>
                                    <td><button onClick={() => handleDelete(list._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            </>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageLists;