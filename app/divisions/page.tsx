'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  ChevronDown, Building2, User, 
  Users 
} from 'lucide-react';

const divisions = [

  { path: 'bilateral-affairs', name: 'Bilateral Affairs' },

  { path: 'multilateral-affairs', name: 'Multilateral Affairs' },

  { path: 'economic-affairs', name: 'Economic Affairs' },

  { path: 'protocols', name: 'Protocols' },

  { path: 'consular-affairs', name: 'Consular Affairs' },

  { path: 'legal', name: 'Legal' },

  { path: 'ocean-affairs', name: 'Ocean Affairs, Environment and Climate Change' },

  { path: 'performance-review', name: 'Performance Review and Implementation' },

  { path: 'international-security', name: 'International Security Corporation' },

  { path: 'hr-research-training', name: 'Human Resources Development, Research and Training' },

  { path: 'hr-mission-management', name: 'HR and Mission Management' },

  { path: 'overseas-assets', name: 'Overseas Asset Management and Development' },

  { path: 'general-administration', name: 'General Administration' },

  { path: 'finance', name: 'Finance' },

  { path: 'internal-audit', name: 'Internal Audit and Investigation' },

];


const bilateralSubDivisions = [

  'Africa Affairs',

  'East Asia and Oceania',

  'Europe & North America',

  'Latin Ameruca and Caribbean Division',

  'Middle East',

  'South Asia and SAARC',

  'Southeast Asia and Central Asia'

];


// --- CONTACT DATA STRUCTURE ---

// Maps to either the division 'path' or the sub-division 'name'

