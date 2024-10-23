import axios from "axios";

function ApiRoot() {
    return ( axios.create('https://localhost/') );
}

export default ApiRoot;