export default function AboutSection() {
    return (
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side images */}
            <div className="relative lg:w-1/2">
              {/* Main handshake image */}
              <img
                src="https://skyhitmedia.com/images/image%2041.png"
                alt="Business partners handshake"
                className="w-full rounded-lg shadow-lg"
              />
              
              {/* Overlapping second image */}
              <div className="absolute -bottom-12 right-0 w-3/4">
                <img
                  src="https://skyhitmedia.com/images/two-focused-female-colleagues-using-tablet-computer-cafe.jpg"
                  alt="Team collaboration"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
  
              {/* Badge overlay */}
              <div className="absolute top-12 left-8 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <img
                    src="https://skyhitmedia.com/images/BADGE%20ICON.png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <div className="text-orange-600">
                    <p className="font-semibold">Trusted</p>
                    <p>Digital Marketing</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right side content */}
            <div className="lg:w-1/2">
              {/* Section title with arrow */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-orange-600 text-sm tracking-wider">
                  &lt; &lt; &lt; About SkyHit Media &gt; &gt; &gt;
                </div>
                <img
                  src="https://skyhitmedia.com/images/arrow.png"
                  alt=""
                  className="w-8"
                />
              </div>
  
              {/* Main heading */}
              <h2 className="text-4xl lg:text-5xl font-playfair text-[#693B20] mb-6">
                Your Trusted
                <br />
                Digital Marketing Agency
              </h2>
  
              {/* Subheading */}
              <p className="text-xl text-orange-600 mb-8">
                We're Committed to Deliver High Quality Projects
              </p>
  
              {/* CTA Button */}
              <a
                href="#discover"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }