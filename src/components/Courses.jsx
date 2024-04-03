import {Form} from "react-router-dom";
import btnIMG from "../assets/images/btn_cart_LG.gif";

const Courses = ({ title, price1, price2, btnIMG }) => {
    return (
        <div>
            <p>
                <strong>{title}:</strong>
                1 course ${price1}.00
                4 courses ${price2}.OO
            </p>
            <Form>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label>Number of Courses</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select name='course'>
                                <option value="1 course">1 course ${price1}.00 USD</option>
                                <option value="4 courses">4 course ${price2}.00 USD</option>
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Form>
            <button>
                <img src={btnIMG} alt='cart image'/>
            </button>
        </div>
    );
};

export default Courses;