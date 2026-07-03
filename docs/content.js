window.SITE_CONTENT = {
  siteTitle: "Rithwik - ghar",
  displayName: "rithwik-ghar",
  name: "Rithwik Narendra",
  description: "Rithwik's personal website",
  nav: [
    { label: "home", href: "/" },
    { label: "about me", href: "/About-me" },
    { label: "bio inf work", href: "/Bio-Inf-Work" },
    { label: "publications", href: "/Publications" },
    { label: "other projects", href: "/Other-projects" },
    { label: "writing", href: "/Writing" },
    { label: "(not so) important links", href: "/(Not-so)-important-links" },
    { label: "contact", href: "/Contact" },
    { label: "github", href: "https://github.com/rukja/" }
  ],
  pages: {
    home: {
      title: "How may we help you?",
      ascii: String.raw` /\      /\      /\
|  |    |  |    |  |
 \/      \/      \/
 ||      ||      ||
\\||//  \\||//  \\||//
//  \\  //  \\  //  \\`,
      intro: [
        `This site contains information about <strong>Rithwik Narendra</strong>. It's currently, and always, a work in progress. If it's not a work in progress, then I am not progressing.`,
        `If you have additional questions about me that you would like answered, feel free to reach out through the <a href="/Contact">contact</a> page.`
      ],
      sections: [
        {
          heading: "Inspirations",
          paragraphs: [
            "You can, of course, cite people whose work you have based your work on. For this site, I have motivational inspirations and traditional technical ones."
          ],
          items: [
            { title: "Motivational", description: "Arya Kaul; Vyom Pawar" },
            { title: "Technical", description: `<a href="https://arya.casa/">Arya's Net casa</a>; <a href="https://dilyn-corner.github.io/">Dilyn's Corner</a>; <a href="https://jakub.bio/">Jakub Lála</a>` }
          ]
        }
      ]
    },
    about: {
      title: "About me",
      ascii: String.raw` /\      /\      /\
|  |    |  |    |  |
 \/      \/      \/
 ||      ||      ||
\\||//  \\||//  \\||//
//  \\  //  \\  //  \\`,
      intro: [
        "I am an incoming PhD student in the Bioinformatics and Integrative Genomics (BIG) PhD program at Harvard Medical School."
      ],
      sections: [
        {
          heading: "Earliest days + bio",
          paragraphs: [
            "I was born in Portland, Oregon. That will always be my home. My family moved to Cupertino, California, during the summer after I completed second grade. I lived there until we moved to Fremont, California.",
            `I went to Weibel Elementary School, Horner Junior High School, and then Irvington High School. Portland was important, Cupertino was formative, Fremont was weird. It still is.`,
            `I have a younger sister, Supriya, and a dog, <a href="/images/crispr.jpeg" target="_blank">Crispr</a>.`
          ]
        },
        {
          heading: "Hobbies and sports",
          paragraphs: [
            "I started playing chess, guitar, and soccer in Oregon, and continued all three throughout high school. I still play chess competitively. I need to get back into guitar.",
            "I played club soccer throughout high school and have played on a few intramural teams at UCLA. I played club ultimate frisbee at UCLA for two years.",
            "More recently, I have started running and lifting. Spending a summer in Boston has made me like cooking. I also have gotten back into reading and writing for fun. I love politics, hiking, backpacking, traveling, and board games."
          ]
        },
        {
          heading: "Other things",
          items: [
            { title: "Role models", description: "My biggest role models are my parents." },
            { title: "Projects", description: "I like doing a lot of projects in a lot of different areas." },
            { title: "Non-negotiables", description: "Having non-negotiables is a non-negotiable." },
            { title: "Languages", description: "English, Tamil, Hindi, German, Spanish." },
            { title: "Longest run", description: "26.2 miles, updated 30th October, 2025." }
          ]
        },
        {
          heading: "College",
          paragraphs: [
            "I came into UCLA intending to double major in Computational and Systems Biology (CASB) and political science. I chose to stick with CASB and take as many political science classes as possible, especially upper-division ones that piqued my interest.",
            `At UCLA, I am involved in the <a href="https://bruinreview.wordpress.com/" target="_blank">Bruin Review</a>, the <a href="https://datascienceunion.com/" target="_blank">Data Science Union</a>, and <a href="https://matriculate.org/" target="_blank">Matriculate</a>.`,
            `I am also a dry-lab bioinformatics undergraduate researcher in the <a href="https://www.mfwellslab.com/" target="_blank">Wells Lab</a>.`
            `I ended up graduating with a BS in CASB.`
          ]
        },
        {
          heading: "Interests and next steps",
          paragraphs: [
            "I am broadly interested in the intersection between data science and statistics, biology, machine learning, and recently, artificial intelligence.",
            "I am specifically interested in the analysis of large-scale multi-omic datasets to better understand the relationship between immunology and exposomics. I have recently become interested in the use of genomic language models to interrogate the genetic architecture of pathogens.",
            `Other academic interests include public health and health policy, epidemiology, computational political and social science, and <a href="https://dailybruin.com/2024/11/04/student-part-time-electoral-statistician-goes-to-dc-to-model-election-predictions" target="_blank">electoral statistics</a>.`
            `I hope to take a more methods-oriented approach to my PhD at HMS.`
          ]
        },
        {
          heading: "Resume",
          paragraphs: [
            `For a full CV, see <a href="/files/Rithwik_narendra_CV.pdf">here</a>. For papers, see <a href="/Publications">here</a>.`
          ],
          items: [
            { meta: "June '25 - January '26", title: "Research Intern @ Farhat Lab", description: "Department of Biomedical Informatics, Harvard Medical School." },
            { meta: "October '23 - Present", title: "Research Intern @ Wells Lab", description: "David Geffen School of Medicine, UCLA." },
            { meta: "July '23 - Present", title: "Research Intern @ Chaz Langelier Lab", description: "Division of Infectious Diseases, UCSF + CZ Biohub." },
            { meta: "June '20 - November '21", title: "Research Intern @ Wilson Lab", description: "Department of Neurology, UCSF." },
            { meta: "October '23 - Present", title: "Podcast Writer + Political Correspondent @ Elects" },
            { meta: "June '22 - December '24", title: "Data and Election Manager @ Decision Desk HQ" },
            { title: "Clubs + orgs", description: "Bruin Review, Matriculate, Bluebonnet Data, and Data Science Union." }
          ]
        }
      ]
    },
    bioinf: {
      title: "Bioinformatics work",
      intro: [
        `These are projects to which I have contributed substantially. There are projects I have worked on which are not listed here. To learn more about those, visit <a href="/Publications">Publications</a>.`
      ],
      sections: [
        {
          heading: "Projects",
          items: [
            {
              meta: "Farhat Lab @ Harvard Department of Biomedical Informatics · June '25 - January '26",
              title: "Computationally assessing Mycobacterium abscessus phage susceptibility",
              description: "Annotating, characterizing, and extracting features from phage and M. abscessus strain genomes; using protein language models and state-space genomic language models to predict infection and discover biology."
            },
            {
              meta: "Wells Lab @ UCLA David Geffen School of Medicine · August '24 - ongoing",
              title: "Developing a response expression quantitative trait loci pipeline",
              description: "Building a pipeline using linear regression, stringent false discovery measures, pre-processing, quality control, and checks for variable redundancy and ancestral stratification."
            },
            {
              meta: "Langelier Lab @ UCSF Division of Infectious Disease · June '24 - ongoing",
              title: "Building a parsimonious classifier to predict COVID-19 trajectory",
              description: `Analyzing gene expression and proteomic data, developing a LASSO classifier for COVID-19 mortality, validating in external datasets, and comparing against published classifiers. Second-stage review at JCI Insight; <a href="https://www.medrxiv.org/content/10.1101/2025.05.18.25327658v1" target="_blank">preprint</a>.`
            },
            {
              meta: "Wells Lab @ UCLA David Geffen School of Medicine · October '23 - August '24",
              title: "A robust co-expression pipeline for single cell data",
              description: `Built a <a href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-9-559" target="_blank">WGCNA</a> pipeline for single cell neural progenitor gene expression, module stability, pathway analysis, hub genes, and differential eigengene expression.`
            },
            {
              meta: "Langelier Lab @ UCSF Division of Infectious Disease · June '23 - May '25",
              title: "Investigating inflammaging in individuals with Lupus",
              description: `Bulk and single-cell gene expression analysis, pathway analysis, cell type proportion analysis, epigenetic analysis, and proteomics. Published in <a href="https://www.science.org/doi/10.1126/scitranslmed.adt5550" target="_blank">Science Translational Medicine</a>; featured by <a href="https://www.ucsf.edu/news/2025/07/430391/how-aging-quiets-lupus-and-brings-relief-some-older-patients" target="_blank">UCSF News</a>.`
            }
          ]
        }
      ]
    },
    publications: {
      title: "Publications",
      intro: [`<a href="https://scholar.google.com/citations?hl=en&user=CQe03uAAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar</a>`],
      sections: [
        {
          heading: "First/co-first author",
          items: [
            {
              title: "Epigenetic attenuation of interferon signaling is associated with aging-related improvements in systemic lupus erythematosus",
              description: "<span class='highlight'>Narendra R</span>, Van Phan H, Patterson SL, Almonte-Loya A, Lydon EC, Lanata C, Love C, Park J, Shimoda M, Barcellos L, Mekonen H, Detweiler A, Deosthale P, Neff N, Criswell LA, Maliskova L, Eckalbar W, Fragiadakis GK, Yazdany J, Dall'Era M, Katz P, Ye CJ, Sirota M, Langelier CR. Science Translational Medicine. 2025 Jun 25;17(804):eadt5550. doi: 10.1126/scitranslmed.adt5550."
            },
            {
              title: "Minimalistic Transcriptomic Signatures Permit Accurate Early Prediction of COVID-19 Mortality",
              description: "<span class='highlight'>Narendra R</span>, Lydon EC, Van Phan H, Spottiswoode N, Neyton LP, Diray-Arce J; IMPACC Network; COMET Consortium; EARLI Consortium; Becker PM, Kim-Schulze S, Hoch A, Pickering H, van Zalm P, Cairns CB, Altman MC, Augustine AD, Bosinger S, Eckalbar W, Guan L, Jayavelu ND, Kleinstein SH, Krammer F, Maecker HT, Ozonoff A, Peters B, Rouphael N, Montgomery RR, Reed E, Schaenman J, Steen H, Levy O, Carillo SA, Erle D, Hendrickson CM, Krummel MF, Matthay MA, Woodruff P, Haddad EK, Calfee CS, Langelier CR. medRxiv [Preprint]. 2025 May 19:2025.05.18.25327658. doi: 10.1101/2025.05.18.25327658."
            }
          ]
        },
        {
          heading: "Other author positions",
          items: [
            {
              title: "Host-Microbe Multiomic Profiling Predicts Mortality in Sepsis",
              description: "Spottiswoode N, Neyton LP, Mick E, Kalantar KL, Hao S, Lydon EC, <span class='highlight'>Narendra R</span>, Serpa PH, Caldera S, Gomez A, Hendrickson C, Kangelaris K, Liu KD, Sinha P, DeRisi JL, Matthay MA, Calfee CS, Langelier CR. Am J Respir Crit Care Med. 2025 Aug 11. doi: 10.1164/rccm.202410-1996OC. PMID: 40788839."
            },
            {
              title: "Integrating central nervous system metagenomics and host response for diagnosis of tuberculosis meningitis and its mimics",
              description: "Ramachandran PS, Ramesh A, Creswell FV, Wapniarski A, <span class='highlight'>Narendra R</span>, Quinn CM, Tran EB, Rutakingirwa MK, Bangdiwala AS, Kagimu E, Kandole KT, Zorn KC, Tugume L, Kasibante J, Ssebambulidde K, Okirwoth M, Bahr NC, Musubire A, Skipper CP, Fouassier C, Lyden A, Serpa P, Castaneda G, Caldera S, Ahyong V, DeRisi JL, Langelier C, Crawford ED, Boulware DR, Meya DB, Wilson MR. Nature Communications. 2022 Mar 30;13(1):1675. doi: 10.1038/s41467-022-29353-x."
            }
          ]
        }
      ]
    },
    projects: {
      title: "Other data projects I did",
      intro: ["Organized by personal fulfillment."],
      sections: [
        {
          heading: "Data Science Union projects",
          items: [
            { title: "Healthy Communities", description: `Exploratory data analysis and machine learning to determine what makes communities healthier across metrics and outcomes. <a class="standalone" href="https://medium.com/@ucladsu/healthy-communties-b8e02cc8ec81" target="_blank">Article</a> <a class="standalone" href="https://github.com/the-data-science-union/DSU-S2023-Healthy-Communities" target="_blank">GitHub</a>` },
            { title: "Improving Marketplace Search", description: `Trying to create a better Amazon search using dual encoders. <a class="standalone" href="https://github.com/the-data-science-union/DSU-W2025-Improving-Marketplace-Search" target="_blank">GitHub</a>` },
            { title: "News Generation", description: `Making AP news releases more flowery. <a class="standalone" href="https://medium.com/@ucladsu/news-generation-191087f08a7d" target="_blank">Article</a>` },
            { title: "SCOTUS Opinion Generation with Transformers", description: `Scalia meets BERT. <a class="standalone" href="https://github.com/the-data-science-union/DSU-F2023-W2024-Transformers" target="_blank">GitHub</a>` },
            { title: "MLB Sports Betting", description: `$$$ using statistics. <a class="standalone" href="https://github.com/cardo14/MLBPropModel" target="_blank">GitHub</a>` }
          ]
        },
        {
          heading: "Personal projects",
          items: [
            { title: "MP Speech Analysis", description: `A computational analysis of parliamentary speeches across multiple countries, focusing on gender differences, sentiment analysis, and text clustering patterns in political discourse. <a class="standalone" href="https://github.com/rukja/MP_speeches" target="_blank">GitHub</a>` }
          ]
        }
      ]
    },
    writing: {
      title: "Words found here",
      sections: [
        {
          heading: "Opinion",
          links: [
            ["Roll Credits: Directed by your Friendly Neighborhood Pentagon", "https://bruinreview.wordpress.com/2023/02/03/roll-credits-directed-by-your-friendly-neighborhood-pentagon"],
            ["You Don't Need to Grind", "https://bruinreview.wordpress.com/2023/06/14/you-dont-need-to-grind"],
            ["Not So Positive on Body Positivity", "https://bruinreview.wordpress.com/2023/06/14/its-time-to-embrace-not-reject-the-inauthenticity-of-instagram-2"],
            ["Break Your Routine", "https://bruinreview.wordpress.com/2024/04/08/break-your-routine"],
            ["In Defense of Securing the Bag", "https://bruinreview.wordpress.com/2024/01/03/in-defense-of-securing-the-bag"],
            ["Let's Come Together", "https://bruinreview.wordpress.com/2024/06/21/lets-come-together"],
            ["Socializing Won't Fix the Loneliness Epidemic", "https://bruinreview.wordpress.com/2025/04/16/socializing-wont-fix-the-loneliness-epidemic/"],
            ["Poor Mouth", "https://bruinreview.wordpress.com/2024/12/19/poor-mouth"]
          ]
        },
        {
          heading: "Satire",
          links: [
            ["They Don't Know What's Best for Them", "https://bruinreview.wordpress.com/2023/02/03/they-dont-know-whats-best-for-them/"],
            ["World Turned Upside Down", "https://bruinreview.wordpress.com/2023/06/19/world-turned-upside-down/"],
            ["This Means War", "https://bruinreview.wordpress.com/2023/06/19/this-means-war/"],
            ["For the Students", "https://bruinreview.wordpress.com/2024/01/03/for-the-studets/"],
            ["I'm Not A Sellout", "https://bruinreview.wordpress.com/2024/12/19/im-not-a-sellout/"]
          ]
        },
        {
          heading: "International politics",
          links: [
            ["Is the Social Democratic Party of Lithuania selling its future to pay for its present?", "https://europeelects.eu/2025/09/23/the-social-democratic-party-of-lithuania-future/"]
          ]
        }
      ]
    },
    links: {
      title: "Could be important",
      sections: [
        {
          heading: "Links",
          links: [
            ["Favorite podcasts", "/fav-pods"],
            ["Favorite quotes", "/Quotes"],
            ["Daily Bruin article about me", "https://dailybruin.com/2024/11/04/student-part-time-electoral-statistician-goes-to-dc-to-model-election-predictions"],
            ["LinkedIn", "https://www.linkedin.com/in/rithwik-narendra/"],
            ["Strava", "https://www.strava.com/athletes/52339643"],
            ["Lichess", "https://lichess.org/@/rukja"],
            ["Chess.com", "https://www.chess.com/member/rukja"],
            ["Cool papers", "/Papers"],
            ["Tweet with most likes", "https://x.com/orukja/status/1722723987426541956"]
          ]
        }
      ]
    },
    contact: {
      title: "Let's chat",
      sections: [
        {
          heading: "Things I check religiously",
          items: [
            { title: "Email", description: "orukja@gmail.com" },
            { title: "Chess.com", description: `message <a href="https://www.chess.com/member/rukja">me</a>` }
          ]
        },
        {
          heading: "Things I check",
          items: [
            { title: "Email", description: "rithwiknarendra@ucla.edu" },
            { title: "Email", description: "rithwik_narendra@g.harvard.edu.edu" },
            { title: "Strava", description: `message <a href="https://www.strava.com/athletes/52339643" target="_blank">me</a>` },
            { title: "LinkedIn", description: `message <a href="https://www.linkedin.com/in/rithwik-narendra/" target="_blank">me</a>` }
          ]
        }
      ]
    },
    quotes: {
      title: "Cool things spoken or written",
      sections: [
        {
          heading: "Quotes",
          items: [
            { title: `"i fear we need an apology for the apology"`, description: "u/awordalonee. Context: Taylor Townsend's apology video for mocking Chinese food." },
            { title: `"I am sorry to play the role of Reviewer #2."`, description: `Anonymous. Context: Reviewer #1 in the peer-review report for "Harms of introduced large herbivores outweigh benefits to native biodiversity".` },
            { title: `"Profound but technically meaningless."`, description: "Jeff. Context: Community S1 E6, I forgot what specifically." },
            { title: `"Invisitibility is a superpower."`, description: "Banksy (2010)."},
            { title: `"they put a microchip in the ball? Why’d they give it a Covid vaccine ?"`, description: "Vyom Pawar (2026). Context: VAR disallowing Croatia's equalizing goal in WC R32"}
          ]
        }
      ]
    },
    papers: {
      title: "Would rather read these than romantasy",
      sections: [
        {
          heading: "Papers",
          links: [
            ["Infrastructure deficits and informal settlements in sub-Saharan Africa", "https://www.nature.com/articles/s41586-025-09465-2#MOESM2"],
            ["Generative design of novel bacteriophages with genome language models", "https://www.biorxiv.org/content/10.1101/2025.09.12.675911v1"],
            ["Equitable cleanup of Superfund sites leaving no U.S. community behind", "https://www.nature.com/articles/s41467-025-63607-8#Abs1"],
            ["Temporal nutrition analysis associates dietary regularity and quality with gut microbiome diversity", "https://www.nature.com/articles/s41467-025-63799-z"],
            ["Understanding the migratory response to hurricanes and tropical storms in the USA", "https://www.nature.com/articles/s41562-025-02281-8#Abs1"],
            ["Elastin-derived extracellular matrix fragments drive aging through innate immune activation", "https://www.nature.com/articles/s43587-025-00961-8#Abs1"]
          ]
        }
      ]
    },
    podcasts: {
      title: "This stuff is key for running",
      sections: [
        {
          heading: "Listen to these often",
          items: ["This American Life", "99% Invisible", "Freakonomics", "Dear Hank & John", "Freetrail Podcast", "Search Engine", "Heavyweight", "DNF Diaries"].map((title) => ({ title }))
        },
        {
          heading: "Listen to these sometimes",
          items: ["Beautiful Anonymous", "Sidedoor", "Entanglements", "Weight for it", "Planet Money", "The Dollop", "Europe Elects Podcast"].map((title) => ({ title }))
        }
      ]
    },
    notFound: {
      title: "Error",
      ascii: String.raw` ___ _ __ _ __ ___  _ __
/ _ \ '__| '__/ _ \| '__|
|  __/ |  | | | (_) | |
\___|_|  |_|  \___/|_|`,
      intro: [
        `The page you are looking for does not exist yet, perhaps. You can go back to the <a href="/">homepage</a>.`,
        `If you think this is a mistake, please <a href="/Contact">contact me</a>.`
      ]
    }
  }
};
