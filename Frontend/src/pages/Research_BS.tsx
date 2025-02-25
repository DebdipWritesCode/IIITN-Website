import React from "react";

const researchData = {
  faculty: [
    { name: "Dr. Prasad V. Joshi", specialization: "Solid Mechanics/Vibration/Robotics/Computer Graphics" },
    { name: "Dr. Kirti Dorshetwar", specialization: "Literature/Communication/Humanities" },
    { name: "Dr. Charu Goel", specialization: "Mathematics" },
    { name: "Dr. Aatish Daryapurkar", specialization: "Applied Sciences" },
    { name: "Dr. Chandrashekhar Sakode", specialization: "Electrical Engineering" },
    { name: "Dr. Kamaljeet", specialization: "Mathematics" },
    { name: "Dr. Ujwal Warbe", specialization: "Mathematics" },
    { name: "Dr. Naresh Kumar", specialization: "Mathematics" },
    { name: "Dr. Madhuri Tayade", specialization: "Literature/Communication/Humanities" },
    { name: "Dr. Vikrant Dhenge", specialization: "Social Sciences" },
    { name: "Dr. Anup Kumar Rajak", specialization: "Mechanical" },
    { name: "Dr. Nishant Namdev", specialization: "Mathematics" },
    { name: "Dr. Pradeep Shende", specialization: "Mathematics" },
    { name: "Dr. Preeti", specialization: "Mathematics" },
    { name: "Dr. Shailesh Janbandhu", specialization: "Applied Sciences" }
  ],
  researchAreas: [
    "Applied Mathematics, Algebra, Numerical Analysis, Differential Equations, Data Science, Mathematical Modelling",
    "Applied/Engineering Physics, Material Science, Nanoscience and Nanotechnology",
    "Culture and Society, Technology and culture intervention, Small Scale Industries and Forestry based MSMEs",
    "CAD/CAM, Supply Chain Management, Biogas characterization",
    "Solid Mechanics, Vibration, Computer Graphics, Robotics",
    "Neuro Fuzzy logic, Optimization & Control system"
  ],
  patents: [
    {
      inventors: "Aatish Sanjayrao Daryapurkar*, Vipin Milind Kamble, Saurav Manohar Gajbhiye*, Harshal Ravikumar Khandait*, Purva Rajesh Goydani, Vedant Rajesh Gannarpwar, Pranav Yogesh Rabade, Kaushik Satish Yelne",
      applicationNo: "202021043873",
      status: "Published",
      title: "An automated irrigation system for guiding irrigation scheduling"
    },
    {
      inventors: "Dr. Kirti Dorshetwar",
      applicationNo: "202341076211 A",
      status: "Published",
      title: "Integrating social media and Commerce Applications"
    },
    {
      inventors: "Dr. Madhuri Tayade, Dr. Nirzar Kulkarni, Dr. Dinesh Kumar Mirkute, Dr Sujit Metre",
      applicationNo: "431233-001",
      status: "Filed",
      title: "Device for Effective Supply Chain and Logistics Management"
    },
    {
      inventors: "Prasad V. Joshi",
      applicationNo: "397540-001",
      status: "Granted",
      title: "Flexible Boundary Condition Setup for Vibration of Rectangular Plates for All Sizes and Edge Conditions"
    },
    {
      inventors: "Dr. Shaileshkumar Y. Janbandhu, Rupesh S. Gedam, Mrs. Shilpa R. Gedam",
      applicationNo: "379142",
      status: "Granted",
      title: "Borosilicate Glass Composition Embedded with Cds/Tio2 Composites Forindigo Carmine Dye Degradation"
    }
  ],
  bookChapters: [
    {
      authors: "C. Goel and B. Reznick",
      title: "Sums of Squares of k-term forms",
      source: "arXiv:2403.08697 (2024)"
    },
    {
      authors: "C. Goel, S. Hess, S. Kuhlmann",
      title: "A Refinement of Hilbert's 1888 Theorem: Separating Cones along the Veronese Variety",
      source: "arXiv: 2401.03813 (2024)"
    },
    {
      authors: "C. Goel, S. Hess, S. Kuhlmann",
      title: "Intermediate Cones between the Cones of Positive Semidefinite Forms and Sums of Squares",
      source: "arXiv: 2303.13178 (2023)"
    },
    {
      authors: "Dr. M. Paikane, Dr. K Dorshetwar",
      title: "Learning English Through Poetry, Plays & Novels",
      source: "LAMBERT Publication, 2022, ISBN:978-620-5-51187-9"
    },
    {
      authors: "Dr. Kirti Dorshetwar, Dr. M. Paikane",
      title: "Indian Woman Novelist: Shobha De",
      source: "LAMBERT Publication, 2022, ISBN: 978-620-5-49010-5"
    },
    {
      authors: "Dr. Kirti Dorshetwar",
      title: "New Avenues for Women in ShobhaDe’s Writing",
      source: "Book on Rethinking Gender: Perspectives from Literature and Society, ISBN- 978-81-948301-5-3"
    },
    {
      authors: "Dr. Kirti Dorshetwar, Dr. Anuradha Singh, Dr. M. Paikane",
      title: "Essays on COVID-19: A Research Study",
      source: "Sankalp Publication, 2021, ISBN 978-81-948301-3-9"
    },
    {
      authors: "Dr. Madhuri Tayade",
      title: "Probing The Influence of English Literature on the Indian Knowledge System in Light of NEP 2020",
      source: "Indian Knowledge System, Values and Philosophies, ISBN- 978-81-977606-2-2"
    },
    {
      authors: "Dr. Madhuri Tayade",
      title: "Present Status of Women in India",
      source: "Gender Equality by Dr. Vaishali Meshram, Adhar Publication, ISBN-978-93-91305-28-"
    },
    {
      authors: "Dhenge, Vikrant and Nimbarte, G.N.",
      title: "Impact Assessment of Citizen Participation and Service Quality on Citizen Satisfaction in Mid-sized Smart Cities in India",
      source: "Sustainable Resilient Built Environment, Advances in 21st Century Human Settlements, Springer Nature, doi: 10.1007/978-981-99-8811-2"
    }
  ],
  conferencePapers: [
    {
      authors: "P. V. Joshi",
      title: "Effect of crack location on vibration analysis of cracked FGM plate under thermal environment",
      conference: "SCOPUS indexed MATERIALS TODAY PROCEEDINGS, March 15-17, 2018",
      doi: "https://doi.org/10.1016/j.matpr.2018.10.030"
    },
    {
      authors: "P. V. Joshi",
      title: "Effect of thermal environment on vibration response of partially cracked functionally graded plate coupled with fluid",
      conference: "Lovely Professional University, Phagwara, Punjab, March 15-17, 2018",
      doi: "https://doi.org/10.1016/j.matpr.2018.10.031"
    },
    {
      authors: "Shradha Bansod (Pande), A. S. Daryapurkar, Sushil Pande",
      title: "Biomass fly ash as a source of silica: Comprehensive review",
      conference: "National Conference on Green Earth – Clean Earth, 10th Feb 2024, Nagpur"
    },
    {
      authors: "H. Pundkar, Sharad S. Chaudhari, A. S. Daryapurkar",
      title: "Navigating the Potential of Nanomaterial in Thermal Systems Evaluating Performance, Stability and Overcoming Limitations with Innovative Solutions: A Comprehensive Review",
      conference: "International Conference on Energy and Environmental Materials, 11th -13th, July 2024, IIT Indore"
    },
    {
      authors: "K. Pendke, M. Digalwar, C. Goel",
      title: "Identification and Analysis of Emotions from the Text for Stress Detection",
      conference: "Fifteenth International Conference on Contemporary Computing (IC3-2023), Association for Computing Machinery ICPS, New York, USA, 2023",
      doi: "https://doi.org/10.1145/3607947.3608070"
    },
    {
      authors: "Goel, S. Kuhlmann",
      title: "A Tale of Two Cones: PSD vs SOS in equivariant situations",
      conference: "The 25th International Symposium on MTNS, EPub Bayreuth, 2022",
      doi: "https://doi.org/10.15495/EPub_UBT_00006809"
    },
    {
      authors: "Kirti Sanjay Dorshetwar, Nandan Chabbi",
      title: "The Societal Impact of Artificial Intelligence for India's Healthcare System",
      conference: "PAN NIT Humanities & Social Sciences Research Conclave 2024"
    },
    {
      authors: "Dr. Kirti Sanjay Dorshetwar",
      title: "National Education Policy 2020: A Right Step in Reviving the Education in Mother Tongue",
      conference: "PAN NIT Humanities & Social Sciences Research Conclave 2024"
    },
    {
      authors: "Dr. Kirti Dorshetwar",
      title: "ShobhaDe’s Ironic Representation of Relationships with Special Reference of Metro Cities",
      conference: "IARCSAC 2nd International Architectural Sciences & Applications Symposium, September 9 to 11 September 2022, Baku Engineering University Baku, Azerbaijan"
    },
    {
      authors: "Dr. Kirti Dorshetwar",
      title: "Economic Ramification Due to Covid",
      conference: "ISPEC 10th International Conference on Agriculture, July 18-19 2022, Sivas University of Science & Technology, Turkey"
    },
    {
      authors: "Dr. Kirti Dorshetwar",
      title: "New Avenues for Women in ShobhaDe’s Writing",
      conference: "Interdisciplinary National Conference on Rethinking Gender: Perspectives from Literature and Society, VNIT"
    },
    {
      authors: "Dr. Kirti Dorshetwar, Dr. M. Paikane",
      title: "Evaluating Veiled Feminine Yearning in the Movies of Satyjeet Ray",
      conference: "1st International Architectural Sciences and Application Symposium, Isparta University, Turkey, 27-29 October 2021"
    },
    {
      authors: "Dr. Kirti Dorshetwar, A. Kohad, B. Tiwari, H. Kedia, Y. Baghel",
      title: "Impact of COVID-19 on Indian Economy with special reference to Business",
      conference: "Two Days Interdisciplinary International e-Conference on Impact of COVID-19 on Various Areas of Global Economy, Science & Humanities, Gondwana University, Gadchiroli, MS, India, 24 & 25 June 2020"
    },
    {
      authors: "Dr. Kirti Dorshetwar, Harsh Shrivastava, Tejas Deore, Vaibhav Chaurasia & Ashish Sonam",
      title: "The Latest Inventions of Online Platforms to Raise the Issues of Covid-19",
      conference: "International Conference, Digital Humanities in the 21st Century: Understanding Human-Machine Interface & the Dawn of Post-humanism, 28/7/20 to 30/7/20 by Bharata Mata College, Thrikkakara"
    },
    {
      authors: "Dr. Kirti Dorshetwar",
      title: "Environmental Concerns for Smart City",
      conference: "Redefining Environmental Governance for Smart City, Post Graduate Teaching Department of Hindi of RTMNU, Nagpur on 2nd March, 2019"
    },
    {
      authors: "Dr. Kirti Dorshetwar, A Chandel",
      title: "Media as a Social Need",
      conference: "International Conference on Management, Engineering & Social Science (ICMESS-19) on 23rd-24th August, 2019 at Mumbai"
    },
    {
      authors: "Dr. Madhuri Tayade",
      title: "Intentionality of Implementing AI and The Impact on Environmental Sustainability of Educational Institutes",
      conference: "Governance Education Policy based International Conference on Artificial Intelligence (GEPIC-AI), AIMANTHAN, held by Vishwamanthan Research Foundation on 12th-13th July, 2024 at IIM, Nagpur"
    },
    {
      authors: "Dr. Madhuri Tayade",
      title: "Natural Environment Degradation, Sustainable Development and Ethics",
      conference: "International Conference on Research and Innovation for Sustainable Development, 4th May, 2024, at UIET, MDU, Rohtak"
    },
    {
      authors: "Dr. Madhuri Tayade",
      title: "Impact of Climate Change on Human Physical and Mental Health",
      conference: "4th World Environment Summit - 4th – 5th November 2023 by Galgotias University at Convention Centre, Delhi University, North Campus, Delhi (India)"
    },
    {
      authors: "V. Dhenge and K. S. Dorshetwar",
      title: "Overview of Ethics in Artificial Intelligence: Using Case Studies Approach",
      conference: "2024 IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI), Gwalior, India, 2024",
      doi: "10.1109/IATMSI60426.2024.10502940"
    }
  ]
};

