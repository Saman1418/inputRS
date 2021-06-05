import React ,{useState} from 'react';
import Dataform from "./Dataform";
// import Success from "./Success";
import ShowData from './ShowData';

const Form = () => {
    const [data, setData] = useState([]);
    const handleSubmitForm = (values)=>{
        const newData = [...data];
        newData.push(values);

        setData([...newData]);
        console.log("data = " + data);
    }
    const [showRecord, setshowRecord] = useState(false);

    const handleShowRecord = (event) => {
        setshowRecord(!showRecord);
    }
    const buttonLable = !showRecord ? "Show Record":"Back to Form"
    return (
        <div>
            {!showRecord && <Dataform handleSubmitForm={handleSubmitForm} data={data} />}
            {<button className="bttn" id='showRecord' type="button" onClick={handleShowRecord}>{buttonLable}</button>}
            {showRecord && <ShowData data={data}></ShowData>}
        </div>
    )
}

export default Form;
