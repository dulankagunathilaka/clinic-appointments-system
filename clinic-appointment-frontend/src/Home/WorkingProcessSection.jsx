import React from 'react';
import ProcessStep from './ProcessStep';

const WorkingProcessSection = () => {
  const processData = [
    {
      number: '01',
      title: 'Fill The Form',
      description: 'Complete our simple online form to provide your details and health information.',
      colorClass: 'bg-green-500',
      lineStyle: 'border-green-300',
    },
    {
      number: '02',
      title: 'Book An Appointment',
      description: 'Schedule a convenient appointment with our expert doctors.',
      colorClass: 'bg-blue-500',
      lineStyle: 'border-sky-300',
    },
    {
      number: '03',
      title: 'Check-Ups',
      description: 'Visit our clinic for thorough check-ups and accurate diagnostics.',
      colorClass: 'bg-pink-500',
      lineStyle: 'border-pink-300',
    },
    {
      number: '04',
      title: 'Get Reports',
      description: 'Receive your test results and medical reports quickly and securely.',
      colorClass: 'bg-amber-500',
      lineStyle: '', 
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#e0f7fa] to-[#e8f5e9] overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath fill='%23add8e6' d='M50 0 L50 100 M0 50 L100 50' stroke-width='4' stroke-opacity='0.1' /%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-20 space-y-3">
          <p className="text-lg font-semibold text-sky-500 tracking-wider flex items-center justify-center">
            <span className="mr-5">|</span>How We Work
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">Our Working Process</h2>
        </div>

        
        <div className="flex flex-col lg:flex-row justify-between items-start pt-10 relative">
          {processData.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              colorClass={step.colorClass}
              lineStyle={step.lineStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
