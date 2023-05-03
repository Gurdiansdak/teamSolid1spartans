import css from './HomePage.module.css'
import boostsIMG from '../../assets/illustration_marketing_market.svg'
import play from '../../assets/#.png'
import spotify from '../../assets/brand_spotify.svg'
import heroku from '../../assets/brand_heroku.svg'
import airBnb from '../../assets/brand_airbnb.svg'
import netflix from '../../assets/brand_netflix.svg'
import slack from '../../assets/brand_slack.svg'
import vimeo from '../../assets/brand_vimeo.svg'
import vector from '../../assets/iconbase.svg'
import aboutUsIMG from '../../assets//IMG.svg'
import SEO from '../../assets/seo4.svg'
import emailMarketing from '../../assets/#1.png'
import Optimization from '../../assets/optimization3.png'
import socialMarketing from '../../assets/soc.marketing2.png'
import planning from '../../assets/ic_marketing_sketch.svg'
import research from '../../assets/ic_marketing_search.svg'
import optimizeWork from '../../assets/ic_marketing_optimization.svg'
import result from '../../assets/ic_marketing_analysis.svg'
import vector1 from '../../assets/iconbase-3.svg'
import vector2 from '../../assets/iconbase-1.svg'
import vector3 from '../../assets/iconbase-2.svg'
import cubes from '../../assets/Marketing/Image Ratio.svg'
import chairs from '../../assets/Marketing/Image Ratio-1.svg'
import vectorGreu from '../../assets/iconbaseGrey.svg'







