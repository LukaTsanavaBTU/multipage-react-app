import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <div className="text-wrapper">
        <p>Intel Core i9 (14th Gen)</p>
        <p>Frame rates, unframed.</p>
        <p>
          Unmatched clock speeds. Hybrid architecture built for pure
          performance. Integrated Wi-Fi 7 readiness for near-zero latency. Push
          your settings to the absolute max and experience gameplay exactly how
          developers intended. Zero compromises. Pure power.
        </p>
        <p>From $18/mo. for 24 mo. or $489 before trade-in*</p>
        <button
          onClick={() => {
            navigate("/users");
          }}
        >
          Buy Now!
        </button>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}images/intel-chip.jpg`}
        alt="intel chip"
      />
    </div>
  );
}

export default Homepage;
