export type Language = 'ro' | 'en';

export const translations = {
  ro: {
    header: {
      title: 'Blooming Hope',
      nav: {
        home: 'Acasă',
        about: 'Despre Noi',
        donate: 'Donează',
        contact: 'Contact',
      },
    },
    campaign: {
      title: 'Și pentru ei e\u00a0loc.',
      subtitle: 'De Crăciun, bucuria se dă mai departe',
      description:
        'Donează pentru educația unui copil. La căsuța noastră te așteaptă un cadou pentru cineva drag.',
      donate: 'Donează acum',
      form230: 'Formularul 230',
      initiative: 'O inițiativă caritabilă a',
      educationPartner: 'Partener educațional',
      partner: 'Partener',
      sponsor: 'Sponsor',
      logoAlt: 'Viitor în dar',
      imageAlt: 'O bancă de școală luminată de o stea, într-o noapte de iarnă',
    },
    hero: {
      title: 'Learn to Grow. Grow to Give',
      subtitle:
        'Asociația Blooming Hope: Construim locul unde copiii prind rădăcini sănătoase și tinerii învață să schimbe lumea.',
      form230: 'Donează fără să te coste - Formular 230',
      cta1: 'Grădinița Blooming Hope',
      cta2: 'Atelier Blooming Hub',
    },
    motto: {
      title: 'Motto-ul Nostru',
      description:
        'Credem că educația nu este o destinație, ci un ciclu. Learn to Grow înseamnă curajul de a-ți depăși limitele. Grow to Give înseamnă responsabilitatea de a nu păstra cunoștința doar pentru tine. La Blooming Hope, pregătim tinerii să devină liderii care dăruiesc.',
    },
    mission: {
      title: 'Misiunea Noastră',
      intro:
        'Educația nu este doar despre acumulare de informații, ci despre transformarea harului personal în serviciu pentru comunitate. Motiv pentru care urmărim să dăm tinerilor instrumente practice pentru o viață cu sens.',
      pillars: [
        {
          title: 'Leadership',
          description: 'Creștem încrederea.',
        },
        {
          title: 'Viață & Carieră',
          description: 'Abilități practice pentru lumea reală.',
        },
        {
          title: 'Civic & Voluntariat',
          description: 'Schimbarea începe cu noi.',
        },
        {
          title: 'Digital & Inovație',
          description: 'Tehnologie cu etică.',
        },
        {
          title: 'Empatie & Incluziune',
          description: 'Bunătatea ca stil de viață.',
        },
      ],
    },
    kindergarten: {
      title: 'Proiectul: Grădinița Blooming Hope',
      concept: 'Rădăcini puternice pentru viitor',
      description: [
        {
          type: 'paragraph',
          content: [
            'Construim un mediu sustenabil și primitor, o ancoră fizică unde copiii se pot dezvolta în ritmul lor natural, înconjurați de ',
            { type: 'emphasis', text: 'armonie' },
            '.',
          ],
        },
        {
          type: 'paragraph',
          content: [
            'În acest spațiu, implementăm un model educațional centrat pe ',
            { type: 'emphasis', text: 'caracter' },
            ', transformând ',
            { type: 'emphasis', text: 'valorile morale' },
            ' în busola după care tinerii noștri înceți se vor ghida întreaga viață.',
          ],
        },
      ],
      status: 'În faza de proiect',
      progressBars: {
        donations: 'Progres Donații',
        phases:
          'Progres Proiect',
        phaseLabels: [
          'Proiectare',
          'Autorizare',
          'Începerea șantierului',
          'Finalizare construcție',
          'Amenajare interioară',
          'Autorizare grădiniță',
        ],
      },
    },
    growthLab: {
      title: 'Blooming Hub',
      subtitle: 'Semințe pentru Viitor',
      description:
        'Dincolo de teorie, descoperă resursele de care ai nevoie pentru a naviga lumea cu încredere. Învață să stăpânești abilitățile care contează.',
      workshops: [
        {
          title: 'Securitate Online',
          description: 'Scutul tău în universul digital.',
        },
        {
          title: 'Educație Financiară',
          description: 'Cum să faci banii să lucreze pentru tine.',
        },
        {
          title: 'Grădinărit în Spații Mici',
          description: 'Natura la tine în balcon.',
        },
        {
          title: 'Laboratorul de Soluții',
          description: 'Chimia mai practică decât ai crezut.',
        },
      ],
      stickyNote: 'Rămâneți aproape pentru când și unde începe',
    },
    cta: {
      title: 'Implică-te!',
      volunteer: 'Voluntariat',
      donate: 'Donații/Sponsorship',
      donateDesc: 'Ajută-ne să dotăm atelierele și grădinița.',
      newsletter: 'Newsletter',
      newsletterDesc:
        'Rămâi la curent cu noutățile de pe șantier și calendarul înscrierilor.',
    },
    about: {
      title: 'Despre Noi',
      subtitle: 'Blooming Hope este o asociație dedicată transformării prin educație.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Suntem dornici să auzim de la tine. Conectează-te cu noi pentru întrebări sau colaborări.',
    },
    donate: {
      title: 'Donează',
      subtitle: 'Ajută-ne să construim un viitor mai bun prin educație.',
      intro: 'Poți dona prin transfer bancar către Asociația Blooming Hope. Apasă „Copiază” la fiecare câmp și lipește-l în aplicația băncii tale.',
      bank: {
        beneficiaryLabel: 'Beneficiar',
        ibanLabel: 'IBAN',
        detailsLabel: 'Detalii plată',
        // Fără diacritice: textul ajunge în aplicația băncii.
        detailsValue: 'Donatie',
        detailsHint: 'Poți adăuga proiectul pe care vrei să îl susții, fără diacritice (unele bănci nu acceptă diacriticele): Gradinita Blooming Hope.',
        bankLabel: 'Banca',
        currencyLabel: 'Moneda',
        taxIdLabel: 'CUI',
        copy: 'Copiază',
        copied: 'Copiat ✓',
        copyFailed: 'Selectează manual',
      },
      howTo: {
        title: 'Cum donez',
        steps: [
          'Copiază IBAN-ul de mai sus.',
          'Deschide aplicația băncii tale și alege „Transfer nou”.',
          'Lipește IBAN-ul și beneficiarul, iar la „Detalii plată” scrie destinația donației.',
        ],
      },
      form230: {
        title: 'Formular 230 - Donează fără să te coste',
        description: 'Ești salariat? Redirecționează 3,5% din impozitul tău pe venit către Blooming Hope. Nu te costă nimic: este o parte din impozitul care altfel ar rămâne la stat.',
        buttonText: 'Completează formularul 230',
      },
      thanks: 'Îți mulțumim! Fiecare donație ajută copiii să prindă rădăcini sănătoase și tinerii să învețe să schimbe lumea.',
    },
    cookieNotice: {
      label: 'Informare despre cookie-uri',
      text: 'Acest site nu folosește cookie-uri de urmărire. Reținem în browser doar alegerile tale: limba și faptul că ai închis această notă.',
      link: 'Politica de cookie-uri',
      button: 'Am înțeles',
    },
    footer: {
      motto: 'Educația care transformă lumea',
      contact: 'Contact',
      socialMedia: 'Urmărește-ne',
      email: 'contact@bloominghope.ro',
      rights: 'Toate drepturile rezervate.',
      terms: 'Termeni și condiții',
      privacy: 'Confidențialitate',
      cookies: 'Cookie-uri',
    },
  },
  en: {
    header: {
      title: 'Blooming Hope',
      nav: {
        home: 'Home',
        about: 'About Us',
        donate: 'Donate',
        contact: 'Contact',
      },
    },
    campaign: {
      title: 'There is room for them\u00a0too.',
      subtitle: 'At Christmas, joy is passed on',
      description:
        'Donate for a child’s education. A gift for someone dear to you is waiting at our stall.',
      donate: 'Donate now',
      form230: 'Form 230',
      initiative: 'A charity initiative of',
      educationPartner: 'Educational partner',
      partner: 'Partner',
      sponsor: 'Sponsor',
      logoAlt: 'Viitor în dar',
      imageAlt: 'A school desk lit by a star on a winter night',
    },
    hero: {
      title: 'Learn to Grow. Grow to Give',
      subtitle:
        'Blooming Hope Association: We build the place where children develop healthy roots and young people learn to change the world.',
      form230: 'Donate without your money - Form nr. 230',
      cta1: 'Blooming Hope Kindergarten',
      cta2: 'Blooming Hub Workshop',
    },
    motto: {
      title: 'Our Motto',
      description:
        'We believe education is not a destination, but a cycle. Learn to Grow means the courage to exceed your limits. Grow to Give means the responsibility not to keep knowledge just for yourself. At Blooming Hope, we prepare young people to become leaders who give.',
    },
    mission: {
      title: 'Our Mission',
      intro:
        'Education is not just about accumulating information, but about transforming personal grace into service for the community. This is why we provide young people with practical tools for a meaningful life.',
      pillars: [
        {
          title: 'Leadership',
          description: 'We grow confidence.',
        },
        {
          title: 'Life & Career',
          description: 'Practical skills for the real world.',
        },
        {
          title: 'Civic & Volunteering',
          description: 'Change starts with us.',
        },
        {
          title: 'Digital & Innovation',
          description: 'Technology with ethics.',
        },
        {
          title: 'Empathy & Inclusion',
          description: 'Kindness as a lifestyle.',
        },
      ],
    },
    kindergarten: {
      title: 'Flagship Project: Blooming Hope Kindergarten',
      concept: 'Strong roots for the future',
      description: [
        {
          type: 'paragraph',
          content: [
            'We build a sustainable and welcoming environment, a physical anchor where children can develop at their natural pace, surrounded by ',
            { type: 'emphasis', text: 'harmony' },
            '.',
          ],
        },
        {
          type: 'paragraph',
          content: [
            'In this space, we implement a ',
            { type: 'emphasis', text: 'character' },
            '-centered educational model, transforming ',
            { type: 'emphasis', text: 'moral values' },
            ' into the compass that will guide our young learners throughout their lives.',
          ],
        },
      ],
      status: 'In project phase',
      progressBars: {
        donations: 'Donation Progress',
        phases: 'Project Progress',
        phaseLabels: [
          'Design',
          'Authorization',
          'Construction Start',
          'Building Completion',
          'Interior Design',
          'Kindergarten Authorization',
        ],
      },
    },
    growthLab: {
      title: 'Blooming Hub',
      subtitle: 'Seeds for the Future',
      description:
        'Beyond theory, discover the resources you need to navigate the world with confidence. Learn to master the skills that matter.',
      workshops: [
        {
          title: 'Online Security',
          description: 'Your shield in the digital universe.',
        },
        {
          title: 'Financial Education',
          description: 'How to make your money work for you.',
        },
        {
          title: 'Small Space Gardening',
          description: 'Nature on your balcony.',
        },
        {
          title: 'Solutions Laboratory',
          description: 'Chemistry more practical than you thought.',
        },
      ],
      stickyNote: 'Stay tuned for when and where it starts',
    },
    cta: {
      title: 'Get Involved!',
      volunteer: 'Volunteering',
      donate: 'Donations/Sponsorship',
      donateDesc: 'Help us equip the workshops and kindergarten.',
      newsletter: 'Newsletter',
      newsletterDesc:
        'Stay updated with construction site news and enrollment calendar.',
    },
    about: {
      title: 'About Us',
      subtitle: 'Blooming Hope is an association dedicated to transformation through education.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'We\'d love to hear from you. Get in touch with us for any questions or collaborations.',
    },
    donate: {
      title: 'Donate',
      subtitle: 'Help us build a better future through education.',
      intro: 'You can donate by bank transfer to Asociația Blooming Hope. Tap “Copy” next to each field and paste it into your banking app.',
      bank: {
        beneficiaryLabel: 'Beneficiary',
        ibanLabel: 'IBAN',
        detailsLabel: 'Payment details',
        detailsValue: 'Donation',
        detailsHint: 'You can add the project you want to support, without diacritics (some banks do not accept them): Gradinita Blooming Hope.',
        bankLabel: 'Bank',
        currencyLabel: 'Currency',
        taxIdLabel: 'Tax ID (CUI)',
        copy: 'Copy',
        copied: 'Copied ✓',
        copyFailed: 'Select manually',
      },
      howTo: {
        title: 'How to donate',
        steps: [
          'Copy the IBAN above.',
          'Open your banking app and choose “New transfer”.',
          'Paste the IBAN and the beneficiary, then write what your donation is for in “Payment details”.',
        ],
      },
      form230: {
        title: 'Form 230 - Donate Without Spending Money',
        description: 'Are you an employee? Redirect 3.5% of your income tax to Blooming Hope. It costs you nothing: it is a part of the tax that would otherwise go to the state.',
        buttonText: 'Complete Form 230',
      },
      thanks: 'Thank you! Every donation helps children grow healthy roots and young people learn to change the world.',
    },
    cookieNotice: {
      label: 'Cookie information',
      text: 'This website uses no tracking cookies. Your browser only remembers your choices: the language and that you closed this notice.',
      link: 'Cookie Policy',
      button: 'Got it',
    },
    footer: {
      motto: 'Education that transforms the world',
      contact: 'Contact',
      socialMedia: 'Follow Us',
      email: 'contact@bloominghope.ro',
      rights: 'All rights reserved.',
      terms: 'Terms and Conditions',
      privacy: 'Privacy',
      cookies: 'Cookies',
    },
  },
};
