const HiddenView = () => {
  return (
    <div className="hidden-view">
      <div className="items">
        <div className="image">
          <img
            src={require("../assets/proposal_1.JPG")}
            alt="Proposal 1"
            width="100%"
          />
        </div>
        <div className="info">
          <h3>March 13, 2022</h3>
          <a
            className="download"
            href={require("../assets/proposal_1.JPG")}
            download
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default HiddenView;
