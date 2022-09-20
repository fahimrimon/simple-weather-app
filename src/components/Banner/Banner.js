import React from "react";

const Banner = () => {
  return (
    <div className="lg:mx-24 mx-4 lg:h-[90vh] h-[70vh]">
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row lg:space-x-40">
          <img src="https://thumbs.dreamstime.com/b/weather-forecast-concept-girl-telling-viewers-upcoming-weather-cool-rainy-cloudy-weather-forecast-flat-cartoon-200084132.jpg" class="lg:max-w-2xl max-w-xs rounded-lg shadow-lgl" />
          <div>
            <h1 class="text-5xl font-bold text-slate-900 mb-1 font-mono">Weather</h1>
            <h1 class="text-4xl font-semibold text-slate-600 font-mono mb-4">Forecast</h1>
            <p className="font-mono text-justify mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni aliquid molestiae exercitationem omnis earum voluptatibus iure doloremque maxime distinctio dignissimos?</p>
            <button class="py-2 px-4 border rounded border-teal-600 text-white bg-teal-600 font-bold mt-2 mb-3" type="button">
        READ MORE
      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
