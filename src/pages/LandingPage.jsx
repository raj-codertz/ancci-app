import ContentHeader from "../components/ContentHeader.jsx";
import pres from '../assets/images/Pres.jpg'
import '../assets/css/styles.css'
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div className='w-full'>
            <ContentHeader text='About The seminary'/>
            <div className='bgIMG'>
                <img src={pres} alt='pres' className='leftAlignIMG right-0'/>
                <h1 className=' font-bold text-[24px] mb-[15px] text-center'>
                    ANCCI University
                    <br/>
                    Offers Practical Theology
                    <br/>
                    For A Suffering and Persecuted Church
                </h1>
                <h2 className='text-center text-[24px]'>
                    AANCIU Has A Degree for You!
                </h2>
                <ul className='list-disc font-bold pl-[80px]'>
                    <li>Christ-Centered, Biblically based and cultural sensitive
                    </li>
                    <li>Affordable and accessible to all</li>
                    <li>Most students work full time</li>
                    <li>You can take classes on campus or study at home.</li>
                </ul>
                <p className='mainContent'>
                    <strong>
                        Enroll now and start being equipped for ministry right away.
                    </strong>
                    <br/>
                    <br/>
                    <strong>DR JOHN G GITHIGA FOUNDER/PRESIDENT</strong>
                    <br/>
                    <br/>
                    As an educator, Dr Githiga hold five theological degrees, has written several theological books and
                    has taught in colleges and University for over thirty-five years. As a pastor, he has planted
                    several churches. Like St Paul, he had a vision of Christ when he was six. He committed himself to
                    Christ when he was 15. Eventually he became a street evangelist distributing Gospel tracts
                    everywhere in Nakuru. Kenya. He experienced suffering as a young preacher and as a priest. He fully
                    agrees with St Paul that, “we also boast in our suffering, knowing that suffering produces
                    endurance, and endurance produces character, and character produces hope, and hope does not
                    disappoint us because God’s love has been poured into our hearts through the Holy Spirit that has
                    been given to us.” Roman 5:-5. He refers to himself as “John, your brother and companion in the
                    suffering and kingdom and patient endurance that are ours in Jesus.” Rev.1:9
                    <br/>
                    <Link to='/'>
                        See Books by Dr. John G. Githiga
                    </Link>
                    <br/>
                    <br/>
                    <strong>
                        STATEMENT OF PURPOSE
                    </strong>
                    <br/>
                    <br/>
                    ANCCIU focuses on equipping pastors and the people of God to minister to those who are suffering.
                    This includes those who are undergoing persecution and various types of trial. Most of the calls to
                    the ministry are preceded by crisis, which may include being abused by the people are very dear to
                    them. Thus, ANCCIU focuses on equipping the wounded healers to fulfill Christ’s Great Commission:
                    “All authority in heaven and on earth has been given to me. Go therefore and make disciples of all
                    nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. Teaching
                    them to observe all that I have commanded you; and lo, I am with you always to the close of the
                    age.” Matthew 28:18-20.
                    <br/>
                    ANCCIU equips the students to live out the faith that has been received and carried on by the Church
                    throughout the centuries and to preach the Good News to all nations in the power of the Holy Spirit.
                    <br/>
                    <br/>
                    <p>
                        Since the faculty and the students are drawn from different countries and continents there is a
                        unity in diversity which provides students with a golden opportunity to listen to theological
                        voices from all nations.
                    </p>
                    <br/>
                    ANCCI University believes that true education includes learning from the professor and from the
                    students. We have learned a great deal from the later. And so, we are inviting you to enroll in
                    ANCCIU so that you will enjoy mutual respect of ideas and be enriched by diversity. You will also
                    enjoy overseas short-term mission trips
                    <br/>
                    <br/>
                    <strong>
                        CHARTERED IN THE STATE OF TEXAS
                    </strong>
                    <br/>
                    ANCCIU was recognized by Texas Higher Education Coordinating Board as a religious postsecondary
                    educational institution on February 28, 2012 and was given a religious exemption by the Texas
                    Workforce Commission on May 10, 2012.
                    <br/>
                    <br/>
                    <strong>ACCREDITION </strong>
                    <br/>
                    ANCCI University has accreditation from Christian Works World Council of Post-Secondary and
                    Religious Education.
                    It is our delight to announce that ANCCI University curriculum includes Bachelor in Divinity, Master
                    of Divinity, Doctor of Ministry, Doctor of Theology and PhD in theology. You can specialize in
                    Biblical Studies, theology, ecclesiastical history, pastoral theology, worship, mission, world
                    religions, Christian Education, behavioral sciences, theology and development, Christian Counseling
                    and missiology.
                    <br/>
                    <br/>
                    <strong>
                        ENROLLMENT
                        <br/>
                        Enroll now and become a part of international community learners.
                        <br/>
                        <br/>
                        Join STUDENT FORUM @ WhatsApp 1-806.476.9250.
                        <br/>
                        Subscribe ANCCITV at youtube.com
                    </strong>
                </p>
            </div>

        </div>
    );
};

export default LandingPage;