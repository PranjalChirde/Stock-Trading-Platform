function Brokrage() {
  return (
    <div className="container" style={{ maxWidth: "900px", margin: "70px auto" }}>
      
      <h2 style={{ marginBottom: "20px" }}>Charges for account opening</h2>

      <div style={{ border: "1px solid #ddd", borderRadius: "6px", overflow: "hidden" }}>
        
        {/* Header */}
        <div style={{ display: "flex", padding: "15px", background: "#f5f5f5", fontWeight: "bold" }}>
          <div style={{ flex: 1 }}>Type of account</div>
          <div style={{ width: "150px" }}>Charges</div>
        </div>

        {/* Row 1 */}
        <div style={rowStyle}>
          <div>Individual account</div>
          <div><span style={badge}>FREE</span></div>
        </div>

        {/* Row 2 */}
        <div style={rowStyle}>
          <div>Minor account</div>
          <div><span style={badge}>FREE</span></div>
        </div>

        {/* Row 3 */}
        <div style={rowStyle}>
          <div>NRI account</div>
          <div>₹ 500</div>
        </div>

        {/* Row 4 */}
        <div style={rowStyle}>
          <div>HUF account</div>
          <div>
            <span style={badge}>FREE</span> (online) / ₹ 500 (offline)
          </div>
        </div>

        {/* Row 5 */}
        <div style={rowStyle}>
          <div>Partnership, LLP, and Corporate accounts (offline only)</div>
          <div>₹ 500</div>
        </div>

      </div>
    </div>
  );
}

const rowStyle = {
  display: "flex",
  padding: "15px",
  borderTop: "1px solid #eee",
  justifyContent: "space-between",
};

const badge = {
  backgroundColor: "#4CAF50",
  color: "#fff",
  padding: "3px 10px",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "bold",
};

export default Brokrage;
