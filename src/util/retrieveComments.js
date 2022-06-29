import data from './data.json'

function Data () {
    if (localStorage.comments) {
        return JSON.parse(localStorage.comments)
    }
    return data
}

export default Data;
