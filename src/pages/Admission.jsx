import ContentHeader from "../components/ContentHeader.jsx";
import studentIMG from "../assets/images/student_pic.jpg";
import btnIMG from '../assets/images/btn_cart_LG.gif'
import '../assets/css/styles.css'
import {Form, Link} from "react-router-dom";
import Courses from "../components/Courses.jsx";
const Admission = () => {
    return (
        <div>
            <div>
                <ContentHeader text='Admission'/>
            </div>
            <div className='bgIMG'>
                <img src={studentIMG} alt='pres' className='leftAlignIMG right-0'/>
                <div>
                    <p>
                        We are delighted to announce that we have partial scholarship for those who are registering now.
                    </p>
                    <p>
                        <
                            em> ANCCI University Tuition and Fees Structure </em>
                    </p>
                    <p>
                        <strong>
                            <Link to='/'>Online Application for Enrollment</Link>
                        </strong>
                    </p>
                    <p>
                        ANCCI University tuition and fees are set annually.
                    </p>
                    <p>
                        You can start with a minimum of one or maximum of four courses. Each course is 3 credit hour.
                    </p>
                </div>
                <div className='pl-10'>
                    <p>
                        Application and admission fees are due before the classes start ($150.00)
                        <br/>
                        $100.00 nonrefundable admission fees
                        <br/>
                        $50.00 nonrefundable registration fees
                    </p>
                    <Form>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <input type='hidden' name='fee' value='Fee:'/>
                                    Fee:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name='fees'>
                                        <option value='Both Fees'>
                                            Both Fees $150.00 USD
                                        </option>
                                        <option value='Admission Fees'>
                                            Admission Fees $100.00 USD
                                        </option>
                                        <option value='Registration Fees'>
                                            Registration Fees $50.00 USD
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <button>
                            <img src={btnIMG} alt='cart image'/>
                        </button>
                    </Form>
                    <Courses btnIMG={btnIMG} title={"BD"} price1={300} price2={1200}/>
                    <Courses btnIMG={btnIMG} title={"MA M.Div. M.Th."} price1={310} price2={1240}/>
                    <Courses btnIMG={btnIMG} title={"Th.D. PhD"} price1={320} price2={1280}/>
                </div>
                <p>Doctor of Divinity (honorary) is awarded to a candidate who has demonstrated fruitful ministry and
                    have given financial support to the ANCCIU of $1000.00 or more.</p>

            </div>

        </div>
    );
};

export default Admission;