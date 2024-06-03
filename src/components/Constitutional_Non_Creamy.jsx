import { Link } from "react-router-dom";
export default function Constitutional_Non_Creamy() {
  return (
    <div>
      <div className="heading">
        You belong to <span className="highlight">non creamy layer</span>.
      </div>
      {/* Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837. */}
      <div className="container">
        <div className="group">
          <div className="text-container">
            You have <span className="highlight">age relaxation.</span> You are
            <span className="highlight">eligible</span> for reservations and
            benefits provided by the government.
          </div>
        </div>
      </div>
      <Link to="/">Go to home</Link>
      <br />
      <br />
    </div>
  );
}