const CONTACTS_MAP: Record<string, any[]> = {

  // Bilateral Sub-Divisions

  'Africa Affairs': [

    { role: ' Director General', name: 'Ms. Dilani Weerakoon', email: 'dilani.weerakoon(at)mfa.gov.lk' },

    { role: 'Assistant Director', name: 'Ms. Dharshika Dasanayake', email: 'darshika.dasanayake(at)mfa.gov.lk', phone: '+94  112 207 208' },

    { role: 'Assistant Director', name: 'Ms. M.R.F.Sajeeda', email: 'fathima.sajeeda(at)mfa.gov.lk', phone: '+94  112 207 208' },

    { role: 'Assistant Director', name: 'Chathuri Karunarathna ', email: 'chathuri.karunarathna(at)mfa.gov.lk', phone: '+94  112 207 208' },


  ],

  'East Asia and Oceania': [

    { role: 'Director General', name: 'Ms. Savitri I. Panabokke', email: 'dgeast(at)mfa.gov.lk savitri.panabokke(at)mfa.gov.lk', phone: '+94 112 437 634' },

    { role: 'Director', name: 'Mr. Dhawood Amanullah', email: 'dhawood.amanullah(at)mfa.gov.lk', phone: ' +94 112 324 665 ' },

    { role: ' Deputy Director', name: 'Ms. Thiloma Abayajeewa', email: 'thiloma.abayajeewa(at)mfa.gov.lk' ,phone: '+94 112 325 412  '},

    { role: 'Assistant Director', name: 'Ms. Isuri Vitharana', email: 'dvi.lakshani(at)mfa.gov.lk', phone: '+94 112 347 417' },

    { role: 'Assistant Director', name: 'Ms. Gayanga Dias', email: 'gayanga.dias(at)mfa.gov.lk', phone: '+94 112 347 417' },

    { role: 'Assistant Director', name: ' Ms. Anuradha Jayasiri ', email: 'anuradha.jayasiri(at)mfa.gov.lk', phone: ' +94 112 321 261' },

    { role: 'Head of Branch', name: 'Ms. Dilshara Senarathne', email: 'eastasia(at)mfa.gov.lk', phone: '+94 112 437 634' },

    { role: 'Personal Assistant to DG ', name: 'Ms. Deepani De Silva', email: 'eastasia(at)mfa.gov.lk ',  phone: ' +94 112 321 261' },



  ],

  'Europe & North America': [

    { role: 'Director General', name: 'Mr. Sugeeshwara  Gunaratne', email: 'sugeeshwara.gunaratna@mfa.gov.lk', phone: '+94 112 458 276' },

    
    { role: 'Director ', name: 'Ms.Pramuditha Manusinghe', email: ' pramuditha.manusinghe(at)mfa.gov.lk', phone: ':+94 112 343 355' },

    { role: 'Director', name: 'Mr.K.R.Ukwatta', email: ' kashyapa.ukwatta@mfa.gov.lk' },

    { role: 'Deputy Director', name: 'Anodya Chirasrie', email: ' anodya.chirasrie(at)mfa.gov.lk' ,phone: ' +94 112 473 942'},

    { role: 'Deputy Director', name: 'Ms. Thivanka Athuraliya', email: 'thivanka.athuraliya(at)mfa.gov.lk', phone: '+94 112 470 276' },

    { role: 'Deputy Director', name: 'Ms.Sachini Dias', email: ' sachini.dias(at)mfa.gov.lk', phone: ' +94 112 338 317' },

    { role: 'Assistant Director', name: ' Ms.Kaumadie Wijesinghe ', email: 'kaumadie.wijesinghe(at)mfa.gov.lk', phone: '+94 112 470 676' },

    { role: 'Head of Branch', name: 'Mr. Nalaka de Soysa', email: ' west(at)mfa.gov.lk', phone: '+94 112 445 946' },

    { role: 'Personal Assistant to DG ', name: ' Ms.Vythegi Manoharan', email: 'dgeurope(at)mfa.gov.lk',  phone: ' +94 112 458 276' },


  ],

  'Latin Ameruca and Caribbean Division': [

    { role: 'Director General', name: 'Mr. Ratnasingam Kohularangan', email: 'dglac(at)mfa.gov.lk', phone: '+94 112 328 930' },

    { role: 'Assistant Director', name: '  Ms. Rajitha Kalpani Weerasinghe ', email: 'rajitha.weerasinghe(at)mfa.gov.lk', phone: '+94 112 207 245' },

    { role: 'Head of Branch', name: 'Mr. H.R. Niroshan Fernando',  phone: '+94 112 325 625 ' },

    { role: 'Personal Assistant to DG ', name: ' Mrs. G.A. Kalpani Prasangika', phone: '  +94 11 2 328 930' },


  ],

  'Middle East': [

    { role: 'Director General', name: 'Ms. Dilani Weerakoon', email: ' dilani.weerakoon(at)mfa.gov.lk' },

    { role: 'Director', name: 'Ms. Sewwandi de Silva', email: 'sewwandi.desilva@mfa.gov.lk', phone: '+94 112 207 237' },

    { role: 'Assistant Director', name: ' Ms. Sanju Dassanayake ', email: 'sanju.dassanayake(at)mfa.gov.lk', phone: ' +94 112 207 237' },

    { role: 'Assistant Director', name: 'Ms. Ishara Udari Thithakshana De Silva', email: '(at)mfa.gov.lk', phone: '+94 112 207 237' },

    { role: 'Personal Assistant to DG ', name: 'Ms Awanthi Tilakarathne', email: 'me(at)mfa.gov.lk'},


  ],

  'South Asia and SAARC': [
    { role: 'Director General (South Asia & SAARC', name: 'Mr. Samantha Pathirana  ', email: 'dgsa(at)mfa.gov.lk', phone: '+94 112 325 925',fax:' +94 115 339 521' },

    { role: 'Director (South Asia & SAARC)', name: ' Ms. M.B. Jayawardana   ' },

    { role: 'Director (South Asia & SAARC)', name: ' Ms. Sasanga Nikapitiya', email: 'sasanga.nikapitiya(at)mfa.gov.lk', phone: ' +94 112 207 227' },

    { role: 'Assistant Director (South Asia & SAARC) ', name: ' Ms. H.M.G.K. Herath', email: 'gayani.herath@mfa.gov.lk',phone:' +94 112 207226'},

    { role: 'Head of Branch (South Asia & SAARC)', name: 'Mr. H.M.B. Herath', email: 'dgsa(at)mfa.gov.lk', phone: '+94 11 2 436 323' }

  ],

  'Southeast Asia and Central Asia': [

    { role: 'Director General', name: 'Mrs. Chamari Rodrigo', email: 'dgsea(at)mfa.gov.lk', phone: ' +94 11 2 027 191' },
    { role: 'Director ', name: 'Ms. Irosha Cooray', email: 'irosha.cooray@mfa.gov.lk',phone:'+94 112 324 903' },

    { role: 'Director', name: 'Mr. Mahesh Premathilaka', email: 'mahesh.premathilaka@mfa.gov.lk', phone: '+94 112 478 987' },

    { role: 'Assistant Director', name: ' Ms. Manduli Katugampola ', email: ' manduli.katugampola(at)mfa.gov.lk', phone: ' +94 112 207 219' },

    { role: 'Assistant Director', name: ' Mr. Miskeen Mohamed Hasim', email: 'hasim.muhammadhu(at)mfa.gov.lk' },

    { role: 'Head of Branch', email: 'sea(at)mfa.gov.lk',phone:' +94 112 207 220'},


  ],


  // Main Divisions

  'multilateral-affairs': [
  { 
    role: 'Director General', 
    name: 'Ms. Dayani Mendis', 
    email: 'dayani.mendis(at)mfa.gov.lk / dgun(at)mfa.gov.lk', 
    phone: '+94 112 445 264', 
    fax: '+94 112 323 228',
    ext: '140'
  },

  { 
    role: 'Director', 
    name: 'Ms. Dilini Gunasekera', 
    email: 'dilini.gunasekera(at)mfa.gov.lk', 
    phone: '+94 112 343 196',
    ext: '142'
  },

  { 
    role: 'Director', 
    name: 'Ms. W.I. Amarasinghe', 
    email: 'dinithi.weerasena(at)mfa.gov.lk',
    phone: '+94 112 337 174',
    ext: '143'
  },

  { 
    role: 'Deputy Director', 
    name: 'Ms. Dinushi Sonali Rupathunga', 
    email: 'dinushi.rupathunga(at)mfa.gov.lk',
    phone: '+94 112 328 947',
    ext: '145'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Harshani Pathmakulasooriya', 
    email: 'harshani.pathmakulasooriya@mfa.gov.lk',
    phone: '+94 112 438 819',
    ext: '144'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Dinithi Weerasena', 
    email: 'dinithi.weerasena(at)mfa.gov.lk',
    phone: '+94 112 337 174',
    ext: '143'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Shanika Chathuranganie Bandara', 
    email: 'shanika.bandara@mfa.gov.lk'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Janani Sivapakthan', 
    email: 'janani.sivapakthan(at)mfa.gov.lk',
    phone: '+94 112 327 013',
    ext: '148'
  },

  { 
    role: 'Personal Assistant to the SDG', 
    name: 'Ms. D A I C Perera', 
    email: 'sdgma(at)mfa.gov.lk',
    phone: '+94 112 423 900'
  },

  { 
    role: 'Head of Branch', 
    name: 'Ms. A.P.N. Dilhani', 
    email: 'un(at)mfa.gov.lk',
    phone: '+94 112 327 013',
    ext: '149'
  },

  { 
    role: 'UNV', 
    name: 'United Nations Volunteer Desk', 
    email: 'research.un(at)mfa.gov.lk',
    phone: '+94 112 423 208',
    ext: '146'
  },

  { 
    role: 'Personal Assistant to DG', 
    name: 'Ms. Ruwnthi Dissanayake', 
    phone: '+94 112 445 264'
  },

],

  

  'economic-affairs': [
  { 
    role: 'Senior Director General (Bilateral)', 
    name: 'Mr. Dharshana M. Perera', 
    email: 'sdgeconomic(at)mfa.gov.lk / dharshana.perera(at)mfa.gov.lk', 
    phone: '+94 112 027 192'
  },

  { 
    role: 'Director (Bilateral)', 
    name: 'Mr. Sandun Liyanwila', 
    email: 'sandun.liyanwila(at)mfa.gov.lk'
  },

  { 
    role: 'Director (Bilateral)', 
    name: 'Ms. W.W.C.S. Perera', 
    email: 'chathuri.perera(at)mfa.gov.lk', 
    phone: '+94 112 422 220'
  },

  { 
    role: 'Deputy Director (Bilateral)', 
    name: 'Ms. Buddhika Wimalasena', 
    email: 'buddhika.wimalasena(at)mfa.gov.lk', 
    phone: '+94 112 422 220'
  },

  { 
    role: 'Assistant Director (Bilateral)', 
    name: 'Mr. Pasan Kavikeshawa', 
    email: 'pasan.kavikeshawa(at)mfa.gov.lk', 
    phone: '+94 112 422 220'
  },

  { 
    role: 'Assistant Director (Bilateral)', 
    name: 'Ms. E.M. Chiranthi Dharshika Pothuwewa', 
    email: 'chiranthi.pothuwewa(at)mfa.gov.lk', 
    phone: '+94 112 422 220'
  },

  { 
    role: 'Personal Assistant to DG', 
    name: 'Ms. K. Priyanthi Renuka Dias', 
    email: 'economic(at)mfa.gov.lk', 
    phone: '+94 112 027 192'
  },

  { 
    role: 'Director General (Multilateral)', 
    name: 'Ms. Ansul B. Jhan', 
    email: 'anzul.jhan(at)mfa.gov.lk', 
    phone: '+94 112 325 356'
  },

  { 
    role: 'Director (Multilateral)', 
    name: 'Mr. N.L.A. Haleem', 
    email: 'abdul.haleem@mfa.gov.lk', 
    phone: '+94 112 325 356'
  },

  { 
    role: 'Assistant Director (Multilateral)', 
    name: 'Ms. Prabashavi Kahathuduwa', 
    email: 'prabashvi.kahathuduwa(at)mfa.gov.lk', 
    phone: '+94 112 325 348'
  },

  { 
    role: 'Assistant Director (Multilateral)', 
    name: 'Ms. Jayamali Dissanayake', 
    email: 'jayamali.dissanayake(at)mfa.gov.lk', 
    phone: '+94 112 325 348'
  },

  { 
    role: 'Personal Assistant to DG', 
    name: 'Ms. F.N. Meera Sahibu', 
    email: 'economic(at)mfa.gov.lk', 
    phone: '+94 112 431 980'
  },

  { 
    role: 'Head of Branch - Technical Cooperation', 
    name: 'Mr. E.M.H. Abeyrathne', 
    email: 'dgea(at)mfa.gov.lk / economic(at)mfa.gov.lk', 
    phone: '+94 112 424 729'
  },

],

  'protocols': [
   

  { 
    role: 'Chief of Protocol', 
    name: 'Mr. Rohana Ambagolla', 
    email: 'cprot(at)mfa.gov.lk', 
    phone: '+94 112 421 816', 
    fax: '+94 112 421 816'
  },

  { 
    role: 'Deputy Chief of Protocol', 
    name: 'Ms. Dinesha Samarasinghe', 
    email: 'dinesha.samarasinghe(at)mfa.gov.lk', 
    phone: '+94 112 424 509', 
    fax: '+94 112 325 346'
  },

  { 
    role: 'Assistant Chief of Protocol', 
    name: 'Mr. Fazil Farook', 
    email: 'fazil.farook(at)mfa.gov.lk', 
    phone: '+94 112 432 757', 
    fax: '+94 112 325 346'
  },

  { 
    role: 'Assistant Chief of Protocol', 
    name: 'Ms. K.M. Vihangi Semini', 
    email: 'vihangi.semini(at)mfa.gov.lk', 
    phone: '+94 112 207 234', 
    fax: '+94 112 325 346'
  },

  { 
    role: 'Assistant Chief of Protocol', 
    name: 'Ms. Kasuni Wijethunga', 
    email: 'kasuni.wijethunga(at)mfa.gov.lk', 
    phone: '+94 112 207 234', 
    fax: '+94 112 325 346'
  },

  { 
    role: 'Assistant Chief of Protocol', 
    name: 'Mr. Ishara Atulugama', 
    email: 'ishara.atulugama(at)mfa.gov.lk', 
    phone: '+94 112 207 234', 
    fax: '+94 112 325 346'
  },

  { 
    role: 'Head of Branch', 
    name: 'Mr. L.D. Ranjith Silva', 
    email: 'protoocl(at)mfa.gov.lk', 
    phone: '+94 112 328 681', 
    fax: '+94 112 327 048'
  },

  { 
    role: 'Personal Assistant to Chief of Protocol', 
    name: 'Ms. Manjula Perera', 
    email: 'cprot(at)mfa.gov.lk', 
    phone: '+94 112 421 816', 
    fax: '+94 112 325 346'
  },

],


  'consular-affairs': [
    

  { 
    role: 'Actg. Director General', 
    name: 'Ms. N.I.D. Paranavitana', 
    email: 'nirmala.paranavitana@mfa.gov.lk', 
    phone: '+94 112 275 538', 
    fax: '+94 112 473 899'
  },

  { 
    role: 'Director', 
    name: 'Ms. Nanduni H. Govinnage', 
    email: 'nanduni.govinnage(at)mfa.gov.lk', 
    phone: '+94 112 275 537'
  },

  { 
    role: 'Deputy Director', 
    name: 'Ms. S. Sashireha', 
    email: 'shanmugam.sasireha(at)mfa.gov.lk', 
    phone: '+94 112 275 529'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Damithri Samangika', 
    email: 'damithri.samangika(at)mfa.gov.lk', 
    phone: '+94 112 275 531'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Kaushalya Dulanjani Wijesinghe', 
    email: 'dulanjani.wijesinghe(at)mfa.gov.lk', 
    phone: '+94 112 335 941'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Pramodhi Wijayasinghe', 
    email: 'pramodhi.wijayasinghe(at)mfa.gov.lk', 
    phone: '+94 112 275 527'
  },

  { 
    role: 'Assistant Director (ICT)', 
    name: 'Ms. Y.B.N. Udayamali', 
    email: 'nirmala.udayamali(at)mfa.gov.lk', 
    phone: '+94 112 755 500'
  },

  { 
    role: 'Head of Branch', 
    name: 'Ms. P.V. Samanthi Pahalavitharana', 
    email: 'hob.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 502'
  },

  { 
    role: 'Head of Branch - Authentication & Verification Section', 
    name: 'Ms. J M R Jayalath', 
    email: 'authentication.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 522'
  },

  { 
    role: 'Public Inquiries', 
    name: 'Public Inquiry Desk', 
    email: 'callinquiry(at)mfa.gov.lk'
  },

  { 
    role: 'Repatriation Section', 
    email: 'repatriation.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 532'
  },

  { 
    role: 'Compensation Section', 
    email: 'compensation.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 528'
  },

  { 
    role: 'Death Section', 
    email: 'death.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 525 / +94 117 711 163'
  },

  { 
    role: 'Miscellaneous Section', 
    email: 'miscellaneous.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 530'
  },

  { 
    role: 'Cropping Section', 
    email: 'signatures.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 521'
  },

  { 
    role: 'IT Room', 
    email: 'it.consular(at)mfa.gov.lk', 
    phone: '+94 112 275 501'
  },

  { 
    role: 'Reception Desk', 
    phone: '+94 112 275 575'
  },

],


  'legal': [

  { 
    role: 'Deputy Legal Advisor', 
    name: 'Ms. Tilanie Silva', 
    email: 'tilanie.silva(at)mfa.gov.lk', 
    phone: '+94 112 473 943' 
  },

  { 
    role: 'Assistant Legal Advisor', 
    name: 'Ms. Sanjika Kammanankada', 
    email: 'sanjika.kammanankada(at)mfa.gov.lk', 
    phone: '+94 112 325 923' 
  },

  { 
    role: 'Director', 
    name: 'Ms. M.B. Jayawardana' 
  },

  { 
    role: 'Director', 
    name: 'Ms. S.S.S. Nikapitiya', 
    email: 'sasanga.nikapitiya(at)mfa.gov.lk', 
    phone: '+94 112 325 923' 
  },

  { 
    role: 'Assistant Director', 
    name: 'Mr. Mohamed Hasim', 
    email: 'hasim.muhammadhu(at)mfa.gov.lk', 
    phone: '+94 112 325 923' 
  },

  { 
    role: 'Legal Officer', 
    name: 'Ms. Sakunthala Rajamanthri', 
    email: 'sakunthala.rajamanthri(at)mfa.gov.lk', 
    phone: '+94 117 445 941' 
  },

  { 
    role: 'Legal Officer', 
    name: 'Mr. Charitha Kulatunge', 
    email: 'charita.kulatunge(at)mfa.gov.lk', 
    phone: '+94 117 448 355' 
  },

  { 
    role: 'Legal Officer', 
    name: 'Ms. Kumudunie Abeykoon', 
    email: 'kumudunie.abeykoon(at)mfa.gov.lk', 
    phone: '+94 112 432 650' 
  },

  { 
    role: 'Personal Assistant to DG', 
    name: 'Ms. Chandani Ariyarathne', 
    email: 'legal(at)mfa.gov.lk', 
    phone: '+94 112 343 197' 
  },

  { 
    role: 'Head of Branch', 
    name: 'Mr. Buddheesha Amarakoon', 
    email: 'legal(at)mfa.gov.lk', 
    phone: '+94 112 473 945' 
  },
 ],

  'ocean-affairs': [
  

  { 
    role: 'Director General (Acting)', 
    name: 'Ms. T.A.S.S. Sesath Thambugala', 
    email: 'sesath.thambugala(at)mfa.gov.lk'
  },

  { 
    role: 'Deputy Director', 
    name: 'Mr. Supun Deshaprema', 
    email: 'supun.deshaprema@mfa.gov.lk'
  },

  { 
    role: 'Actg. Head of Branch', 
    name: 'Ms. Shaniki Ihalapathirana', 
    email: 'oaecc(at)mfa.gov.lk', 
    phone: '+94 11 7445729'
  },

  { 
    role: 'Personal Assistant to the DG', 
    name: 'Ms. Lakmini Ganegoda', 
    email: 'dgoascp(at)mfa.gov.lk', 
    phone: '+94 11 7445729'
  },


  ],

  'performance-review': [
    

  { 
    role: 'Director General', 
    name: 'Mr. Sumith Dassanayake', 
    email: 'dgoa(at)mfa.gov.lk / dgpri(at)mfa.gov.lk', 
    phone: '+94 11 2 388 680'
  },

  { 
    role: 'Director', 
    name: 'Ms. Dilini Lenagala', 
    email: 'dilini.lenagala(at)mfa.gov.lk', 
    phone: '+94 112 207 232'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Thilini Ranasinghe', 
    email: 'thilini.ranasinghe(at)mfa.gov.lk', 
    phone: '+94 112 207 231'
  },

  { 
    role: 'Head of Branch', 
    name: 'Ms. M.N.A. Cooray', 
    email: 'pri(at)mfa.gov.lk', 
    phone: '+94 112 458 277'
  },

  { 
    role: 'Emergency Response Unit - Point of Contact', 
    name: 'Mr. N. J. Chandima', 
    email: 'emergency.response(at)mfa.gov.lk', 
    phone: '+94 112 458 277'
  },

],
 'international-security': [
  

  { 
    role: 'Director General', 
    name: 'Mr. Thushara Rodrigo', 
    email: 'thushara.rodrigo(at)mfa.gov.lk', 
    phone: '+94 112 437 634', 
    fax: '+94 112 432 403'
  },

  { 
    role: 'Director', 
    name: 'Ms. Samanmali Atalugama', 
    email: 'samanmali.atalugama@mfa.gov.lk', 
    phone: '+94 112 437 634', 
    fax: '+94 112 432 403'
  },

  { 
    role: 'Head of Branch', 
    name: 'Mr. M. Pradeep Hemantha', 
    email: 'ctu(at)mfa.gov.lk', 
    phone: '+94 112 432 403', 
    fax: '+94 112 432 403'
  },

],


    

  'hr-research-training': [
    

  { 
    role: 'Director General', 
    name: 'Mr. Sumith Dassanayake', 
    email: 'dgoa(at)mfa.gov.lk / hrdd(at)mfa.gov.lk', 
    phone: '+94 11 2 388 680'
  },

  { 
    role: 'Additional Director General', 
    name: 'Mr. G.S. Algewatte', 
    email: 'suranga.algewatte(at)mfa.gov.lk', 
    phone: '+94 11 2 388 680'
  },

  { 
    role: 'Director', 
    name: 'Ms. Dilini Lenagala', 
    email: 'dilini.lenagala(at)mfa.gov.lk', 
    phone: '+94 112 207 232'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Thilini Ranasinghe', 
    email: 'thilini.ranasinghe(at)mfa.gov.lk', 
    phone: '+94 112 207 231'
  },

  { 
    role: 'Head of Branch', 
    name: 'Ms. A.D.R. Weerathunga', 
    email: 'hrdd(at)mfa.gov.lk', 
    phone: '+94 112 207 232'
  },

],


    

  'hr-mission-management': [

  { 
    role: 'Director General', 
    name: 'Mr. Sumith Dassanayake', 
    email: 'sumith.dassanayake(at)mfa.gov.lk', 
    phone: '+94 112 388 680'
  },

  { 
    role: 'Acting Director General', 
    name: 'Mr. G.S. Algewatte', 
    email: 'suranga.algewatte(at)mfa.gov.lk', 
    phone: '+94 112 388 680'
  },

  { 
    role: 'Director', 
    name: 'Ms. Medhavi Peiris', 
    email: 'medhavi.peiris(at)mfa.gov.lk', 
    phone: '+94 112 320 127'
  },

  { 
    role: 'Deputy Director', 
    name: 'Mr. Supun Deshaprema', 
    email: 'supun.deshaprema(at)mfa.gov.lk'
  },

  { 
    role: 'Deputy Director', 
    name: 'Ms. H.M.P.B. Herath'
  },

  { 
    role: 'Assistant Director', 
    name: 'Mr. Thanuja Meegahawatta', 
    email: 'thanuja.meegahawatta(at)mfa.gov.lk', 
    phone: '+94 112 445 879'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Roshni Samarasinghe', 
    email: 'roshni.samarasinghe(at)mfa.gov.lk', 
    phone: '+94 112 445 879'
  },

  { 
    role: 'Personal Assistant to DG', 
    name: 'Ms. H. D. Shiranthi', 
    email: 'dgoa(at)mfa.gov.lk', 
    phone: '+94 112 388 680'
  },

  { 
    role: 'Head of Branch', 
    name: 'Mr. Aruna Ratnasena', 
    email: 'oad(at)mfa.gov.lk', 
    phone: '+94 112 328 127'
  },

],


    
  'overseas-assets': [

  { 
    role: 'Director General', 
    name: 'Mr. Suranga Algewatte', 
    email: 'suranga.algewatte(at)mfa.gov.lk', 
    phone: '+94 112 207 266'
  },

  { 
    role: 'Director', 
    name: 'Ms. Achini Perera', 
    email: 'achini.perera(at)mfa.gov.lk', 
    phone: '+94 112 207 243'
  },

  { 
    role: 'Director', 
    name: 'Ms. Thakshila Arnolda', 
    email: 'thakshila.arnolda(at)mfa.gov.lk', 
    phone: '+94 112 207 211'
  },

  { 
    role: 'Assistant Director', 
    name: 'Ms. Poornima Abeygunasekara', 
    email: 'poornima.abeygunasekara(at)mfa.gov.lk'
  },

  { 
    role: 'Assistant Director', 
    name: 'Mr. Rajitha Sudara Henneheka', 
    email: 'rajitha.sudara(at)mfa.gov.lk'
  },

  { 
    role: 'Personal Assistant to DG', 
    name: 'Ms. Sabbriya', 
    email: 'dgoamd(at)mfa.gov.lk', 
    phone: '+94 112 438 733'
  },

  { 
    role: 'Head of Branch', 
    name: 'Mr. Kosala Piyathissa', 
    email: 'a9.oad(at)mfa.gov.lk', 
    phone: '+94 112 438 733'
  },

  { 
    role: 'Head of Security Mail Unit', 
    name: 'Mr. Gamitha Rajapaksha', 
    email: 'smail(at)mfa.gov.lk', 
    phone: '+94 112 328 671'
  },

  { 
    role: 'Head of Travel Unit', 
    name: 'Ms. Reziya Nizamdeen', 
    email: 'travel(at)mfa.gov.lk', 
    phone: '+94 112 328 753'
  },

  { 
    role: 'Head of Cypher Unit', 
    name: 'Ms. T.M.H. Liyanage', 
    email: 'cypher(at)mfa.gov.lk', 
    phone: '+94 112 323 015',
    fax: '+94 112 333 450 / +94 112 446 091 / +94 112 430 220'
  },

],


    

  'general-administration': [
    

  { 
    role: 'Director General', 
    name: 'Ms. S. A. C. Sooriyaarachchi', 
    email: 'dgadmin(at)mfa.gov.lk'
  },

  { 
    role: 'Actg. Director General', 
    name: 'Mr. G.M.V.W. Aponsu', 
    email: 'vipulatheja.wishwanath(at)mfa.gov.lk', 
    phone: '+94 112 334 571'
  },

  { 
    role: 'Director', 
    name: 'Mr. D. Mashanka H. Liyanage', 
    email: 'mashanka.liyanage(at)mfa.gov.lk', 
    phone: '+94 117 445 641'
  },

  { 
    role: 'Director', 
    name: 'Mrs. E.B. Vindyani', 
    email: 'bhagya.edirisinghe(at)mfa.gov.lk'
  },

  { 
    role: 'Deputy Director', 
    name: 'Ms. R. A. Deshani', 
    email: 'deshani.ranawaka(at)mfa.gov.lk', 
    phone: '+94 112 333 449'
  },

  { 
    role: 'Assistant Director', 
    name: 'Mr. P.N.S.K. Perera', 
    email: 'saman.perera(at)mfa.gov.lk'
  },

  { 
    role: 'Assistant Director / ICT', 
    name: 'Ms. Aloka Gnanasekara', 
    email: 'aloka.gnanasekara(at)mfa.gov.lk'
  },

  { 
    role: 'ICT Officer', 
    name: 'Mr. R. M. C. M. Bandara', 
    email: 'icto(at)mfa.gov.lk'
  },

  { 
    role: 'Administrative Officer', 
    name: 'Ms. N.N. Ranasinghe', 
    email: 'ao(at)mfa.gov.lk'
  },

  { 
    role: 'Head of Branch - Admin', 
    name: 'Ms. Maya Amarasinghe', 
    email: 'hob.admin(at)mfa.gov.lk', 
    phone: '+94 112 324 119'
  },

  { 
    role: 'Head of Branch - Maintenance', 
    name: 'Mr. Shehan Samiru', 
    email: 'maintenance(at)mfa.gov.lk', 
    phone: '+94 114 845 739'
  },

  { 
    role: 'Head of Branch - Postal Dispatch', 
    name: 'Ms. M.T.F. Muneera', 
    email: 'dispatch(at)mfa.gov.lk', 
    phone: '+94 11 2 324 119'
  },

  { 
    role: 'Head of Branch - Procurement', 
    name: 'Ms. S.H.P.S. Somarathna', 
    email: 'procurement(at)mfa.gov.lk', 
    phone: '+94 117 711 109'
  },

  { 
    role: 'Head of Branch - Transport', 
    name: 'Officer In Charge', 
    email: 'transport(at)mfa.gov.lk', 
    phone: '+94 11 2 437 044'
  },

  { 
    role: 'Head of Branch - Stores', 
    name: 'Mr. Sanjaya Gunarathna', 
    email: 'stores(at)mfa.gov.lk', 
    phone: '+94 11 2 320 798'
  },

],


   

  'finance': [
    

  { 
    role: 'Director General', 
    name: 'Ms. S. A. C. Sooriyaarachchi', 
    email: 'dgadmin(at)mfa.gov.lk'
  },

  { 
    role: 'Actg. Director General', 
    name: 'Mr. G.M.V.W. Aponsu', 
    email: 'vipulatheja.wishwanath(at)mfa.gov.lk', 
    phone: '+94 112 334 571'
  },

  { 
    role: 'Director', 
    name: 'Mr. D. Mashanka H. Liyanage', 
    email: 'mashanka.liyanage(at)mfa.gov.lk', 
    phone: '+94 117 445 641'
  },

  { 
    role: 'Director', 
    name: 'Mrs. E.B. Vindyani', 
    email: 'bhagya.edirisinghe(at)mfa.gov.lk'
  },

  { 
    role: 'Deputy Director', 
    name: 'Ms. R. A. Deshani', 
    email: 'deshani.ranawaka(at)mfa.gov.lk', 
    phone: '+94 112 333 449'
  },

  { 
    role: 'Assistant Director', 
    name: 'Mr. P.N.S.K. Perera', 
    email: 'saman.perera(at)mfa.gov.lk'
  },

  { 
    role: 'Assistant Director / ICT', 
    name: 'Ms. Aloka Gnanasekara', 
    email: 'aloka.gnanasekara(at)mfa.gov.lk'
  },

  { 
    role: 'ICT Officer', 
    name: 'Mr. R. M. C. M. Bandara', 
    email: 'icto(at)mfa.gov.lk'
  },

  { 
    role: 'Administrative Officer', 
    name: 'Ms. N.N. Ranasinghe', 
    email: 'ao(at)mfa.gov.lk'
  },

  { 
    role: 'Head of Branch - Admin', 
    name: 'Ms. Maya Amarasinghe', 
    email: 'hob.admin(at)mfa.gov.lk', 
    phone: '+94 112 324 119'
  },

  { 
    role: 'Head of Branch - Maintenance', 
    name: 'Mr. Shehan Samiru', 
    email: 'maintenance(at)mfa.gov.lk', 
    phone: '+94 114 845 739'
  },

  { 
    role: 'Head of Branch - Postal Dispatch', 
    name: 'Ms. M.T.F. Muneera', 
    email: 'dispatch(at)mfa.gov.lk', 
    phone: '+94 11 2 324 119'
  },

  { 
    role: 'Head of Branch - Procurement', 
    name: 'Ms. S.H.P.S. Somarathna', 
    email: 'procurement(at)mfa.gov.lk', 
    phone: '+94 117 711 109'
  },

  { 
    role: 'Head of Branch - Transport', 
    name: 'Officer In Charge', 
    email: 'transport(at)mfa.gov.lk', 
    phone: '+94 11 2 437 044'
  },

  { 
    role: 'Head of Branch - Stores', 
    name: 'Mr. Sanjaya Gunarathna', 
    email: 'stores(at)mfa.gov.lk', 
    phone: '+94 11 2 320 798'
  },

],


   

  'internal-audit': [
    

  { 
    role: 'Chief Internal Auditor', 
    name: 'Mr. A.M.W.N. Peiris', 
    email: 'cia(at)mfa.gov.lk', 
    phone: '+94 11 2 445 827', 
    fax: '+94 112 334 319'
  },

  { 
    role: 'Head of Branch', 
    name: 'Mrs. G.T. Kumanayake', 
    email: 'auditin(at)mfa.gov.lk', 
    phone: '+94 11 2 334 319', 
    fax: '+94 112 334 319'
  },

],


    

};


