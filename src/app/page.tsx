"use client";

import AboutSection from "@/components/About";
import Carousel from "@/components/Carousel";
import { JSX, useEffect, useState } from "react";

const MarqueeClients = () => {
  const clients = [
    { name: "Gold Drop", image: "GOLD%20DROP.jpg" },
    { name: "Nissan", image: "NISSAN.png" },
    { name: "Westside", image: "WESTSIDE.png" },
    { name: "AIX Investment Group", image: "AIX.png" },
    { name: "Tanishq", image: "TANISHQ.png" },
    { name: "Bakelore", image: "BAKELORE.png" },
    { name: "MG", image: "MG.png" },
    { name: "ZK", image: "ZK.png" },
  ];

  return (
    <div className="overflow-hidden relative w-full">
      <div className="flex animate-marquee space-x-12">
        {clients.map((client, index) => (
          <img
            key={index}
            src={`https://skyhitmedia.com/images/${client.image}`}
            alt={client.name}
            className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            loading="lazy"
          />
        ))}
        {/* Duplicate for seamless loop */}
        {clients.map((client, index) => (
          <img
            key={`duplicate-${index}`}
            src={`https://skyhitmedia.com/images/${client.image}`}
            alt={client.name}
            className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

const QuoteSection = () => {
  return (
    <section className="relative w-full h-[460px] bg-[#4A5568] overflow-hidden">
      {/* Center oval image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-[600px] h-[300px] rounded-[50%] overflow-hidden"
          style={{
            boxShadow: '0 0 100px 100px rgba(74, 85, 104, 0.7)',
          }}
        >
          <img
            src="https://skyhitmedia.com/images/two-focused-female-colleagues-using-tablet-computer-cafe.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content container */}
      <div className="relative h-full container mx-auto px-6">
        <div className="h-full flex items-center justify-between">
          {/* Left side text */}
          <div className="max-w-xl text-white">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              Hundreds of Customers Trust
              <br />
              Our Digital Agency
            </h2>
          </div>

          {/* Right side button */}
          <div>
            <a 
              href="#quote"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const ServicesSection = () => {
  const services = [
    {
      icon: '/website-icon.svg',
      title: 'Website Design& Development',
      bgColor: 'bg-[#F5F5F5]'
    },
    {
      icon: '/strategy-icon.svg',
      title: 'Growth Strategy',
      bgColor: 'bg-[#4A5568]'
    },
    {
      icon: '/seo-icon.svg',
      title: 'Search Engine Optimization',
      bgColor: 'bg-[#F5F5F5]'
    },
    {
      icon: '/video-icon.svg',
      title: 'Video Marketing',
      bgColor: 'bg-[#4A5568]'
    },
    {
      icon: '/email-icon.svg',
      title: 'Email Marketing',
      bgColor: 'bg-[#F5F5F5]'
    },
    {
      icon: '/social-icon.svg',
      title: 'Social Media Marketing',
      bgColor: 'bg-[#4A5568]'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 mb-4">
            &lt; &lt; &lt; OUR BEST SERVICES &gt; &gt; &gt;
          </p>
          <h2 className="text-4xl md:text-5xl font-playfair text-gray-700 mb-2">
            Best Digital Marketing Agency
          </h2>
          <h3 className="text-3xl md:text-4xl font-playfair text-gray-700">
            SKYHIT MEDIA
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.bgColor} p-6 rounded-lg group hover:shadow-lg transition-all duration-300`}
            >
              {/* Service Icon */}
              <div className="h-12 mb-4">
                <img
                  src={service.icon}
                  alt=""
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Service Title */}
              <h4 className={`text-lg font-medium mb-4 ${
                service.bgColor === 'bg-[#4A5568]' ? 'text-white' : 'text-gray-800'
              }`}>
                {service.title}
              </h4>

              {/* Read More Link */}
              <a 
                href="#"
                className={`flex items-center text-sm ${
                  service.bgColor === 'bg-[#4A5568]' ? 'text-white' : 'text-orange-500'
                }`}
              >
                Read More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const AgencyExcitedSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
    {/* Main Background Image */}
    <div className="absolute inset-0">
      <img
        src="https://skyhitmedia.com/images/image%2036.jpg"
        alt="Team collaboration"
        className="w-full h-full object-cover"
      />
    </div>
  
    {/* Vector Overlay with Play Button */}
    <div className="absolute top-0 right-0 h-full">
      <div className="relative h-full">
        {/* Second Vector Image */}
        <img
          src="https://skyhitmedia.com/images/side%20vec.png"
          alt="Vector design"
          className="h-full w-auto object-cover"
        />
  
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-row items-center justify-center lg:justify-end text-white px-6 md:px-12">
          {/* Play Button */}
          <div className="flex flex-col gap-8">
          <button
            className="bg-gray-700/90 rounded-full p-12 mb-6 hover:bg-gray-600 transition duration-300"
            aria-label="Play video"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
  
          {/* Text Content */}
          <h2 className="text-3xl md:text-4xl font-medium leading-snug">
            Agency
            <br />
            That
            <br />
            Gets
            <br />
            Excited
            <br />
            About
          </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

const WhyChooseUsSection = () => {
  const stats = [
    {
      number: '100+',
      label: 'Loyal Clients',
      icon: '👥'
    },
    {
      number: '260+',
      label: 'Digital Products',
      icon: '💻'
    },
    {
      number: '150+',
      label: 'Expert Consultants',
      icon: '🎯'
    }
  ];

  return (
    <section className="bg-[#5F6B70] py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#DCBE9E] mb-4 text-sm">
            <span className="text-[#BE7F51]">&lt; &lt; &lt;</span> SERVICES WE&apos;RE OFFERING <span className="text-[#BE7F51]">&gt; &gt; &gt;</span>
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Why Choose Us
          </h2>
        </div>

        {/* Stats Container */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          {/* Experience Text */}
          <div className="w-full md:w-1/4 text-white">
            <h3 className="text-xl md:text-2xl font-medium mb-3 text-center lg:text-start">
              We Have <span className="text-[#BE7F51]">10 Years</span>
              <br />of Experience
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed text-center lg:text-start">
              With 10+ years of experience, SkyHit Media excels in SEO, digital marketing, and web development services.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 w-full md:w-3/4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[#D5D6D5] p-2 lg:p-6 md:p-8 rounded-lg text-center"
              >
                <span className="text-3xl md:text-4xl mb-2 block text-[#5F6B70] font-semibold">
                  {stat.number}
                </span>
                <span className="text-sm lg:text-base text-[#7F8C91] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const RecentWorks = () => {
  const projects = [
    {
      title: "Bakelore Winter Collection",
      images: {
        desktop: "desktop-view.jpg",
        tablet: "tablet-view.jpg",
        mobile: "mobile-view.jpg"
      }
    },
    {
      title: "Promea",
      images: {
        desktop: "desktop-view.jpg",
        tablet: "tablet-view.jpg",
        mobile: "mobile-view.jpg"
      }
    }
    // Add more projects
  ];

  const slides = projects.map((project, index) => (
    <div key={index} className="relative">
      {/* Desktop */}
      <div className="mb-8">
        <img
          src={project.images.desktop}
          alt={`${project.title} desktop view`}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Devices Container */}
      <div className="flex justify-between items-end">
        {/* Mobile */}
        <div className="w-1/4">
          <img
            src={project.images.mobile}
            alt={`${project.title} mobile view`}
            className="w-full"
          />
        </div>

        {/* Tablet */}
        <div className="w-1/3">
          <img
            src={project.images.tablet}
            alt={`${project.title} tablet view`}
            className="w-full"
          />
        </div>
      </div>
    </div>
  ));

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 mb-4">
            &lt; &lt; &lt; OUR RECENT WORKS &gt; &gt; &gt;
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-700 font-medium max-w-3xl mx-auto leading-tight">
            Explore Our Best Recent Work Projects
          </h2>
        </div>

        {/* Carousel */}
        <Carousel 
          slides={slides}
          showArrows={true}
          options={{
            spaceBetween: 30,
            slidesPerView: 1,
            loop: true
          }}
        />
      </div>
    </section>
  );
}

interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
}

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'XXXX',
      position: 'CEO of abcd',
      image: '/path-to-image-1.jpg',
      quote: 'Skyhit digital created a beautiful website for Bakelore! Their attention to detail and creativity truly enhanced our brand. Highly recommended!'
    },
    {
      name: 'XXXX',
      position: 'CEO of xxxxxx',
      image: '/path-to-image-2.jpg',
      quote: `Skyhit Digital transformed our my pet clinic&apos;s website and services! their professionalism and creativity significantly enchanced our online presence. Highly recommend them!`
    }
    // Add more testimonials as needed
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-lg p-6 border-[#CDA96B] border-2" style={{
      backgroundImage: 'url("https://skyhitmedia.com/images/banner.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4B57C]">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.position}</p>
          </div>
        </div>
        <blockquote className="text-gray-700 relative pl-6">
          <span className="absolute left-0 top-0 text-4xl text-[#D4B57C] font-serif">&quot;</span>
          <p className="mt-2">{testimonial.quote}</p>
        </blockquote>
      </div>
    </div>
  );

  return (
    <section 
      className="py-20 relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4B57C] mb-4">
            &lt; &lt; &lt; OUR TESTIMONIALS &gt; &gt; &gt;
          </p>
          <h2 className="text-4xl md:text-5xl text-[#6D6D6D] font-bold">
            What They&apos;re Saying?
          </h2>
        </div>

        {/* Testimonials */}
        {isMobile ? (
          <Carousel
            slides={testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
            options={{
              spaceBetween: 20,
              slidesPerView: 1,
              loop: testimonials.length > 1
            }}
            showArrows={true}
            showPagination={true}
            arrowClassName="bg-white/10 hover:bg-white/20 text-white"
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function HomePage(): JSX.Element {
  return (
    <>
      <section
        className="hero h-screen bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://skyhitmedia.com/images/slider-01")',
        }}
      >
        {/* Main content container */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="h-full flex flex-col justify-between">
          {/* Hero content */}
          <div className="flex-grow flex items-center">
            <div className="container mx-auto px-6 relative">
              <div className="flex flex-col lg:flex-row relative">
                {/* Left Side Content */}
                <div className="text-white relative z-10 lg:top-[140px] text-center lg:text-left lg:w-1/2 drop-shadow-lg">
                  <h1 className="text-6xl md:text-7xl lg:text-9xl font-playfair leading-tight drop-shadow-lg">
                    Digital
                    <span className="static inline-flex justify-center mx-2">
                      <img
                        src="https://skyhitmedia.com/images/traingle-icon.png"
                        alt="Triangle Icon"
                        className="w-16 h-18 absolute top-2 lg:top-8 left-[86%] lg:left-[70%]"
                        style={{ filter: "brightness(1.2)" }}
                        loading="eager"
                      />
                    </span>
                    <br />
                    Marketing
                    <br />
                    Agency
                  </h1>
                  <a
                    href="#services"
                    className="bg-[#BE7F51] hover:bg-[#BE7F51] text-white px-8 py-3 rounded-[30px] font-semibold transition-colors duration-300 inline-block mt-8 text-lg"
                  >
                    Our Services
                  </a>
                </div>

                {/* Right Side Design */}
                <div className="hidden lg:block lg:w-1/2 relative min-h-[1170px]">
                  <img
                    src="https://skyhitmedia.com/images/header%20side%20design%20poly.png"
                    alt="Right Edge Design"
                    className="absolute -right-[26rem] -top-[164px] h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Client Section */}
          <div className="absolute bottom-0 left-0 right-0 mb-6 shadow-lg">
            <div className="mx-auto">
              <div className="flex items-center">
                {/* Add background color to the OUR LOYAL CLIENTS container */}
                <div className="bg-[#5F6B70] px-4 py-9">
                  <h3 className="text-white text-sm lg:text-xl font-medium uppercase whitespace-nowrap">
                    OUR LOYAL CLIENTS
                  </h3>
                </div>
                <MarqueeClients />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <QuoteSection/>
      <ServicesSection/>
      <AgencyExcitedSection/>
      <WhyChooseUsSection/>
      <RecentWorks/>
      <TestimonialsSection/>
    </>
  );
}
