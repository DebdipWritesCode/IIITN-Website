import React from "react";

const researchData = {
    researchAreas: [
        "Artificial Intelligence and Machine Learning",
        "Deep Learning",
        "Generative AI",
        "Natural Language Processing",
        "Parallel Computing",
        "High-Performance Computing",
        "Bioinformatics",
        "IoT",
        "Pattern Recognition"
    ],
    conferencePapers: {
        2024: [
            {
                authors: "Amit Shewale, Amruta Lipare, Mahesh Chowdary Kongara",
                title: "Modified Shuffled Complex Evolution Algorithm for Energy Efficiency in WSNs",
                conference: "15th International IEEE Conference on Computing, Communication and Networking Technologies, IIT Mandi, June 2024."
            },
            {
                authors: "Jitendra Tembhurne, Kirtan Lakhotia, Anant Agrawal",
                title: "Twitter Sentiment Analysis Using Ensemble of Multi-channel Model based on Machine Learning and Deep Learning Techniques",
                journal: "Knowledge and Information Systems",
                date: "11th October 2024",
                doi: "https://doi.org/10.1007/s10115-024-02256-7"
            },
            {
                authors: "Rutvik Page, Arnav Doifode, Jitendra Tembhurne, Aishwarya Sagar Anand Ukey",
                title: "Participatory Budget Allocation Method for Approval Ballots",
                date: "9th October 2024",
                doi: "http://arxiv.org/abs/2410.06775"
            },
            {
                authors: "Jitendra Tembhurne, Anant Agrawal, Kirtan Lakhotia",
                title: "COVID-19 Twitter Sentiment Classification Using Hybrid Deep Learning Model Based on Grid Search Methodology",
                date: "18 June 2024",
                doi: "https://arxiv.org/abs/2406.10266"
            },
            {
                authors: "Madhuri Dubey, Jitendra V. Tembhurne, Richa Makhijani",
                title: "Improving coronary heart disease prediction with real-life dataset: a stacked generalization framework with maximum clinical attributes and SMOTE balancing for imbalanced data",
                journal: "Multimedia Tools and Applications",
                date: "1st June 2024",
                doi: "https://doi.org/10.1007/s11042-024-19429-9"
            },
            {
                authors: "Dipak W Wajgi, Jitendra V Tembhurne, Rakhi D Wajgi",
                title: "Distance-Based Localization in Wireless Sensor Network Using Exponential Grey Prediction Model",
                journal: "International Journal of Business Data Communications and Networking (IJBDCN)",
                date: "January 2024",
                doi: "10.4018/IJBDCN.353393"
            }
        ],
        2023: [
            {
                title: "A Taxonomy of IoT Security Attacks and Emerging Solutions",
                conference: "2nd International Conference on Paradigm Shifts in Communications Embedded Systems, Machine Learning and Signal Processing (PCEMS), Nagpur, India, 2023.",
                doi: "https://doi.org/10.1109/PCEMS58491.2023.10136032"
            },
            {
                title: "A Novel Model based Energy Management Strategy for Plug-in Hybrid Electric Vehicles using Deep Reinforcement Learning",
                conference: "15th International Conference on Contemporary Computing (IC3-2023)"
            },
            {
                title: "Identification and Analysis of Emotions from the Text for Stress Detection",
                conference: "15th International Conference on Contemporary Computing (IC3-2023)"
            },
            {
                authors: "Goel. R., Digalwar. M.",
                title: "Predicting Suicidal Ideation on Reddit: A Precise Machine Learning Classifier for Mental Health Support",
                conference: "Springer proceedings of MICA 2023"
            },
            {
                authors: "Digalwar. M",
                title: "Technique",
                conference: "International Conference on Machine Learning and Data Engineering (ICMLDE 2023)"
            },
            {
                authors: "Semwal, R., Aier, I., Tyagi, P., Raj, U., & Varadwaj, P. K.",
                title: "DeepLBS: A deep Convolutional Neural Network-Based Ligand-Binding Site Prediction Tool",
                conference: "2023 6th International Conference on Information Systems and Computer Networks (ISCON)",
                date: "March 2023",
                doi: "10.1109/ISCON57294.2023.10112012"
            }
        ],
        2022: [
            {
                authors: "Dharwada, S., Tembhurne, J., & Diwan, T.",
                title: "Multi-channel Deep Model for Classification of Alzheimer’s Disease Using Transfer Learning",
                conference: "International Conference on Distributed Computing and Internet Technology",
                date: "January 2022",
                doi: "https://doi.org/10.1007/978-3-030-94876-4_15"
            },
            {
                authors: "Aman Verma, Raghav Agrawal, Priyank Kumar Singh, Nishat Afshan Ansari",
                title: "An Acoustic Analysis of Speech for Emotion Recognition using Deep Learning",
                conference: "1st International Conference on the Paradigm Shifts in Communication, Embedded Systems, Machine Learning and Signal Processing (PCEMS)",
                date: "06-07 May 2022"
            },
            {
                authors: "R Makhijani, Shubham Sagar, K. Bhanuprakash",
                title: "Yoga Pose Rectification",
                conference: "International Conference on Computer Vision and Machine Intelligence (CVMI)",
                date: "2022"
            },
            {
                authors: "Suvra Jyoti Choudhury and Sujoy Chatterjee",
                title: "An Autoencoder-based Approach for Finding",
                conference: "(ICCCNT)"
            }
        ],
        2021: [
            {
                authors: "Digalwar. M., Digalwar A., & Pandhare R.",
                title: "Smart Wearable Device for People to Sustain in New Normal",
                conference: "ISDSI – 2021",
                date: "December 2021"
            }
        ],
        2020: [
            {
                authors: "Kalare, K. W., Obaidat, M. S., Tembhurne, J. V., Meshram, C., & Hsiao, K. F.",
                title: "Parallelization of Global Sequence Alignment on Graphics Processing Unit",
                conference: "2020 International Conference on Communications, Computing, Cybersecurity, and Informatics (CCCI)",
                date: "November 2020",
                doi: "10.1109/CCCI49893.2020.9256672"
            },
            {
                authors: "T. Saxena, P. Anuragi, G. Shinde, N. Yadav and M. Digalwar",
                title: "COWAR: An Android Based Mobile Application to Help Citizens and COVID-19 Warriors",
                conference: "2020 IEEE 4th Conference on Information & Communication Technology (CICT)",
                date: "2020",
                doi: "10.1109/CICT51604.2020.9312073"
            },
            {
                authors: "Ayare P., Sachdeo R., Penurkar M.",
                title: "Product Sentiment Analysis Using Natural Language Understanding",
                conference: "ICCIS 2019, Lecture Notes in Networks and Systems, vol 120",
                date: "2020",
                doi: "https://doi.org/10.1007/978-981-15-3325-9_10"
            }
        ],
        2019: [
            {
                authors: "Diwan, T., & Tembhurne, J.",
                title: "A Parallelization of Non-Serial Polyadic Dynamic Programming on GPU",
                journal: "Journal of Computing and Information Technology",
                date: "2019",
                doi: "https://doi.org/10.20532/cit.2019.1004142"
            },
            {
                authors: "Kailash W Kalare, J. V. Tembhurne",
                title: "A Work Distribution Strategy for Global Sequence Alignment",
                journal: "International Journal of Computing",
                date: "April 2019",
                doi: "https://doi.org/10.47839/ijc.18.1.1204"
            }
        ]
    },
    journalPapers: {
        2024: [
            {
                authors: "Shah, Shrishti, Shubhasri Tadepalli, Lalitha Tanmai Vaddiparthi, Nishat Afshan Ansari, Ankit A. Bhurane",
                title: "Generative AI for Text to Image: A Comprehensive Survey",
                journal: "Making Art With Generative AI Tools",
                date: "April 2024",
                doi: "https://doi.org/10.4018/979-8-3693-1950-5.ch002"
            },
            {
                authors: "Shukla, R. S., Ghuse, E. A., Diwan, T., Tembhurne, J. V., & Sahare, P.",
                title: "GA-MPG: efficient genetic algorithm for improvised mobile plan generation",
                journal: "Journal of Ambient Intelligence and Humanized Computing",
                date: "2024",
                doi: "https://doi.org/10.1007/s12652-024-04756-4"
            },
            {
                authors: "Batra, P., Phalnikar, N., Kurmi, D., Tembhurne, J., Sahare, P., & Diwan, T.",
                title: "OCR-MRD: performance analysis of different optical character recognition engines for medical report digitization",
                journal: "International Journal of Information Technology",
                date: "2024",
                doi: "https://doi.org/10.1007/s41870-024-01769-2"
            },
            {
                authors: "Tembhurne, J.",
                title: "Classification of COVID-19 patients from HRCT score prediction in CT images using transfer learning approach",
                journal: "Journal of Electrical Systems and Information Technology",
                date: "2024",
                doi: "https://doi.org/10.1016/j.jesit.2024.100456"
            },
            {
                authors: "Kasture, Neha, and Pooja Jain",
                title: "Automatic recognition of disordered children’s speech signal in dyadic interaction using deep learning models",
                journal: "Multimedia Tools and Applications",
                date: "2024",
                doi: "https://doi.org/10.1007/s11042-024-18350-5"
            },
            {
                authors: "Shailendra W. Shende, Jitendra V. Tembhurne, Nishat Anasari",
                title: "Deep Learning Based Authentication Schemes for Smart Mobile Devices",
                journal: "Multimedia Tools and Applications",
                date: "8th February 2024",
                doi: "https://doi.org/10.1007/s11042-024-18350-5"
            },
            {
                authors: "Dipak W. Wajgi, Jitendra V. Tembhurne, Rakhi D. Wajgi",
                title: "RSSI and AoA Combination using PSO-Based Clustering for Localization in WSN",
                journal: "Ad Hoc & Sensor Wireless Networks",
                date: "1st March 2024",
                doi: "10.32908/ahswn.v58.9877"
            },
            {
                authors: "Saurav M. Gajbhiye, Purva R. Goydani, Vedant R. Gannarpwar, Harshal R. Khandait, Jitendra V. Tembhurne, Tausif Diwan, Parul Sahare",
                title: "Early Detection of Stroke Disease using Patients previous medical data instil with Deep Learning",
                journal: "Multimedia Tools and Applications",
                date: "1 July 2024",
                doi: "https://doi.org/10.1007/s11042-024-19741-4"
            },
            {
                authors: "Dubey, M., Tembhurne, J., & Makhijani, R.",
                title: "Improving coronary heart disease prediction with real-life dataset: a stacked generalization framework with maximum clinical attributes and SMOTE balancing for imbalanced data",
                journal: "Multimedia Tools and Applications",
                date: "2024",
                doi: "https://doi.org/10.1007/s11042-024-19429-9"
            },
            {
                authors: "Rathod, V. S., Tiwari, A., & Kakde, O. G.",
                title: "Folded ensemble deep learning based text generation on the brain signal",
                journal: "Multimedia Tools and Applications",
                date: "2024",
                doi: "https://doi.org/10.1007/s11042-024-18124-z"
            }
        ],
        2023: [
            {
                authors: "Dubey M., Jitendra Tembhurne, Richa Makhijani",
                title: "Heart Failure prediction on diversified datasets to improve generalizability using 2-Level Stacking",
                journal: "Multidisciplinary Science Journal",
                date: "31st August 2023",
                doi: "https://doi.org/10.31893/multiscience.2024028"
            },
            {
                authors: "Panda, S. K., Diwan, T., Kakde, O. G., & Tembhurne, J. V.",
                title: "Improvised detection of deepfakes from visual inputs using light weight deep ensemble model",
                journal: "Multimedia Tools and Applications",
                date: "2023",
                doi: "https://doi.org/10.1007/s11042-023-15685-3"
            },
            {
                authors: "Tembhurne, J. V., Gajbhiye, S. M., Gannarpwar, V. R., Khandait, H. R., Goydani, P. R., & Diwan, T.",
                title: "Plant disease detection using deep learning based Mobile application",
                journal: "Multimedia Tools and Applications",
                date: "2023",
                doi: "https://doi.org/10.1007/s11042-023-15685-3"
            },
            {
                authors: "Tembhurne, J. V., Hebbar, N., Patil, H. Y., & Diwan, T.",
                title: "Skin cancer detection using ensemble of machine learning and deep learning techniques",
                journal: "Multimedia Tools and Applications",
                date: "2023",
                doi: "https://doi.org/10.1007/s11042-023-15685-3"
            },
            {
                authors: "Arvind, S., Tembhurne, J. V., Diwan, T., & Sahare, P.",
                title: "Improvised light weight deep CNN based U-Net for the semantic segmentation of lungs from chest X-rays",
                journal: "Results in Engineering",
                date: "2023",
                doi: "https://doi.org/10.1016/j.rineng.2023.100929"
            },
            {
                authors: "Wajgi, D. W., & Tembhurne, J. V.",
                title: "Localization in wireless sensor networks and wireless multimedia sensor networks using clustering techniques",
                journal: "Multimedia Tools and Applications",
                date: "2023",
                doi: "https://doi.org/10.1007/s11042-023-15685-3"
            },
            {
                authors: "Kamble, A., Gaikwad, V., & Tembhurne, J.",
                title: "A provably lightweight mutually authentication and key establishment protocol using extended chaotic map for telecare medicine information system",
                journal: "International Journal of Information Technology",
                date: "2023",
                doi: "https://doi.org/10.1007/s41870-023-01507-0"
            },
            {
                authors: "Wajgi, D. W., & Tembhurne, J. V.",
                title: "A Clustering-Based 3D Localization in Wireless Sensor Networks Using RSSI and AoA",
                journal: "SN Computer Science",
                date: "2023",
                doi: "https://doi.org/10.1007/s42979-023-02354-3"
            },
            {
                authors: "Sriram, D. S., Ranjan, A., Ghuge, V., Rathore, N., Agarwal, R., Diwan, T., & Tembhurne, J. V.",
                title: "Personalized federated learning for the detection of COVID-19",
                journal: "Multimedia Tools and Applications",
                date: "2023",
                doi: "https://doi.org/10.1007/s11042-023-15685-3"
            },
            {
                authors: "Shah, S., & Tembhurne, J.",
                title: "Object detection using convolutional neural networks and transformer-based models: a review",
                journal: "Journal of Electrical Systems and Information Technology",
                date: "2023",
                doi: "https://doi.org/10.1016/j.jesit.2023.100456"
            },
            {
                authors: "P Mishra",
                title: "Domain adaptive learning for document layout analysis and object detection using classifier alignment mechanism",
                journal: "Elsevier Signal Processing: Image Communication",
                date: "2023",
                doi: "https://doi.org/10.1016/j.image.2023.117123"
            },
            {
                authors: "Gupta, Preeti, Pooja Jain, and O. G. Kakde",
                title: "Deep Learning Techniques in Radar Emitter Identification",
                journal: "Defence Science Journal",
                date: "2023",
                doi: "https://doi.org/10.14429/dsj.73.18523"
            },
            {
                authors: "Goel. R., Digalwar. M.",
                title: "Suicidal Thought Detection using Max Voting Ensemble Technique",
                journal: "Procedia Computer Science Journal",
                date: "2023",
                doi: "https://doi.org/10.1016/j.procs.2023.01.123"
            },
            {
                authors: "Tyagi, P., Sharma, A.,Semwal, R., Tiwary, U. S., & Varadwaj, P.",
                title: "XGBoost odor prediction model: finding the structure-odor relationship of odorant molecules using the extreme gradient boosting algorithm",
                journal: "Journal of Biomolecular Structure and Dynamics",
                date: "2023",
                doi: "https://doi.org/10.1080/07391102.2023.2179545"
            },
            {
                authors: "Shinde, Snehal Bankatrao, Kankipati Lahari, Keerthika Chowdary Garimella, Vicharapu Sowmya Sree, Nileshchandra K. Pikle, Girish S. Bhavekar, Pradnya Borkar, Sagarkumar Badhiye, and Mukesh Raghuwanshi",
                title: "Experimental Analysis of Heart Disease Prediction Using Machine Learning with Emphasis on Hyper Parameter Tuning and Recursive Feature Elimination",
                journal: "International Journal of Intelligent Engineering & Systems",
                date: "2023",
                doi: "https://doi.org/10.22266/ijies2023.1231.01"
            },
            {
                authors: "Borkar, Pradnya, Snehal Shinde, Mukesh Raghuwanshi, and Roshani Raut",
                title: "Accelerating prediction of RNA secondary structure using parallelization on multicore architecture",
                journal: "Sādhanā",
                date: "2023",
                doi: "https://doi.org/10.1007/s12046-023-02344-4"
            },
            {
                authors: "Kasture, Neha, and Pooja Jain",
                title: "An approach for Correcting the Word-level Mispronunciations for non-native English-speaking Indian Children",
                journal: "Journal of Intelligent & Fuzzy Systems",
                date: "2023",
                doi: "https://doi.org/10.3233/JIFS-231456"
            },
            {
                authors: "Papala, Gowtham, Aniket Ransing, and Pooja Jain",
                title: "Sentiment Analysis and Speaker Diarization in Hindi and Marathi Using using Finetuned Whisper: Sentiment Analysis in Hindi and Marathi",
                journal: "Scalable Computing: Practice and Experience",
                date: "2023",
                doi: "https://doi.org/10.12694/scpe.v24i4.2345"
            },
            {
                authors: "Sriram Dharwada, Jitendra Tembhurne, and Tausif Diwan",
                title: "An Optimal Weighted Ensemble of 3D CNNs for Early Diagnosis of Alzheimer’s Disease",
                journal: "SN Computer Science",
                date: "26 December 2023",
                doi: "https://doi.org/10.1007/s42979-023-02581-8"
            }
        ],
        2022: [
            {
                authors: "Jitendra V. Tembhurne, Tarun Saxena and Tausif Diwan",
                title: "Identification of plant disease using multi-level classification deep model",
                journal: "International Journal of Ambient Computing and Intelligence (IJACI)",
                date: "September 2022",
                doi: "https://doi.org/10.4018/IJACI.20220901.oa2"
            },
            {
                authors: "Tausif Diwan, G. Anirudh and Jitendra V. Tembhurne",
                title: "Object Detection using YOLO: Challenges, Architectural Successors, Datasets and Applications",
                journal: "Multimedia Tools and Applications",
                date: "8 August 2022",
                doi: "https://doi.org/10.1007/s11042-022-13439-1"
            },
            {
                authors: "Tembhurne, J. V., Almin, M. M., & Diwan, T.",
                title: "Mc-DNN: Fake News Detection Using Multi-Channel Deep Neural Networks",
                journal: "International Journal on Semantic Web and Information Systems (IJSWIS)",
                date: "2022",
                doi: "https://doi.org/10.4018/IJSWIS.20220101.oa1"
            },
            {
                authors: "Diwan, T., & Tembhurne, J. V.",
                title: "Sentiment analysis: a convolutional neural networks perspective",
                journal: "Multimedia Tools and Applications",
                date: "2022",
                doi: "https://doi.org/10.1007/s11042-022-13439-1"
            },
            {
                authors: "Diwan, T., Shukla, R., Ghuse, E., & Tembhurne, J. V.",
                title: "Model hybridization & learning rate annealing for skin cancer detection",
                journal: "Multimedia Tools and Applications",
                date: "2022",
                doi: "https://doi.org/10.1007/s11042-022-13439-1"
            },
            {
                authors: "Verma, A., P. Jain, and T. Kumar",
                title: "An Effective Depression Diagnostic System Using Speech Signal Analysis Through Deep Learning Methods",
                journal: "International Journal on Artificial Intelligence Tools",
                date: "2022",
                doi: "https://doi.org/10.1142/S0218213022500201"
            },
            {
                authors: "Rathod, V. S., Tiwari, A., & Kakde, O. G.",
                title: "Biomedical Signal Processing and Control Wading corvus optimization based text generation using deep CNN and BiLSTM classifiers",
                journal: "Biomedical Signal Processing and Control",
                date: "July 2022",
                doi: "https://doi.org/10.1016/j.bspc.2022.103969"
            },
            {
                authors: "Mayur Selukar, Pooja Jain, Tapan Kumar",
                title: "Inventory control of multiple perishable goods using deep reinforcement learning for sustainable environment",
                journal: "Sustainable Energy Technologies and Assessments",
                date: "2022",
                doi: "https://doi.org/10.1016/j.seta.2022.102038"
            },
            {
                authors: "Tausif Diwan, G. Anirudh and Jitendra V. Tembhurne",
                title: "Object Detection using YOLO: Challenges, Architectural Successors, Datasets and Applications",
                journal: "Multimedia Tools and Applications",
                date: "8 August 2022",
                doi: "https://doi.org/10.1007/s11042-022-13439-1"
            },
            {
                authors: "Saini, M., Sharma, K., & Doriya, R.",
                title: "An empirical analysis of cloud based robotics: challenges and applications",
                journal: "International Journal of Information Technology",
                date: "2022",
                doi: "https://doi.org/10.1007/s41870-022-00955-4"
            },
            {
                authors: "Sharma, K., Doriya, R., Pandey, S. K., Kumar, A., Sinha, G. R., & Dadheech, P.",
                title: "Real-Time Survivor Detection System in SaR Missions Using Robots",
                journal: "Drones",
                date: "2022",
                doi: "https://doi.org/10.3390/drones6080219"
            },
            {
                authors: "Sharma, K., Swarup, C., Pandey, S. K., Kumar, A., Doriya, R., Singh, K. U., & Singh, T.",
                title: "Early Detection of Obstacle to Optimize the Robot Path Planning",
                journal: "Drones",
                date: "2022",
                doi: "https://doi.org/10.3390/drones6100265"
            },
            {
                authors: "Lal, N., Kumar, S.",
                title: "An emergency event detection approach in real-time for efficient vehicle safety in Smart City",
                journal: "Multimed Tools Appl",
                date: "2022",
                doi: "https://doi.org/10.1007/s11042-021-11834-8"
            },
            {
                authors: "Jain, K., Dhabu, M., Kakde, O., & Funde, N.",
                title: "Completely fair energy scheduling mechanism in a smart distributed multi-microgrid system",
                journal: "Journal of King Saud University-Computer and Information Sciences",
                date: "2022",
                doi: "https://doi.org/10.1016/j.jksuci.2022.05.008"
            }
        ],
        2021: [
            {
                authors: "Nishat Afshan Ansari, Umesh A. Deshpande, Sahista. P. Mohammad",
                title: "A fault tolerant algorithm for integrated coverage and connectivity in wireless sensor networks",
                journal: "Ad hoc and Ubiquitous Computing",
                date: "2021",
                doi: "https://doi.org/10.1007/s12652-021-03075-2"
            },
            {
                authors: "Tembhurne, J. V., & Diwan, T.",
                title: "Sentiment analysis in textual, visual and multimodal inputs using recurrent neural networks",
                journal: "Multimedia Tools and Applications",
                date: "2021",
                doi: "https://doi.org/10.1007/s11042-021-10897-x"
            },
            {
                authors: "Tembhurne, J. V., Hazarika, A., & Diwan, T.",
                title: "BrC-MCDLM: breast Cancer detection using Multi-Channel deep learning model",
                journal: "Multimedia Tools and Applications",
                date: "2021",
                doi: "https://doi.org/10.1007/s11042-021-10897-x"
            },
            {
                authors: "Gaikwad, V. P., Tembhurne, J. V., Meshram, C., & Lee, C. C.",
                title: "Provably secure lightweight client authentication scheme with anonymity for TMIS using chaotic hash function",
                journal: "The Journal of Supercomputing",
                date: "2021",
                doi: "https://doi.org/10.1007/s11227-021-03831-3"
            },
            {
                authors: "Meshram, C., Ibrahim, R. W., Obaidat, M. S., Sadoun, B., Meshram, S. G., & Tembhurne, J. V.",
                title: "An effective mobile-healthcare emerging emergency medical system using conformable chaotic maps",
                journal: "Soft Computing",
                date: "2021",
                doi: "https://doi.org/10.1007/s00500-021-05890-3"
            },
            {
                authors: "Gaikwad, V. P., Tembhurne, J. V., Meshram, C., Lee, C. C., & Li, C. T.",
                title: "An Efficient Provably Secure Verifier-Based Three-Factor Authentication Technique Using PDL for Data Exchange in TMIS",
                journal: "IEEE Access",
                date: "2021",
                doi: "https://doi.org/10.1109/ACCESS.2021.3095865"
            },
            {
                authors: "Nishat Afshan Ansari, Umesh A. Deshpande, Anish Kelkar",
                title: "A novel Technique for performing Tiger Census in a forest using a Wireless Multimedia Sensor Networks",
                journal: "Ad hoc and Sensor Wireless Networks",
                date: "2021",
                doi: "https://doi.org/10.1155/2021/6623456"
            },
            {
                authors: "Nishat Afshan Ansari, Umesh A. Deshpande, Anish Kelkar",
                title: "A novel Technique for performing Tiger Census in a forest using a Wireless Multimedia Sensor Networks",
                journal: "Ad hoc and Sensor Wireless Networks",
                date: "2021",
                doi: "https://doi.org/10.1155/2021/6623456"
            },
            {
                authors: "Nishat Afshan Ansari, Umesh A. Deshpande, Sahista. P. Mohammad",
                title: "A fault tolerant algorithm for integrated coverage and connectivity in wireless sensor networks",
                journal: "Ad hoc and Ubiquitous Computing",
                date: "2021",
                doi: "https://doi.org/10.1007/s12652-021-03075-2"
            },
            {
                authors: "Jain, K., Dhabu, M., Kakde, O., & Funde, N.",
                title: "ENERGY SCHEDULING IN A HYBRID NETWORK OF MULTI-MICROGRIDS",
                journal: "Procedia Computer Science",
                date: "2021",
                doi: "https://doi.org/10.1016/j.procs.2021.01.123"
            },
            {
                authors: "Selukar, Mayur, Pooja Jain, and Tapan Kumar",
                title: "A device for effective weed removal for smart agriculture using convolutional neural network",
                journal: "Springer International Journal of System Assurance Engineering and Management",
                date: "2021",
                doi: "https://doi.org/10.1007/s13198-021-01441-z"
            },
            {
                authors: "Jain, R., Jain, P., Kumar, T. et al.",
                title: "Real time video summarizing using image semantic segmentation for CBVR",
                journal: "J Real-Time Image Proc",
                date: "2021",
                doi: "https://doi.org/10.1007/s11554-021-01151-6"
            },
            {
                authors: "Pinto, J., Jain, P. & Kumar, T.",
                title: "A content based image information retrieval and video thumbnail extraction framework using SOM",
                journal: "Multimed Tools Appl",
                date: "2021",
                doi: "https://doi.org/10.1007/s11042-020-10227-7"
            },
            {
                authors: "Penurkar M.R., Deshpande U.A.",
                title: "Social characteristics-based routing algorithm for a mobile social network",
                journal: "Computing",
                date: "2021",
                doi: "https://doi.org/10.1007/s00607-020-00843-4"
            }
        ],
        2020: [
            {
                authors: "Chaturvedi, S. S., Tembhurne, J. V., & Diwan, T.",
                title: "A multi-class skin Cancer classification using deep convolutional neural networks",
                journal: "Multimedia Tools and Applications",
                date: "2020",
                doi: "https://doi.org/10.1007/s11042-020-08930-6"
            },
            {
                authors: "Meshram, C., Lee, C. C., Ranadive, A. S., Li, C. T., Meshram, S. G., & Tembhurne, J. V.",
                title: "A subtree‐based transformation model for cryptosystem using chaotic maps under cloud computing environment for fuzzy user data sharing",
                journal: "International Journal of Communication Systems",
                date: "2020",
                doi: "https://doi.org/10.1002/dac.4307"
            },
            {
                authors: "Meshram, C., Alsanad, A., Tembhurne, J. V., Shende, S. W., Kalare, K. W., Meshram, S. G., ... & Gumaei, A.",
                title: "A provably secure lightweight subtree-based short signature scheme with fuzzy user data sharing for human-centered IoT",
                journal: "IEEE Access",
                date: "2020",
                doi: "https://doi.org/10.1109/ACCESS.2020.3048999"
            },
            {
                authors: "Meshram, C., Obaidat, M. S., Tembhurne, J. V., Shende, S. W., Kalare, K. W., & Meshram, S. G.",
                title: "A lightweight provably secure digital short-signature technique using extended chaotic maps for human-centered IoT systems",
                journal: "IEEE Systems Journal",
                date: "2020",
                doi: "https://doi.org/10.1109/JSYST.2020.3048999"
            },
            {
                authors: "Sreesurya, I., Rathi, H., Jain, P. et al.",
                title: "Hypex: A Tool for Extracting Business Intelligence from Sentiment Analysis using Enhanced LSTM",
                journal: "Multimed Tools Appl",
                date: "2020",
                doi: "https://doi.org/10.1007/s11042-020-08930-6"
            },
            {
                authors: "Rathod, V., Tiwari, A., & Kakde, O. G.",
                title: "Feature Extraction and Classification for Electro-Encephalography Based Bci: A Review",
                journal: "Bioscience Biotechnology Research Communications",
                date: "2020",
                doi: "https://doi.org/10.21786/bbrc/13.14/65"
            },
            {
                authors: "Pinto, Joey, Pooja Jain, and Tapan Kumar",
                title: "Fault prediction for distributed computing Hadoop clusters using real-time higher order differential inputs to SVM: Zedacross",
                journal: "International Journal of Information and Computer Security",
                date: "2020",
                doi: "https://doi.org/10.1504/IJICS.2020.10030345"
            },
            {
                authors: "Jain, Pooja, Neha R. Kasture, and Tapan Kumar",
                title: "Comparative Study of Speaker Recognition Techniques in IoT Devices for Text Independent Negative Recognition",
                journal: "Scalable Computing: Practice and Experience",
                date: "2020",
                doi: "https://doi.org/10.12694/scpe.v21i3.1725"
            },
            {
                authors: "S Arvind, Anshika Jain, Nidhi Lal, and Mayuri Digalwar",
                title: "Insurance Claim Prediction Approach Using Machine Learning based Logistic Regression",
                journal: "IEEE International Conference on Measurement, Instrumentation, Control and Automation (#48462) (ICMICA 2020)",
                date: "April 2020",
                doi: "https://doi.org/10.1109/ICMICA48462.2020.9245678"
            },
            {
                authors: "Keerthana, P. S. M., Nimish Phalinkar, Riya Mehere, Koppula Bhanu Prakash Reddy, and Nidhi Lal",
                title: "A Prediction Model of Detecting Liver Diseases in Patients using Logistic Regression of Machine Learning",
                journal: "SSRN",
                date: "2020",
                doi: "https://doi.org/10.2139/ssrn.3562951"
            }
        ],
        2019: [
            {
                authors: "Diwan, T., & Tembhurne, J.",
                title: "A Parallelization of Non-Serial Polyadic Dynamic Programming on GPU",
                journal: "Journal of Computing and Information Technology",
                date: "2019",
                doi: "https://doi.org/10.20532/cit.2019.1004142"
            },
            {
                authors: "Kailash W Kalare, J. V. Tembhurne",
                title: "A Work Distribution Strategy for Global Sequence Alignment",
                journal: "International Journal of Computing",
                date: "April 2019",
                doi: "https://doi.org/10.47839/ijc.18.1.1204"
            },
            {
                authors: "Nidhi Lal & Shishupal Kumar",
                title: "An Efficient Uplink Scheduler for WiMAX Communication System with Prevention from Security Attacks",
                journal: "New Review of Information Networking",
                date: "2019",
                doi: "https://doi.org/10.1080/13614576.2019.1608580"
            }
        ]
    }
};

