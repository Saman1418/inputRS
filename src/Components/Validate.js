
// import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import validator from 'validator';
const Validate = (values) => {
    
    let errors = {};
    values.name = values.name.trim();
    if (!values.name) {
        errors.name = "Name is required."
    }
   // const domain = ["com", "net", "org"];
   // const topdomain = ["gmail", "google", "yahoo"];

    const specialCharacter = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    values.email = values.email.trim();
    if (!values.email) {
        errors.email = "email is required."
    }
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = "Email is invalid."
    // } else if (values.email.indexOf("@") <= 0) {
    //     errors.email = "invalid @ position."
    // } else if (values.email.charAt(values.email.length - 4) !== "." && values.email.charAt(values.email.length - 3) !== ".") {
    //     errors.email = "Invalid Email."
    // }
    let arr = values.email.split(".");
   // const flag = domain.some(value => value === arr[arr.length - 1])
    if ( arr.length <= 1) {
        errors.email = "Invalid Email."
    }
    arr.pop();
    let str=arr.join(".");
    arr=str.split("@");
    if (arr.length <= 1) {
           errors.email = "Invalid Email."
       }
       arr.pop();
       str=arr.join("@");
       console.log(str);
    // console.log(arr);
//      let copy = [...arr];
//     if(copy.length!=0)
//     {
//     copy = copy[copy.length - 1].split("@");
//     // console.log(copy);
//    // const flag1 = topdomain.some(value => value === copy[copy.length - 1])
//     if (copy.length <= 1) {
//         errors.email = "Invalid Email."
//     }
// }
//     arr = arr.join("").split("@");
//     // console.log(arr);
//     arr.pop();
//     // console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "")
//             arr[i] = "@";
//     }
//     const str = arr.join("").trim();
    // console.log(str);
    str=str.trim();
    if(str.length==0)
    {
        errors.email = "Invalid Email."
    }

    if (str.length !== 0) {
        if (str[0].match(specialCharacter) || str[str.length - 1].match(specialCharacter)) {
            errors.email = "Invalid Email."
        }
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i].match(specialCharacter) && str[i + 1].match(specialCharacter)) {
                errors.email = "Invalid Email."
            }
        }
    }
    if (!values.addresses) {
        errors.addresses = "address is required."
    } else if (values.addresses.length < 4) {
        errors.addresses = "addresses is to small."
    }

    if (!values.gender) {
        errors.gender = "Gender is required."
    }


    if (!validator.isDate(values.DOB)) {
        errors.DOB = "Enter Valid Date."
    }
    else if (+values.DOB.split("/")[0] <= new Date().getYear() + 1900) {
        if (+values.DOB.split("/")[0] === new Date().getYear() + 1900) {
            if (+values.DOB.split("/")[1] <= new Date().getMonth()+1) {
                if (+values.DOB.split("/")[1] === new Date().getMonth()+1) {
                    if (+values.DOB.split("/")[2] > new Date().getDate()) {
                        errors.DOB = "Enter Valid Date."
                    }
                }
            }
            else {
                errors.DOB = "Enter Valid Date."
            }
        }
    }
    else {
        errors.DOB = "Enter Valid Date."
    }




    return errors;
}

export default Validate;

