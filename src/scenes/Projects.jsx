import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import p1 from '../assets/alfaalfa-company.png'
import p2 from '../assets/althuraya-info.png'
import p3 from '../assets/education-academy.png'
import p4 from '../assets/phone-store.jpg'
import p5 from '../assets/titra.png'
import p6 from '../assets/supplemets.png'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,hrf,img}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
   <a href={hrf}> <motion.div variants={projectVariant} className="relative">
   <div className={overlayStyles}>
     <p className="text-2xl font-playfair">{title}</p>
     <p className="mt-7">
      
     </p>
   </div>
   <img src={img} alt={projectTitle} />
 </motion.div></a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
         
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="phone-store" hrf="https://e-commece-phone-store.onrender.com/" img={p4}/>
          <Project title="althuraya-info" hrf="https://www.althuraya.com.co/en" img={p2}/>

          {/* ROW 2 */}
          <Project title="titra-company" hrf="https://titracompany.vercel.app/" img={p5}/>
          <Project title="alfaalfa-company" hrf="https://alfaalfa-company.vercel.app/ " img={p1}/>
          <Project title="education-academy" hrf="https://educational-portfolio.vercel.app/" img={p3} />

          {/* ROW 3 */}
          <Project title="Gym" hrf="https://mh-supplements.netlify.app/#/" img={p6} />
   
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
