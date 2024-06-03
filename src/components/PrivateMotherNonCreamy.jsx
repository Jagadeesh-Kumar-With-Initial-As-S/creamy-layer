import { Link } from "react-router-dom";
export default function PrivateMotherNonCreamy() {
  return (
    <div>
      <div className="heading">
        You belong to <span className="highlight">non creamy layer</span>
      </div>
      {/* Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837. */}
      <div className="container">
        <div className="group">
          <div className="text-container">
            You have <span className="highlight">age relaxation.</span> You are
            <span className="highlight">eligible</span> for reservations and
            benefits provided by the government.
          </div>
          <div className="">
            <span className="heading">Hint:</span> You belong to creamy layer if
            annual income of your mother for{" "}
            <span className="highlight"> past three consecutive years</span> is
            more than <span className="highlight">₹800000</span> while
            <span className="highlight"> not including salary</span> and{" "}
            <span className="highlight">income from agriculture.</span>
          </div>
        </div>
      </div>
      <Link to="/">Go to home</Link>
      <br />
      <br />
    </div>
  );
}
