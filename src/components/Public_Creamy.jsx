import { Link } from "react-router-dom";
export default function Public_Creamy() {
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
            and benefits provided by the government{" "}
          </div>
        </div>
      </div>
      <Link to="/">Go to home</Link>
      <br />
      <br />
    </div>
  );
}
