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
    </body>
  )
}

export default HomePage