import axios from "axios";

export const getlist = () => {

    return axios 
        .get('api/tasks', {
            headers: { 'Contentent-Type': 'application/json' }
        })
        .then(res => {
            // console.log(res.data);
            return res.data
        });

}

export const addItem = title => {
    return axios
        .post('api/tasks', {
            title: title,
        },
        {
            headers: { 'Contentent-Type': 'application/json' }
        })
        .then(res => {
             console.log(res)
        });

}


export const deleteItem = id => {
    axios.delete(`api/tasks/${id}`, {
        headers: { 'Contentent-Type': 'application/json' }
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => { 
        console.log(err);
    })
} 

export const updateItem = (title, id) => {
    return axios
        .put(`api/tasks/${id}`,
        {
            title: title,
        },
        {
            headers: { 'Contentent-Type': 'application/json' }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
} 