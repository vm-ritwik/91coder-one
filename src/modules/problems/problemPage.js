import React, {useEffect, useState} from "react";
import {fetchApi} from "../../util/apiCaller";
import lodash from "lodash";
import {useParams, Link, useLocation} from "react-router-dom";
// Routing ->
// Params, Query
// Route -> Segmented UI / Information
// Route Reloaded -> Same Segment UI


function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

// root -> /
// problem statement -> /problem/:problemId

// source of truth -> route

function ProblemPage() {

    const [singleProblem, setSingleProblem] = useState({})
    const [isLoadingProblemList, setProblemLoaderState] = useState(true);
    let {problemId} = useParams();

    let query = useQuery();
    console.log("query", query);

    useEffect(() => {
        loadPage();
    }, []);

    const loadPage = () => {
        console.log("problemId", problemId);
        fetchApi(`problems/${problemId}?id=1`, 'get', null).then((result) => {
            console.log("resp", result);
            if (result && result.problem) {
                setSingleProblem(result.problem);
                setProblemLoaderState(false);
            }
        })
    };

    const selectProblem = (id) => {
        window.history.pushState({}, `Problem ${1}`, `/problem/${id}`);
        setTimeout(() => {
            loadPage();
        }, 300);
    };

    return (
        <div>
            {isLoadingProblemList ?
                <span>
                        Loading...
                    </span>
                :
                null
            }
            {!lodash.isEmpty(singleProblem) ?
                <>
                    <h1>Problem Number {singleProblem.id}</h1>
                    <h3>{singleProblem.title}</h3>
                    <p>{singleProblem.description}</p>
                </>
                :
                null}
            <Link to={"/"}>Back</Link>
        </div>
    );
}

export default ProblemPage;