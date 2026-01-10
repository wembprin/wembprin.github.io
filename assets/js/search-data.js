// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-final-event",
          title: "final event",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/event/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "members-00-mbolognesi",
          title: '00 Mbolognesi',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/00-mbolognesi/";
            },},{id: "members-01-fsebastiani",
          title: '01 Fsebastiani',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/01-fsebastiani/";
            },},{id: "members-02-aesuli",
          title: '02 Aesuli',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/02-aesuli/";
            },},{id: "members-03-gsperduti",
          title: '03 Gsperduti',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/03-gsperduti/";
            },},{id: "members-04-apedrotti",
          title: '04 Apedrotti',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/04-apedrotti/";
            },},{id: "members-05-gpucce",
          title: '05 Gpucce',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/05-gpucce/";
            },},{id: "members-06-grambelli",
          title: '06 Grambelli',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/06-grambelli/";
            },},{id: "members-07-aloia",
          title: '07 Aloia',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/07-aloia/";
            },},{id: "news-desegma-it-has-been-accepted-as-a-shared-task-of-evalita-2026",
          title: 'DeSegMA-IT has been accepted as a Shared Task of EVALITA 2026',
          description: "",
          section: "News",},{id: "news-subtask-a-data-release",
          title: 'SubTask A Data Release',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/desegma_contd/";
            },},{id: "news-registration-form",
          title: 'Registration Form',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/desegma_register/";
            },},{id: "news-subtask-b-data-release",
          title: 'SubTask B Data Release',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/desegma_subtaskB/";
            },},{id: "organizers-00-mbolognesi",
          title: '00 Mbolognesi',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/00-mbolognesi/";
            },},{id: "organizers-01-fsebastiani",
          title: '01 Fsebastiani',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/01-fsebastiani/";
            },},{id: "organizers-03-gsperduti",
          title: '03 Gsperduti',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/03-gsperduti/";
            },},{id: "organizers-04-apedrotti",
          title: '04 Apedrotti',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/04-apedrotti/";
            },},{id: "organizers-05-gpucce",
          title: '05 Gpucce',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/05-gpucce/";
            },},{id: "organizers-06-grambelli",
          title: '06 Grambelli',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/06-grambelli/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
