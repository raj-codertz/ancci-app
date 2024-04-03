import '../assets/css/styles.css'
const ContentHeader = ({ text }) => {
    return (
        <div className='content-header bg-cover'>
            <h2> { text }</h2>
        </div>
    );
};

export default ContentHeader;