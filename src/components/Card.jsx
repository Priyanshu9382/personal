import PropTypes from 'prop-types';
const Card = ({name, link}) => {
  return (

    <>
      <div  className="card cursor-pointer flex items-center justify-center bg-white-500 max-w-xl w-7/12 h-16 rounded-lg border-2  hover:border-white border-gray-500 hover:border-2 shadow-2xl ">
          <span className="cardTitle cursor-pointer text-white font-sans font-bold text-lg"><a href={link}>{name}</a></span>
      </div>
    </>
  )
}
Card.propTypes = {
  name: PropTypes.string.isRequired,  // Ensures 'name' is a required string
  link: PropTypes.string,
};

export default Card
