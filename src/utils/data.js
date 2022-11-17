const dataArray = [
  {
    id: 0,
    name: 'Ranveer',
    age: 32,
    distance: '10 km away',
    image: require('../assets/images/ranveer.jpeg'),
    interests: [
      {name: 'Basketball', description: 'Not gonna flex, but I played well!'},
      {name: 'Hip Hop', description: 'Good Singer!'},
      {name: 'Stand-up comedy', description: 'I watch that!'},
      {name: 'Basketball', description: 'I watch that!'},
      {name: 'Stand-up comedy', description: 'I watch that!'},
      {name: 'Cricket', description: 'I watch that!'},
    ],
    media: [
      {
        title: 'Enjoying my comfort zone!',
        src: require('../assets/images/ranveer_media.jpeg'),
      },
      {
        title: 'Enjoying my comfort zone!',
        src: require('../assets/images/ranveer_media.jpeg'),
      },
      {
        title: 'Enjoying my comfort zone!',
        src: require('../assets/images/ranveer_media.jpeg'),
      },
    ],
  },
  {
    id: 1,
    name: 'Abhishek',
    age: 18,
    distance: '1 km away',
    image: require('../assets/images/abhishek.jpeg'),
    interests: [{name: 'Sleep', description: 'I do this a lot!'}],
    media: [
      {
        title: 'Sleeping Everywhere!',
        src: require('../assets/images/abhishek_media.jpeg'),
      },
    ],
  },
  {
    id: 2,
    name: 'Virat',
    age: 25,
    distance: '5 km away',
    image: require('../assets/images/virat.jpg'),
    interests: [
      {name: 'Basketball', description: 'Not gonna flex, but I played well!'},
      {name: 'Hip Hop', description: 'Good Singer!'},
      {name: 'Stand-up comedy', description: 'I watch that!'},
      {name: 'Cricket', description: 'Best Player!'},
    ],
    media: [
      {
        title: 'Cricket is love!',
        src: require('../assets/images/virat_media.gif'),
      },
      {
        title: 'Team India!',
        src: require('../assets/images/virat_media1.webp'),
      },
    ],
  },
];

export {dataArray};
