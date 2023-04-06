import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

function Footer() {
  return (
    <div className="fixed-bottom">
      <MDBFooter className="text-center text-lg-left">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h4 className="text-uppercase">
                We proudly serve all Colorado resorts <br/> on the most popular season
                passes:
              </h4>

              <div>
                <img
                  src="https://static.wixstatic.com/media/6c47ef_526275ae9eae4a64bd748509405010bd~mv2.png/v1/crop/x_98,y_33,w_398,h_167/fill/w_318,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Pass%20Logo.png"
                  alt="epic logo"
                ></img>
                <img
                  src="https://www.skibig3.com/wp-content/uploads/2020/06/IKON_Pass-Logo.png"
                  alt="ikon logo"
                ></img>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h4 className="text-uppercase">
                Colorado Department of Transportation Updates
                <br/>
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/ColoradoDOT?ref_src=twsrc%5Etfw"
                >
                  View Current Tweets from ColoradoDOT
                </a>
              </h4>

              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
              <div>
                <img
                  src="https://dtdapps.coloradodot.info/prolojs/assets/images/cdot_logo_2019.png"
                  alt="cdot logo"
                ></img>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Footer;
