import AboutImage from '../assets/images/azaz.jfif';

const About = () => {
    return <section class="about container" id="about">
    <div class="about-wrapper">
      <img class="about-image" src={AboutImage} alt="" />
      <div class="about-data">
        <h3 class="about-title">STORY ABOUT US</h3>
        <p class="about-description">
        Bodybuilding is a set of physical exercises aimed at the development 
        of skeletal muscles, in order to acquire more strength, endurance, 
        power, explosiveness or muscle volume. In these exercises, a force 
        (eg gravity, with the use of dumbbells, elastic bands or with the 
        help of body weight) is repeatedly opposed to the force generated by 
        the contraction of the muscles. This activity is usually practiced in a gym.
        </p>
        <a href="https://fr.wikipedia.org/wiki/Musculation" class="about-btn">READ MORE</a>
      </div>
    </div>
  </section>
}

export default About;