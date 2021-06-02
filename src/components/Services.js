
import ServicesImage from '../images/services.png'
import './Services.css'

const Services = () => {
  return (
    <section class="services">
      <div class="container">
        {/* Title */}
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title pb-10">
              <h4 class="title">Services</h4>
              <p class="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>

        {/* Specializing */}
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              {/* services content 1 */}
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="fas fa-layer-group"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">Graphics Design</h4>
                    <p class="text">
                      Impress your users by using well-proven design 
                    </p>
                  </div>
                </div>
              </div>

              {/* services content 2 */}
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="fas fa-home"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">Landing Page Design</h4>
                    <p class="text">
                      Beautiful landing page based on your brand identity
                    </p>
                  </div>
                </div>
              </div>

              {/* services content 3 */}
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">UI & UX Design</h4>
                    <p class="text">
                      Adopting the best design pattern for your services
                    </p>
                  </div>
                </div>
              </div>

              {/* services content 4 */}
              <div class="col-md-6">
                <div class="services-content mt-40 d-sm-flex">
                  <div class="services-icon">
                    <i class="fas fa-laptop-code"></i>
                  </div>
                  <div class="services-content media-body">
                    <h4 class="services-title">Web/Mobile Development</h4>
                    <p class="text">
                      One-source-code app for all your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services images */}
      <div class="services-image d-lg-flex align-items-center">
        <div class="image">
          <img src={ServicesImage} alt="Services" />
        </div>
      </div>
    </section>
  );
};


export default Services