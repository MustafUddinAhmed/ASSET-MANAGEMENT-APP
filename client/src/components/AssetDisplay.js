import React, { Component } from "react";
// import Classie from "classie";
import "./../components/styles/display.css";
import Header from "./view/Header";
import axios from "axios";
import Footer from "./view/Footer";
class AssetDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chapterName: this.props.match.params.chapterName,
      assetId: this.props.match.params.assetId,
      asset: []
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    sessionStorage.setItem("url", window.location.pathname);
    const SERVICE_API_URL = "http://localhost:3002";
    console.log("Hi");
    console.log(this.state.chapterName, this.state.assetId);
    let auth_key = localStorage.getItem("auth_Key");
    if (auth_key) {
      axios
        .get(
          `${SERVICE_API_URL}/api/assets/${this.state.chapterName}/${this.state.assetId}`
        )
        .then(response => {
          this.setState({
            asset: response.data[0]
          });
        });
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    let { asset } = this.state;
    return (
      <div>
        <Header />
        <div id="wrapper" className="paddingClass">
          <div className="border border-secondary">
            <div>
              <div id="myHeaderClass">
                <h1>
                  <b>{asset.chapterName}</b>
                </h1>
              </div>
              <section>
                <div className="container">
                  <div>
                    <h1>
                      <i className="w3-spin fab fa-app-store"></i>
                      <span />
                      <span />
                      Asset Name
                    </h1>
                  </div>
                  <div>
                    <h2>{asset.assetName}</h2>
                  </div>
                </div>
              </section>
              <section className="color">
                <div className="container">
                  <h1>
                    <i className="w3-spin fab fa-blackberry"></i>
                    <span /> <span />
                    Description
                  </h1>
                  <p>{asset.description}</p>
                </div>
              </section>
              <section>
                <div className="container">
                  <div>
                    <h1>
                      <i className="w3-spin fa fa-refresh"></i>
                      <span> </span>
                      Business Benefits
                    </h1>
                  </div>

                  <p>{asset.bBenefits}</p>
                </div>
              </section>
              <section className="color">
                <div className="container">
                  <div>
                    <h1>
                      <i className="w3-spin fa fa-github"></i>
                      <span> </span>
                      GitHub Link
                    </h1>
                  </div>

                  <a className="myLink" href={asset.gitHubLink} target="_blank">
                    {asset.gitHubLink}
                  </a>
                </div>
              </section>
              <section>
                <div className="container"></div>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default AssetDisplay;