const CONTENT_MAP: Record<string, any> = {

    'bilateral-affairs': {

        'Africa Affairs': (

          <div className="space-y-4">

            <p>The Africa Affairs Division deals with matters pertaining to relations with 54 countries in the African continent and the African Union (AU).

The Division is assigned with the task of following political and socio-economic developments as well as coordinating bilateral relations with these countries.

It also directs Sri Lanka’s foreign policy with these countries in the political, economic, security, education and social spheres. Technical cooperation and development assistance, investment relations, tourism and cultural promotion through bilateral, regional and multilateral engagements are part of the responsibilities of the Division.

Sri Lanka has 6 resident Missions in the region. (Egypt, South Africa, Nigeria, Kenya, Seychelles, Ethiopia).</p>

            <p>Sri Lanka has 6 resident Missions in the region (Egypt, South Africa, Nigeria, Kenya, Seychelles, Ethiopia).</p>

          </div>

        ),

        'East Asia and Oceania': (

          <div className="space-y-4">

            <p>The East Asia and Oceania Division is responsible for maintaining bilateral relations with countries in East Asia and Oceania. The Division engages in advancing Sri Lanka’s interests by developing strategic partnerships, facilitating diplomatic dialogues, and supporting initiatives that contribute to regional stability and prosperity.</p>

<p>East Asia includes China, Japan, Republic of Korea and Democratic People’s Republic of Korea. The division focuses on fostering cooperation and partnerships in areas which include trade, investment, technology, and cultural exchange.</p>

<p>Oceania encompasses Australia, New Zealand, and a section of the Pacific Island nations: Fiji, Kiribati, Nauru, Papua New Guinea, Solomon Islands, Tonga, Tuvalu and Vanuatu. The Division works towards enhancing Sri Lanka’s engagement with these countries, promoting cooperation in sectors such as trade, tourism, education, and climate change. The Division is also entrusted with the task of maintaining relations with regional organizations such as the Shanghai Cooperation Organization (SCO), the Bali Process and the International Bamboo and Rattan Organization (INBAR).</p>

          </div>

        ),

       

        'Europe & North America': (

          <div className="space-y-4">

            <p>The Europe and North America Division is responsible for maintaining Sri Lanka’s bilateral relations with 51 countries in Europe and North America regions.</p>

<p>The Division is responsible in fostering Sri Lanka’s interests in the Europe & North America regions by developing strategic partnerships, formulating policies, facilitating diplomatic dialogue and advancing bilateral cooperation in political economic (trade, investment, tourism), science and technology, culture, education and development, among several other areas.</p>

<p>The countries of Europe, covered by the Division include 27 European Union (EU) member States: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czeck Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Protugal, Romania, Slovakia, Slovenia, Spain, Sweden and non EU member States in Europe: Albania, Andora, Armenia, Azerbaijan, Belarus  Bosnia & Herzegovina, Georgia, Holy See, Iceland, Liechtenstein, North Macedonia, Moldova, Monaco, Montenegro, Norway, Russian Federation, Serbia, San Marino, Switzerland, Turkey, Ukraine and United Kingdom. The Europe and North America Division also maintains Sri Lanka’s bilateral relations with the United States of America and Canada.</p>

<p>The Division is also entrusted with the task of maintaining Sri Lanka’s relations with the European Union (EU) and the Commonwealth of Nations.</p>

<p>The Division works closely with 15 Sri Lankan Resident Missions and 3 Consulates in these regions.</p>

          </div>

        ),

     'Latin Ameruca and Caribbean Division': ( 

  <div className="space-y-4">

    <p>
      The Latin America and The Caribbean Division is responsible for coordinating Sri Lanka’s bilateral diplomatic relations with 33 countries across Latin America, Central America, the Caribbean and Mexico. The countries covered include Brazil, Cuba, Antigua and Barbuda, Argentina, Bahamas, Barbados, Belize, Bolivia, Chile, Colombia, Costa Rica, Commonwealth of Dominica, Dominican Republic, Ecuador, El Salvador, Grenada, Guatemala, Guyana, Haiti, Honduras, Jamaica, Mexico, Nicaragua, Panama, Paraguay, Peru, Saint Kitts and Nevis, Saint Vincent and the Grenadines, Saint Lucia, Suriname, Trinidad and Tobago, Uruguay and Venezuela.
    </p>

    <p>
      Sri Lanka maintains resident diplomatic Missions in the region which contribute to the Division’s work. These include the Embassy of Sri Lanka in Brazil accredited to multiple Latin American countries, the Embassy in Cuba accredited to Caribbean states, and Sri Lankan missions in the United States including Washington D.C. and the Permanent Mission to the United Nations in New York.
    </p>

    <p>
      The Division promotes cooperation in trade, investment, culture, education, development cooperation and diplomatic engagement with countries in the Latin America and Caribbean region.
    </p>

  </div>

),



        'Middle East': (

          <div className="space-y-4">

            <p>The Middle East Division covers and coordinates all bilateral political, economic matters, and multilateral issues pertaining to the Middle East region.</p>

<p>Sri Lanka has established formal diplomatic relations with 14 Middle Eastern countries. (Kingdom of Bahrain, Islamic Republic of Iran, Republic of Iraq, State of Israel, Hashemite Kingdom of Jordan, State of Kuwait, Lebanese Republic, Sultanate of Oman, State of Palestine, State of Qatar, Kingdom of Saudi Arabia, Syrian Arab Republic, United Arab Emirates and Republic of Yemen).</p>

<p>Out of the 14 states in this region, Sri Lanka has established 11 resident Embassies (Manama, Tehran, Bagdad, Tel Aviv, Amman, Kuwait, Beirut, Muscat, Doha, Riyadh & Abu Dhabi),  one Representative office in Ramallah City and  2 Consulates Generals (Dubai & Jeddah).</p>

<p>Yemen and Syria, are concurrently accredited to Sri Lanka Embassies in Oman and Lebanon respectively.</p>

<p>There are 04 Honorary Consul representations in Israel (Jerusalem), Palestine (Bethlehem), Iraq (Kurdistan) and Syria (Damascus).</p>

<p>Sri Lanka Embassy in Iran is concurrently accredited to Azerbaijan and Turkmenistan.</p>

<p>The Division also coordinates with 08 Middle Eastern Embassies in Colombo (Iran, Iraq, Kuwait, Oman, Palestine, Qatar, Saudi Arabia and United Arab Emirates) and 06 Middle Eastern Embassies in New Delhi (Lebanon, Jordan, Israel, Syria, Yemen, Bahrain)
There are 03 Honorary Consul representations from Middle Eastern region in Colombo (Israel, Jordan and Yemen)</p>

          </div>

        ),

        'South Asia and SAARC': (

          <div className="space-y-4">

            

            <p>The South Asia & SAARC Division deals with the matters pertaining to bilateral and regional relations with seven South Asian countries; Afghanistan, Bangladesh, Bhutan, India, the Maldives, Nepal and Pakistan.</p>
<p>The Division is assigned with the task of keeping track of geopolitical and socio-economic developments in the region, while providing inputs for high-level political engagements.</p>
<p>It also guides Sri Lanka’s foreign policy on these countries in the political, economic, security, education and social spheres. Technical cooperation, development assistance, investment relations, tourism and cultural promotions through both bilateral and regional engagements are also part of the responsibilities of the Division.</p>
<p>Sri Lanka maintains resident missions in 6 South Asian countries i.e. Afghanistan, Bangladesh, India, the Maldives, Nepal and Pakistan, while having one Deputy High Commission in Chennai and two Consulates General in Mumbai and Karachchi.</p>
<p>The South Asia & SAARC Division also deals with matters pertaining to South Asian Association for Regional Cooperation (SAARC) which is an eight member regional body.</p>
<p>The Division plays a pivotal role in assisting Ministries/Departments/Institutions of Sri Lanka to attend and conduct SAARC related meetings in accordance with the norms and procedures of the SAARC Forum.</p>
<p>It also handles the subject of SAARC Visas for Sri Lanka officials and delegates who are attending SAARC related meetings, as well as visas for other entitled categories of persons.</p>

          </div>

        ),

        'Southeast Asia and Central Asia': (

          <div className="space-y-4">

           

            <p>Southeast Asia & Central Asia Division handles matters pertaining to relations with 11 countries in the ASEAN Region namely Singapore, Indonesia, Thailand, Vietnam, Philippines, Malaysia, Myanmar, Cambodia, Lao PDR, Brunei Darussalam and Timor-Leste.</p>

             <p>Sri Lanka has seven resident Missions in the region. The Division is assigned with the task of following up on political and economic developments as well as coordinating bilateral relations with ASEAN countries. Southeast Asia Division facilitates Sri Lanka’s foreign policy with ASEAN Countries in the political, economic, defence, social and technical spheres. The Southeast Asia Division is also assigned to coordinate matters related to regional and multilateral platforms such as ASEAN Organization, ASEAN Regional Forum, Shangri-La Dialogue.</p>

          </div>

        ),

        

    }, 

   'multilateral-affairs':( 

  <div className="space-y-4">

    <p>
      Two Permanent Missions of Sri Lanka located in New York and Geneva and six resident Missions in Vienna, Paris, Rome, Nairobi, Bangkok and The Hague come under the purview of this Division in the context of multilateral relations. The Division works in close coordination with local line ministries, departments and agencies, as well as UN agencies represented in Sri Lanka. Cooperation is also maintained with international and local non-governmental organizations, civil society groups and experts to promote and protect Sri Lanka’s interests and contribute to global norm-setting and policy processes within the United Nations system.
    </p>

    <p>
      In advancing collective interests of developing countries, Sri Lanka also cooperates with like-minded regional groups within the UN framework, including the Non-Aligned Movement (NAM), the Group of 77 plus China (G-77+China) and G-21.
    </p>

  </div>

),
  


    'economic-affairs': (

  <div className="space-y-4">

    <p>
      The Economic Affairs (Multilateral) Division plays a central role in advancing Sri Lanka’s economic interests through active engagement with international, intergovernmental and regional organizations. The Division works to strengthen partnerships, promote economic cooperation and articulate Sri Lanka’s priority policy positions at various multilateral economic forums, in close consultation with national stakeholders to ensure coherent and strategic representation. The Division also continuously follows up on Sri Lanka’s international engagements to support effective implementation of decisions and programmes.
    </p>

    <p>
      In addition to external diplomatic engagement, the Division is responsible for organizing international, intergovernmental and regional meetings hosted by Sri Lanka, facilitating high-level dialogue and cooperation on economic and development-related matters.
    </p>

    <p>
      The Economic Affairs Division serves as the national focal point for several key regional and multilateral economic and development cooperation organizations, including the Indian Ocean Rim Association (IORA), Asia Cooperation Dialogue (ACD), Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation (BIMSTEC), Colombo Plan, African-Asian Rural Development Organization (AARDO), World Trade Organization (WTO), BRICS, World Intellectual Property Organization (WIPO), United Nations Conference on Trade and Development (UNCTAD) and the World Economic Forum (WEF).
    </p>

    <p>
      Through participation in these platforms, the Division contributes to strengthening regional economic architecture, promoting trade and investment cooperation, enhancing connectivity and supporting knowledge and technology exchange.
    </p>

    <p>
      <strong>Technical Cooperation</strong>
    </p>

    <p>
      The Division provides facilitation services to support government institutions, international organizations and other stakeholders. Key services include verification and recommendation of visas, visa facilitation for workshops and seminars, dissemination of procurement notices, visa support for government agencies and verification of international or offshore companies when required.
    </p>

    <p>
      Visa facilitation covers short-term entry visas, long-term entry visas and residency-related visa processing for personnel of international organizations assigned to duties in Sri Lanka.
    </p>

  </div>

),



   'protocols':( 

  <div className="space-y-4">

    <p>
      The Protocol Division seeks to advance Sri Lanka’s foreign policy goals by creating an enabling environment for successful diplomacy. The Division serves as the primary point of contact for welcoming Presidents, Prime Ministers, monarchs and other foreign dignitaries visiting Sri Lanka, promoting cross-cultural exchange and strengthening mutual understanding between nations while respecting the Vienna Convention on Diplomatic Relations.
    </p>

    <p>
      <strong>Ceremonial Domain</strong>
    </p>

    <p>
      The Division plans, executes and supports a wide range of ceremonial and official functions hosted by H.E. the President, Hon. Prime Minister, Hon. Minister of Foreign Affairs, Foreign Secretary and other high-ranking national dignitaries. The international protocol system emphasizes proper etiquette, formal procedures and dignified ceremonial practices in hosting foreign leaders.
    </p>

    <p>
      Protocol officers meticulously plan official events including state luncheons, ministerial summits, receptions, credential presentations and swearing-in ceremonies. Every detail, including invitations, seating arrangements, menus, decor and entertainment, is considered while respecting cultural sensitivities and ensuring guest comfort.
    </p>

    <p>
      The Division also coordinates diplomatic corps participation in parliamentary sessions, national inaugurations and other public ceremonies. Additionally, it maintains the official Order of Precedence of the Government of Sri Lanka and provides guidance on flag etiquette, forms of address, seating arrangements, invitations and cultural or dietary considerations.
    </p>

    <p>
      <strong>Immunities and Privileges</strong>
    </p>

    <p>
      The Protocol Division serves as the primary liaison point for the Diplomatic Corps in Sri Lanka. Key responsibilities include accreditation of bilateral Heads of Mission, Heads of Delegation, Chargés d’Affaires and their dependents, as well as overseeing matters related to diplomatic privileges and immunities.
    </p>

    <p>
      The Division manages the agrément process for newly appointed bilateral Heads of Mission and Heads of Delegation, including the arrangement of credential presentations to the President at the Presidential Secretariat (President’s House). It also maintains the diplomatic list and supports coordination with foreign missions, district secretariats and other government authorities on protocol-related matters.
    </p>

    <p>
      <strong>Visits</strong>
    </p>

    <p>
      The Protocol Division plans and executes detailed programmes for visiting Heads of State, Heads of Government and other foreign dignitaries from arrival to departure. The Division collaborates with relevant agencies to ensure comprehensive logistical arrangements for official, state and working visits, international meetings and multilateral summits.
    </p>

    <p>
      Advance teams work with embassy staff to prepare detailed visit schedules. The Division ensures cultural, security and operational considerations are properly addressed to facilitate successful diplomatic engagements. Protocol staff may also accompany official delegations on overseas visits when required.
    </p>

    <p>
      <strong>Gifts for Official Engagements</strong>
    </p>

    <p>
      The Protocol Division receives and records diplomatic gifts presented to H.E. the President, Hon. Prime Minister and Hon. Minister of Foreign Affairs. Working closely with senior offices, the Division also assists in selecting appropriate official gifts for presentation to foreign dignitaries.
    </p>

    <p>
      <strong>Events and Conferences</strong>
    </p>

    <p>
      The primary mission of the Protocol Division is to provide logistical and operational support to national leadership in hosting major international summits, diplomatic dialogues and global conferences held in Sri Lanka or abroad. The Division is responsible for planning, staffing and managing infrastructure required for successful international events.
    </p>

  </div>

),

'consular-affairs': (

  <div className="space-y-4">

    <p>
      The Consular Affairs Division provides consular and related services to the general public and supports the needs of Sri Lankans who intend to travel abroad for employment, education and other purposes, as well as providing appropriate assistance to foreign nationals.
    </p>

    <p>
      The Division delivers its services under several functional categories, including the Online Attestation System for documents, repatriation assistance for stranded and destitute Sri Lankans abroad, repatriation of human remains, and support in securing compensation and other entitlements for deceased or injured Sri Lankans overseas, along with other miscellaneous consular services.
    </p>

    <p>
      Currently, document attestation services are provided through an innovative digital platform based on cloud computing technology known as the e-DAS system. This system aims to streamline service delivery by enabling real-time verification with Sri Lanka Missions abroad, Colombo-based diplomatic missions and other government institutions to ensure faster and more reliable processing.
    </p>

    <p>
      In line with government policy, the Consular Affairs Division strives to provide efficient and accessible services to citizens both within Sri Lanka and abroad through digital transformation initiatives, including the establishment of regional consular offices in Jaffna and Matara in 2017 and 2019 respectively, as well as conducting mobile consular services in selected domestic and international locations.
    </p>

  </div>

),
'legal': (

  <div className="space-y-4">

    <p>
      The primary function of the Legal Division is to provide legal advice and guidance to the Ministry of Foreign Affairs, other line ministries, Sri Lankan Missions abroad and foreign diplomatic missions in Sri Lanka. The Division also provides legal information to foreign governments, the United Nations and other international organizations and agencies.
    </p>

    <p>
      The Division supports bilateral and multilateral negotiations, prepares international agreements for signature and undertakes procedures necessary for the ratification of agreements in accordance with national and international legal requirements.
    </p>

    <p>
      Key activities of the Legal Division include providing legal advisory services, negotiating bilateral and multilateral treaties, facilitating service of judicial documents, furnishing legal information to relevant stakeholders and maintaining Sri Lanka’s Treaty Index which records all bilateral, regional and multilateral agreements and Memoranda of Understanding (MoUs) signed by Sri Lanka.
    </p>

    <p>
      The Division is also responsible for preparing instruments of full powers authorizing designated representatives of the Government of Sri Lanka to sign agreements and MoUs with foreign governments and international organizations.
    </p>

  </div>

),
'ocean-affairs': (

  <div className="space-y-4">

    <p>
      The Ocean Affairs, Environment and Climate Change Division is responsible for promoting, coordinating and ensuring coherence in Sri Lanka’s international engagements related to ocean affairs, environmental protection and climate change. The Division provides foreign policy perspectives and guidance to relevant government ministries and line agencies on matters within its mandate.
    </p>

    <p>
      The Division supports Sri Lanka’s participation in international, regional and sub-regional organizations engaged in ocean governance, environmental conservation and climate action. Through these engagements, the Division aims to strengthen organizational objectives while enhancing Sri Lanka’s role as a bridge builder in global environmental diplomacy and sustainable development cooperation.
    </p>

    <p>
      The Division also coordinates projects and initiatives aimed at expanding Sri Lanka’s interaction with foreign governments, international organizations and relevant stakeholders. It promotes Sri Lanka as a suitable platform for international dialogues, conferences and workshops on ocean affairs, environment and climate change in close collaboration with national and international partners.
    </p>

  </div>

),
'international-security': (

  <div className="space-y-4">

    <p>
      The International Security Cooperation Division serves as the focal point within the Ministry of Foreign Affairs on defence and international security matters related to Sri Lanka. The Division supports national defence institutions in coordinating international cooperation to address security threats including separatism, terrorism, violent extremism and illicit drug trafficking.
    </p>

    <p>
      Key activities of the Division include facilitating coordination between Sri Lanka’s defence and law enforcement agencies and Sri Lanka Missions overseas, foreign diplomatic missions in Sri Lanka and relevant international organizations regarding national safety and security matters.
    </p>

    <p>
      The Division also coordinates defence cooperation initiatives with foreign countries and international partners in consultation with relevant domestic agencies. It contributes to the development of bilateral security cooperation agendas through the Ministry’s political desks.
    </p>

    <p>
      Additional responsibilities include supporting the maintenance of proscription lists of terrorist organizations that pose threats to Sri Lanka’s national security, providing updates to overseas missions on domestic security developments, and assisting in international legal and security-related cooperation.
    </p>

    <p>
      The Division monitors cases involving Sri Lankan nationals abroad who are suspected of engaging in terrorist activities, assists in extradition-related processes where required, and coordinates with foreign partners to facilitate capacity development and training opportunities for defence and law enforcement agencies.
    </p>

  </div>

),
'hr-research-training': (

  <div className="space-y-4">

    <p>
      The Human Resource Development, Research and Training Division was established in 2019 and has evolved in line with the expanding scope of the Ministry’s functions. The primary objective of this Division is to enhance the quality of human capital within the Ministry, including officers of the Sri Lanka Foreign Service, through structured capacity building, professional development programmes and training initiatives.
    </p>

    <p>
      The Division is responsible for designing and implementing training programmes aimed at strengthening professional competencies, improving diplomatic skills and supporting continuous learning and career development of Ministry personnel at various levels.
    </p>

    <p>
      Emphasis is placed on developing institutional knowledge, research capabilities and technical expertise required for effective diplomatic engagement and foreign policy implementation in a dynamic international environment.
    </p>

  </div>

),
'hr-mission-management': (

  <div className="space-y-4">

    <p>
      The primary function of the Human Resources and Mission Management Division is to facilitate the overall administration and smooth functioning of all Sri Lanka’s overseas Missions and Posts by providing necessary resources, guidance and administrative support in accordance with Government policies and applicable regulations.
    </p>

    <p>
      The Division is responsible for managing human resource-related matters pertaining to Sri Lanka Missions abroad, ensuring efficient staffing, deployment and administrative coordination across all overseas diplomatic posts.
    </p>

  </div>

),
'overseas-assets': (

  <div className="space-y-4">

    <p>
      The Overseas Assets Management and Development Division is primarily responsible for managing and developing assets associated with more than 60 Sri Lanka diplomatic Missions and Posts abroad. The Division oversees construction, rehabilitation and renovation of mission-owned properties as well as the maintenance of both owned and leased properties to ensure effective diplomatic operations overseas.
    </p>

    <p>
      The Division also provides logistical and technical support for IT-related requirements of the Ministry and Sri Lanka Missions abroad in coordination with relevant technical units. Missions are guided when procuring capital assets to ensure durability, quality and compliance with government procurement standards.
    </p>

    <p>
      The Division monitors compliance with regulations, guidelines and circulars relating to asset management, VAT recoveries and financial payments. Periodic analysis and issuance of administrative circulars are conducted to promote efficient and productive utilization of Ministry resources.
    </p>

    <p>
      The Travel Desk operating under the Division is responsible for managing official travel arrangements for Ministry officials and VIPs, including visa processing, flight arrangements, foreign allowance payments and issuance of Travel Permission Notes (TPNs) for official travel. Mission offices abroad are informed of official travel details to facilitate necessary assistance.
    </p>

    <p>
      The IT and Cypher communication units function as the Ministry’s primary communication hub, maintaining secure and continuous connectivity between the Ministry, Sri Lanka Missions abroad, other government institutions and external entities. The communication system operates throughout the year and processes large volumes of electronic correspondence daily.
    </p>

    <p>
      The Security Mail Division manages diplomatic pouches (DPL) to and from approximately 60 Missions and Posts, including the handling of special consignments such as medicines. The Division is also responsible for distributing received documents to relevant internal divisions.
    </p>

  </div>

),
'general-administration': (

  <div className="space-y-4">

    <p>
      The General Administration Division (GAD) is responsible for personnel administration of the Ministry excluding officers of the Sri Lanka Foreign Service and mission cadre staff. The Division manages office premises and official quarters, procurement of goods and services for the Ministry and Sri Lanka Missions abroad, maintenance of stores and asset inventory control, logistics and vehicle fleet management and provision of essential utility services.
    </p>

    <p>
      The Division handles official correspondence with other public institutions including parliamentary and cabinet-related affairs. It also supervises the operation of the translation unit, provides ICT infrastructure support for all divisions of the Ministry, and manages postal services including local and overseas mission communications.
    </p>

    <p>
      Additional responsibilities include management of the Ministry library and record room, coordination of administrative matters with the Lakshman Kadirgamar Institute of International Relations and Strategic Studies (LKI) and the Bandaranaike International Diplomatic Training Institute (BIDTI).
    </p>

  </div>

),
'finance': (

  <div className="space-y-4">

    <p>
      The Finance Division is responsible for all financial and accounting matters of the Ministry. The Division has been operating a computerized accounting system since January 1996, and the submission of monthly financial statements to the Treasury has been fully computerized since January 1997 to improve accuracy and efficiency in financial reporting.
    </p>

    <p>
      The Division ensures proper management of Ministry funds, maintains financial records, processes payments and supports budgetary planning and financial control in accordance with government financial regulations and procedures.
    </p>

  </div>

),
'internal-audit': (

  <div className="space-y-4">

    <p>
      <strong>Objective</strong>
    </p>

    <p>
      The Internal Audit Division is responsible for monitoring and evaluating the internal control mechanisms of the Ministry, Sri Lanka Missions and Posts abroad, and other institutions under the purview of the Ministry. The Division provides strategic guidance to senior management on overall performance monitoring, risk management and regulatory compliance.
    </p>

    <p>
      <strong>Key Functions</strong>
    </p>

    <p>
      The Division conducts internal audits across all divisions and institutions under the Ministry of Foreign Affairs, including audit inspections of Sri Lanka’s overseas Missions and Posts.
    </p>

    <p>
      It coordinates the preparation of responses to queries raised by the National Audit Office and follows up on audit recommendations to ensure corrective actions are implemented.
    </p>

    <p>
      The Division also supports the resolution of Public Accounts Committee (COPA) issues and monitors compliance with audit directives.
    </p>

    <p>
      Audit and Management Committee meetings are organized and chaired by the Secretary of the Ministry of Foreign Affairs to review financial and operational governance matters.
    </p>

    <p>
      Special investigations may be conducted under the guidance of the Secretary, Ministry of Foreign Affairs, when required.
    </p>

  </div>

),
'performance-review': (

  <div className="space-y-4">

    <p>
      The Performance Review and Implementation Division was established in January 2023 to monitor, evaluate and support the implementation of the Ministry’s strategic and operational performance management framework.
    </p>

    <p>
      The Division is responsible for preparing the Annual Action Plan in accordance with Public Finance Circular No. 02/2020 dated 08 August 2020 and submitting it to the Auditor General.
    </p>

    <p>
      It also prepares the Ministry’s Annual Performance Report in line with Public Finance Circular No. 02/2020 and submits the report to Parliament to ensure transparency and accountability in public administration.
    </p>

    <p>
      The Division compiles progress reports including the Ministry Progress Report as of 30 September 2025 for submission to Parliament, as well as reports on capital budget allocations when requested by the Presidential Secretariat.
    </p>

    <p>
      The Division is also responsible for preparing the Ministry’s Strategic Plan for 2025–2029 and Annual Action Plans for each year within the same period for the Foreign Affairs sector, aligned with the National Policy Framework <strong>“A Thriving and Beautiful Life”</strong> dated 03 March 2025.
    </p>

    <p>
      Additionally, the Division supports the operational functions of the Ministry’s Emergency Response Unit and contributes to emergency preparedness and response coordination activities.
    </p>

  </div>

),

     
};


