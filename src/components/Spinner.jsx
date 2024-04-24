import ClipLoader from "react-spinners/ClipLoader";

import React from "react";
const override = {
    display: 'block',
    margin: '100px auto',
};
function Spinner({ loading }) {
    return (
        <ClipLoader
            color="#36d7b7"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default Spinner;
