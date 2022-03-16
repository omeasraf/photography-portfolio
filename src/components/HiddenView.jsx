const HiddenView = () => {
  return (
    <div className="itemsView">
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
      <div className="mt-[5vh]">
        <div className="flex flex-col justify-center items-center">
          <h3>Download Zip Files</h3>
          <div className="flex flex-row gap-5">
            <a
              className="download"
              href={require("../assets/zips/Proposal.zip")}
              download
            >
              Download Edited Files
            </a>
            <a
              className="download"
              href={require("../assets/zips/Unedited.zip")}
              download
            >
              Download Unedited Files
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenView;
