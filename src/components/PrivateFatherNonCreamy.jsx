import { Link } from "react-router-dom";
export default function Private_Non_Creamy() {
  document.body.style.overflow = "visible";
  return (
    <div>
      <div className="heading">You belong to non creamy layer</div>
      {/* Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number which is 7397285837. */}
      <div className="text-container">You have age relaxation.</div>
      <div className="">
        Hint: You belong to creamy layer if annual income of your father for{" "}
        <span className="highlight"> past three consecutive years</span> is more
        than <span className="highlight">₹800000</span> while
        <span className="highlight"> not including salary</span> and{" "}
        <span className="highlight">income from agriculture</span>
      </div>

      <Link to="/">Go to home</Link>
      <br />
      <br />
    </div>
  );
}
