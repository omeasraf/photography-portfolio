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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            <a className="download" href="/static/zips/Proposal.zip" download>
              Download Edited Files
            </a>
            <a
              className="download"
              href="/static/zips/unedited/part-1.zip"
              download
            >
              Download Unedited (part 1)
            </a>
            <a
              className="download"
              href="/static/zips/unedited/part-2.zip"
              download
            >
              Download Unedited (part 2)
            </a>
            <a
              className="download"
              href="/static/zips/unedited/part-3.zip"
              download
            >
              Download Unedited (part 3)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenView;