function HomePage() {
  return (
    <body className= "container">
        <section className={css.boosts }>
                <div className={css.boosts_wrapper}>
                  <div className={css.boosts_title}>
                      <p className={css.boosts_title_name}>Digital Marketing</p>
                      <h1 >Boosts Your <br /> Website Traffic</h1>
                      <p className={css.boosts_title_desc}>Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus <br /> ipsum laoreet sapien, quis venenatis ante odio sit <br /> amet eros. </p>
                      <div className={css.tryAndSee}>
                          <button className={css.tryAndSee_buttonTry}>Try For Free</button>
                          <button className={css.tryAndSee_buttonSee}><img src={play} alt="play" /><p>See Our Work</p></button>
                      </div>
                  </div>
                  <div><img src={boostsIMG} alt="marketing" /></div>
                </div>
                <div className={css.brands_wrapper}>
                  <img src={spotify} alt="spotify" />
                  <img src={heroku} alt="heroku" />
                  <img src={airBnb} alt="airBnb" />
                  <img src={netflix} alt="netflix" />
                  <img src={slack} alt="slack" />
                  <img src={vimeo} alt="vimeo" />
                </div>
        </section>

        <section className={css.aboutUs}>
          <div><img width={"1215px"} src={aboutUsIMG} alt="aboutUsIMG" /></div>
          <div className={css.aboutUs_wrapper}>
            <div className={css.aboutUs_desc}>
              <h2>About Us</h2>
              <h1>Who We Are</h1>
              <p>In hac habitasse platea dictumst. Aliquam lobortis. Lorem <br /> ipsum dolor sit amet, consectetuer adipiscing elit. In dui <br /> magna, posuere eget, vestibulum et, tempor auctor, justo. <br /> Pellentesque habitant morbi tristique senectus et <br /> netus et malesuada fames ac turpis egestas.</p>
              <button>Learn More <img src={vector} alt="learnMore"/></button>
            </div>
            <div className={css.aboutUs_works}>
              <div className={css.aboutUs_projects}>
                <div>
                  <h1>150<sup>+</sup></h1>
                  <h3>PROJECTS</h3>
                </div>
                <p>Praesent turpis. Praesent blandit laoreet nibh. Nunc <br /> nonummy metus.</p>
              </div>
              <div className={css.aboutUs_happyClients}>
                <div>
                  <h1>32k<sup>+</sup></h1>
                  <h3>HAPPY CLIENTS</h3>
                </div>
                <p>Praesent blandit laoreet nibh. Suspendisse pulvinar, <br /> augue ac venenatis condimentum.</p>
              </div>
              <div className={css.aboutUs_experience}>
                <div>
                  <h1>20<sup>+</sup></h1>
                  <h3>YEARS OF <br /> EXPERIENCE</h3>
                </div>
                <p>Praesent blandit laoreet nibh. Suspendisse pulvinar,<br /> augue ac venenatis condimentum.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={css.service}>
          <div className={css.service_desc}>
            <h2>OUR SERVICES</h2>
            <h1>We Provide</h1>
            <p>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</p>
          </div>
          <div className={css.service_wrapper}>
            <div className={css.service_cardSEO}>
              <img src={SEO} alt="SEO" />
              <h1>SEO</h1>
              <p>Nunc nonummy metus. Donec elit libero</p>
              <img src={vector} alt="vector" />
            </div>
            <div className={css.service_cardMarketing}>
              <img src={emailMarketing} alt="emailMarketing" />
              <h1>Email Marketing</h1>
              <p>Nunc nonummy metus. Donec elit libero</p>
              <img src={vector} alt="vector" />
            </div>
            <div className={css.service_cardOptimization}>
              <img src={Optimization} alt="Optimization" />
              <h1>Search Engine <br /> Oprimization</h1>
              <p>Nunc nonummy metus. Donec elit libero</p>
              <img src={vector} alt="vector" />
            </div>
            <div className={css.service_cardSocialMarket}>
              <img src={socialMarketing} alt="socialMarketing" />
              <h1>Social Marketing</h1>
              <p>Nunc nonummy metus. Donec elit libero</p>
              <img src={vector} alt="vector" />
            </div>
          </div>
        </section>

        <section className={css.workProcess}>
          <div className={css.workProcess_desc}>
            <h2>Work Flow</h2>
            <h1>Working Process</h1>
            <p>Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, <br /> suscipit non, turpis.</p>
          </div>
          <div className={css.workProcess_wrapper}>
            <div className={css.workProcess_cardPlanning}>
              <img src={planning} alt="planning" />
              <button className={css.cardPlanning_button}><p>Planning</p><img src={vector1} alt="vector" /></button>
            </div>
            <div className={css.workProcess_cardResearch}>
              <img src={research} alt="research" />
              <button className={css.cardResearch_button}><p>Research</p><img src={vector2} alt="vector" /></button>
            </div>
            <div className={css.workProcess_cardOptimization}>
              <img src={optimizeWork} alt="optimization" />
              <button className={css.cardOptimization_button}><p>Optimization</p><img src={vector3} alt="vector" /></button>
            </div>
            <div className={css.workProcess_cardResult}>
              <img src={result} alt="result" />
              <button className={css.cardResult_button}><p>Result</p></button>
            </div>
          </div>
        </section>

        <section className={css.ourWork}>
          <div className={css.ourWork_desc}>
            <h2>OUR WORK</h2>
            <h1>Case Studies</h1>
          </div>
          <div className={css.ourWork_wrapper}>
            <div className={css.ourWork_cardMarketing}>
              <h2>MARKETING</h2>   
              <h1>General Electric</h1>   
            </div>
            <div>
              <div className={css.ourWork_cardBranding}>
                <div className={css.cardBranding_desc}>
                  <img src={cubes} alt="cubes" />
                  <div >
                    <h2>BRANDING</h2>
                    <h1>Bank of America</h1>
                    <p>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                    <button>Learn more <img src={vectorGreu} alt="vectorGreu" /></button>
                  </div>
                </div>
                <div className={css.cardBranding_names}>
                  <h2>SEO</h2>
                  <h1>Louis Vuitton</h1>
                </div>
              </div>
              <div className={css.ourWork_cardSocial}>
                <div className={css.cardSocial_names}>
                    <h2>MARKETING</h2>
                    <h1>Gillette</h1>
                </div>
                <div className={css.cardSocial_desc}>
                  <img src={chairs} alt="chairs" />
                  <div>
                    <h2>SOCIAL</h2>
                    <h1>Louis Vuitton</h1>
                    <p>Quisque id odio. Nunc egestas, <br /> augue at pellentesque laoreet, <br /> felis eros vehicul</p>
                    <button>Learn more <img src={vectorGreu} alt="vectorGreu" /></button>
                  </div>
                </div>
                </div>
            </div>
            <div className={css.ourWork_cardWeb}>
              <h2>WEB</h2>
              <h1>Gillette</h1>
            </div>
          </div>
        </section>
    </body>
  )
}

export default HomePage