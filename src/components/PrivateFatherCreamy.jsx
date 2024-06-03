import { Link } from "react-router-dom";
export default function PrivateFatherCreamy() {
  document.body.style.overflow = "visible";
  return (
    <div>
      <div className="heading">
        You belong to <span className="highlight">creamy layer</span>
      </div>
      <div className="container">
        <div className="group">
          <div className="text-container">
            {/* Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837. */}
            You have <span className="highlight">no age</span> relaxation. You
            are <span className="highlight">not eligible</span> for reservations
            and benefits provided by the government.
          </div>
          <div className="">
            <span className="highlight">Hint:</span> You belong to creamy layer
            if annual income of your father for{" "}
            <span className="highlight">past three consecutive years</span> is
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
