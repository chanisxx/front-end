import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_ERROR = 'FETCHING_ERROR';

// view list of all plants
export const GET_PLANTS_SUCCESS = 'GET_PLANTS_SUCCESS';

export const fetchAllPlants = () => dispatch => {
    dispatch({ type: FETCHING_START});
    
    axios
    .get(`/plants`)
    .then(res => {
        console.log('fetchAllPlants *success*', res);
        dispatch({type: GET_PLANTS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.error('fetchAllPlants *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message})
    });
};

// holds user information 
export const USER_CRED = 'USER_CRED';

export const userCred = (credentials) => dispatch => {
    dispatch({type: USER_CRED, payload: credentials})
}

// create a new user with username, phone number, and password
export const POST_REG_SUCCESS = 'POST_REG_SUCCESS';

export const postRegister = (credentials) => dispatch => {
    dispatch({ type: FETCHING_START});

    return (
    axiosWithAuth()
    .post('/auth/register', credentials)
    .then(res => {
        console.log('postRegister *success*', res);
        dispatch({type: POST_REG_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.error('postRegister *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message})
    })
    )
};

// logs in a valid user with username and password
export const POST_LOG_SUCCESS = 'POST_LOG_SUCCESS';

export const postLogin = (credentials) => dispatch => {
    dispatch({type: FETCHING_START});

    return (
    axiosWithAuth()
    .post('auth/login', credentials)
    .then(res => {
        console.log('postLogin *success*', res);
        dispatch({type: POST_LOG_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.error('postLogin *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    })
    )
};

// gets a list of users
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const getUsers = () => dispatch => {
    dispatch({type: FETCHING_START});

    axiosWithAuth()
    .get('/users')
    .then(res => {
        console.log('getUsers *success*', res);
        dispatch({type: GET_USERS_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.error('getUsers *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    })
}

// user can update their password and phone number by their user id
export const PUT_USER_SUCCESS = 'PUT_USER_SUCCESS';

export const putUser = (userId, credentials) => dispatch => {
    dispatch({type: FETCHING_START});

    axiosWithAuth()
    .put(`/users/${userId}`, credentials)
    .then(res => {
        console.log('putUser *success*', res);
        dispatch({type: PUT_USER_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log('putUser *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    });
};

// user adds a new plant
export const POST_PLANT_SUCCESS = 'POST_PLANT_SUCCESS';

export const postPlant = (plant) => dispatch => {
    dispatch({type:FETCHING_START});

    axiosWithAuth()
    .post('/auth/myplants', plant)
    .then(res => {
        console.log('postPlant *success*', res);
        dispatch({type: POST_PLANT_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log('postPlant *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    });
};

// user can get a plant by plant id
export const GET_PLANT_SUCCESS = 'GET_PLANT_SUCCESS';

export const getPlant = (plantId) => dispatch => {
    dispatch({type: FETCHING_START});

    axiosWithAuth()
    .get(`/plants/${plantId}`)
    .then(res => {
        console.log('getPlant *success*', res);
        dispatch({type: GET_PLANT_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log('getPlant *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    });
};

// user can delete a plant by plant id
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS';

export const deletePlant = (plantId) => dispatch => {
    dispatch({type: FETCHING_START});

    axiosWithAuth()
    .delete(`/plants/${plantId}`)
    .then(res => {
        console.log('deletePlant *success*', res);
        dispatch({type: DELETE_PLANT_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log('deletePlant *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    });
};

// user can update plant information by plant id
export const PUT_PLANT_SUCCESS = 'PUT_PLANT_SUCCESS';

export const putPlant = (plantId, plantInfo) => dispatch => {
    dispatch({type: FETCHING_START});

    axiosWithAuth()
    .put(`/plants/${plantId}`, plantInfo)
    .then(res => {
        console.log('putPlant *success*', res);
        dispatch({type: PUT_PLANT_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log('putPlant *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    });
};

// user can get their list of plants by user id
export const GET_USERS_PLANTS_SUCCESS = 'GET_USERS_PLANTS_SUCCESS';

export const getUsersPlants = (userId) => dispatch => {
    dispatch({type: FETCHING_START});

    axiosWithAuth()
    .get(`/users/${userId}/plants`)
    .then(res => {
        console.log('getUsersPlants *success*', res);
        dispatch({type: GET_USERS_PLANTS_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log('getUsersPlants *error*', err);
        dispatch({type: FETCHING_ERROR, payload: err.message});
    });
};








