import {useEffect, useState} from "react";
import callAPI from "./util/apiCaller";

function App() {

    const [problemList, setProblemList] = useState([{
        id: 1,
        title: 'Soemthing'
    }])


    useEffect(() => {
        callAPI(`/api/problems/list?id=1`, 'get', null, (resp) => {
            console.log("resp", result);
        })
    }, []);

    return (
        <div>
            <h1>Problem List 2</h1>
            <ul>
                {problemList.map(item => (
                    <li key={item.id}>
                        <h3>{item.id}</h3>
                        <h4>{item.title}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;