const Research_BasicSciences: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-12">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">Basic Sciences Research</h1>
      <div className="max-w-4xl mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Faculty Members</h2>
          <ul className="list-disc ml-6 text-gray-800">
            {researchData.faculty.map((faculty, index) => (
              <li key={index} className="mb-2">
                <strong>{faculty.name}</strong> - {faculty.specialization}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Research Areas</h2>
          <ul className="list-disc ml-6 text-gray-800">
            {researchData.researchAreas.map((area, index) => (
              <li key={index} className="mb-2">{area}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Patents</h2>
          <ul className="list-disc ml-6 text-gray-800">
            {researchData.patents.map((patent, index) => (
              <li key={index} className="mb-2">
                <strong>{patent.title}</strong> - {patent.inventors}, {patent.applicationNo}, {patent.status}.
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Book Chapters</h2>
          <ul className="list-disc ml-6 text-gray-800">
            {researchData.bookChapters.map((chapter, index) => (
              <li key={index} className="mb-2">
                <strong>{chapter.title}</strong> - {chapter.authors}, {chapter.source}.
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Conference Papers</h2>
          <ul className="list-disc ml-6 text-gray-800">
            {researchData.conferencePapers.map((paper, index) => (
              <li key={index} className="mb-2">
                <strong>{paper.title}</strong> - {paper.authors}, {paper.conference}.
                {paper.doi && (
                  <a
                    href={paper.doi}
                    className="text-orange-600 underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOI Link
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Research_BasicSciences;