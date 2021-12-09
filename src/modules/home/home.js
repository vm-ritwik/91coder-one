import {useEffect, useState} from "react";
import {fetchApi} from "../../util/apiCaller";
import { Link } from "react-router-dom";
import lodash from "lodash";
// Routing ->
// Params, Query
// Route -> Segmented UI / Information
// Route Reloaded -> Same Segment UI


// root -> /
// problem statement -> /problem/:problemId

// source of truth -> route

function Home() {

    const [problemList, setProblemList] = useState([])
    const [isLoadingProblemList, setProblemLoaderState] = useState(true);

    useEffect(() => {
        loadPage();
    }, []);

    const loadPage = () => {
        fetchApi(`problems/list?id=1`, 'get', null).then((result) => {
            if (result && result.problems) {
                setProblemList(result.problems);
                setProblemLoaderState(false);
            }
        })
    };

    const selectProblem = (id) => {
        // window.history.pushState({}, `Problem ${1}`, `/problem/${id}`);
        // setTimeout(() => {
        //     loadPage();
        // }, 300);
    };

    return (
        <div>
            <h1>Problem List</h1>
            <ul>
                {isLoadingProblemList ?
                    <span>
                        Loading...
                    </span>
                    :
                    null
                }
                {!isLoadingProblemList && problemList.map(item => (
                    <Link to={`/problem/${item.id}?id=1`}>
                        <li
                            onClick={() => selectProblem(item.id)}
                            key={item.id}>
                            <h3>{item.id}</h3>
                            <h4>{item.title}</h4>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Home;