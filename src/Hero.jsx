import imgHero from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Content CMS</h1>
          <p>
            Craft beer whatever pop-up, retro swag keytar enamel pin meh unicorn
            everyday carry. Tumblr dreamcatcher put a bird on it iceland. DIY
            swag aesthetic, helvetica jawn twee mukbang. Fixie meggings poke
            jean shorts. Bodega boys thundercats fanny pack, trust fund plaid
            artisan yr freegan blog. Try-hard cold-pressed pork belly, iPhone
            jean shorts aesthetic meh artisan shabby chic heirloom cupping.
          </p>
        </div>
        <div className="img-container">
         <img src={imgHero} alt="woman and browser" className='image' />
        </div>
      </div>
    </section>
  )
}

export default Hero