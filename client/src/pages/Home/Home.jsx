import React, { useEffect, useState } from 'react'
import "./Home.css"
import Header from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar'
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const Home = () => {
    const location = useLocation();
    const navigate = useNavigate()

    let [displayValue9, setIsDisplay9] = useState('none')
    let [buttonText, setButtonText] = useState('Edit')
    let [buttonText1, setButtonText1] = useState('Edit')
    let [buttonText2, setButtonText2] = useState('Edit')
    let [disableValue, setIsDisable] = useState('false')
    let [disableValue1, setIsDisable1] = useState('false')
    let [disableValue2, setIsDisable2] = useState('false')
    let [displayValue, setIsDisplay] = useState('none')
    let [displayValue3, setIsDisplay3] = useState('none')
    let [displayValue500, setIsDisplay500] = useState('none')
    let [displayValue4, setIsDisplay4] = useState('none')
    let [displayValue10, setIsDisplay10] = useState('none')
    let [firstRender, setFirstRender] = useState(false);
    let [firstname, setfirstname] = useState(location.state.fname)
    let [lastname, setlastname] = useState(location.state.lname)
    let [emaill, setemaill] = useState(location.state.email)
    let [linkedinl, setlinkedinl] = useState(location.state.linkedin)
    let [githubl, setgithubl] = useState(location.state.github)
    let [facebookl, setfacebookl] = useState(location.state.facebook)
    let [websitel, setwebsitel] = useState(location.state.website)
    const params = useParams();
    const handleSubmit = async (e) => {
        try {
            let q = await axios.get(`http://localhost:8080/${params.id}`);
            // let q = await axios.get(`https://proj2-production.up.railway.app/${params.id}`);
            console.log(q.data);
            let r = q.data
            setfirstname(firstname);
            console.log(firstname);
            setlastname(r.lname)
            setemaill(r.emaill)
            setlinkedinl(r.linkedin);
            setgithubl(r.github)
            setfacebookl(r.facebook)
            setwebsitel(r.website)

        }
        catch (err) {
            //   navigate("/err", { state: { name: 'wrong inputs', linkie: 'http://localhost:3000' } })
        }
    }

    useEffect(() => {
        if (!firstRender) {
            console.log(5);
            handleSubmit();
            setFirstRender(true);

        }
    }, 1000)






    const [credentials6, setCredentials6] = useState({
        linkedin: linkedinl,
        github: githubl,
        facebook: facebookl,
        website: websitel,

    })

    const [credentials11, setCredentials11] = useState({
        email: emaill,
        fname: firstname,
        lname: lastname,

    })
    const handleChange11 = (e) => {
        setCredentials11(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }


    const handleClick11 = async (e) => {
        e.preventDefault()
        try {

            // const result = await axios.post(`http://localhost:8080/update/${params.id}`, credentials11);
            // const result1 = await axios.post(`https://proj2-production.up.railway.app/verify`, credentials11)
            // console.log(credentials11.email);

            const result = await axios.post(`https://proj2-production.up.railway.app/update/${params.id}`, credentials11)
            handleSubmit()

            setIsDisplay10('none')
        }
        catch (err) {
            //   navigate("/err", { state: { name: 'wrong inputs', linkie: 'http://localhost:3000' } })
        }
    }

    const handleClick110 = async (e) => {
        e.preventDefault()
        try {
            // navigate.push("/");
            navigate("/", { replace: true });
        }
        catch (err) {
            //   navigate("/err", { state: { name: 'wrong inputs', linkie: 'http://localhost:3000' } })
        }
    }


    const [credentials8, setCredentials8] = useState({
        password1: undefined,
        password2: undefined,
        password3: undefined

    })






    const handleChange6 = (e) => {
        setCredentials6(prev => ({ ...prev, [e.target.id]: e.target.value }))

    }

    const handleChange8 = (e) => {
        setCredentials8(prev => ({ ...prev, [e.target.id]: e.target.value }))

    }






    const myFunction2 = async () => {
        // const result = await axios.post(`http://localhost:8080/update/${params.id}`, credentials6);
        const result = await axios.post(`https://proj2-production.up.railway.app/update/${params.id}`, credentials6)

    }



    const myFunction4 = async () => {
        // const result = await axios.post(`http://localhost:8080/pass/${params.id}`, credentials8);
        const result = await axios.post(`https://proj2-production.up.railway.app/pass/${params.id}`, credentials8)
        if (result.data === 0) {
            setIsDisplay9('block');
        }

        else {

            // const result2 = await axios.post(`http://localhost:8080/updatepass/${params.id}`, credentials8);
            const result2 = await axios.post(`https://proj2-production.up.railway.app/updatepass/${params.id}`, credentials8);

            setIsDisplay4('none')
        }

    }

    console.log();
    const [color, setColor] = useState("");







    const changeDisplay10 = () => {
        if (displayValue10 === 'none')
            setIsDisplay10('block');
    }
    const changeDisplay = () => {
        if (displayValue === 'none')
            setIsDisplay('block');
    }
    const changeDisplay4 = () => {
        if (displayValue4 === 'none')
            setIsDisplay4('block');
    }
    const cancelorBtn = () => {
        setIsDisplay4('none')
    }
    const cancelBtn = () => {
        setIsDisplay('none')
    }


    const buttncancel = () => {
        setIsDisplay10('none');
    }
    const saveBtn = (e) => {

    }
    const saviourBtn = async (e) => {
        // setIsDisplay4('none')

        if (credentials8.password2 !== credentials8.password3)
            setIsDisplay9('block');
        else {
            setIsDisplay9('none');

            myFunction4();

        }

    }


    const changeText2 = () => {
        if (buttonText2 === 'Edit') {
            setButtonText2('Save');
            setIsDisable2(!disableValue2)


        }
        else {
            setButtonText2('Edit');
            setIsDisable2(!disableValue2)
            myFunction2()
        }
    }

    return (
        <div>
            <Header />
            <div className='div'>

                <div className="left">
                    <div className="left1">
                        <div className="img">

                            <img src="https://cdn4.iconfinder.com/data/icons/universal-glyph-circle/614/1019_-_Edit_Profile-1024.png" alt="" />
                            <CreateSharpIcon className='ic' onClick={changeDisplay10} />

                            <div className='details'>

                                <h1>{credentials11.fname} {credentials11.lname}</h1>
                                <h3>{credentials11.email}</h3>
                                <p className='extra'>extra text</p>
                                <button className='logout' onClick={handleClick110}>Log Out</button>

                            </div>



                        </div>


                        <div className="bigb" style={{ display: displayValue10 }} >

                            <div className="another-div-2">

                                <img src="https://cdn4.iconfinder.com/data/icons/universal-glyph-circle/614/1019_-_Edit_Profile-1024.png" alt="" />

                            </div>
                            <div className="another_div">
                                <input type="text" name="fname" id="fname" placeholder="First Name" className='emaily' onChange={handleChange11} autocomplete="off" />
                                <input type="text" name="lname" id="lname" placeholder="Last Name" className='emaily' onChange={handleChange11} autocomplete="off" />
                                <input type="email" name="email" id="email" placeholder="Email Id" className='emaily' onChange={handleChange11} autocomplete="off" />
                                <p className='Invalid' style={{ display: displayValue500 }}>Invalid credentials</p>


                                <div className="for_btn">
                                    <button className='savy' onClick={handleClick11}>Save</button>
                                    <button className='cany' onClick={buttncancel}>Cancel</button>
                                </div>



                            </div>




                        </div>
                    </div>

                    <div className='l'>
                        <div className="lefty">





                            <hr className="ciphermap-hr" size="0.5" />


                            <div className="left3">
                                <div className="web">
                                    <h3>ON THE WEB</h3>
                                    <button className='btn' onClick={changeText2}>{buttonText2}</button>
                                </div>
                                <div className='form'>
                                    <div className="div1">
                                        <div className="linkedin">
                                            <h4>Linkedin</h4>
                                            <div className="iconic">


                                                <input type="text" id="linkedin" placeholder={credentials6.linkedin} disabled={disableValue2} onChange={handleChange6} />
                                            </div>

                                        </div>
                                        <div className="facebook">
                                            <h4>Facebook</h4>

                                            <div className="iconic">

                                                <input type="text" id="facebook" placeholder={credentials6.facebook} disabled={disableValue2} onChange={handleChange6} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="div2">
                                        <div className="github">
                                            <h4>Github</h4>
                                            <div className="iconic">


                                                <input type="text" id="github" placeholder={credentials6.github} disabled={disableValue2} onChange={handleChange6} />
                                            </div>
                                        </div>

                                        <div className="website">
                                            <h4>Website</h4>
                                            <div className="iconic">

                                                <input type="text" id="website" placeholder={credentials6.website} disabled={disableValue2} onChange={handleChange6} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <hr size="0.5" />

                            </div>




                            <div className="left4">

                                <div className="passcont" style={{ display: displayValue4 }}>
                                    <div className="info" >
                                        <h6>Current Password</h6>
                                        <input type="password" className="pass" id="password1" name="password1" onChange={handleChange8} placeholder='Current Password' />
                                        <h6>New Password</h6>
                                        <input type="password" className="pass" id="password2" name="password2" onChange={handleChange8} placeholder='New Password' />
                                        <h6>Confirm Password</h6>
                                        <input type="password" className="pass" id="password3" name="password3" onChange={handleChange8} placeholder='Confirm Password' />
                                        <p className='kane' style={{ display: displayValue9 }}>Wrong Password or password not matching</p>

                                    </div>
                                    <div className="for_btn">

                                        <button className='sav' onClick={saviourBtn}>Save</button>
                                        <button className='can' onClick={cancelorBtn}>Cancel</button>
                                    </div>
                                </div>
                                <div className="pesonal">
                                    <h3>PASSWORD & SECURITY</h3>
                                    <button className='btn' onClick={changeDisplay4}>Change</button>
                                </div>
                                <div className='form'>
                                    <div className="div1">
                                        <div className="higheducation">
                                            <h4>Password</h4>
                                            <input type="text" id="f9" placeholder="***************" disabled="true" />
                                        </div>
                                    </div>



                                </div>
                                <hr size="0.5" />

                            </div>




                        </div>




                    </div>


                </div>
            </div>
        </div>


    )
}

export default Home