// --- CONTACT CARD UI ---

const ContactCard = ({ role, name, email, phone }: { role: string; name: string; email: string; phone: string }) => (

  <div className="flex flex-col items-center text-center group min-w-[180px]">

    <div className="w-24 h-24 rounded-full bg-slate-50 border-[6px] border-[#97D8D8] flex items-center justify-center mb-4 shadow-sm">

      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">

        <User size={44} className="text-[#97D8D8]" />

      </div>

    </div>

    <h4 className="text-[#002B5B] font-bold text-sm mb-1 uppercase tracking-tight h-10 flex items-center">

      {role}

    </h4>

    <p className="text-slate-600 text-xs mb-2 font-medium">{name}</p>

    <div className="flex flex-col items-center">

      <span className="text-blue-500 text-[10px] lowercase mb-1 cursor-pointer hover:underline">{email}</span>

      <span className="text-slate-500 text-[10px] font-semibold">{phone}</span>

    </div>

  </div>

);


export default function DivisionsPage() {

  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);

  const [isBilateralExpanded, setIsBilateralExpanded] = useState(true);

  const [selectedSubDivision, setSelectedSubDivision] = useState(bilateralSubDivisions[0]);


  const handleDivisionClick = (division: typeof divisions[0]) => {

    setSelectedDivision(division);

    if (division.path === 'bilateral-affairs') {

      setIsBilateralExpanded(!isBilateralExpanded);

    }

  };


  const handleSubDivisionClick = (sub: string) => {

    setSelectedDivision(divisions[0]);

    setSelectedSubDivision(sub);

  };


  const currentKey = selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.path;

  const currentContacts = CONTACTS_MAP[currentKey] || [];


  return (

    <main className="flex-grow p-6 md:p-10 container mx-auto bg-[#fdfdfd]">

      <div className="flex flex-col lg:flex-row gap-10">

        {/* Sidebar */}

        <aside className="w-full lg:w-1/4">

          <div className="sticky top-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

            <div className="p-5 bg-navy text-white flex items-center gap-3">

              <Building2 className="text-yellow" size={24} />

              <h2 className="text-lg font-bold">MFA Directory</h2>

            </div>

            <nav className="p-2 flex flex-col gap-1 max-h-[70vh] overflow-y-auto custom-scrollbar">

              {divisions.map((division) => (

                <div key={division.path}>

                  <button

                    onClick={() => handleDivisionClick(division)}

                    className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-xl transition-all ${

                      selectedDivision.path === division.path ? 'bg-blue-50 text-navy font-bold border-l-4 border-navy' : 'text-slate-600 hover:bg-slate-50'

                    }`}

                  >

                    <span className="text-base">{division.name}</span>

                    {division.path === 'bilateral-affairs' && <ChevronDown size={14} className={isBilateralExpanded ? 'rotate-180' : ''} />}

                  </button>

                  {division.path === 'bilateral-affairs' && isBilateralExpanded && (

                    <div className="ml-6 my-2 border-l border-slate-200 pl-2 flex flex-col gap-1">

                      {bilateralSubDivisions.map((sub) => (

                        <button

                          key={sub}

                          onClick={() => handleSubDivisionClick(sub)}

                          className={`text-left px-3 py-2 text-base rounded-lg transition-all ${

                            selectedDivision.path === 'bilateral-affairs' && selectedSubDivision === sub ? 'bg-navy text-white font-medium' : 'text-slate-500 hover:bg-slate-100'

                          }`}

                        >

                          {sub}

                        </button>

                      ))}

                    </div>

                  )}

                </div>

              ))}

            </nav>

          </div>

        </aside>


        {/* Content */}

        <section className="w-full lg:w-3/4">

          <div className="mb-8">

            <h1 className="text-4xl font-extrabold text-navy tracking-tight">

              {selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.name}

            </h1>

            <div className="h-1.5 w-20 bg-yellow mt-4 rounded-full"></div>

          </div>


          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[600px]">

            <div className="text-slate-700 leading-relaxed text-lg mb-16">

                {(selectedDivision.path === 'bilateral-affairs' ? CONTENT_MAP['bilateral-affairs'][selectedSubDivision] : CONTENT_MAP[selectedDivision.path]) || <p>Content is being updated for this division.</p>}

            </div>


            {/* Contact Section */}

            {currentContacts.length > 0 && (

              <div className="pt-10 border-t border-slate-100">

                <h3 className="text-xl font-bold text-navy mb-12 flex items-center gap-2">

                    <Users size={20} className="text-yellow" />

                    CONTACT INFORMATION

                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-4">

                  {currentContacts.map((contact, idx) => (

                    <ContactCard key={idx} {...contact} />

                  ))}

                </div>

              </div>

            )}

          </div>

        </section>

      </div>


      <style jsx global>{`

        .custom-scrollbar::-webkit-scrollbar { width: 5px; }

        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }

        .text-navy { color: #002B5B; }

        .bg-navy { background-color: #002B5B; }

        .text-yellow { color: #FFCC00; }

        .bg-yellow { background-color: #FFCC00; }

      `}</style>

    </main>

  );

}