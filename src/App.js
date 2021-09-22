import "./App.scss";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import MainHighlight from "./components/MainHighlight/MainHighlight.js";
import Highlight from "./components/Highlight/Highlight.js";
import Testimonial from "./components/Testimonial/Testimonial.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import ChallengeFooter from "./components/ChallengeFooter/ChallengeFooter.js";
import desktopMainHighlightTransform from "./images/desktop/image-transform.jpg";
import mobileMainHighlightTransform from "./images/mobile/image-transform.jpg";
import desktopMainHighlightStandOut from "./images/desktop/image-stand-out.jpg";
import mobileMainHighlightStandOut from "./images/mobile/image-stand-out.jpg";
import desktopHighlightGraphicDesign from "./images/desktop/image-graphic-design.jpg";
import desktopHighlightPhotography from "./images/desktop/image-photography.jpg";
import mobileHighlightGraphicDesign from "./images/mobile/image-graphic-design.jpg";
import mobileHighlightPhotography from "./images/mobile/image-photography.jpg";
import emilyAvatar from "./images/image-emily.jpg";
import thomasAvatar from "./images/image-thomas.jpg";
import jennieAvatar from "./images/image-jennie.jpg";
import desktopGalleryImageMilkBottles from "./images/desktop/image-gallery-milkbottles.jpg";
import desktopGalleryImageGalleryOrange from "./images/desktop/image-gallery-orange.jpg";
import desktopGalleryImageCone from "./images/desktop/image-gallery-cone.jpg";
import desktopGalleryImageSugarCubes from "./images/desktop/image-gallery-sugarcubes.jpg";
import mobileGalleryImageMilkBottles from "./images/mobile/image-gallery-milkbottles.jpg";
import mobileGalleryImageGalleryOrange from "./images/mobile/image-gallery-orange.jpg";
import mobileGalleryImageCone from "./images/mobile/image-gallery-cone.jpg";
import mobileGalleryImageSugarCubes from "./images/mobile/image-gallery-sugarcubes.jpg";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center">
      <div className="App__banner w-100 px-3 py-4">
        <Header />
        <Hero />
      </div>
      <main className="App__main" id="content">
        <MainHighlight
          desktopIcon={desktopMainHighlightTransform}
          mobileIcon={mobileMainHighlightTransform}
          heading="Transform your brand"
          lead="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          ctaHighlight="yellow"
          textOrder="textFirst"
          imageOrder="imageLast"
        />
        <MainHighlight
          desktopIcon={desktopMainHighlightStandOut}
          mobileIcon={mobileMainHighlightStandOut}
          heading="Stand out to the right audience"
          lead="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          ctaHighlight="red"
          textOrder="textLast"
          imageOrder="imageFirst"
        />
        <div className="App__highlights">
          <Highlight
            desktopIcon={desktopHighlightGraphicDesign}
            mobileIcon={mobileHighlightGraphicDesign}
            heading="Graphic design"
            lead="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
            fontColor="graphic"
          />
          <Highlight
            desktopIcon={desktopHighlightPhotography}
            mobileIcon={mobileHighlightPhotography}
            heading="Photography"
            lead="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            fontColor="photography"
          />
        </div>
        <section className="App__testimonials">
          <h4 className="App__testimonials-heading text-uppercase">
            client testimonials
          </h4>
          <div className="App__testimonials-container d-flex flex-wrap justify-content-around">
            <Testimonial
              userImg={emilyAvatar}
              userStatement="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
              userName="Emily R."
              userRole="Marketing Director"
            />
            <Testimonial
              userImg={thomasAvatar}
              userStatement="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
              userName="Thomas S."
              userRole="Chief Operating Officer"
            />
            <Testimonial
              userImg={jennieAvatar}
              userStatement="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
              userName="Jennie F."
              userRole="Business Owner"
            />
          </div>
        </section>
        <div className="App__image-gallery">
          <ImageGallery
            images={[
              {
                desktopIcon: desktopGalleryImageMilkBottles,
                mobileIcon: mobileGalleryImageMilkBottles,
              },
              {
                desktopIcon: desktopGalleryImageGalleryOrange,
                mobileIcon: mobileGalleryImageGalleryOrange,
              },
              {
                desktopIcon: desktopGalleryImageCone,
                mobileIcon: mobileGalleryImageCone,
              },
              {
                desktopIcon: desktopGalleryImageSugarCubes,
                mobileIcon: mobileGalleryImageSugarCubes,
              },
            ]}
          />
        </div>
        <ChallengeFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