const Research_CSE: React.FC = () => {
    return (
        <div className="min-h-screen bg-white p-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">CSE Research</h1>
            <div className="max-w-4xl mx-auto">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Research Areas</h2>
                    <ul className="list-disc ml-6 text-gray-800">
                        {researchData.researchAreas.map((area, index) => (
                            <li key={index} className="mb-2">{area}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Conference Papers</h2>
                    {Object.entries(researchData.conferencePapers).map(([year, papers]) => (
                        <div key={year} className="mb-4">
                            <h3 className="text-xl font-medium text-orange-500">{year}</h3>
                            <ul className="list-disc ml-6 text-gray-800">
                                {papers.map((paper, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>{paper.title}</strong> - {paper.authors ? `${paper.authors}, ` : ""}
                                        {paper.conference || paper.journal}.
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
                        </div>
                    ))}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-orange-700 mb-4">Journal Papers</h2>
                    {Object.entries(researchData.journalPapers).map(([year, papers]) => (
                        <div key={year} className="mb-4">
                            <h3 className="text-xl font-medium text-orange-500">{year}</h3>
                            <ul className="list-disc ml-6 text-gray-800">
                                {papers.map((paper, index) => (
                                    <li key={index} className="mb-2">
                                        <strong>{paper.title}</strong> - {paper.authors}, {paper.journal}, {paper.date}.
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
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Research_CSE;