import axios from "axios";
import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";

interface IServiceFromDb {
  _id: string;
  title: String;
  icon: String;
  description: String;
}

interface ITestimonialFromDb {
  _id: string;
  name: String;
  phone_number: String;
  testimonial: String;
  role: String;
  organization: String;
}

const serviceUrl = "http://localhost:3100/services";
const testimonialUrl = "http://localhost:3100/testimonials";

const About = () => {
  const [servicesLoading, setServicesLoading] = useState<boolean>(true);
  const [testimonialsLoading, setTestimonialsLoading] = useState<boolean>(true);
  const [services, setServices] = useState<IServiceFromDb[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonialFromDb[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        const serviceResponse = await axios.get(serviceUrl);
        setServices(serviceResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setTestimonialsLoading(true);
        const testimonialResponse = await axios.get(testimonialUrl);
        setTestimonials(testimonialResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setTestimonialsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          I am a third-year undergraduate at the University of Moratuwa,
          majoring in Computer Science within the Engineering program. I thrive
          on applying the knowledge from my coursework to real-world problems.
        </p>
        <p>
          When I'm not coding, you'll find me at the gym or on the badminton
          court, often contemplating on why my code isn't running. My drive for
          excellence and the satisfaction I get from seeing my code come to life
          fuels my journey in this dynamic field.
        </p>
        <p>
          I aspire to become a developer or software engineer, dedicating my
          skills to innovate and improve technology. Thank you for visiting my
          portfolio. Exploring my work will give you a glimpse into who I am and
          my professional aspirations. Enjoy!
        </p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What I Do</h3>
        {!servicesLoading && (
          <ul className="service-list">
            {services.map((service: IServiceFromDb) => (
              <Service
                key={service._id}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </ul>
        )}
        {servicesLoading && (
          <div className="text-center">
            <Spinner />
          </div>
        )}
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        {!testimonialsLoading && (
          <ul className="testimonials-list has-scrollbar">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial._id}
                name={testimonial.name}
                phone_number={testimonial.phone_number}
                testimonial={testimonial.testimonial}
                role={testimonial.role}
                organization={testimonial.organization}
              />
            ))}
          </ul>
        )}
        {testimonialsLoading && (
          <div className="text-center">
            <Spinner />
          </div>
        )}
      </section>
    </section>
  );
};

export default About;
