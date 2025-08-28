import React from 'react';
import servpro1 from '../../assets/services/servpro1.gif';
import servpro2 from '../../assets/services/servpro2.gif';
import servpro3 from '../../assets/services/servpro3.gif';

const ServicesProc = () => {
  return (
    <section className="bg-[#002bba] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
          <h2 className="text-4xl md:text-6xl font-medium leading-snug">
            Services tailored to <br className="hidden md:block" />
            your unique needs
          </h2>
          <p className="text-gray-300 text-2xl leading-relaxed">
            Tap into our resources and expertise for fast, cost-effective solutions to your business
            challenges. When off-the-shelf solutions can’t meet your needs, we can help.
          </p>
        </div>

        {/* Services Icon Section */}
        <div className="flex flex-col md:flex-row items-center text-center pt-6 md:pt-12">
          {/* Service 1 */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 mb-16 md:mb-0">
            <img src={servpro1} alt="Product Development" className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Product Development</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Solidify your vision through our discovery <br className="hidden md:block" />
              and design process.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-32 bg-white/10"></div>

          {/* Service 2 */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12 mb-16 md:mb-0">
            <img src={servpro2} alt="Custom Software" className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Custom Software</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Solve your unique business challenges <br className="hidden md:block" />
              with a tailor-made solution.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-32 bg-white/10"></div>

          {/* Service 3 */}
          <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-12">
            <img src={servpro3} alt="Digital Transformation" className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Digital Transformation</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Fundamentally change how you operate <br className="hidden md:block" />
              and deliver value to customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProc;
