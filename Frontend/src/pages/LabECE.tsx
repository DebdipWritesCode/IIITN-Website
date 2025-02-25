const eceLabs = [
  "Electronic Devices and Circuits Lab",
  "Analog Electronics Lab",
  "Digital Electronics Lab",
  "Electrical Engineering Lab",
  "Signals and Systems Lab",
  "Microprocessors & Interfacing Lab",
  "Analog ICs Lab",
  "Network Theory Lab",
  "Digital Signal Processing Lab",
  "VLSI Lab",
  "Control Systems Lab",
  "Computing Lab",
  "Project Lab",
  "Research Lab",
  "Mechanics and Graphics Lab",
  "Robotics Lab",
  "Internet of Things Lab",
  "Workshop Lab",
];

const equipmentList = [
  "Analog-Digital Circuits Development Platform",
  "Cathode Ray Oscilloscope",
  "Digital Storage Oscilloscope",
  "FM Transmitter-Receiver Trainer",
  "Frequency Division Multiplexer",
  "Labtech Microcontroller Kit",
  "Microprocessor Kit",
  "PCB Machine",
  "Scientech 827a Workstation",
  "Scientech 827b Workstation",
  "Scientek 827c Workstation",
  "Software Defined Radio for Wireless Digital Communication",
  "Spectrum Analyzer",
  "TDM Pulse Code Modulation Kit",
  "Texas LCDK 6748 (Digital Signal Processing Kit)",
];

const Laboratory = () => {
  return (
    <div className="pt-24 px-10 font-montserrat mb-16">
      <h1 className="text-5xl font-semibold pb-6 text-center text-orange-800 hover:text-orange-900 transition-colors duration-300">
        Laboratory
      </h1>
      <p className="text-center text-lg text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">
        The Laboratories are providing controlled conditions for conducting Research, Experiments, and Measurements. The Laboratories at IIIT Nagpur are reservoirs of opportunity, energy, innovation, and growth.
      </p>
      <p className="text-center text-lg text-gray-600 mb-6 hover:text-gray-700 transition-colors duration-300">
        The various available labs in the ECE department are as follows:
      </p>

      {/* ECE Labs Section */}
      <div className="mb-12 p-6 bg-orange-50 rounded-2xl shadow-md border border-orange-200 hover:shadow-lg hover:border-orange-300 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-orange-800 mb-4 text-center hover:text-orange-900 transition-colors duration-300">
          ECE Laboratories
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {eceLabs.map((lab, idx) => (
            <li key={idx} className="hover:text-gray-800 transition-colors duration-300">
              {lab}
            </li>
          ))}
        </ul>
      </div>

      {/* Equipment Section */}
      <div className="mb-12 p-6 bg-orange-50 rounded-2xl shadow-md border border-orange-200 hover:shadow-lg hover:border-orange-300 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-orange-800 mb-4 text-center hover:text-orange-900 transition-colors duration-300">
          Equipment in ECE Labs
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {equipmentList.map((equipment, idx) => (
            <li key={idx} className="hover:text-gray-800 transition-colors duration-300">
              {equipment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Laboratory;