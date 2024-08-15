import "./section5.css";
const TestimonialCard = ({ avatar, name, review, date }) => {
    return (
      <div className="testimonial-card">
        <div className="testimonial-card-header">
          <div className="testimonial-avatar">
            <img src={avatar} alt="" className="avatar-image" />
          </div>
          <div className="testimonial-name">{name}</div>
        </div>
        <div className="testimonial-quote">
          <div className="quote-mark">“</div>
          <div className="testimonial-review">{review}</div>
        </div>
        <div className="testimonial-footer">
          <div className="footer-line"></div>
          <div className="testimonial-date">{date}</div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  