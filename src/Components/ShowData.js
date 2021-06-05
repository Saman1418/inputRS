import React from "react";

const ShowData = ({ data }) => {

    return (
        <>
            <div>
                <table class="ui selectable inverted table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>DOB</th>
                            <th>Gender</th>

                        </tr>
                    </thead>

                    {Array.isArray(data) && data.map((element) => {
                        return (

                            <tbody>
                                <tr>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.addresses}</td>
                                    <td>{element.DOB}</td>
                                    <td>{element.gender}</td>
                                </tr>
                            </tbody>

                        )
                    })}

                </table>





            </div>
        </>
    )
}
export default ShowData;