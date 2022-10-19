export default function TitleForall({ titlename }) {
  return (
    <div className="titleBS1">
      <div className="hr_tag">
        <h4 style={{ color: "#FC2779" }}>───</h4>
      </div>
      <div>
        <h5 style={{ color: "#000000", fontWeight: "bold" }}>{titlename}</h5>
      </div>
      <div className="hr_tag">
        <h4 style={{ color: "#FC2779" }}>───</h4>
      </div>
    </div>
  );
}
